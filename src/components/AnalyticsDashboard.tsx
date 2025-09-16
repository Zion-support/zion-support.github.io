import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}

const AnalyticsDashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate real-time analytics data
    const generateAnalytics = () => {
      setAnalytics({
        pageViews: Math.floor(Math.random() * 10000) + 50000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 25000,
        bounceRate: Math.random() * 20 + 30,
        avgSessionDuration: Math.random() * 300 + 180,
        topPages: [
          { page: 'Revolutionary Tech Breakthrough 2030', views: Math.floor(Math.random() * 1000) + 5000 },
          { page: 'Ultimate AI Consciousness 2032', views: Math.floor(Math.random() * 800) + 4000 },
          { page: 'Quantum Reality Engine 2035', views: Math.floor(Math.random() * 600) + 3000 },
          { page: 'AI Autonomous Business Manager', views: Math.floor(Math.random() * 500) + 2500 },
          { page: 'Revolutionary Tech Blog 2027', views: Math.floor(Math.random() * 400) + 2000 }
        ],
        trafficSources: [
          { source: 'Direct', percentage: 35 },
          { source: 'Search', percentage: 28 },
          { source: 'Social', percentage: 20 },
          { source: 'Referral', percentage: 17 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 45 },
          { device: 'Mobile', percentage: 40 },
          { device: 'Tablet', percentage: 15 }
        ],
        realTimeUsers: Math.floor(Math.random() * 50) + 10
      });
    };

    generateAnalytics();
    const interval = setInterval(generateAnalytics, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Analytics</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </button>

      {isVisible && (
        <div className="absolute top-12 left-0 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Real-time Analytics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">{formatNumber(analytics.pageViews)}</div>
              <div className="text-sm opacity-90">Page Views</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">{formatNumber(analytics.uniqueVisitors)}</div>
              <div className="text-sm opacity-90">Unique Visitors</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">{analytics.bounceRate.toFixed(1)}%</div>
              <div className="text-sm opacity-90">Bounce Rate</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">{formatTime(analytics.avgSessionDuration)}</div>
              <div className="text-sm opacity-90">Avg Session</div>
            </div>
          </div>

          {/* Real-time Users */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Live Users</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold text-gray-900">{analytics.realTimeUsers}</span>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Top Pages</h4>
            <div className="space-y-2">
              {analytics.topPages.slice(0, 3).map((page, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 truncate flex-1 mr-2">{page.page}</span>
                  <span className="text-gray-900 font-medium">{formatNumber(page.views)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Traffic Sources</h4>
            <div className="space-y-2">
              {analytics.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-900 font-medium w-8">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Types */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Device Types</h4>
            <div className="space-y-2">
              {analytics.deviceTypes.map((device, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{device.device}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-900 font-medium w-8">{device.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;