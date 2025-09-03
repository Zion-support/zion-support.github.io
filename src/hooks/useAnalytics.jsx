<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from &apos;react&apos;&apos;' export const useAnalytics = (config = {}) => {} const { enableTracking = true, enablePerformanceTracking = true, enableUserBehaviorTracking = true, enableHeatmapTracking = false, sessionTimeout = 30, batchSize = 10, flushInterval = 5000 } = config const [events, setEvents] = useState([]) const [currentSession, setCurrentSession] = useState(null) const [isTracking, setIsTracking] = useState(false) const [performanceMetrics, setPerformanceMetrics] = useState(null) const;const sessionRef = useRef(&apos;&apos;)&apos;&apos; const lastActivityRef = useRef(Date.now()) const;const;const flushTimerRef = useRef(null);
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react' export const useAnalytics = (config = {}) => { const { enableTracking = true, enablePerformanceTracking = true, enableUserBehaviorTracking = true, enableHeatmapTracking = false, sessionTimeout = 30, batchSize = 10, flushInterval = 5000 } = config const [events, setEvents] = useState([]) const [currentSession, setCurrentSession] = useState(null) const [isTracking, setIsTracking] = useState(false) const [performanceMetrics, setPerformanceMetrics] = useState(null) const sessionRef = useRef('') const lastActivityRef = useRef(Date.now()) const flushTimerRef = useRef(null);","
}""
=======
import { useState, useEffect, useCallback, useRef }  from 'react';export const useAnalytics = (config = {}) => { const { enableTracking = true, enablePerformanceTracking = true, enableUserBehaviorTracking = true, enableHeatmapTracking = false, sessionTimeout = 30, batchSize = 10, flushInterval = 5000 } = config const [events, setEvents] = useState([]) const [currentSession, setCurrentSession] = useState(null) const [isTracking, setIsTracking] = useState(false) const [performanceMetrics, setPerformanceMetrics] = useState(null) const sessionRef = useRef('') const lastActivityRef = useRef(Date.now()) const flushTimerRef = useRef(null);",
}"
>>>>>>> main
>>>>>>> main
