import { useState, useEffect, useRef, useCallback, useMemo } from 'react, ';
import { useAnalytics } from './useAnalytics, ';
export const useRealTimeCollaboration = (options, wsConfig) => {;
    const { trackEvent } = useAnalytics({enableTracking: true;
        enableUserBehaviorTracking: true});
    const [state, setState] = useState({users: new Map();
                    connectionStatus: 'connected'
                }));
                trackEvent('collaboration', 'connection_lost', 'websocket_disconnected', undefined, {code: event.code;
        catch (error) {trackEvent('collaboration', 'connection_failed', 'websocket_init_failed', undefined, {
            ...message,;
            id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
            timestamp: new Date();
        };
        trackEvent('collaboration', 'message_received', message.type, undefined, {messageId: message.id;