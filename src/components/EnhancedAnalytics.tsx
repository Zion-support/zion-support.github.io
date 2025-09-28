/**
 * Enhanced Analytics Component
 * Provides comprehensive analytics and monitoring
 */

import React, { useEffect, useState } from 'react';

export interface AnalyticsData {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  userFlow: Array<{ step: string; users: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
}

export interface RealTimeMetrics {
  activeUsers: number;
  pageViewsPerMinute: number;
  averageLoadTime: number;
  errorRate: number;
  topReferrers: Array<{ referrer: string; count: number }>;
}

const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userFlow: [],
    deviceBreakdown: [],
    trafficSources: []
  });

  const [realTimeMetrics, setRealTimeMetrics] = useState<RealTimeMetrics>({
    activeUsers: 0,
    pageViewsPerMinute: 0,
    averageLoadTime: 0,
    errorRate: 0,
    topReferrers: []
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize analytics data
    const initializeAnalytics = () => {
      // Simulate loading analytics data
      setAnalyticsData({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        sessionDuration: Math.floor(Math.random() * 300) + 120,
        bounceRate: Math.floor(Math.random() * 30) + 20,
        conversionRate: Math.floor(Math.random() * 10) + 2,
        topPages: [
          { page: '/', views: Math.floor(Math.random() * 1000) + 500 },
          { page: '/services', views: Math.floor(Math.random() * 800) + 300 },
          { page: '/about', views: Math.floor(Math.random() * 600) + 200 },
          { page: '/contact', views: Math.floor(Math.random() * 400) + 100 }
        ],
        userFlow: [
          { step: 'Landing', users: 1000 },
          { step: 'Services', users: 750 },
          { step: 'About', users: 500 },
          { step: 'Contact', users: 250 },
          { step: 'Conversion', users: 125 }
        ],
        deviceBreakdown: [
          { device: 'Desktop', percentage: 60 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 5 }
        ],
        trafficSources: [
          { source: 'Direct', percentage: 40 },
          { source: 'Search', percentage: 30 },
          { source: 'Social', percentage: 20 },
          { source: 'Referral', percentage: 10 }
        ]
      });

      setRealTimeMetrics({
        activeUsers: Math.floor(Math.random() * 50) + 10,
        pageViewsPerMinute: Math.floor(Math.random() * 20) + 5,
        averageLoadTime: Math.floor(Math.random() * 2000) + 1000,
        errorRate: Math.floor(Math.random() * 5) + 1,
        topReferrers: [
          { referrer: 'google.com', count: Math.floor(Math.random() * 100) + 50 },
          { referrer: 'linkedin.com', count: Math.floor(Math.random() * 50) + 20 },
          { referrer: 'twitter.com', count: Math.floor(Math.random() * 30) + 10 }
        ]
      });
    };

    initializeAnalytics();

    // Update real-time metrics every 5 seconds
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        ...prev,
        activeUsers: Math.floor(Math.random() * 50) + 10,
        pageViewsPerMinute: Math.floor(Math.random() * 20) + 5,
        averageLoadTime: Math.floor(Math.random() * 2000) + 1000,
        errorRate: Math.floor(Math.random() * 5) + 1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut to toggle analytics
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
          title="Open Analytics (Ctrl+Shift+A)"
        >
          📊 Analytics
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Enhanced Analytics Dashboard</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            aria-label="Close analytics"
          >
            ×
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Real-time Metrics */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Real-time Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{realTimeMetrics.activeUsers}</div>
                <div className="text-sm opacity-90">Active Users</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{realTimeMetrics.pageViewsPerMinute}</div>
                <div className="text-sm opacity-90">Page Views/Min</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{(realTimeMetrics.averageLoadTime / 1000).toFixed(1)}s</div>
                <div className="text-sm opacity-90">Avg Load Time</div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{realTimeMetrics.errorRate}%</div>
                <div className="text-sm opacity-90">Error Rate</div>
              </div>
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Analytics Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-800">{analyticsData.pageViews.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Page Views</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-800">{analyticsData.sessionDuration}s</div>
                <div className="text-sm text-gray-600">Avg Session Duration</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-800">{analyticsData.bounceRate}%</div>
                <div className="text-sm text-gray-600">Bounce Rate</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-800">{analyticsData.conversionRate}%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Pages</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium">{page.page}</span>
                  <span className="text-blue-600 font-semibold">{page.views.toLocaleString()} views</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Device Breakdown</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {analyticsData.deviceBreakdown.map((device, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{device.device}</span>
                    <span className="text-gray-600">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Traffic Sources</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {analyticsData.trafficSources.map((source, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{source.source}</span>
                    <span className="text-gray-600">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Flow */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">User Flow</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                {analyticsData.userFlow.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2">
                      {step.users}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{step.step}</span>
                    {index < analyticsData.userFlow.length - 1 && (
                      <div className="absolute w-8 h-0.5 bg-gray-300 top-6 left-1/2 transform translate-x-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Referrers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Referrers</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {realTimeMetrics.topReferrers.map((referrer, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium">{referrer.referrer}</span>
                  <span className="text-blue-600 font-semibold">{referrer.count} visits</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;