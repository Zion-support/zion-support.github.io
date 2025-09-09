import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Zap,
  X,
  Download,
  Share2,
  RefreshCw
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ path: string; views: number }>;
  userEngagement: {
    clicks: number;
    scrolls: number;
    formSubmissions: number;
  };
  performance: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
  };
}

interface AnalyticsProps {
  className?: string;
}

export const Analytics: React.FC<AnalyticsProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'performance' | 'engagement'>('overview');

  // Mock analytics data - replace with real analytics service
  const mockAnalyticsData: AnalyticsData = {
    pageViews: 15420,
    uniqueVisitors: 8234,
    averageSessionDuration: 245,
    bounceRate: 32.5,
    topPages: [
      { path: '/', views: 5234 },
      { path: '/services', views: 3120 },
      { path: '/about', views: 1890 },
      { path: '/contact', views: 1456 },
      { path: '/blog', views: 1234 }
    ],
    userEngagement: {
      clicks: 45678,
      scrolls: 123456,
      formSubmissions: 234
    },
    performance: {
      loadTime: 1.2,
      firstContentfulPaint: 0.8,
      largestContentfulPaint: 1.5
    }
  };

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalyticsData(mockAnalyticsData);
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

  // Track page view
  useEffect(() => {
    const trackPageView = () => {
      const currentPath = window.location.pathname;
      const pageViewData = {
        path: currentPath,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent
      };
      
      // Send to analytics service
      console.log('Page view tracked:', pageViewData);
      
      // Store in localStorage for demo purposes
      const existingData = JSON.parse(localStorage.getItem('zion-analytics') || '[]');
      existingData.push(pageViewData);
      localStorage.setItem('zion-analytics', JSON.stringify(existingData.slice(-100)));
    };

    trackPageView();
  }, []);

  // Track user interactions
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickData = {
        type: 'click',
        element: target.tagName.toLowerCase(),
        text: target.textContent?.slice(0, 50),
        path: window.location.pathname,
        timestamp: new Date().toISOString()
      };
      
      console.log('Click tracked:', clickData);
    };

    const trackScroll = () => {
      const scrollData = {
        type: 'scroll',
        path: window.location.pathname,
        scrollY: window.scrollY,
        timestamp: new Date().toISOString()
      };
      
      console.log('Scroll tracked:', scrollData);
    };

    document.addEventListener('click', trackClick);
    window.addEventListener('scroll', trackScroll);

    return () => {
      document.removeEventListener('click', trackClick);
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const performanceData = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          largestContentfulPaint: 0,
          timestamp: new Date().toISOString()
        };
        
        console.log('Performance measured:', performanceData);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zion-slate-light">Page Views</p>
              <p className="text-2xl font-bold text-white">{formatNumber(analyticsData?.pageViews || 0)}</p>
            </div>
            <Eye className="w-6 h-6 text-zion-cyan" />
          </div>
        </div>
        
        <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zion-slate-light">Unique Visitors</p>
              <p className="text-2xl font-bold text-white">{formatNumber(analyticsData?.uniqueVisitors || 0)}</p>
            </div>
            <Users className="w-6 h-6 text-zion-cyan" />
          </div>
        </div>
        
        <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zion-slate-light">Avg. Session</p>
              <p className="text-2xl font-bold text-white">{formatDuration(analyticsData?.averageSessionDuration || 0)}</p>
            </div>
            <Clock className="w-6 h-6 text-zion-cyan" />
          </div>
        </div>
        
        <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-cyan/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zion-slate-light">Bounce Rate</p>
              <p className="text-2xl font-bold text-white">{analyticsData?.bounceRate || 0}%</p>
            </div>
            <TrendingUp className="w-6 h-6 text-zion-cyan" />
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-zion-slate-light/10 rounded-lg p-6 border border-zion-cyan/20">
        <h3 className="text-lg font-semibold text-white mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analyticsData?.topPages.map((page, index) => (
            <div key={page.path} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-zion-cyan font-bold">#{index + 1}</span>
                <span className="text-white">{page.path}</span>
              </div>
              <span className="text-zion-slate-light">{formatNumber(page.views)} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="bg-zion-slate-light/10 rounded-lg p-6 border border-zion-cyan/20">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-zion-slate-light">Load Time</p>
            <p className="text-2xl font-bold text-white">{analyticsData?.performance.loadTime || 0}s</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-zion-slate-light">First Contentful Paint</p>
            <p className="text-2xl font-bold text-white">{analyticsData?.performance.firstContentfulPaint || 0}s</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-zion-slate-light">Largest Contentful Paint</p>
            <p className="text-2xl font-bold text-white">{analyticsData?.performance.largestContentfulPaint || 0}s</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEngagement = () => (
    <div className="space-y-6">
      <div className="bg-zion-slate-light/10 rounded-lg p-6 border border-zion-cyan/20">
        <h3 className="text-lg font-semibold text-white mb-4">User Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <MousePointer className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
            <p className="text-sm text-zion-slate-light">Total Clicks</p>
            <p className="text-2xl font-bold text-white">{formatNumber(analyticsData?.userEngagement.clicks || 0)}</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
            <p className="text-sm text-zion-slate-light">Scroll Events</p>
            <p className="text-2xl font-bold text-white">{formatNumber(analyticsData?.userEngagement.scrolls || 0)}</p>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
            <p className="text-sm text-zion-slate-light">Form Submissions</p>
            <p className="text-2xl font-bold text-white">{formatNumber(analyticsData?.userEngagement.formSubmissions || 0)}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Analytics Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-24 z-50 w-14 h-14 bg-gradient-to-r from-zion-purple to-zion-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-purple/50 ${className}`}
        aria-label="Analytics dashboard"
        aria-expanded={isOpen}
        aria-controls="analytics-panel"
      >
        <BarChart3 className="w-6 h-6 mx-auto" />
      </button>

      {/* Analytics Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="analytics-panel"
            className="fixed bottom-24 right-6 z-50 w-96 max-h-[80vh] bg-zion-slate-dark/95 backdrop-blur-lg rounded-2xl border border-zion-cyan/20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Analytics dashboard"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-zion-cyan" />
                Analytics
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={fetchAnalyticsData}
                  disabled={isLoading}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors disabled:opacity-50"
                  aria-label="Refresh analytics data"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zion-slate-light hover:text-white transition-colors"
                  aria-label="Close analytics panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              {/* Tabs */}
              <div className="flex space-x-1 mb-6 bg-zion-slate-light/10 rounded-lg p-1">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'performance', label: 'Performance', icon: Zap },
                  { id: 'engagement', label: 'Engagement', icon: Users }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-zion-cyan text-white shadow-lg'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-slate-light/20'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan"></div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'performance' && renderPerformance()}
                    {activeTab === 'engagement' && renderEngagement()}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Analytics hook for tracking custom events
export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    const eventData = {
      event: eventName,
      properties,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      userAgent: navigator.userAgent
    };
    
    console.log('Event tracked:', eventData);
    
    // Send to analytics service
    // analytics.track(eventName, properties);
  }, []);

  const trackPageView = useCallback((path: string) => {
    trackEvent('page_view', { path });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('button_click', { buttonName, location });
  }, [trackEvent]);

  const trackFormSubmission = useCallback((formName: string, success: boolean) => {
    trackEvent('form_submission', { formName, success });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission
  };
};