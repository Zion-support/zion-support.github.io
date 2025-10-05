import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  conversionRate: number;
  topPages: Array<{
    path: string;
    views: number;
    uniqueViews: number;
  }>;
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
  deviceBreakdown: Array<{
    device: string;
    visitors: number;
    percentage: number;
  }>;
  hourlyData: Array<{
    hour: number;
    visitors: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  useEffect(() => {
    const loadAnalyticsData = async () => {
      try {
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data
        const mockData: AnalyticsData = {
          pageViews: 125430,
          uniqueVisitors: 45620,
          bounceRate: 0.32,
          averageSessionDuration: 245,
          conversionRate: 0.045,
          topPages: [
            { path: '/', views: 15420, uniqueViews: 12350 },
            { path: '/services', views: 12300, uniqueViews: 9800 },
            { path: '/about', views: 8900, uniqueViews: 7200 },
            { path: '/contact', views: 5600, uniqueViews: 4500 },
            { path: '/blog', views: 4200, uniqueViews: 3800 }
          ],
          trafficSources: [
            { source: 'Organic Search', visitors: 18500, percentage: 40.5 },
            { source: 'Direct', visitors: 12300, percentage: 27.0 },
            { source: 'Social Media', visitors: 8900, percentage: 19.5 },
            { source: 'Referral', visitors: 4200, percentage: 9.2 },
            { source: 'Email', visitors: 1720, percentage: 3.8 }
          ],
          deviceBreakdown: [
            { device: 'Desktop', visitors: 22810, percentage: 50.0 },
            { device: 'Mobile', visitors: 18248, percentage: 40.0 },
            { device: 'Tablet', visitors: 4562, percentage: 10.0 }
          ],
          hourlyData: Array.from({ length: 24 }, (_, i) => ({
            hour: i,
            visitors: Math.floor(Math.random() * 1000) + 500
          }))
        };

        setData(mockData);
      } catch (error) {
        console.error('Failed to load analytics data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalyticsData();
  }, [selectedPeriod]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading analytics...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center p-8 text-gray-500">
        No analytics data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="1d">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Page Views</h3>
          <p className="text-3xl font-bold text-blue-600">{data.pageViews.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-1">+12.5% from last period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Unique Visitors</h3>
          <p className="text-3xl font-bold text-green-600">{data.uniqueVisitors.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-1">+8.3% from last period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Bounce Rate</h3>
          <p className="text-3xl font-bold text-red-600">{(data.bounceRate * 100).toFixed(1)}%</p>
          <p className="text-sm text-red-600 mt-1">+2.1% from last period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-bold text-purple-600">{(data.conversionRate * 100).toFixed(2)}%</p>
          <p className="text-sm text-green-600 mt-1">+0.3% from last period</p>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
          <div className="space-y-3">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{page.path}</p>
                  <p className="text-xs text-gray-500">{page.uniqueViews.toLocaleString()} unique views</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{page.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {data.trafficSources.map((source, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{source.source}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm font-bold text-gray-900">{source.visitors.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{source.percentage.toFixed(1)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.deviceBreakdown.map((device, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{device.visitors.toLocaleString()}</div>
              <div className="text-sm text-gray-500">{device.device}</div>
              <div className="text-xs text-gray-400">{device.percentage.toFixed(1)}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Traffic */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Hourly Traffic</h3>
        <div className="grid grid-cols-12 gap-1">
          {data.hourlyData.map((hour, index) => (
            <div key={index} className="text-center">
              <div
                className="bg-blue-600 rounded-t"
                style={{ height: `${(hour.visitors / 1000) * 100}px` }}
              ></div>
              <div className="text-xs text-gray-500 mt-1">{hour.hour}:00</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;