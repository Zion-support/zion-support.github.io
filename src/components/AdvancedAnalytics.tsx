import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
}

const AdvancedAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: []
  });

  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalytics = () => {
      setIsLoading(true);
      
      setTimeout(() => {
        setAnalytics({
          pageViews: Math.floor(Math.random() * 10000) + 5000,
          uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
          bounceRate: Math.random() * 30 + 20,
          avgSessionDuration: Math.random() * 300 + 120,
          topPages: [
            { page: '/pages/UltimateTechRevolution2027', views: 1250 },
            { page: '/pages/InterdimensionalTechRevolution2030', views: 980 },
            { page: '/pages/OmniversalAIConsciousness2035', views: 750 },
            { page: '/pages/RevolutionaryTechBlog2027', views: 650 },
            { page: '/', views: 420 }
          ],
          trafficSources: [
            { source: 'Direct', percentage: 45 },
            { source: 'Search', percentage: 30 },
            { source: 'Social', percentage: 15 },
            { source: 'Referral', percentage: 10 }
          ],
          deviceTypes: [
            { device: 'Desktop', percentage: 60 },
            { device: 'Mobile', percentage: 35 },
            { device: 'Tablet', percentage: 5 }
          ]
        });
        setIsLoading(false);
      }, 1000);
    };

    loadAnalytics();
  }, [timeRange]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-900">📊 Advanced Analytics Dashboard</h3>
        <div className="flex gap-2">
          {['7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="text-sm opacity-80">Page Views</div>
          <div className="text-3xl font-bold">{formatNumber(analytics.pageViews)}</div>
          <div className="text-sm opacity-80 mt-1">+12% from last period</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="text-sm opacity-80">Unique Visitors</div>
          <div className="text-3xl font-bold">{formatNumber(analytics.uniqueVisitors)}</div>
          <div className="text-sm opacity-80 mt-1">+8% from last period</div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="text-sm opacity-80">Bounce Rate</div>
          <div className="text-3xl font-bold">{analytics.bounceRate.toFixed(1)}%</div>
          <div className="text-sm opacity-80 mt-1">-3% from last period</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="text-sm opacity-80">Avg. Session</div>
          <div className="text-3xl font-bold">{formatDuration(analytics.avgSessionDuration)}</div>
          <div className="text-sm opacity-80 mt-1">+15% from last period</div>
        </div>
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">🔥 Top Pages</h4>
          <div className="space-y-4">
            {analytics.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{page.page}</span>
                </div>
                <div className="text-gray-600 font-semibold">{formatNumber(page.views)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">🌐 Traffic Sources</h4>
          <div className="space-y-4">
            {analytics.trafficSources.map((source, index) => (
              <div key={source.source} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{source.source}</span>
                  <span className="text-gray-600 font-semibold">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Types */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">📱 Device Types</h4>
          <div className="space-y-4">
            {analytics.deviceTypes.map((device, index) => (
              <div key={device.device} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{device.device}</span>
                  <span className="text-gray-600 font-semibold">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`}
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-900 mb-4">⚡ Real-time Activity</h4>
          <div className="space-y-3">
            {[
              { user: 'User_001', action: 'Viewed Ultimate Tech Revolution 2027', time: '2 min ago' },
              { user: 'User_002', action: 'Downloaded AI Solutions Guide', time: '5 min ago' },
              { user: 'User_003', action: 'Started Interactive Demo', time: '8 min ago' },
              { user: 'User_004', action: 'Subscribed to Newsletter', time: '12 min ago' },
              { user: 'User_005', action: 'Viewed Quantum Computing Page', time: '15 min ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-700">{activity.action}</div>
                  <div className="text-xs text-gray-500">{activity.user} • {activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;