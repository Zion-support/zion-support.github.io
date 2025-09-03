import { useState, useEffect, useRef, useCallback, useMemo } from;
<<<<<<< HEAD
  'react' import { useAnalytics } from './useAnalytics' export const useRealTimeCollaboration = (options, wsConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [state, setState] = useState({ users: new Map(), messages[], isConnected: false, connectionStatus:
=======
  'react' import { useAnalytics }  from './useAnalytics';export const useRealTimeCollaboration = (options, wsConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [state, setState] = useState({ users: new Map(), messages[], isConnected: false, connectionStatus:;
>>>>>>> main
  'disconnected', lastActivity: new Date(), conflicts[] }) const wsRef = useRef(null) const reconnectAttemptsRef = useRef(0) const heartbeatIntervalRef = useRef(null) const reconnectTimeoutRef = useRef(null) const messageQueueRef = useRef([]) const presenceUpdateRef = useRef(null)'