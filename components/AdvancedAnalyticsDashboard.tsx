import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  totalVisitors: number;
  pageViews: number;
  uniqueVisitors: number;
  conversionRate: number;
  revenue: number;
  topPages: Array<{ page: string; views: number; conversion: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number; visitors: number }>;
  geographicData: Array<{ country: string; visitors: number; percentage: number }>;
  timeOnSite: number;
  bounceRate: number;
  newVsReturning: { new: number; returning: number };
}

export default function AdvancedAnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData>({
    totalVisitors: 0,
    pageViews: 0,
    uniqueVisitors: 0,
    conversionRate: 0,
    revenue: 0,
    topPages: [],
    trafficSources: [],
    deviceBreakdown: [],
    geographicData: [],
    timeOnSite: 0,
    bounceRate: 0,
    newVsReturning: { new: 0, returning: 0 },
  });

  const [isVisible, setIsVisible] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  useEffect(() => {
    // Simulate real-time analytics data
    const generateData = () => {
      const baseVisitors = 125000 + Math.random() * 50000;
      const baseRevenue = 2500000 + Math.random() * 1000000;
      
      setData({
        totalVisitors: Math.floor(baseVisitors),
        pageViews: Math.floor(baseVisitors * (2.5 + Math.random() * 1.5)),
        uniqueVisitors: Math.floor(baseVisitors * 0.85),
        conversionRate: 8.5 + Math.random() * 3,
        revenue: Math.floor(baseRevenue),
        topPages: [
          { page: '/ai-2025-ultimate-breakthrough-revolution', views: 15420, conversion: 12.5 },
          { page: '/case-studies/ai-2025-global-transformation-breakthrough', views: 12850, conversion: 15.2 },
          { page: '/blog/ai-2025-revolutionary-trends-predictions', views: 11200, conversion: 9.8 },
          { page: '/quantum-computing-breakthrough-2026', views: 9850, conversion: 11.3 },
          { page: '/ultimate-content-showcase-2026', views: 8750, conversion: 8.7 },
        ],
        trafficSources: [
          { source: 'Organic Search', visitors: 45000, percentage: 36 },
          { source: 'Direct', visitors: 32000, percentage: 25.6 },
          { source: 'Social Media', visitors: 28000, percentage: 22.4 },
          { source: 'Email', visitors: 15000, percentage: 12 },
          { source: 'Referral', visitors: 5000, percentage: 4 },
        ],
        deviceBreakdown: [
          { device: 'Desktop', percentage: 45, visitors: 56250 },
          { device: 'Mobile', percentage: 40, visitors: 50000 },
          { device: 'Tablet', percentage: 15, visitors: 18750 },
        ],
        geographicData: [
          { country: 'United States', visitors: 35000, percentage: 28 },
          { country: 'United Kingdom', visitors: 18000, percentage: 14.4 },
          { country: 'Germany', visitors: 15000, percentage: 12 },
          { country: 'Canada', visitors: 12000, percentage: 9.6 },
          { country: 'Australia', visitors: 10000, percentage: 8 },
          { country: 'Other', visitors: 35000, percentage: 28 },
        ],
        timeOnSite: 180 + Math.random() * 120,
        bounceRate: 25 + Math.random() * 10,
        newVsReturning: { 
          new: Math.floor(baseVisitors * 0.6), 
          returning: Math.floor(baseVisitors * 0.4) 
        },
      });
    };

    generateData();
    const interval = setInterval(generateData, 5000);
    return () => clearInterval(interval);
  }, [selectedTimeframe]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} Analytics
      </button>

      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Advanced Analytics
            </h3>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              <option value="1d">Last 24h</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Total Visitors</div>
              <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                {formatNumber(data.totalVisitors)}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">Revenue</div>
              <div className="text-lg font-bold text-green-800 dark:text-green-200">
                {formatCurrency(data.revenue)}
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Conversion Rate</div>
              <div className="text-lg font-bold text-purple-800 dark:text-purple-200">
                {data.conversionRate.toFixed(1)}%
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">Time on Site</div>
              <div className="text-lg font-bold text-orange-800 dark:text-orange-200">
                {Math.floor(data.timeOnSite / 60)}m {Math.floor(data.timeOnSite % 60)}s
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Top Pages</h4>
            <div className="space-y-2">
              {data.topPages.slice(0, 3).map((page, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 dark:text-gray-300 truncate flex-1 mr-2">
                    {page.page.split('/').pop()?.replace(/-/g, ' ')}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 dark:text-gray-400">{formatNumber(page.views)}</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {page.conversion.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Traffic Sources</h4>
            <div className="space-y-1">
              {data.trafficSources.map((source, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 dark:text-gray-300">{source.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-blue-500 h-1 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 w-8 text-right">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Device Breakdown</h4>
            <div className="space-y-1">
              {data.deviceBreakdown.map((device, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 dark:text-gray-300">{device.device}</span>
                  <span className="text-gray-500 dark:text-gray-400">{device.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Live
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}