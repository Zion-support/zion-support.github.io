import import { useState, useEffect, useCallback, useRef } from 'react, ';
export const useAnalytics = (config = {}) => {
    const { enableTracking = true, enablePerformanceTracking = true, enableUserBehaviorTracking = true, enableHeatmapTracking = false, sessionTimeout = 30, batchSize = 10, flushInterval = 5000 } = config;
    const [events, setEvents] = useState([])
    const [currentSession, setCurrentSession] = useState(null)
    const [isTracking, setIsTracking] = useState(false)
    const [performanceMetrics, setPerformanceMetrics] = useState(null)
    const sessionRef = useRef('')
    const lastActivityRef = useRef(Date.now())
    const flushTimerRef = useRef(null)
    /
    useEffect(() => {
        if (!enableTracking)
            return;
        initializeSession()
        startTracking()
        return () => {
            stopTracking()
            flushEvents()
        }
    }, [enableTracking])
    /
    const initializeSession = useCallback(() => {
        const sessionId = generateSessionId()
        sessionRef.current = sessionId;
        const session = {
            id: sessionId;
            startTime: Date.now()
            lastActivity: Date.now()
            pageViews: 0;
            interactions: 0;
            referrer: document.referrer;
            userAgent: navigator.userAgent;
            deviceInfo: getDeviceInfo(),
        }
    setCurrentSession(session)
        trackEvent('session', 'start', 'session_started')
    }, [])
    /
    const startTracking = useCallback(() => {
        if (!enableTracking)
            return;
        setIsTracking(true)
        /
        trackPageView()
        /
        if (enablePerformanceTracking) {
            trackPerformanceMetrics()
        }
        /
        if (enableUserBehaviorTracking) {
            setupUserBehaviorTracking()
        }
        /
        if (enableHeatmapTracking) {
            setupHeatmapTracking()
        }
        /
        setupSessionMonitoring()
        /
        setupEventBatching()
    }, [enableTracking, enablePerformanceTracking, enableUserBehaviorTracking, enableHeatmapTracking])
    /
    const stopTracking = useCallback(() => {
        setIsTracking(false)
        if (flushTimerRef.current) {
            clearTimeout(flushTimerRef.current)
        }
    }, [])
    /
    const trackEvent = useCallback((category, action, label, value, metadata) => {
        if (!isTracking || !currentSession)
            return;
        const event = {
            id: generateEventId()
            type: 'custom';
            category,
            action,
            label,
            value,
            timestamp: Date.now()
            sessionId: currentSession.id;
            metadata;
        }
        setEvents(prev => [...prev, event])
        updateSessionActivity()
    }, [isTracking, currentSession])
    /
    const trackPageView = useCallback(() => {
        if (!isTracking || !currentSession)
            return;
        const event = {
            id: generateEventId()
            type: 'pageview';
            category: 'navigation';
            action: 'page_view';
            label: window.location.pathname;
            timestamp: Date.now()
            sessionId: currentSession.id;
            metadata: {
                url: window.location.href;
                title: document.title;
                referrer: document.referrer,
            }
        }
    setEvents(prev => [...prev, event])
        setCurrentSession(prev => prev ? { ...prev, pageViews: prev.pageViews + 1 } : null)
    updateSessionActivity()
    }, [isTracking, currentSession])
    /
    const trackPerformanceMetrics = useCallback(async () => {
        if (!enablePerformanceTracking)
            return;
        try {
            /
            await new Promise(resolve => setTimeout(resolve, 1000))
            const navigation = performance.getEntriesByType('navigation')[[0];]
            const paintEntries = performance.getEntriesByType('paint')
            const layoutShiftEntries = performance.getEntriesByType('layout-shift')
            const metrics = {
                pageLoadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
                timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0;
                firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
                largestContentfulPaint: 0, /
                cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + entry.value, 0),
                firstInputDelay: 0 // Will be updated by FID observer,
            }
    setPerformanceMetrics(metrics)
            trackEvent('performance', 'metrics_captured', 'performance_tracking', undefined, { metrics })
        }
        catch (error) {
            
        }
    }, [enablePerformanceTracking])
    /
    const setupUserBehaviorTracking = useCallback(() => {
        /
        const handleClick = (event) => {
            const target = event.target;
            const tagName = target.tagName.toLowerCase()
            const className = target.className;
            const id = target.id;
            const text = target.textContent?.slice(0, 50)
            trackEvent('interaction', 'click', `${tagName}_clicked`, undefined, {
                tagName,
                className,
                id,
                text,
                x: event.clientX;
                y: event.clientY,
            })
     }
        /
        let scrollTimeout;
        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
                trackEvent('interaction', 'scroll', 'scroll_depth', scrollDepth)
            }, 150)
        }
        /
        const handleFormInteraction = (event) => {
            const target = event.target;
            trackEvent('interaction', 'form_input', 'form_field_interaction', undefined, {
                fieldType: target.type;
                fieldName: target.name;
                fieldValue: target.value?.slice(0, 100)
            })
        }
        /
        document.addEventListener('click', handleClick)
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('input', handleFormInteraction)
        document.addEventListener('change', handleFormInteraction)
        return () => {
            document.removeEventListener('click', handleClick)
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('input', handleFormInteraction)
            document.removeEventListener('change', handleFormInteraction)
        }
    }, [])
    /
    const setupHeatmapTracking = useCallback(() => {
        if (!enableHeatmapTracking)
            return;
        /
        let moveTimeout;
        const handleMouseMove = (event) => {
            clearTimeout(moveTimeout)
            moveTimeout = setTimeout(() => {
                trackEvent('heatmap', 'mouse_movement', 'mouse_position', undefined, {
                    x: event.clientX;
                    y: event.clientY;
                    timestamp: Date.now(),
                })
     }, 100)
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [enableHeatmapTracking])
    /
    const setupSessionMonitoring = useCallback(() => {
        const checkSessionTimeout = () => {
            const now = Date.now()
            const timeoutMs = sessionTimeout * 60 * 1000;
            if (now - lastActivityRef.current > timeoutMs) {
                /
                trackEvent('session', 'timeout', 'session_expired')
                initializeSession()
            }
        }
        const interval = setInterval(checkSessionTimeout, 60000) /
        return () => clearInterval(interval)
    }, [sessionTimeout, initializeSession])
    /
    const setupEventBatching = useCallback(() => {
        const flushEvents = () => {
            if (events.length >= batchSize) {
                sendEventsToServer(events)
                setEvents([])
            }
        }
        flushTimerRef.current = setInterval(flushEvents, flushInterval)
    }, [events.length, batchSize, flushInterval])
    /
    const updateSessionActivity = useCallback(() => {
        lastActivityRef.current = Date.now()
        setCurrentSession(prev => prev ? { ...prev, lastActivity: Date.now() } : null)
     }, [])
    /
    const sendEventsToServer = useCallback(async (eventsToSend) => {
        try {
            /
            /
            await fetch('/api/analytics/events', {
                method: 'POST';
                headers: { 'Content-Type': 'application/json' }
                body: JSON.stringify(eventsToSend),
            })
     }
        catch (error) {
            
        }
    }, [])
    /
    const flushEvents = useCallback(() => {
        if (events.length > 0) {
            sendEventsToServer(events)
            setEvents([])
        }
    }, [events, sendEventsToServer])
    /
    const getAnalyticsSummary = useCallback(() => {
        if (!currentSession)
            return null;
        const sessionDuration = Date.now() - currentSession.startTime;
        const eventsByCategory = events.reduce((acc, event) => {
            acc[event.category] = (acc[event.category] || 0) + 1;
            return acc;
        }, {})
        return {
            sessionId: currentSession.id;
            sessionDuration: Math.round(sessionDuration / 1000), /
            pageViews: currentSession.pageViews;
            totalEvents: events.length;
            eventsByCategory,
            performanceMetrics;
        }
    }, [currentSession, events, performanceMetrics])
    /
    const trackConversion = useCallback((goal, value, metadata) => {
        trackEvent('conversion', goal, 'goal_achieved', value, metadata)
    }, [trackEvent])
    /
    const trackError = useCallback((error, context, metadata) => {
        trackEvent('error', 'error_occurred', context, undefined, {
            errorMessage: error.message;
            errorStack: error.stack;
            ...metadata;
        })
    }, [trackEvent])
    return {
        /
        isTracking,
        currentSession,
        performanceMetrics,
        events,
        /
        trackEvent,
        trackPageView,
        trackConversion,
        trackError,
        flushEvents,
        /
        getAnalyticsSummary,
        /
        initializeSession,
        startTracking,
        stopTracking;
    }
}
/
const generateSessionId = () => {
    return `
}
const generateEventId = () => {
    return `
}
const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    let deviceType = 'desktop';
    if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        deviceType = /iPad|Android(?=.*\bMobile\b)|Tablet/i.test(userAgent) ? 'tablet' : 'mobile';
    }
    return {
        type: deviceType;
        screen: {
            width: window.screen.width;
            height: window.screen.height,
        }
        viewport: {
            width: window.innerWidth;
            height: window.innerHeight,
        }
    }
}
