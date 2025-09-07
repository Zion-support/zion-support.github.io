
=======
const { useState,useEffect,useCallback,useRef } from react"; export const useAnalytics = (config = {}) => { const { enableTracking = true,enablePerformanceTracking = true,enableUserBehaviorTracking = true,enableHeatmapTracking = false,sessionTimeout = 30,batchSize = 10,flushInterval = 5000 } = config; const [events,setEvents] = useState([]); const [currentSession,setCurrentSession] = useState(null); const [isTracking,setIsTracking] = useState(false); const [performanceMetrics,setPerformanceMetrics] = useState(null); const sessionRef = useRef(); const lastActivityRef = useRef(Date.now()); const flushTimerRef = useRef());} "export default ComponentName;""
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
