import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  Activity,
  X,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ path: string; views: number }>;
  userBehavior: {
    clicks: number;
    scrolls: number;
    formInteractions: number;
  };
  performance: {
    loadTime: number;
    interactionTime: number;
    errorRate: number;
  };
}

interface UserEvent {
  type: string;
  timestamp: number;
  data: any;
  sessionId: string;
}

export const AnalyticsMonitor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    userBehavior: {
      clicks: 0,
      scrolls: 0,
      formInteractions: 0
    },
    performance: {
      loadTime: 0,
      interactionTime: 0,
      errorRate: 0
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'behavior' | 'performance'>('overview');
  
  const sessionIdRef = useRef<string>('');
  const eventsRef = useRef<UserEvent[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const lastActivityRef = useRef<number>(Date.now());

  // Generate session ID
  useEffect(() => {
    sessionIdRef.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Track session start
    trackEvent('session_start', {
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
  }, []);

  // Track user behavior
  const trackEvent = useCallback((type: string, data: any) => {
    const event: UserEvent = {
      type,
      timestamp: Date.now(),
      data,
      sessionId: sessionIdRef.current
    };

    eventsRef.current.push(event);
    
    // Update analytics data based on event type
    setAnalyticsData(prev => {
      switch (type) {
        case 'page_view':
          return { ...prev, pageViews: prev.pageViews + 1 };
        case 'click':
          return { 
            ...prev, 
            userBehavior: { 
              ...prev.userBehavior, 
              clicks: prev.userBehavior.clicks + 1 
            } 
          };
        case 'scroll':
          return { 
            ...prev, 
            userBehavior: { 
              ...prev.userBehavior, 
              scrolls: prev.userBehavior.scrolls + 1 
            } 
          };
        case 'form_interaction':
          return { 
            ...prev, 
            userBehavior: { 
              ...prev.userBehavior, 
              formInteractions: prev.userBehavior.formInteractions + 1 
            } 
          };
        default:
          return prev;
      }
    });

    // Send to analytics service (if configured)
    if (process.env.NODE_ENV === 'production') {
      sendToAnalytics(event);
    }
  }, []);

  // Send event to analytics service
  const sendToAnalytics = useCallback(async (event: UserEvent) => {
    try {
      // Example: Send to Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', event.type, {
          event_category: 'user_behavior',
          event_label: event.data?.label || '',
          value: event.data?.value || 1,
          custom_parameter_session_id: event.sessionId
        });
      }

      // Example: Send to custom analytics endpoint
      await fetch('/api/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }, []);

  // Track page views
  useEffect(() => {
    const handleRouteChange = () => {
      trackEvent('page_view', {
        path: window.location.pathname,
        title: document.title,
        referrer: document.referrer
      });
    };

    // Track initial page view
    handleRouteChange();

    // Listen for route changes (if using React Router)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackEvent]);

  // Track clicks
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      trackEvent('click', {
        element: target.tagName.toLowerCase(),
        text: target.textContent?.substring(0, 50) || '',
        className: target.className,
        id: target.id,
        path: window.location.pathname
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [trackEvent]);

  // Track scrolls
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollDepth > 0) {
          trackEvent('scroll', {
            depth: scrollDepth,
            path: window.location.pathname
          });
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [trackEvent]);

  // Track form interactions
  useEffect(() => {
    const handleFormInteraction = (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      
      if (target.form) {
        trackEvent('form_interaction', {
          type: event.type,
          fieldName: target.name || target.id || 'unknown',
          fieldType: target.type || 'unknown',
          formId: target.form.id || 'unknown',
          path: window.location.pathname
          // Note: Don't track actual input values for privacy
        });
      }
    };

    document.addEventListener('focus', handleFormInteraction);
    document.addEventListener('blur', handleFormInteraction);
    document.addEventListener('change', handleFormInteraction);
    
    return () => {
      document.removeEventListener('focus', handleFormInteraction);
      document.removeEventListener('blur', handleFormInteraction);
      document.removeEventListener('change', handleFormInteraction);
    };
  }, [trackEvent]);

  // Track performance metrics
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            const interactionTime = navEntry.domInteractive - navEntry.domContentLoadedEventStart;
            
            setAnalyticsData(prev => ({
              ...prev,
              performance: {
                ...prev.performance,
                loadTime: Math.round(loadTime),
                interactionTime: Math.round(interactionTime)
              }
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
      return () => observer.disconnect();
    }
  }, []);

  // Track session duration
  useEffect(() => {
    const updateSessionDuration = () => {
      const currentTime = Date.now();
      const sessionDuration = currentTime - startTimeRef.current;
      
      setAnalyticsData(prev => ({
        ...prev,
        averageSessionDuration: Math.round(sessionDuration / 1000)
      }));
    };

    const interval = setInterval(updateSessionDuration, 5000);
    return () => clearInterval(interval);
  }, []);

  // Track user activity
  useEffect(() => {
    const updateActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => document.addEventListener(event, updateActivity, { passive: true }));
    
    return () => {
      events.forEach(event => document.removeEventListener(event, updateActivity));
    };
  }, []);

  // Calculate bounce rate (single page view sessions)
  useEffect(() => {
    const singlePageSessions = eventsRef.current.filter(event => 
      event.type === 'page_view'
    ).length;
    
    const totalSessions = 1; // Current session
    
    if (totalSessions > 0) {
      setAnalyticsData(prev => ({
        ...prev,
        bounceRate: Math.round((singlePageSessions / totalSessions) * 100)
      }));
    }
  }, [analyticsData.pageViews]);

  // Refresh analytics data
  const refreshData = useCallback(async () => {
    setIsLoading(true);
    
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update with fresh data
    setAnalyticsData(prev => ({
      ...prev,
      uniqueVisitors: Math.floor(Math.random() * 100) + 50,
      topPages: [
        { path: '/', views: Math.floor(Math.random() * 1000) + 500 },
        { path: '/services', views: Math.floor(Math.random() * 800) + 300 },
        { path: '/about', views: Math.floor(Math.random() * 600) + 200 }
      ]
    }));
    
    setIsLoading(false);
  }, []);

  // Export analytics data
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }, [analyticsData]);

  // Share analytics insights
  const shareInsights = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: 'Zion Tech Group Analytics',
        text: `Page Views: ${analyticsData.pageViews}, Unique Visitors: ${analyticsData.uniqueVisitors}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `Zion Tech Group Analytics\nPage Views: ${analyticsData.pageViews}\nUnique Visitors: ${analyticsData.uniqueVisitors}`
      );
    }
  }, [analyticsData]);

  return (
    <>
      {/* Analytics Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-zion-purple to-zion-pink text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-zion-purple/50"
        aria-label="Open analytics dashboard"
        aria-expanded={isOpen}
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-6 bottom-24 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-purple to-zion-pink text-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Analytics Dashboard</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close analytics dashboard"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex space-x-1 mt-3">
                {[
                  { id: 'overview', label: 'Overview', icon: Activity },
                  { id: 'behavior', label: 'Behavior', icon: Users },
                  { id: 'performance', label: 'Performance', icon: TrendingUp }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as any)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === id 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-zion-purple">{analyticsData.pageViews}</div>
                      <div className="text-xs text-gray-600">Page Views</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-zion-pink">{analyticsData.uniqueVisitors}</div>
                      <div className="text-xs text-gray-600">Unique Visitors</div>
                    </div>
                  </div>

                  {/* Session Duration */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Session Duration</span>
                      <Clock className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="text-xl font-bold text-zion-purple mt-1">
                      {Math.floor(analyticsData.averageSessionDuration / 60)}m {analyticsData.averageSessionDuration % 60}s
                    </div>
                  </div>

                  {/* Bounce Rate */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Bounce Rate</span>
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="text-xl font-bold text-zion-pink mt-1">
                      {analyticsData.bounceRate}%
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'behavior' && (
                <div className="space-y-4">
                  {/* User Behavior Metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <MousePointer className="w-4 h-4 text-zion-purple" />
                        <span className="text-sm font-medium">Clicks</span>
                      </div>
                      <span className="text-lg font-bold text-zion-purple">{analyticsData.userBehavior.clicks}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-zion-pink" />
                        <span className="text-sm font-medium">Scrolls</span>
                      </div>
                      <span className="text-lg font-bold text-zion-pink">{analyticsData.userBehavior.scrolls}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm font-medium">Form Interactions</span>
                      </div>
                      <span className="text-lg font-bold text-zion-cyan">{analyticsData.userBehavior.formInteractions}</span>
                    </div>
                  </div>

                  {/* Top Pages */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Top Pages</h3>
                    <div className="space-y-2">
                      {analyticsData.topPages.map((page, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 truncate">{page.path}</span>
                          <span className="font-medium text-zion-purple">{page.views}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="space-y-4">
                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Load Time</span>
                      <span className="text-lg font-bold text-zion-purple">{analyticsData.performance.loadTime}ms</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Interaction Time</span>
                      <span className="text-lg font-bold text-zion-pink">{analyticsData.performance.interactionTime}ms</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Error Rate</span>
                      <span className="text-lg font-bold text-zion-cyan">{analyticsData.performance.errorRate}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex space-x-2">
                <button
                  onClick={refreshData}
                  disabled={isLoading}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-zion-purple text-white rounded-lg text-sm font-medium hover:bg-zion-purple/90 transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
                
                <button
                  onClick={exportData}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-zion-pink text-white rounded-lg text-sm font-medium hover:bg-zion-pink/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
                
                <button
                  onClick={shareInsights}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-zion-cyan text-white rounded-lg text-sm font-medium hover:bg-zion-cyan/90 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};