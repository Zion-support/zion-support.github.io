import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Clock, 
  Globe, 
  Device,
  X,
  Settings,
  Download,
  Share2
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number }>;
  userDevices: Array<{ device: string; percentage: number }>;
  userLocations: Array<{ country: string; percentage: number }>;
  userBehavior: Array<{ action: string; count: number }>;
}

interface AdvancedAnalyticsProps {
  enabled: boolean;
  showMetrics?: boolean;
  trackingId?: string;
}

export function AdvancedAnalytics({ 
  enabled, 
  showMetrics = false,
  trackingId = 'default'
}: AdvancedAnalyticsProps) {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userDevices: [],
    userLocations: [],
    userBehavior: []
  });
  const [isTracking, setIsTracking] = useState(false);
  const [sessionStart, setSessionStart] = useState<Date>(new Date());
  const [userInteractions, setUserInteractions] = useState<Array<{
    type: string;
    timestamp: Date;
    details: any;
  }>>([]);

  useEffect(() => {
    if (!enabled) return;

    // Initialize analytics
    initializeAnalytics();
    
    // Start session tracking
    startSessionTracking();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load existing data
    loadAnalyticsData();
    
    // Cleanup on unmount
    return () => {
      cleanupAnalytics();
    };
  }, [enabled]);

  const initializeAnalytics = () => {
    // Generate or retrieve user ID
    let userId = localStorage.getItem('zion_analytics_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('zion_analytics_user_id', userId);
    }

    // Set up session ID
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('zion_analytics_session_id', sessionId);

    // Initialize analytics data
    const initialData: AnalyticsData = {
      pageViews: 1, // Current page view
      uniqueVisitors: 1,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      topPages: [{ path: window.location.pathname, views: 1 }],
      userDevices: [
        { device: getDeviceType(), percentage: 100 }
      ],
      userLocations: [
        { country: 'Unknown', percentage: 100 }
      ],
      userBehavior: []
    };

    setAnalyticsData(initialData);
    setIsTracking(true);
  };

  const startSessionTracking = () => {
    const startTime = new Date();
    setSessionStart(startTime);

    // Track session duration
    const interval = setInterval(() => {
      const duration = Math.floor((Date.now() - startTime.getTime()) / 1000);
      setAnalyticsData(prev => ({
        ...prev,
        sessionDuration: duration
      }));
    }, 1000);

    // Store interval for cleanup
    sessionStorage.setItem('zion_analytics_interval', interval.toString());

    // Track page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
  };

  const setupEventListeners = () => {
    // Track clicks
    document.addEventListener('click', handleClick);
    
    // Track scroll
    document.addEventListener('scroll', handleScroll);
    
    // Track form submissions
    document.addEventListener('submit', handleFormSubmit);
    
    // Track page unload
    window.addEventListener('beforeunload', handlePageUnload);
    
    // Track route changes (for SPA)
    window.addEventListener('popstate', handleRouteChange);
    
    // Track performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            trackPerformanceMetrics(entry as PerformanceNavigationTiming);
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Page hidden - pause tracking
      setIsTracking(false);
    } else {
      // Page visible - resume tracking
      setIsTracking(true);
    }
  };

  const handleClick = (event: Event) => {
    if (!isTracking) return;

    const target = event.target as HTMLElement;
    const clickData = {
      type: 'click',
      timestamp: new Date(),
      details: {
        element: target.tagName.toLowerCase(),
        text: target.textContent?.substring(0, 50) || '',
        className: target.className || '',
        id: target.id || '',
        path: window.location.pathname
      }
    };

    trackUserInteraction(clickData);
  };

  const handleScroll = (event: Event) => {
    if (!isTracking) return;

    const scrollData = {
      type: 'scroll',
      timestamp: new Date(),
      details: {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        path: window.location.pathname
      }
    };

    trackUserInteraction(scrollData);
  };

  const handleFormSubmit = (event: Event) => {
    if (!isTracking) return;

    const form = event.target as HTMLFormElement;
    const formData = {
      type: 'form_submit',
      timestamp: new Date(),
      details: {
        formId: form.id || '',
        formAction: form.action || '',
        formMethod: form.method || '',
        path: window.location.pathname
      }
    };

    trackUserInteraction(formData);
  };

  const handlePageUnload = () => {
    // Save analytics data before page unload
    saveAnalyticsData();
    
    // Track session end
    const sessionDuration = Math.floor((Date.now() - sessionStart.getTime()) / 1000);
    trackEvent('session_end', { duration: sessionDuration });
  };

  const handleRouteChange = () => {
    // Track page view for SPA route changes
    trackPageView();
  };

  const trackUserInteraction = (interaction: any) => {
    setUserInteractions(prev => [...prev, interaction]);
    
    // Update user behavior analytics
    setAnalyticsData(prev => {
      const behavior = [...prev.userBehavior];
      const existingIndex = behavior.findIndex(b => b.action === interaction.type);
      
      if (existingIndex >= 0) {
        behavior[existingIndex].count++;
      } else {
        behavior.push({ action: interaction.type, count: 1 });
      }
      
      return { ...prev, userBehavior: behavior };
    });
  };

  const trackPageView = () => {
    const currentPath = window.location.pathname;
    
    setAnalyticsData(prev => {
      const topPages = [...prev.topPages];
      const existingPageIndex = topPages.findIndex(page => page.path === currentPath);
      
      if (existingPageIndex >= 0) {
        topPages[existingPageIndex].views++;
      } else {
        topPages.push({ path: currentPath, views: 1 });
      }
      
      return {
        ...prev,
        pageViews: prev.pageViews + 1,
        topPages: topPages.sort((a, b) => b.views - a.views).slice(0, 10)
      };
    });
  };

  const trackEvent = (eventName: string, eventData: any) => {
    const event = {
      type: 'custom_event',
      timestamp: new Date(),
      details: {
        eventName,
        eventData,
        path: window.location.pathname
      }
    };

    trackUserInteraction(event);
  };

  const trackPerformanceMetrics = (navigationEntry: PerformanceNavigationTiming) => {
    const performanceData = {
      type: 'performance',
      timestamp: new Date(),
      details: {
        loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
        domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        firstByte: navigationEntry.responseStart - navigationEntry.requestStart,
        path: window.location.pathname
      }
    };

    trackUserInteraction(performanceData);
  };

  const getDeviceType = (): string => {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) return 'Android';
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
    if (/Windows/i.test(userAgent)) return 'Windows';
    if (/Mac/i.test(userAgent)) return 'Mac';
    if (/Linux/i.test(userAgent)) return 'Linux';
    return 'Unknown';
  };

  const loadAnalyticsData = () => {
    // Load from localStorage
    const savedData = localStorage.getItem('zion_analytics_data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setAnalyticsData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Failed to load analytics data:', error);
      }
    }
  };

  const saveAnalyticsData = () => {
    try {
      localStorage.setItem('zion_analytics_data', JSON.stringify(analyticsData));
    } catch (error) {
      console.error('Failed to save analytics data:', error);
    }
  };

  const cleanupAnalytics = () => {
    // Clear intervals
    const intervalId = sessionStorage.getItem('zion_analytics_interval');
    if (intervalId) {
      clearInterval(parseInt(intervalId));
    }
    
    // Remove event listeners
    document.removeEventListener('click', handleClick);
    document.removeEventListener('scroll', handleScroll);
    document.removeEventListener('submit', handleFormSubmit);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('beforeunload', handlePageUnload);
    window.removeEventListener('popstate', handleRouteChange);
  };

  const exportAnalyticsData = () => {
    const data = {
      timestamp: new Date().toISOString(),
      trackingId,
      analyticsData,
      userInteractions: userInteractions.slice(-100), // Last 100 interactions
      sessionInfo: {
        start: sessionStart,
        duration: analyticsData.sessionDuration,
        isTracking
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-data-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const shareAnalyticsData = async () => {
    const summary = `Analytics Summary:
Page Views: ${analyticsData.pageViews}
Unique Visitors: ${analyticsData.uniqueVisitors}
Session Duration: ${Math.floor(analyticsData.sessionDuration / 60)}m ${analyticsData.sessionDuration % 60}s
Bounce Rate: ${analyticsData.bounceRate.toFixed(1)}%
Conversion Rate: ${analyticsData.conversionRate.toFixed(1)}%`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Analytics Summary',
          text: summary,
          url: window.location.href
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(summary);
      alert('Analytics summary copied to clipboard!');
    }
  };

  const resetAnalytics = () => {
    const initialData: AnalyticsData = {
      pageViews: 0,
      uniqueVisitors: 0,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      topPages: [],
      userDevices: [],
      userLocations: [],
      userBehavior: []
    };
    
    setAnalyticsData(initialData);
    setUserInteractions([]);
    localStorage.removeItem('zion_analytics_data');
  };

  if (!enabled) return null;

  if (!showMetrics) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          title="Analytics Dashboard"
        >
          <BarChart3 className="w-6 h-6" />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <p className="text-purple-100">Real-time user behavior & performance tracking</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                isTracking ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}>
                {isTracking ? 'Tracking' : 'Paused'}
              </span>
              <button
                onClick={() => window.location.reload()}
                className="text-white hover:text-purple-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-blue-900">{analyticsData.pageViews}</div>
                  <div className="text-sm text-blue-600">Page Views</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-green-900">{analyticsData.uniqueVisitors}</div>
                  <div className="text-sm text-green-600">Unique Visitors</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-600" />
                <div>
                  <div className="text-2xl font-bold text-yellow-900">
                    {Math.floor(analyticsData.sessionDuration / 60)}m {analyticsData.sessionDuration % 60}s
                  </div>
                  <div className="text-sm text-yellow-600">Session Duration</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-red-600" />
                <div>
                  <div className="text-2xl font-bold text-red-900">{analyticsData.bounceRate.toFixed(1)}%</div>
                  <div className="text-sm text-red-600">Bounce Rate</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <MousePointer className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold text-purple-900">{analyticsData.conversionRate.toFixed(1)}%</div>
                  <div className="text-sm text-purple-600">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Top Pages</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {analyticsData.topPages.length === 0 ? (
                <p className="text-gray-500 text-center">No page views yet</p>
              ) : (
                <div className="space-y-2">
                  {analyticsData.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{page.path}</span>
                      <span className="text-sm font-medium text-gray-900">{page.views} views</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* User Behavior */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">User Behavior</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {analyticsData.userBehavior.length === 0 ? (
                <p className="text-gray-500 text-center">No user interactions yet</p>
              ) : (
                <div className="space-y-2">
                  {analyticsData.userBehavior.map((behavior, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{behavior.action}</span>
                      <span className="text-sm font-medium text-gray-900">{behavior.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex space-x-3">
              <button
                onClick={exportAnalyticsData}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Data</span>
              </button>
              
              <button
                onClick={shareAnalyticsData}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Summary</span>
              </button>
              
              <button
                onClick={resetAnalytics}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Reset Data</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              Tracking ID: {trackingId}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}