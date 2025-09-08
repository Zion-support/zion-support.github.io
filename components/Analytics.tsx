import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Users, Eye, 
  Clock, TrendingUp, TrendingDown, 
  Zap, Filter,
  Download, Share2, RefreshCw, X, AlertTriangle
} from 'lucide-react';

}

interface User {
  id: string;
  email: string;
  nam,
    e: string;
  rol,
    e: 'admin' | 'user' | 'guest'}

interface Service {
  id: string;
  name: string;
  description: string;
  pric,
    e: number;
  categor,
    y: string}

interface FormData {
  [key: string]: string | number | boolean | File}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown}




      });
    `;
    document.head.appendChild(script2);

    // Track page views on route changes


    };

    // Listen for route changes (Next.js)



  };



      if (typeof gtag !== 'undefined' && 'performance' in window) {
        const perfData = performance.getEntriesByType('
          'navigation'
        )[0] as PerformanceNavigationTiming;
        if (perfData) {
          const loadTime = perfData.loadEventEnd - perfData.fetchStart;
          trackEvent('
            'page_load_time',
            'Performance',
            'Page Load',
            Math.round(loadTime);
          )}
      }
    };
'
    window.addEventListener('load', trackPerformance);
    return () => window.removeEventListener('load', trackPerformance)}, []);

  return null};

  const cleanupAnalytics = useCallback(() => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }
  }, []);

  const trackPageView = useCallback(() => {
    const pageData = {
      path: window.location.pathname,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language
    };

    // Send to analytics service
    console.log('Page view tracked:', pageData);
    
    // Store in localStorage for demo
    const pageViews = JSON.parse(localStorage.getItem('analytics_pageViews') || '[]');
    pageViews.push(pageData);
    localStorage.setItem('analytics_pageViews', JSON.stringify(pageViews.slice(-100)));
  }, []);

  const trackUserSession = useCallback(() => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const sessionData = {
      id: sessionId,
      startTime: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    localStorage.setItem('analytics_session', JSON.stringify(sessionData));
    
    // Track session end on page unload
    window.addEventListener('beforeunload', () => {
      const session = JSON.parse(localStorage.getItem('analytics_session') || '{}');
      session.endTime = new Date().toISOString();
      session.duration = new Date(session.endTime).getTime() - new Date(session.startTime).getTime();
      localStorage.setItem('analytics_session', JSON.stringify(session));
    });
  }, []);

  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          if ('hadRecentInput' in entry && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  const setupUserBehaviorTracking = useCallback(() => {
    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const clickData = {
        element: target.tagName.toLowerCase(),
        text: target.textContent?.substring(0, 50),
        className: target.className,
        id: target.id,
        timestamp: new Date().toISOString(),
        path: window.location.pathname
      };
      
      console.log('Click tracked:', clickData);
      
      // Store clicks for analysis
      const clicks = JSON.parse(localStorage.getItem('analytics_clicks') || '[]');
      clicks.push(clickData);
      localStorage.setItem('analytics_clicks', JSON.stringify(clicks.slice(-1000)));
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        console.log('Scroll depth:', maxScrollDepth + '%');
      }
    });

    // Track form interactions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      const formData = {
        action: form.action,
        method: form.method,
        timestamp: new Date().toISOString(),
        path: window.location.pathname
      };
      
      console.log('Form submission tracked:', formData);
    });
  }, []);

  const refreshData = useCallback(async () => {
    if (loading) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update mock data with some variation
      const updatedData = {
        ...mockData,
        pageViews: mockData.pageViews + Math.floor(Math.random() * 100),
        uniqueVisitors: mockData.uniqueVisitors + Math.floor(Math.random() * 20),
        sessionDuration: mockData.sessionDuration + Math.floor(Math.random() * 10) - 5
      };
      
      setData(updatedData);
      lastRefreshRef.current = new Date();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh data');
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const exportData = useCallback(() => {
    if (!data) return;
    
    const csvContent = generateCSV(data);
    const blob = new window.Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }, [data]);

  const generateCSV = (data: AnalyticsData): string => {
    const headers = ['Metric', 'Value', 'Unit'];
    const rows = [
      ['Page Views', data.pageViews.toString(), ''],
      ['Unique Visitors', data.uniqueVisitors.toString(), ''],
      ['Session Duration', data.sessionDuration.toString(), 'seconds'],
      ['Bounce Rate', data.bounceRate.toString(), '%'],
      ['Conversion Rate', data.conversionRate.toString(), '%']
    ];
    
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const shareData = useCallback(() => {
    if (!data) return;
    
    const shareText = `Zion Tech Group Analytics - ${timeRange}\n` +
      `Page Views: ${data.pageViews.toLocaleString()}\n` +
      `Unique Visitors: ${data.uniqueVisitors.toLocaleString()}\n` +
      `Conversion Rate: ${data.conversionRate}%`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Analytics Report',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      console.log('Analytics data copied to clipboard');
    }
  }, [data, timeRange]);

  // Don't render UI if not requested
  if (!showUI) return null;

  return (
    <>
      {/* Analytics Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-200"
        title="Open Analytics Dashboard"
      >
        <BarChart3 className="w-6 h-6" />
      </motion.button>

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-7xl h-[90vh] bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
                    <p className="text-gray-400">Real-time insights and performance metrics</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Time Range Selector */}
                  <select
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value as '1h' | '24h' | '7d' | '30d')}
                    className="bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="1h">Last Hour</option>
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                  </select>
                  
                  {/* Action Buttons */}
                  <button
                    onClick={refreshData}
                    disabled={loading}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
                    title="Refresh Data"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  </button>
                  
                  <button
                    onClick={exportData}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                    title="Export Data"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={shareData}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                    title="Share Data"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
                    title="Close Dashboard"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <RefreshCw className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
                      <p className="text-gray-400">Refreshing analytics data...</p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-4" />
                      <p className="text-red-400 mb-2">Failed to load analytics</p>
                      <p className="text-gray-400 text-sm">{error}</p>
                      <button
                        onClick={refreshData}
                        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                ) : data ? (
                  <div className="h-full overflow-y-auto p-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <MetricCard
                        title="Page Views"
                        value={data.pageViews.toLocaleString()}
                        icon={<Eye className="w-6 h-6" />}
                        trend="up"
                        trendValue="+12.5%"
                        color="blue"
                      />
                      <MetricCard
                        title="Unique Visitors"
                        value={data.uniqueVisitors.toLocaleString()}
                        icon={<Users className="w-6 h-6" />}
                        trend="up"
                        trendValue="+8.3%"
                        color="green"
                      />
                      <MetricCard
                        title="Session Duration"
                        value={`${Math.floor(data.sessionDuration / 60)}m ${data.sessionDuration % 60}s`}
                        icon={<Clock className="w-6 h-6" />}
                        trend="down"
                        trendValue="-2.1%"
                        color="yellow"
                      />
                      <MetricCard
                        title="Conversion Rate"
                        value={`${data.conversionRate}%`}
                        icon={<Zap className="w-6 h-6" />}
                        trend="up"
                        trendValue="+1.8%"
                        color="purple"
                      />
                    </div>

                    {/* Charts and Detailed Data */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Top Pages */}
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-400" />
                          Top Pages
                        </h3>
                        <div className="space-y-3">
                          {data.topPages.map((page, index) => (
                            <div key={page.path} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-sm w-6">{index + 1}</span>
                                <span className="text-white font-medium">{page.path}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-semibold">{page.views.toLocaleString()}</div>
                                <div className="text-gray-400 text-sm">{page.conversion}% conversion</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* User Behavior */}
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-400" />
                          User Behavior
                        </h3>
                        <div className="space-y-3">
                          {data.userBehavior.map((behavior, index) => (
                            <div key={behavior.action} className="flex items-center justify-between">
                              <span className="text-white">{behavior.action}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-white font-semibold">{behavior.count.toLocaleString()}</span>
                                <div className={`flex items-center gap-1 text-sm ${
                                  behavior.trend === 'up' ? 'text-green-400' : 
                                  behavior.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                                }`}>
                                  {behavior.trend === 'up' ? <TrendingUp className="w-3 h-3" /> :
                                   behavior.trend === 'down' ? <TrendingDown className="w-3 h-3" /> :
                                   <span className="w-3 h-3">—</span>}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          Performance
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Load Time</span>
                            <span className="text-white font-semibold">{data.performance.loadTime}s</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">First Contentful Paint</span>
                            <span className="text-white font-semibold">{data.performance.firstContentfulPaint}s</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Largest Contentful Paint</span>
                            <span className="text-white font-semibold">{data.performance.largestContentfulPaint}s</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Cumulative Layout Shift</span>
                            <span className="text-white font-semibold">{data.performance.cumulativeLayoutShift}</span>
                          </div>
                        </div>
                      </div>

                      {/* Device Breakdown */}
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Filter className="w-5 h-5 text-purple-400" />
                          Device Breakdown
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Desktop</span>
                            <span className="text-white font-semibold">{data.deviceBreakdown.desktop}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Mobile</span>
                            <span className="text-white font-semibold">{data.deviceBreakdown.mobile}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Tablet</span>
                            <span className="text-white font-semibold">{data.deviceBreakdown.tablet}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Last Updated */}
                    <div className="text-center mt-8 text-gray-500 text-sm">
                      Last updated: {lastRefreshRef.current?.toLocaleTimeString() || 'Never'}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const trackPageView = (url: string, title: string) => {'
  if (typeof gtag !== 'undefined') {'
    gtag('config', process.env['NEXT_PUBLIC_GA_TRACKING_ID'] || '' {
      page_title: title,
      page_location: url })}
};


export default Analytics;

  return null};

// Export tracking functions for use in components;
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {;
  if (typeof gtag !== 'undefined') {'    gtag('event', action {'      event_category: category, event_label: label',      value: value });'
  }
};

export const trackPageView = (url: string, title: string) => {;
  if (typeof gtag !== 'undefined') {'    gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID || '' {'      page_title: title, page_location: url'})}'

};

export default Analytics;



