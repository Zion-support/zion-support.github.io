import React, { useEffect, useState, useCallback, useRef } from 'react.ts';
import { motion, AnimatePresence              } from 'framer-motion.ts';
<<<<<<< HEAD
import { BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  X,
=======
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  TrendingDown,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Activity,
  Zap,
  Target,
  MapPin,
  Globe,
  Smartphone,
<<<<<<< HEAD
  Tablet
=======
  Monitor,
  Tablet,
  Settings,
  X,
  Download,
  Share2,
  Filter,
  Calendar,
  RefreshCw
             } from 'lucide-react.ts';

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
interface AnalyticsData {













  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<any>;
  userAgents: Array<any>;
<<<<<<< HEAD
  referrers: Array<any>;
  timeOnPage: number;
  scrollDepth: number;
  clickEvents: number;
  formSubmissions: number;

interface Props extends React.PropsWithChildren<{











}> {

  enabled?: boolean;
  showMetrics?: boolean;
=======
  locations: Array<any>;
  performance: {
    loadTime: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
  };
  interactions: {
    clicks: number;
    scrolls: number;
    formSubmissions: number;
    errors: number;
  };
}

interface AdvancedAnalyticsProps extends React.PropsWithChildren<{}> {

  enabled: boolean;
  trackingId?: string;
  enableHeatmap?: boolean;
  enableSessionRecording?: boolean;
  enableAITesting?: boolean;

}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function AdvancedAnalytics(...args: any[]): any {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<any>({
    pageViews: 0,
    uniqueVisitors: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userAgents: [],
    locations: [],
    performance: {
      loadTime: 0,
      firstPaint: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0
    },
    interactions: {
      clicks: 0,
      scrolls: 0,
      formSubmissions: 0,
      errors: 0
    }
  });

  const [isTracking, setIsTracking] = useState(false);
  const [sessionStart, setSessionStart] = useState<any>(Date.now());
  const [currentPage, setCurrentPage] = useState<any>(window.location.pathname);
  const [userSession, setUserSession] = useState<any>('');
  const [heatmapData, setHeatmapData] = useState<Array<any>>([]);
  
  const trackingRef = useRef<{
    pageViews: anyanyanyanyanyanyanyanyanyanyanyanyanynumber;
    clicks: number;
    scrolls: number;
    formSubmissions: number;
    errors: number;
    startTime: number;
  }>({
    pageViews: 1,
    clicks: 0,
    scrolls: 0,
    formSubmissions: 0,
    errors: 0,
    startTime: Date.now()
  });

  // Generate unique session ID
  useEffect(()              => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setUserSession(sessionId);
    localStorage.setItem('analytics_session_id', sessionId);
  }, []);

  // Track page views
  const trackPageView = useCallback((path: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    if (!enabled) return;

    setCurrentPage(path);
    trackingRef.current.pageViews++;
    
    const pageViewData = {
      sessionId: anyanyanyanyanyanyanyanyanyanyanyanyanyuserSession,
      path,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Send to analytics service
    this.sendAnalyticsData('pageview', pageViewData);
    
    // Update local state
    setAnalyticsData(prev              => ({
      ...prev,
      pageViews: prev.pageViews + 1
    }));
  }, [enabled, userSession]);

  // Track user interactions
  const trackInteraction = useCallback((type: anyanyanyanyanyanyanyanyanyanyanyanyany'click' | 'scroll' | 'form' | 'error', data?: )              => {
    if (!enabled) return;

    const interactionData = {
      sessionId: anyanyanyanyanyanyanyanyanyanyanyanyanyuserSession,
      type,
      timestamp: new Date().toISOString(),
      page: currentPage,
      data,
      element: data?.target?.tagName || 'unknown',
      position: data?.position || null
    };

    // Update tracking ref
    switch (type) {
      case 'click':
        trackingRef.current.clicks++;
        break;
      case 'scroll':
        trackingRef.current.scrolls++;
        break;
      case 'form':
        trackingRef.current.formSubmissions++;
        break;
      case 'error':
        trackingRef.current.errors++;
        break;
    }

    // Send to analytics service
    this.sendAnalyticsData('interaction', interactionData);

    // Update local state
    setAnalyticsData(prev              => ({
      ...prev,
      interactions: {
        ...prev.interactions,
        [type === 'form' ? 'formSubmissions' : type === 'error' ? 'errors' : `${type}s`]: 
          prev.interactions[type === 'form' ? 'formSubmissions' : type === 'error' ? 'errors' : `${type}s`] + 1
      }
    }));
  }, [enabled, userSession, currentPage]);

  // Track performance metrics
  const trackPerformance = useCallback(() => {
    if (!enabled) return;

    // Use Performance API to get metrics
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const performanceData = {
        sessionId: anyanyanyanyanyanyanyanyanyanyanyanyanyuserSession,
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find(entry              => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: anyanyanyanyanyanyanyanyanyanyanyanyanypaint.find(entry              => entry.name === 'first-contentful-paint')?.startTime || 0,
        largestContentfulPaint: anyanyanyanyanyanyanyanyanyanyanyanyany0, // Will be updated by observer
        timestamp: new Date().toISOString()
      };

      // Update local state
      setAnalyticsData(prev              => ({
        ...prev,
        performance: anyanyanyanyanyanyanyanyanyanyanyanyany{
          loadTime: performanceData.loadTime,
          firstPaint: performanceData.firstPaint,
          firstContentfulPaint: performanceData.firstContentfulPaint,
          largestContentfulPaint: performanceData.largestContentfulPaint
        }
      }));

      // Send to analytics service
      this.sendAnalyticsData('performance', performanceData);
    }
  }, [enabled, userSession]);

  // Setup event listeners
  useEffect(()              => {
    if (!enabled) return;

    setIsTracking(true);

    // Track initial page view
    trackPageView(window.location.pathname);

<<<<<<< HEAD
    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      setAnalyticsData(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
      }));
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - sessionStart) / 1000);
      setAnalyticsData(prev => ({
        ...prev,
        timeOnPage: timeSpent
      }));
    };

    // Track click events
    const trackClickEvents = () => {
      setAnalyticsData(prev => ({
        ...prev,
        clickEvents: prev.clickEvents + 1
      }));
    };

    // Track form submissions
    const trackFormSubmissions = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyEvent)              => {
      if (e.target instanceof HTMLFormElement) {
        setAnalyticsData(prev => ({
          ...prev,
          formSubmissions: prev.formSubmissions + 1
        }));

    };

    // Track user agent
    const trackUserAgent = () => {
      const userAgent = navigator.userAgent;
      let device = 'Desktop';

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        device = /iPad/i.test(userAgent) ? 'Tablet' : 'Mobile';

      setAnalyticsData(prev => {
        const existingDevice = prev.userAgents.find(d => d.device === device);
        if (existingDevice) {
          existingDevice.count++;
        } else {
          prev.userAgents.push({ device, count: 1 });

        return { ...prev };
      });
    };

    // Track referrer
    const trackReferrer = () => {
      if (document.referrer) {
        const referrer = new URL(document.referrer);
        const source = referrer.hostname;

        setAnalyticsData(prev => {
          const existingSource = prev.referrers.find(r => r.source === source);
          if (existingSource) {
            existingSource.count++;
          } else {
            prev.referrers.push({ source, count: 1 });

          return { ...prev };
        });

=======
    // Track performance metrics
    trackPerformance();

    // Setup click tracking
    const handleClick = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyMouseEvent)              => {
      const target = e.target as HTMLElement;
      const position = { x: anyanyanyanyanyanyanyanyanyanyanyanyanye.clientX, y: e.clientY };
      
      trackInteraction('click', { target, position });
      
      // Add to heatmap data
      if (enableHeatmap) {
        setHeatmapData(prev              => [...prev, { x: position.x, y: position.y, type: 'click' }]);
      }
    };

    // Setup scroll tracking
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        trackInteraction('scroll', { 
          scrollY: window.scrollY, 
          scrollHeight: document.documentElement.scrollHeight 
        });
      }, 100);
    };

    // Setup form submission tracking
    const handleFormSubmit = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyEvent)              => {
      const form = e.target as HTMLFormElement;
      trackInteraction('form', { 
        formId: form.id || form.className,
        formAction: form.action,
        formMethod: form.method
      });
    };

    // Setup error tracking
    const handleError = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyErrorEvent)              => {
      trackInteraction('error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error?.stack
      });
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };

    // Setup unhandled promise rejection tracking
    const handleUnhandledRejection = (e: anyanyanyanyanyanyanyanyanyanyanyanyanyPromiseRejectionEvent)              => {
      trackInteraction('error', {
        message: e.reason?.message || 'Unhandled Promise Rejection',
        reason: e.reason
      });
    };

    // Add event listeners
<<<<<<< HEAD
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    document.addEventListener('click', trackClickEvents);
    document.addEventListener('submit', trackFormSubmissions);

    // Update time on page every second
    const timeInterval = setInterval(trackTimeOnPage, 1000);
=======
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('submit', handleFormSubmit);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page hidden - track session end
        const sessionDuration = Date.now() - sessionStart;
        setAnalyticsData(prev => ({
          ...prev,
          sessionDuration: sessionDuration / 1000 // Convert to seconds
        }));
      } else {
<<<<<<< HEAD
        // Page is visible, resume tracking
        setIsTracking(true);

=======
        // Page visible - track session resume
        setSessionStart(Date.now());
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', handleFormSubmit);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(scrollTimeout);
    };
  }, [enabled, trackPageView, trackPerformance, trackInteraction, sessionStart, enableHeatmap]);

  // Setup performance observer for LCP
  useEffect(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setAnalyticsData(prev => ({
            ...prev,
            performance: anyanyanyanyanyanyanyanyanyanyanyanyany{
              ...prev.performance,
              largestContentfulPaint: lastEntry.startTime
            }
          }));
        }
      });

<<<<<<< HEAD
      return ()              => clearInterval(interval);

  }, [isTracking, sessionStart]);

  // Simulate some analytics data for demonstration
  useEffect(() => {
    if (enabled) {
      // Simulate top pages
      setAnalyticsData(prev => ({
        ...prev,
        topPages: [
          { path: '/', views: 1250 },
          { path: '/services', views: 890 },
          { path: '/about', views: 456 },
          { path: '/contact', views: 234 },
          { path: '/blog', views: 189 }
        ],
        bounceRate: 35.2,
        conversionRate: 8.7
      }));

=======
      lcpObserver.observe({ entryTypes: anyanyanyanyanyanyanyanyanyanyanyanyany['largest-contentful-paint'] });

      return ()              => lcpObserver.disconnect();
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }, [enabled]);

  // Send analytics data to service
  const sendAnalyticsData = useCallback(async (eventType: anyanyanyanyanyanyanyanyanyanyanyanyanystring, data: )              => {
    if (!trackingId) return;

    try {
      const analyticsPayload = {
        trackingId,
        eventType,
        data,
        timestamp: anyanyanyanyanyanyanyanyanyanyanyanyanynew Date().toISOString(),
        sessionId: userSession
      };

      // Send to analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsPayload),
      });
    } catch (error) {
      console.warn('Failed to send analytics data:', error);
    }
  }, [trackingId, userSession]);

  // Generate mock data for demonstration
  useEffect(()              => {
    if (!enabled) return;

    // Simulate data collection
    const mockData: AnalyticsData = {
      pageViews: Math.floor(Math.random() * 1000) + 500,
      uniqueVisitors: Math.floor(Math.random() * 500) + 200,
      sessionDuration: Math.floor(Math.random() * 300) + 120,
      bounceRate: Math.random() * 40 + 20,
      conversionRate: Math.random() * 5 + 1,
      topPages: [
        { path: '/', views: Math.floor(Math.random() * 500) + 200 },
        { path: '/services', views: Math.floor(Math.random() * 300) + 150 },
        { path: '/about', views: Math.floor(Math.random() * 200) + 100 },
        { path: '/contact', views: Math.floor(Math.random() * 150) + 80 }
      ],
      userAgents: [
        { device: 'Desktop', count: Math.floor(Math.random() * 400) + 200 },
        { device: 'Mobile', count: Math.floor(Math.random() * 300) + 150 },
        { device: 'Tablet', count: Math.floor(Math.random() * 100) + 50 }
      ],
      locations: [
        { country: 'United States', count: Math.floor(Math.random() * 300) + 150 },
        { country: 'United Kingdom', count: Math.floor(Math.random() * 150) + 80 },
        { country: 'Canada', count: Math.floor(Math.random() * 100) + 50 },
        { country: 'Germ', count: Math.floor(Math.random() * 80) + 40 }
      ],
      performance: {
        loadTime: Math.random() * 2000 + 500,
        firstPaint: Math.random() * 1000 + 200,
        firstContentfulPaint: Math.random() * 1500 + 300,
        largestContentfulPaint: Math.random() * 2000 + 500
      },
      interactions: {
        clicks: Math.floor(Math.random() * 500) + 200,
        scrolls: Math.floor(Math.random() * 1000) + 500,
        formSubmissions: Math.floor(Math.random() * 50) + 20,
        errors: Math.floor(Math.random() * 10) + 2
      }
    };

    setAnalyticsData(mockData);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Analytics Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
        title="Analytics Dashboard"
        aria-label="Open analytics dashboard"

        <BarChart3 className="w-6 h-6 text-white" />
      </motion.button>
    );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[90vh] overflow-y-auto"

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-indigo-500" />
            Analytics Dashboard
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close analytics dashboard"

            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Real-time Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-500" />
              Real-time Metrics
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
=======
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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
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
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close analytics dashboard"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-center gap-2 mb-1">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-blue-600">Page Views</span>
                </div>
                <div className="text-lg font-bold text-blue-700">{analyticsData.pageViews.toLocaleString()}</div>
              </div>
<<<<<<< HEAD

              <div className="p-3 bg-blue-50 rounded-lg">
=======
              
              <div className="bg-green-50 p-3 rounded-lg">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">Visitors</span>
                </div>
                <div className="text-lg font-bold text-green-700">{analyticsData.uniqueVisitors.toLocaleString()}</div>
              </div>
<<<<<<< HEAD

              <div className="p-3 bg-purple-50 rounded-lg">
=======
              
              <div className="bg-purple-50 p-3 rounded-lg">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-purple-600">Session</span>
                </div>
                <div className="text-lg font-bold text-purple-700">{Math.round(analyticsData.sessionDuration)}s</div>
              </div>
<<<<<<< HEAD

              <div className="p-3 bg-orange-50 rounded-lg">
=======
              
              <div className="bg-orange-50 p-3 rounded-lg">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-600">Conversion</span>
                </div>
                <div className="text-lg font-bold text-orange-700">{analyticsData.conversionRate.toFixed(1)}%</div>
              </div>
            </div>

<<<<<<< HEAD
          {/* Performance Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Performance Metrics
            </h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Scroll Depth</span>
                <span className="text-sm font-medium text-gray-800">{analyticsData.scrollDepth}%</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Time on Page</span>
                <span className="text-sm font-medium text-gray-800">{Math.floor(analyticsData.timeOnPage / 60)}m {analyticsData.timeOnPage % 60}s</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Form Submissions</span>
                <span className="text-sm font-medium text-gray-800">{analyticsData.formSubmissions}</span>
              </div>
            </div>
          </div>

          {/* Conversion Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-red-500" />
              Conversion Metrics
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-700">{analyticsData.bounceRate}%</div>
                  <div className="text-xs text-red-600">Bounce Rate</div>
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-700">{analyticsData.conversionRate}%</div>
                  <div className="text-xs text-green-600">Conversion Rate</div>
=======
            {/* Performance Metrics */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Performance
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Load Time:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.loadTime)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>First Paint:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.firstPaint)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.firstContentfulPaint)}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span className="font-mono">{Math.round(analyticsData.performance.largestContentfulPaint)}ms</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
            </div>

<<<<<<< HEAD
          {/* Top Pages */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              Top Pages
            </h4>

            <div className="space-y-2">
              {analyticsData.topPages.slice(0, 3).map((page, index) => (
                <div key={page.path} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">#{index + 1}</span>
                    <span className="text-sm text-gray-700">{page.path}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{page.views}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device Distribution */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Device className="w-4 h-4 text-purple-500" />
              Device Distribution
            </h4>

            <div className="space-y-2">
              {analyticsData.userAgents.map((device, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    {device.device === 'Mobile' && <Smartphone className="w-4 h-4 text-blue-500" />}
                    {device.device === 'Tablet' && <Tablet className="w-4 h-4 text-green-500" />}
                    {device.device === 'Desktop' && <Monitor className="w-4 h-4 text-purple-500" />}
                    <span className="text-sm text-gray-700">{device.device}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{device.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Session Status */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Session Status</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-xs text-gray-600">{isTracking ? 'Active' : 'Paused'}</span>
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>

            {/* Device Distribution */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Device Distribution</h3>
              <div className="space-y-2">
                {analyticsData.userAgents.map((device, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    {device.device === 'Desktop' && <Monitor className="w-3 h-3 text-blue-500" />}
                    {device.device === 'Mobile' && <Smartphone className="w-3 h-3 text-green-500" />}
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
                  className="text-blue-500 hover:text-blue-600"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}}}}}}}}}}}}}