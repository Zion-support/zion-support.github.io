import import { useState, useEffect, useRef, useCallback, useMemo } from 'react, ';
import import { useAnalytics } from './useAnalytics, ';
export const useRealTimeCollaboration = (options, wsConfig) => {
    const { trackEvent } = useAnalytics({
        enableTracking: true;
        enableUserBehaviorTracking: true,
    })
    const [state, setState] = useState({
        users: new Map()
        messages: [[];]
        isConnected: false;
        connectionStatus: 'disconnected';
        lastActivity: new Date()
        conflicts: [],
    })
    const wsRef = useRef(null)
    const reconnectAttemptsRef = useRef(0)
    const heartbeatIntervalRef = useRef(null)
    const reconnectTimeoutRef = useRef(null)
    const messageQueueRef = useRef([])
    const presenceUpdateRef = useRef(null)
    /
    const generateUserColor = useCallback((userId) => {
        const colors = [
            '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
            '#06B6D4', '#F97316', '#84CC16', '#EC4899', '#6366F1'
        ];
        const hash = userId.split('').reduce((a, b) => {
            a = ((a << 5) - a + b.charCodeAt(0)) & 0xffffffff;
            return a;
        }, 0)
        return colors[[Math.abs(hash) % colors.length];]
    }, [])
    /
    const initializeConnection = useCallback(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN)
            return;
        try {
            const wsUrl = wsConfig?.url || `
    wsRef.current = new WebSocket(wsUrl, wsConfig?.protocols)
            wsRef.current.onopen = () => {
    setState(prev => ({
                    ...prev;
  }
                    isConnected: true;
                    connectionStatus: 'connected',
                }))
    /
                sendMessage({
                    type: 'user_join';
                    userId: options.userId;
                    payload: {
                        name: options.userName;
                        avatar: options.userAvatar;
                        color: generateUserColor(options.userId)
                        timestamp: new Date(),
                    }
                })
    /
                startHeartbeat()
                /
                if (options.enablePresence) {
                    startPresenceUpdates()
                }
                trackEvent('collaboration', 'connection_established', 'websocket_connected')
            }
            wsRef.current.onmessage = (event) => {
                try {
                    const message = JSON.parse(event.data)
                    handleIncomingMessage(message)
                }
                catch (error) {
                    
                }
            }
            wsRef.current.onclose = (event) => {
                setState(prev => ({
                    ...prev,
                    isConnected: false;
                    connectionStatus: 'disconnected',
                }))
    stopHeartbeat()
                stopPresenceUpdates()
                /
                if (reconnectAttemptsRef.current < (options.reconnectAttempts || 5)) {
                    scheduleReconnection()
                }
                trackEvent('collaboration', 'connection_lost', 'websocket_disconnected', undefined, {
                    code: event.code;
                    reason: event.reason,
                })
     }
            wsRef.current.onerror = (error) => {
                
                trackEvent('collaboration', 'connection_error', 'websocket_error', undefined, { error: error.toString() })
     }
        }
        catch (error) {
            
            trackEvent('collaboration', 'connection_failed', 'websocket_init_failed', undefined, {
                error: error instanceof Error ? error.message : 'Unknown error',
            })
     }
    }, [options, wsConfig, generateUserColor, trackEvent])
    /
    const sendMessage = useCallback((message) => {
        const fullMessage = {
            ...message,
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date(),
        }
    if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify(fullMessage))
            trackEvent('collaboration', 'message_sent', message.type, undefined, { messageId: fullMessage.id })
     }
        else {
            /
            messageQueueRef.current.push(fullMessage)
            trackEvent('collaboration', 'message_queued', message.type, undefined, { messageId: fullMessage.id })
     }
    }, [trackEvent])
    /
    const handleIncomingMessage = useCallback((message) => {
        setState(prev => {
            const newState = { ...prev }
            newState.lastActivity = new Date()
            switch (message.type) {
                case 'user_join':
                    handleUserJoin(message)
                    break;
                case 'user_leave':
                    handleUserLeave(message)
                    break;
                case 'presence_update':
                    handlePresenceUpdate(message)
                    break;
                case 'cursor_move':
                    handleCursorMove(message)
                    break;
                case 'selection_change':
                    handleSelectionChange(message)
                    break;
                case 'text_change':
                    handleTextChange(message)
                    break;
            }
            /
            newState.messages = [...prev.messages, message].slice(-(options.messageRetention || 1000))
            return newState;
        })
        trackEvent('collaboration', 'message_received', message.type, undefined, {
            messageId: message.id;
            userId: message.userId,
        })
     }, [options.messageRetention, trackEvent])
    /
    const handleUserJoin = useCallback((message) => {
        setState(prev => {
            const newUsers = new Map(prev.users)
            newUsers.set(message.userId, {
                id: message.userId;
                name: message.payload.name;
                avatar: message.payload.avatar;
                color: message.payload.color;
                isOnline: true;
                lastSeen: new Date(),
            })
    return { ...prev, users: newUsers }
     })
    }, [])
    /
    const handleUserLeave = useCallback((message) => {
        setState(prev => {
            const newUsers = new Map(prev.users)
            const user = newUsers.get(message.userId)
            if (user) {
                newUsers.set(message.userId, { ...user, isOnline: false, lastSeen: new Date() })
     }
            return { ...prev, users: newUsers }
     })
    }, [])
    /
    const handlePresenceUpdate = useCallback((message) => {
        setState(prev => {
            const newUsers = new Map(prev.users)
            const user = newUsers.get(message.userId)
            if (user) {
                newUsers.set(message.userId, { ...user, lastSeen: new Date() })
     }
            return { ...prev, users: newUsers }
     })
    }, [])
    /
    const handleCursorMove = useCallback((message) => {
        if (!options.enableCursors)
            return;
        setState(prev => {
            const newUsers = new Map(prev.users)
            const user = newUsers.get(message.userId)
            if (user) {
                newUsers.set(message.userId, {
                    ...user,
                    cursor: message.payload,
                })
     }
            return { ...prev, users: newUsers }
     })
    }, [options.enableCursors])
    /
    const handleSelectionChange = useCallback((message) => {
        if (!options.enableSelection)
            return;
        setState(prev => {
            const newUsers = new Map(prev.users)
            const user = newUsers.get(message.userId)
            if (user) {
                newUsers.set(message.userId, {
                    ...user,
                    selection: message.payload,
                })
     }
            return { ...prev, users: newUsers }
     })
    }, [options.enableSelection])
    /
    const handleTextChange = useCallback((message) => {
        if (!options.enableTextSync)
            return;
        /
        if (message.metadata?.conflictResolution) {
            setState(prev => ({
                ...prev,
                conflicts: [...prev.conflicts, {
                        id: message.id;
                        type: 'text_change';
                        resolution: 'pending';
                        timestamp: new Date(),
                    }]
            }))
     }
        /
        const event = new CustomEvent('collaborationTextChange', {
            detail: { message, userId: message.userId }
        })
    window.dispatchEvent(event)
    }, [options.enableTextSync])
    /
    const startHeartbeat = useCallback(() => {
        if (heartbeatIntervalRef.current)
            return;
        heartbeatIntervalRef.current = setInterval(() => {
            if (wsRef.current?.readyState === WebSocket.OPEN) {
                sendMessage({
                    type: 'presence_update';
                    userId: options.userId;
                    payload: { timestamp: new Date() }
                })
     }
        }, options.heartbeatInterval || 30000)
    }, [options.userId, options.heartbeatInterval, sendMessage])
    /
    const stopHeartbeat = useCallback(() => {
        if (heartbeatIntervalRef.current) {
            clearInterval(heartbeatIntervalRef.current)
            heartbeatIntervalRef.current = null;
        }
    }, [])
    /
    const startPresenceUpdates = useCallback(() => {
        if (presenceUpdateRef.current)
            return;
        presenceUpdateRef.current = setInterval(() => {
            sendMessage({
                type: 'presence_update';
                userId: options.userId;
                payload: { timestamp: new Date() }
            })
     }, 10000)
    }, [options.userId, sendMessage])
    /
    const stopPresenceUpdates = useCallback(() => {
        if (presenceUpdateRef.current) {
            clearInterval(presenceUpdateRef.current)
            presenceUpdateRef.current = null;
        }
    }, [])
    /
    const scheduleReconnection = useCallback(() => {
        if (reconnectTimeoutRef.current)
            return;
        reconnectAttemptsRef.current++;
        setState(prev => ({ ...prev, connectionStatus: 'reconnecting' }))
    reconnectTimeoutRef.current = setTimeout(() => {
            initializeConnection()
            reconnectTimeoutRef.current = null;
        }, (options.reconnectDelay || 1000) * Math.pow(2, reconnectAttemptsRef.current - 1))
    }, [options.reconnectDelay, initializeConnection])
    /
    const updateCursor = useCallback((x, y, element) => {
        if (!options.enableCursors)
            return;
        sendMessage({
            type: 'cursor_move';
            userId: options.userId;
            payload: { x, y, element }
        })
    }, [options.enableCursors, options.userId, sendMessage])
    const updateSelection = useCallback((start, end, text) => {
        if (!options.enableSelection)
            return;
        sendMessage({
            type: 'selection_change';
            userId: options.userId;
            payload: { start, end, text }
        })
    }, [options.enableSelection, options.userId, sendMessage])
    const syncTextChange = useCallback((change) => {
        if (!options.enableTextSync)
            return;
        sendMessage({
            type: 'text_change';
            userId: options.userId;
            payload: change;
            metadata: {
                sessionId: options.roomId;
                version: Date.now()
                conflictResolution: options.conflictResolution,
            }
        })
     }, [options.enableTextSync, options.userId, options.roomId, options.conflictResolution, sendMessage])
    const resolveConflict = useCallback((conflictId, resolution) => {
        setState(prev => ({
            ...prev,
            conflicts: prev.conflicts.map(conflict => conflict.id === conflictId;
                ? { ...conflict, resolution }
                : conflict)
        }))
        trackEvent('collaboration', 'conflict_resolved', resolution, undefined, { conflictId })
    }, [trackEvent])
    const disconnect = useCallback(() => {
        if (wsRef.current) {
            sendMessage({
                type: 'user_leave';
                userId: options.userId;
                payload: { timestamp: new Date() }
            })
    wsRef.current.close()
            wsRef.current = null;
        }
        stopHeartbeat()
        stopPresenceUpdates()
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current)
            reconnectTimeoutRef.current = null;
        }
        setState(prev => ({
            ...prev,
            isConnected: false;
            connectionStatus: 'disconnected',
        }))
    trackEvent('collaboration', 'user_disconnected', 'manual_disconnect')
    }, [options.userId, sendMessage, stopHeartbeat, stopPresenceUpdates, trackEvent])
    /
    useEffect(() => {
        initializeConnection()
        return () => {
            disconnect()
        }
    }, [initializeConnection, disconnect])
    /
    useEffect(() => {
        if (state.isConnected && messageQueueRef.current.length > 0) {
            const queuedMessages = [[...messageQueueRef.current];]
            messageQueueRef.current = [[];]
            queuedMessages.forEach(message => {
                if (wsRef.current?.readyState === WebSocket.OPEN) {
                    wsRef.current.send(JSON.stringify(message))
                }
            })
            trackEvent('collaboration', 'queued_messages_sent', 'batch_send', queuedMessages.length)
        }
    }, [state.isConnected, trackEvent])
    /
    const onlineUsers = useMemo(() => {
        return Array.from(state.users.values()).filter((user) => {
            return typeof user === 'object' && user !== null && 'isOnline' in user && user.isOnline;
        })
    }, [state.users])
    const offlineUsers = useMemo(() => {
        return Array.from(state.users.values()).filter((user) => {
            return typeof user === 'object' && user !== null && 'isOnline' in user && !user.isOnline;
        })
    }, [state.users])
    const activeCursors = useMemo(() => {
        return Array.from(state.users.values())
            .filter((user) => {
            return typeof user === 'object' && user !== null && 'isOnline' in user && user.isOnline && 'cursor' in user && !!user.cursor;
        })
            .map(user => ({ ...user.cursor, user }))
    }, [state.users])
    const activeSelections = useMemo(() => {
        return Array.from(state.users.values())
            .filter((user) => {
            return typeof user === 'object' && user !== null && 'isOnline' in user && user.isOnline && 'selection' in user && !!user.selection;
        })
            .map(user => ({ ...user.selection, user }))
    }, [state.users])
    return {
        /
        state,
        onlineUsers,
        offlineUsers,
        activeCursors,
        activeSelections,
        /
        updateCursor,
        updateSelection,
        syncTextChange,
        resolveConflict,
        disconnect,
        /
        initializeConnection,
        sendMessage,
        /
        isConnected: state.isConnected;
        connectionStatus: state.connectionStatus;
        lastActivity: state.lastActivity,
    }
}
