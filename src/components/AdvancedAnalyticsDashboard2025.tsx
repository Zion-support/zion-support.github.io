import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}

const AdvancedAnalyticsDashboard2025: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [timeRange, setTimeRange] = useState('24h');

  useEffect(() => {
    // Simulate real-time analytics data
    const interval = setInterval(() => {
      setData({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
        bounceRate: Math.random() * 30 + 20,
        avgSessionDuration: Math.random() * 300 + 120,
        conversionRate: Math.random() * 5 + 2,
        topPages: [
          { page: '/revolutionary-tech-breakthrough-2025', views: Math.floor(Math.random() * 1000) + 500 },
          { page: '/interactive-tech-showcase', views: Math.floor(Math.random() * 800) + 400 },
          { page: '/case-studies-2025', views: Math.floor(Math.random() * 600) + 300 },
          { page: '/ai-solutions', views: Math.floor(Math.random() * 500) + 250 },
          { page: '/quantum-computing', views: Math.floor(Math.random() * 400) + 200 }
        ],
        trafficSources: [
          { source: 'Direct', percentage: Math.random() * 20 + 30 },
          { source: 'Google', percentage: Math.random() * 15 + 25 },
          { source: 'Social Media', percentage: Math.random() * 10 + 15 },
          { source: 'Referrals', percentage: Math.random() * 10 + 10 },
          { source: 'Email', percentage: Math.random() * 5 + 5 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: Math.random() * 20 + 40 },
          { device: 'Mobile', percentage: Math.random() * 15 + 35 },
          { device: 'Tablet', percentage: Math.random() * 10 + 15 },
          { device: 'Other', percentage: Math.random() * 5 + 5 }
        ],
        realTimeUsers: Math.floor(Math.random() * 50) + 10
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          📈 Analytics
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">📊 Analytics Dashboard 2025</h3>
          <div className="flex items-center space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white/20 text-white border border-white/30 rounded px-2 py-1 text-sm"
            >
              <option value="1h">1 Hour</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
            </select>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {/* Real-time indicator */}
        <div className="flex items-center space-x-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">{data.realTimeUsers} users online</span>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-600">{formatNumber(data.pageViews)}</div>
            <div className="text-sm text-gray-600">Page Views</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">{formatNumber(data.uniqueVisitors)}</div>
            <div className="text-sm text-gray-600">Unique Visitors</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-yellow-600">{data.bounceRate.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Bounce Rate</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-600">{formatTime(data.avgSessionDuration)}</div>
            <div className="text-sm text-gray-600">Avg Session</div>
          </div>
        </div>

        {/* Top Pages */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">🔥 Top Pages</h4>
          <div className="space-y-2">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 truncate flex-1 mr-2">{page.page}</span>
                <span className="text-sm font-medium text-blue-600">{formatNumber(page.views)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">🌐 Traffic Sources</h4>
          <div className="space-y-2">
            {data.trafficSources.map((source, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{source.source}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-blue-600 w-8">{source.percentage.toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Types */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">📱 Device Types</h4>
          <div className="space-y-2">
            {data.deviceTypes.map((device, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{device.device}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-green-600 w-8">{device.percentage.toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Conversion Rate</span>
            <span className="text-lg font-bold text-purple-600">{data.conversionRate.toFixed(2)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, data.conversionRate * 20)}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors">
            Export Data
          </button>
          <button className="flex-1 bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors">
            Generate Report
          </button>
          <button className="flex-1 bg-purple-500 text-white px-3 py-2 rounded text-sm hover:bg-purple-600 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard2025;