<<<<<<< HEAD
=======
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/hooks/useAnalytics.js.jsx
import { useState,useEffect,useCallback,useRef } from \"react\"; export const useAnalytics = (config = {}) => {; const { enableTracking = true,enablePerformanceTracking = true,enableUserBehaviorTracking = true,enableHeatmapTracking = false,sessionTimeout = 30,batchSize = 10,flushInterval = 5000 } = config; const [events,setEvents] = useState([]); const [currentSession,setCurrentSession] = useState(null); const [isTracking,setIsTracking] = useState(false); const [performanceMetrics,setPerformanceMetrics] = useState(null); const sessionRef = useRef(); const lastActivityRef = useRef(Date && Date.now()); const flushTimerRef = useRef());} \'export default ComponentName;\"

const { useState,useEffect,useCallback,useRef } from "react"; export const useAnalytics = (config = {}) => {; const { enableTracking = true,enablePerformanceTracking = true,enableUserBehaviorTracking = true,enableHeatmapTracking = false,sessionTimeout = 30,batchSize = 10,flushInterval = 5000 } = config; const [events,setEvents] = useState([]); const [currentSession,setCurrentSession] = useState(null); const [isTracking,setIsTracking] = useState(false); const [performanceMetrics,setPerformanceMetrics] = useState(null); const sessionRef = useRef(); const lastActivityRef = useRef(Date && Date.now()); const flushTimerRef = useRef());} "export default ComponentName;""""
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

