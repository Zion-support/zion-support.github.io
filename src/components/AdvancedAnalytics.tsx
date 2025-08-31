import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe, 
  Device,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  Calendar,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Search,
  X,
  Settings,
  RefreshCw,
  Info,
  AlertCircle,
  CheckCircle,
  Zap
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  topPages: Array<{ path: string; views: number }>;
  topReferrers: Array<{ source: string; visits: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  locations: Array<{ country: string; visits: number }>;
  userEngagement: {
    scrollDepth: number;
    timeOnPage: number;
    interactions: number;
  };
  performance: {
    loadTime: number;
    firstPaint: number;
    largestPaint: number;
  };
}

interface AdvancedAnalyticsProps {
  enabled?: boolean;
  showMetrics?: boolean;
  trackingId?: string;
}

export const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  enabled = true,
  showMetrics = false,
  trackingId = 'zion-tech-group'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    sessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    topReferrers: [],
    deviceTypes: [],
    locations: [],
    userEngagement: {
      scrollDepth: 0,
      timeOnPage: 0,
      interactions: 0
    },
    performance: {
      loadTime: 0,
      firstPaint: 0,
      largestPaint: 0
    }
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const [trackingEvents, setTrackingEvents] = useState<string[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const scrollDepthRef = useRef<number>(0);
  const interactionCountRef = useRef<number>(0);

  // Initialize analytics tracking
  const initializeTracking = useCallback(() => {
    if (!enabled) return;

    setIsTracking(true);
    
    // Track page view
    trackEvent('page_view', {
      page: window.location.pathname,
      title: document.title,
      url: window.location.href
    });

    // Track performance metrics
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstPaint = performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 0;
        const largestPaint = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;

        setAnalyticsData(prev => ({
          ...prev,
          performance: {
            loadTime,
            firstPaint,
            largestPaint
          }
        }));
      }
    }

    // Track user engagement
    trackScrollDepth();
    trackTimeOnPage();
    trackUserInteractions();
  }, [enabled]);

  // Track custom events
  const trackEvent = useCallback((eventName: string, properties: Record<string, any> = {}) => {
    if (!isTracking) return;

    const event = {
      name: eventName,
      properties: {
        ...properties,
        timestamp: Date.now(),
        sessionId: getSessionId(),
        userId: getUserId()
      }
    };

    // Add to tracking events
    setTrackingEvents(prev => [...prev.slice(-9), `${eventName}: ${JSON.stringify(properties)}`]);

    // Send to analytics service (mock implementation)
    console.log('Analytics Event:', event);
    
    // In production, send to actual analytics service
    // sendToAnalytics(event);
  }, [isTracking]);

  // Track scroll depth
  const trackScrollDepth = useCallback(() => {
    let maxScrollDepth = 0;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        scrollDepthRef.current = maxScrollDepth;
        
        setAnalyticsData(prev => ({
          ...prev,
          userEngagement: {
            ...prev.userEngagement,
            scrollDepth: maxScrollDepth
          }
        }));

        // Track significant scroll milestones
        if (maxScrollDepth % 25 === 0) {
          trackEvent('scroll_milestone', { depth: maxScrollDepth });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  // Track time on page
  const trackTimeOnPage = useCallback(() => {
    const updateTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTimeRef.current) / 1000);
      
      setAnalyticsData(prev => ({
        ...prev,
        userEngagement: {
          ...prev.userEngagement,
          timeOnPage
        }
      }));

      // Track time milestones
      if (timeOnPage % 30 === 0 && timeOnPage > 0) {
        trackEvent('time_milestone', { seconds: timeOnPage });
      }
    };

    const interval = setInterval(updateTimeOnPage, 1000);
    return () => clearInterval(interval);
  }, [trackEvent]);

  // Track user interactions
  const trackUserInteractions = useCallback(() => {
    const handleInteraction = (event: Event) => {
      interactionCountRef.current++;
      
      setAnalyticsData(prev => ({
        ...prev,
        userEngagement: {
          ...prev.userEngagement,
          interactions: interactionCountRef.current
        }
      }));

      // Track specific interaction types
      if (event.target instanceof HTMLButtonElement) {
        trackEvent('button_click', { 
          buttonText: event.target.textContent,
          buttonId: event.target.id || 'unknown'
        });
      } else if (event.target instanceof HTMLAnchorElement) {
        trackEvent('link_click', { 
          linkText: event.target.textContent,
          linkHref: event.target.href
        });
      } else if (event.target instanceof HTMLFormElement) {
        trackEvent('form_interaction', { 
          formId: event.target.id || 'unknown',
          formAction: event.target.action
        });
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('submit', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('submit', handleInteraction);
    };
  }, [trackEvent]);

  // Generate mock analytics data
  const generateMockData = useCallback(() => {
    const mockData: AnalyticsData = {
      pageViews: Math.floor(Math.random() * 10000) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
      sessionDuration: Math.floor(Math.random() * 300) + 120,
      bounceRate: Math.random() * 40 + 20,
      topPages: [
        { path: '/', views: Math.floor(Math.random() * 2000) + 1000 },
        { path: '/services', views: Math.floor(Math.random() * 1500) + 800 },
        { path: '/about', views: Math.floor(Math.random() * 1000) + 500 },
        { path: '/contact', views: Math.floor(Math.random() * 800) + 400 },
        { path: '/ai-services', views: Math.floor(Math.random() * 600) + 300 }
      ],
      topReferrers: [
        { source: 'Google', visits: Math.floor(Math.random() * 1000) + 500 },
        { source: 'Direct', visits: Math.floor(Math.random() * 800) + 400 },
        { source: 'LinkedIn', visits: Math.floor(Math.random() * 600) + 300 },
        { source: 'Twitter', visits: Math.floor(Math.random() * 400) + 200 }
      ],
      deviceTypes: [
        { type: 'Desktop', percentage: Math.floor(Math.random() * 30) + 50 },
        { type: 'Mobile', percentage: Math.floor(Math.random() * 30) + 30 },
        { type: 'Tablet', percentage: Math.floor(Math.random() * 20) + 20 }
      ],
      locations: [
        { country: 'United States', visits: Math.floor(Math.random() * 2000) + 1000 },
        { country: 'Canada', visits: Math.floor(Math.random() * 500) + 200 },
        { country: 'United Kingdom', visits: Math.floor(Math.random() * 300) + 100 },
        { country: 'Germany', visits: Math.floor(Math.random() * 200) + 50 }
      ],
      userEngagement: {
        scrollDepth: scrollDepthRef.current,
        timeOnPage: Math.round((Date.now() - startTimeRef.current) / 1000),
        interactions: interactionCountRef.current
      },
      performance: {
        loadTime: Math.random() * 2000 + 500,
        firstPaint: Math.random() * 1000 + 200,
        largestPaint: Math.random() * 2000 + 500
      }
    };

    setAnalyticsData(mockData);
  }, []);

  // Get session ID
  const getSessionId = useCallback(() => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }, []);

  // Get user ID
  const getUserId = useCallback(() => {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }, []);

  // Initialize analytics
  useEffect(() => {
    if (!enabled) return;
    
    initializeTracking();
    generateMockData();
    
    // Show component after delay
    const timer = setTimeout(() => setIsVisible(true), 4000);
    
    return () => clearTimeout(timer);
  }, [enabled, initializeTracking, generateMockData]);

  // Update mock data periodically
  useEffect(() => {
    if (!isTracking) return;
    
    const interval = setInterval(generateMockData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [isTracking, generateMockData]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating Analytics Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-20 z-50 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300"
        aria-label="Open analytics dashboard"
        title="Analytics Dashboard"
      >
        <BarChart3 className="w-6 h-6" />
      </motion.button>

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <BarChart3 className="w-7 h-7 text-purple-600" />
                    <span>Analytics Dashboard</span>
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={generateMockData}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title="Refresh data"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      aria-label="Close analytics dashboard"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Page Views</p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          {analyticsData.pageViews.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400">Unique Visitors</p>
                        <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                          {analyticsData.uniqueVisitors.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-sm text-purple-600 dark:text-purple-400">Session Duration</p>
                        <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                          {Math.round(analyticsData.sessionDuration / 60)}m {analyticsData.sessionDuration % 60}s
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                      <div>
                        <p className="text-sm text-orange-600 dark:text-orange-400">Bounce Rate</p>
                        <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                          {analyticsData.bounceRate.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span>Performance Metrics</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Load Time</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {analyticsData.performance.loadTime.toFixed(0)}ms
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">First Paint</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {analyticsData.performance.firstPaint.toFixed(0)}ms
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Largest Paint</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {analyticsData.performance.largestPaint.toFixed(0)}ms
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Engagement */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                    <MousePointer className="w-5 h-5 text-blue-500" />
                    <span>User Engagement</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Scroll Depth</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {analyticsData.userEngagement.scrollDepth}%
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time on Page</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {Math.round(analyticsData.userEngagement.timeOnPage / 60)}m {analyticsData.userEngagement.timeOnPage % 60}s
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Interactions</p>
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        {analyticsData.userEngagement.interactions}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Pages and Referrers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Pages</h3>
                    <div className="space-y-2">
                      {analyticsData.topPages.map((page, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{page.path}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{page.views.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Referrers</h3>
                    <div className="space-y-2">
                      {analyticsData.topReferrers.map((referrer, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{referrer.source}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{referrer.visits.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Device Types and Locations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <Device className="w-5 h-5 text-green-500" />
                      <span>Device Types</span>
                    </h3>
                    <div className="space-y-2">
                      {analyticsData.deviceTypes.map((device, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-2">
                            {device.type === 'Mobile' ? (
                              <Smartphone className="w-4 h-4 text-blue-500" />
                            ) : device.type === 'Tablet' ? (
                              <Tablet className="w-4 h-4 text-green-500" />
                            ) : (
                              <Monitor className="w-4 h-4 text-purple-500" />
                            )}
                            <span className="text-sm text-gray-700 dark:text-gray-300">{device.type}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{device.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <span>Top Locations</span>
                    </h3>
                    <div className="space-y-2">
                      {analyticsData.locations.map((location, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{location.country}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{location.visits.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tracking Events */}
                {showMetrics && (
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <Info className="w-5 h-5 text-blue-500" />
                      <span>Recent Tracking Events</span>
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg max-h-40 overflow-y-auto">
                      {trackingEvents.length > 0 ? (
                        <div className="space-y-1">
                          {trackingEvents.map((event, index) => (
                            <div key={index} className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                              {event}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">No events tracked yet</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Status Indicator */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Tracking: {isTracking ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Session ID: {getSessionId().substring(0, 8)}...
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen reader only content */}
      <div className="sr-only">
        <p>Analytics dashboard. Use Tab to navigate metrics and Enter to view detailed information.</p>
      </div>
    </>
  );
};