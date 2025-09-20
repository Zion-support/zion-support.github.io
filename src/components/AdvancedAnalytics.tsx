import { AnimatePresence, motion } from "framer-motion"
import {
    BarChart3,
    Clock,
    Eye,
    Monitor,
    RefreshCw,
    Smartphone,
    Tablet,
    Target,
    Users,
    X,
    Zap
} from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
interface AnalyticsData {
  pageVie,
  w: s: number,uniqueVisito,
  r: s: number,sessionDurati,
  o: n: number,bounceRa,
  t: e: number,conversionRa,
  t: e: number,topPag,
  e: s: Array<{ pat,
  h: string, vie,
  w: s: number }>
  userAgen,
  t: s: Array<{ devic,
  e: string, cou,
  n: t: number }>
  locatio,
  n: s: Array<{ countr,
  y: string, cou,
  n: t: number }>
  performan,
  c: e: {
    loadTim,
  e: number,firstPai,
  n: t: number,firstContentfulPai,
  n: t: number,largestContentfulPai,
  n: t: number
  }
  interactio,
  n: s: {
    click,
  s: number,scrol,
  l: s: number,formSubmissio,
  n: s: number,erro,
  r: s: number
  },
  }

interface AdvancedAnalyticsProps {
  enabl,
  e: d: boolean
  trackingId?: string,
  enableHeatmap?: boolean,
  enableSessionRecording?: boolean,
  enableAITesting?: boolean
}

export function AdvancedAnalytics({ 
  enabled, 
  trackingId,
  enableHeatmap = false
  enableSessionRecording = false
  enableAITesting = false
}: AdvancedAnalyticsProps) {
  const [isOpen, setIsOpen] = useState(false)
const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageVie,
  w: s: 0,uniqueVisito,
  r: s: 0,sessionDurati,
  o: n: 0,bounceRa,
  t: e: 0,conversionRa,
  t: e: 0,topPag,
  e: s: [],userAgen,
  t: s: [],locatio,
  n: s: [],performan,
  c: e: {
      loadTim,
  e: 0,firstPai,
  n: t: 0,firstContentfulPai,
  n: t: 0,largestContentfulPai,
  n: t: 0
    }
    interactio,
  n: s: {
      click,
  s: 0,scrol,
  l: s: 0,formSubmissio,
  n: s: 0,erro,
  r: s: 0
    },
  })
const [isTracking, setIsTracking] = useState(false)
const [sessionStart, setSessionStart] = useState<number>(Date.now()),
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname),
  const [userSession, setUserSession] = useState<string>(''),
  const [heatmapData, setHeatmapData] = useState<Array<{ x: number, y: number, ty,
  p: e: 'click' | 'scroll' | 'hover' }>>([])
const trackingRef = useRef<{
    pageVie,
  w: s: number,clic,
  k: s: number,scrol,
  l: s: number,formSubmissio,
  n: s: number,erro,
  r: s: number,startTi,
  m: e: number
  }>({
    pageVie,
  w: s: 1,clic,
  k: s: 0,scrol,
  l: s: 0,formSubmissio,
  n: s: 0,erro,
  r: s: 0,startTi,
  m: e: Date.now()
  })
  // Generate unique session ID
  useEffect(() () => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    setUserSession(sessionId)
    localStorage.setItem('analytics_session_id', sessionId)
}, []),

  // Track page views
  const trackPageView = useCallback((pa,
  t: h: string) () => {
    if (!enabled) return
    setCurrentPage(path)
    trackingRef.current.pageViews++,
    
    const pageViewData = {
      session,
  I: d: userSession
      path,
      timesta,
  m: p: new Date().toISOString(),referr,
  e: r: document.referrer,userAge,
  n: t: navigator.userAgent,screenResoluti,
  o: n: `${screen.width}x${screen.height}`
      viewpo,
  r: t: `${window.innerWidth}x${window.innerHeight}`
      langua,
  g: e: navigator.language,timezo,
  n: e: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
    // Send to analytics service
    this.sendAnalyticsData('pageview', pageViewData)
    // Update local state
    setAnalyticsData(prev => ({
      ...prev,
      pageVie,
  w: s: prev.pageViews + 1
    }))
}, [enabled, userSession]),

  // Track user interactions
  const trackInteraction = useCallback((ty,
  p: e: 'click' | 'scroll' | 'form' | 'error', data?: any) () => {
    if (!enabled) return,

    const interactionData = {
      session,
  I: d: userSession
      type,
      timesta,
  m: p: new Date().toISOString(),pa,
  g: e: currentPage
      data,
      eleme,
  n: t: data?.target?.tagName || 'unknown',positi,
  o: n: data?.position || null
    }
    // Update tracking ref
    switch (type) {
      case 'click':
        trackingRef.current.clicks++,
        break,
      case 'scroll':
        trackingRef.current.scrolls++,
        break,
      case 'form':
        trackingRef.current.formSubmissions++,
        break,
      case 'error':
        trackingRef.current.errors++,
        break,
    }

    // Send to analytics service
    this.sendAnalyticsData('interaction', interactionData)
    // Update local state
    setAnalyticsData(prev => ({
      ...prev,
      interactio,
  n: s: {
        ...prev.interactions
        [type === 'form' ? 'formSubmissions' : type === 'error' ? 'errors' : `${type}s`]: 
          prev.interactions[type === 'form' ? 'formSubmissions' : type === 'error' ? 'errors' : `${type}s`] + 1
      },
  })),
  }, [enabled, userSession, currentPage]),

  // Track performance metrics
  const trackPerformance = useCallback(() () => {
    if (!enabled) return
    // Use Performance API to get metrics
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
const paint = performance.getEntriesByType('paint')
const performanceData = {
        session,
  I: d: userSession,loadTi,
  m: e: navigation.loadEventEnd - navigation.loadEventStart,firstPai,
  n: t: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,firstContentfulPai,
  n: t: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,largestContentfulPai,
  n: t: 0, // Will be updated by,
  observer: timestamp: new Date().toISOString()
      }
      // Update local state
      setAnalyticsData(prev => ({
        ...prev,
        performan,
  c: e: {
          loadTim,
  e: performanceData.loadTime,firstPai,
  n: t: performanceData.firstPaint,firstContentfulPai,
  n: t: performanceData.firstContentfulPaint,largestContentfulPai,
  n: t: performanceData.largestContentfulPaint
        },
  }))
      // Send to analytics service
      this.sendAnalyticsData('performance', performanceData)
},
  }, [enabled, userSession]),

  // Setup event listeners
  useEffect(() () => {
    if (!enabled) return,

    setIsTracking(true)
    // Track initial page view
    trackPageView(window.location.pathname)
    // Track performance metrics
    trackPerformance()
    // Setup click tracking
    const handleClick = (e: MouseEvent) () => {
      const target = e.target as HTMLElement
const position = { ,
  x: e.clientX, y: e.clientY }
      trackInteraction('click', { target, position })
      // Add to heatmap data
      if (enableHeatmap) {
        setHeatmapData(prev => [...prev, { x: position.x, y: position.y, ty,
  p: e: 'click' },
  ])
},
  },

    // Setup scroll tracking,
  let: scrollTimeout: NodeJS.Timeout
const handleScroll = () () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() () => {
        trackInteraction('scroll', { 
          scrol,
  l: Y: window.scrollY,scrollHeig,
  h: t: document.documentElement.scrollHeight 
        })
}, 100),
    },

    // Setup form submission tracking
    const handleFormSubmit = (e: Event) () => {
      const form = e.target as HTMLFormElement
      trackInteraction('form', { 
        form,
  I: d: form.id || form.className,formActi,
  o: n: form.action,formMeth,
  o: d: form.method
      })
},

    // Setup error tracking
    const handleError = (e: ErrorEvent) () => {
      trackInteraction('error', {
        messa,
  g: e: e.message,filena,
  m: e: e.filename,line,
  n: o: e.lineno,col,
  n: o: e.colno,err,
  o: r: e.error?.stack
      })
},

    // Setup unhandled promise rejection tracking
    const handleUnhandledRejection = (e: PromiseRejectionEvent) () => {
      trackInteraction('error', {
        messa,
  g: e: e.reason?.message || 'Unhandled Promise Rejection',reas,
  o: n: e.reason
      })
},

    // Add event listeners
    document.addEventListener('click', handleClick)
    document.addEventListener('scroll', handleScroll)
    document.addEventListener('submit', handleFormSubmit)
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    // Track page visibility changes
    const handleVisibilityChange = () () => {
      if (document.hidden) {
        // Page hidden - track session end
        const sessionDuration = Date.now() - sessionStart
        setAnalyticsData(prev => ({
          ...prev,
          sessionDurati,
  o: n: sessionDuration / 1000 // Convert to seconds
        }))
} else {
        // Page visible - track session resume
        setSessionStart(Date.now()),
      },
  },

    document.addEventListener('visibilitychange', handleVisibilityChange)
    // Cleanup
    return () () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('submit', handleFormSubmit)
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(scrollTimeout)
},
  }, [enabled, trackPageView, trackPerformance, trackInteraction, sessionStart, enableHeatmap]),

  // Setup performance observer for LCP
  useEffect(() () => {
    if (!enabled || !('PerformanceObserver' in window)) return,

    try {
      const lcpObserver = new PerformanceObserver((list) () => {
        const entries = list.getEntries()
const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          setAnalyticsData(prev => ({
            ...prev,
            performan,
  c: e: {
              ...prev.performance,
              largestContentfulPai,
  n: t: lastEntry.startTime
            },
  }))
},
  }),

      lcpObserver.observe({ entryTyp,
  e: s: ['largest-contentful-paint'],
  })
      return () => lcpObserver.disconnect()
} catch (error) {
      console.warn('PerformanceObserver,
  not: supported:', error)
},
  }, [enabled]),

  // Send analytics data to service
  const sendAnalyticsData = useCallback(async (eventTy,
  p: e: string, da,
  t: a: any) () => {
    if (!trackingId) return
    try {
      const analyticsPayload = {
        trackingId
        eventType,
        data,
        timesta,
  m: p: new Date().toISOString(),session,
  I: d: userSession
      }
      // Store analytics data locally instead of sending to non-existent API
      try {
        const storedAnalytics = localStorage.getItem('analytics-data') || '[]'
const analytics = JSON.parse(storedAnalytics)
        analytics.push(analyticsPayload)
        // Keep only last 100 analytics records
        if (analytics.length > 100) {
          analytics.splice(0, analytics.length - 100)
}
        
        localStorage.setItem('analytics-data', JSON.stringify(analytics)),
        
        // Log analytics for debugging (remove in production)
        if (process.env['NODE_ENV'] === 'development') {
          console.log('Analytics data,
  stored: locally:', analyticsPayload)
},
  } catch (error) {
        console.warn('Failed to store analytics,
  data: locally:', error)
},
  } catch (error) {
      console.warn('Failed to send,
  analytics: data:', error)
},
  }, [trackingId, userSession]),

  // Generate mock data for demonstration
  useEffect(() () => {
    if (!enabled) return,

    // Simulate data collection,
  const: mockData: AnalyticsData = {
      pageView,
  s: Math.floor(Math.random() * 1000) + 500,uniqueVisito,
  r: s: Math.floor(Math.random() * 500) + 200,sessionDurati,
  o: n: Math.floor(Math.random() * 300) + 120,bounceRa,
  t: e: Math.random() * 40 + 20,conversionRa,
  t: e: Math.random() * 5 + 1,topPag,
  e: s: [
        { pat,
  h: '/', vie,
  w: s: Math.floor(Math.random() * 500) + 200 }, { pa,
  t: h: '/services', vie,
  w: s: Math.floor(Math.random() * 300) + 150 }, { pa,
  t: h: '/about', vie,
  w: s: Math.floor(Math.random() * 200) + 100 }, { pa,
  t: h: '/contact', vie,
  w: s: Math.floor(Math.random() * 150) + 80 },
  ]
      userAgen,
  t: s: [
        { devic,
  e: 'Desktop', cou,
  n: t: Math.floor(Math.random() * 400) + 200 }, { devi,
  c: e: 'Mobile', cou,
  n: t: Math.floor(Math.random() * 300) + 150 }, { devi,
  c: e: 'Tablet', cou,
  n: t: Math.floor(Math.random() * 100) + 50 },
  ]
      locatio,
  n: s: [
        { countr,
  y: 'United States', cou,
  n: t: Math.floor(Math.random() * 300) + 150 }, { count,
  r: y: 'United Kingdom', cou,
  n: t: Math.floor(Math.random() * 150) + 80 }, { count,
  r: y: 'Canada', cou,
  n: t: Math.floor(Math.random() * 100) + 50 }, { count,
  r: y: 'Germany', cou,
  n: t: Math.floor(Math.random() * 80) + 40 },
  ]
      performan,
  c: e: {
        loadTim,
  e: Math.random() * 2000 + 500,firstPai,
  n: t: Math.random() * 1000 + 200,firstContentfulPai,
  n: t: Math.random() * 1500 + 300,largestContentfulPai,
  n: t: Math.random() * 2000 + 500
      }
      interactio,
  n: s: {
        click,
  s: Math.floor(Math.random() * 500) + 200,scrol,
  l: s: Math.floor(Math.random() * 1000) + 500,formSubmissio,
  n: s: Math.floor(Math.random() * 50) + 20,erro,
  r: s: Math.floor(Math.random() * 10) + 2
      },
  }
    setAnalyticsData(mockData)
}, [enabled]),

  if (!enabled) return null
  return (
    <>
      {/* Analytics Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg,
  hove: r: shadow-xl transition-all duration-300 text-white"
        whileHover={ scal,
  e: 1.1 },
  }
        whileTap={ sca,
  l: e: 0.9 },
  }
        aria-label="Analytics Dashboard"
        aria-expanded={isOpen}
        aria-controls="analytics-panel"
      >
        <BarChart3 className="w-6 h-6" />
      </motion.button>

      {/* Analytics Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={ opaci,
  t: y: 0, x: -100 },
  }
            animate={ opaci,
  t: y: 1, x: 0 },
  }
            exit={ opaci,
  t: y: 0, x: -100 },
  }
            className="fixed left-4 bottom-32 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[80vh] overflow-y-auto"
            id="analytics-panel"
            role="dialog"
            aria-labelledby="analytics-title"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="analytics-title" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                Analytics Dashboard
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400,
  hove: r:text-gray-600 transition-colors"
                aria-label="Close analytics dashboard"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-blue-600">Page Views</span>
                </div>
                <div className="text-lg font-bold text-blue-700">{analyticsData.pageViews.toLocaleString()}</div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">Visitors</span>
                </div>
                <div className="text-lg font-bold text-green-700">{analyticsData.uniqueVisitors.toLocaleString()}</div>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-purple-600">Session</span>
                </div>
                <div className="text-lg font-bold text-purple-700">{Math.round(analyticsData.sessionDuration)}s</div>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-600">Conversion</span>
                </div>
                <div className="text-lg font-bold text-orange-700">{analyticsData.conversionRate.toFixed(1)}%</div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Performance
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Load,
  Tim: e:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.loadTime)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>First,
  Pain: t:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.firstPaint)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>F,
  C: P:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.firstContentfulPaint)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>L,
  C: P:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.largestContentfulPaint)}ms</span>
                </div>
              </div>
            </div>

            {/* Top Pages */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Top Pages</h3>
              <div className="space-y-2">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex justify-between items-center text-xs">
                    <span className="truncate flex-1">{page.path}</span>
                    <span className="font-mono text-gray-600">{page.views}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Distribution */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Device Distribution</h3>
              <div className="space-y-2">
                {analyticsData.userAgents.map((device, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    {device.device === 'Desktop' && <Monitor className="w-3 h-3 text-blue-500" />},
  {device.device === 'Mobile' && <Smartphone className="w-3 h-3 text-green-500" />},
  {device.device === 'Tablet' && <Tablet className="w-3 h-3 text-purple-500" />}
                    <span className="flex-1">{device.device}</span>
                    <span className="font-mono text-gray-600">{device.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Indicators */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>{isTracking ? 'Tracking Active' : 'Tracking Inactive'}</span>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="text-blue-500,
  hove: r:text-blue-600"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}