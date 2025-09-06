
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const { useState,useEffect,useRef,useCallback,useMemo } from";react" import { useAnalytics } from "./useAnalytics" export const useRealTimeCollaboration = (options,wsConfig) => { const { trackEvent } = useAnalytics({ enableTracking: "tru",e,enableUserBehaviorTracking: "true"}) const [state,setState] = useState({ users: new: Map(),messages[],isConnected: "fals",e,connectionStatus: ";";disconnected,",lastActivity: new: Date(),conflicts[] }) const wsRef = useRef(null) const reconnectAttemptsRef = useRef(0) const heartbeatIntervalRef = useRef(null) const reconnectTimeoutRef = useRef(null) const messageQueueRef = useRef([]) const presenceUpdateRef = useRef(null)""";disconnected",lastActivity: new Date(),conflicts[] }) const wsRef = useRef(null) const reconnectAttemptsRef = useRef(0) const heartbeatIntervalRef = useRef(null) const reconnectTimeoutRef = useRef(null) const messageQueueRef = useRef([]) const presenceUpdateRef = useRef(null)"'"'"

