import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
=======
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-7cb6

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number; bounceRate: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceBreakdown: Array<{ device: string; count: number; percentage: number }>;
  performanceMetrics: Array<{ metric: string; value: number; trend: 'up' | 'down' | 'stable' }>;
}

interface AdvancedAnalyticsDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function AdvancedAnalyticsDashboard({ isVisible, onClose }: AdvancedAnalyticsDashboardProps) {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  useEffect(() => {
    if (isVisible) {
      loadAnalyticsData();
    }
  }, [isVisible, selectedTimeRange]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual analytics data
      const mockData: AnalyticsData = {
        pageViews: 125430,
        uniqueVisitors: 89420,
        bounceRate: 32.5,
        averageSessionDuration: 4.2,
        conversionRate: 3.8,
        topPages: [
          { path: '/', views: 45230, bounceRate: 28.5 },
          { path: '/services', views: 32150, bounceRate: 35.2 },
          { path: '/about', views: 18920, bounceRate: 42.1 },
          { path: '/contact', views: 15680, bounceRate: 38.7 },
          { path: '/blog', views: 13450, bounceRate: 45.3 }
        ],
        trafficSources: [
          { source: 'Organic Search', visitors: 45230, percentage: 50.6 },
          { source: 'Direct', visitors: 22340, percentage: 25.0 },
          { source: 'Social Media', visitors: 13450, percentage: 15.0 },
          { source: 'Referral', visitors: 8400, percentage: 9.4 }
        ],
        deviceBreakdown: [
          { device: 'Desktop', count: 53650, percentage: 60.0 },
          { device: 'Mobile', count: 31240, percentage: 35.0 },
          { device: 'Tablet', count: 4530, percentage: 5.0 }
        ],
        performanceMetrics: [
          { metric: 'Page Load Time', value: 1.2, trend: 'down' },
          { metric: 'First Contentful Paint', value: 0.8, trend: 'down' },
          { metric: 'Largest Contentful Paint', value: 1.5, trend: 'stable' },
          { metric: 'Cumulative Layout Shift', value: 0.05, trend: 'down' },
          { metric: 'First Input Delay', value: 45, trend: 'down' }
        ]
      };
      
      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900">Advanced Analytics Dashboard</h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : analyticsData ? (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{formatNumber(analyticsData.pageViews)}</div>
                  <div className="text-sm text-gray-600">Page Views</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{formatNumber(analyticsData.uniqueVisitors)}</div>
                  <div className="text-sm text-gray-600">Unique Visitors</div>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{analyticsData.bounceRate}%</div>
                  <div className="text-sm text-gray-600">Bounce Rate</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{analyticsData.averageSessionDuration}m</div>
                  <div className="text-sm text-gray-600">Avg Session Duration</div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">{analyticsData.conversionRate}%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Pages Chart */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Top Pages</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.topPages}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="path" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Traffic Sources Pie Chart */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={analyticsData.trafficSources}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(props: any) => `${props.source}: ${props.percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="visitors"
                      >
                        {analyticsData.trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analyticsData.performanceMetrics.map((metric, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">{metric.metric}</span>
                        <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {metric.value}{metric.metric.includes('Time') ? 's' : metric.metric.includes('Shift') ? '' : 'ms'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Device Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData.deviceBreakdown}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="device" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500">Failed to load analytics data</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}