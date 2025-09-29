import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe, 
  Smartphone,
  Monitor,
  Tablet,
  Download,
  Share2,
  Heart,
  Star,
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Activity,
  RefreshCw,
  Filter,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface AnalyticsMetric {
  name: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  unit: string;
  description: string;
}

interface UserSegment {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface TrafficSource {
  name: string;
  visits: number;
  percentage: number;
  conversion: number;
  color: string;
}

interface DeviceData {
  type: 'desktop' | 'mobile' | 'tablet';
  count: number;
  percentage: number;
  icon: React.ReactNode;
}

interface AnalyticsData {
  metrics: AnalyticsMetric[];
  userSegments: UserSegment[];
  trafficSources: TrafficSource[];
  devices: DeviceData[];
  topPages: Array<{
    page: string;
    views: number;
    bounceRate: number;
    avgTime: number;
  }>;
  realTimeUsers: number;
  timestamp: number;
}

const ComprehensiveAnalyticsDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(30000);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('7d');

  const generateMockData = useCallback((): AnalyticsData => {
    const metrics: AnalyticsMetric[] = [
      {
        name: 'Total Visitors',
        value: Math.floor(Math.random() * 100000) + 50000,
        change: Math.random() * 20 - 10,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: '',
        description: 'Unique visitors in the selected time period'
      },
      {
        name: 'Page Views',
        value: Math.floor(Math.random() * 500000) + 200000,
        change: Math.random() * 15 - 5,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: '',
        description: 'Total page views across all pages'
      },
      {
        name: 'Bounce Rate',
        value: Math.random() * 40 + 20,
        change: Math.random() * 10 - 5,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: '%',
        description: 'Percentage of single-page sessions'
      },
      {
        name: 'Avg. Session Duration',
        value: Math.random() * 300 + 120,
        change: Math.random() * 20 - 10,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: 's',
        description: 'Average time spent on the site'
      },
      {
        name: 'Conversion Rate',
        value: Math.random() * 5 + 1,
        change: Math.random() * 2 - 1,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: '%',
        description: 'Percentage of visitors who complete desired actions'
      },
      {
        name: 'Revenue',
        value: Math.random() * 50000 + 10000,
        change: Math.random() * 30 - 10,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        unit: '$',
        description: 'Total revenue generated'
      }
    ];

    const userSegments: UserSegment[] = [
      { name: 'New Visitors', count: Math.floor(Math.random() * 50000) + 20000, percentage: Math.random() * 30 + 40, color: 'bg-blue-500' },
      { name: 'Returning Visitors', count: Math.floor(Math.random() * 30000) + 15000, percentage: Math.random() * 20 + 30, color: 'bg-green-500' },
      { name: 'VIP Users', count: Math.floor(Math.random() * 5000) + 1000, percentage: Math.random() * 5 + 5, color: 'bg-purple-500' },
      { name: 'Inactive Users', count: Math.floor(Math.random() * 10000) + 5000, percentage: Math.random() * 10 + 10, color: 'bg-gray-500' }
    ];

    const trafficSources: TrafficSource[] = [
      { name: 'Organic Search', visits: Math.floor(Math.random() * 40000) + 20000, percentage: Math.random() * 20 + 40, conversion: Math.random() * 3 + 2, color: 'bg-green-500' },
      { name: 'Direct', visits: Math.floor(Math.random() * 20000) + 10000, percentage: Math.random() * 15 + 25, conversion: Math.random() * 4 + 3, color: 'bg-blue-500' },
      { name: 'Social Media', visits: Math.floor(Math.random() * 15000) + 5000, percentage: Math.random() * 10 + 15, conversion: Math.random() * 2 + 1, color: 'bg-pink-500' },
      { name: 'Email', visits: Math.floor(Math.random() * 8000) + 2000, percentage: Math.random() * 5 + 8, conversion: Math.random() * 5 + 4, color: 'bg-yellow-500' },
      { name: 'Referral', visits: Math.floor(Math.random() * 5000) + 2000, percentage: Math.random() * 5 + 5, conversion: Math.random() * 3 + 2, color: 'bg-orange-500' }
    ];

    const devices: DeviceData[] = [
      { type: 'desktop', count: Math.floor(Math.random() * 40000) + 20000, percentage: Math.random() * 20 + 50, icon: <Monitor className="w-5 h-5" /> },
      { type: 'mobile', count: Math.floor(Math.random() * 30000) + 15000, percentage: Math.random() * 20 + 35, icon: <Smartphone className="w-5 h-5" /> },
      { type: 'tablet', count: Math.floor(Math.random() * 5000) + 2000, percentage: Math.random() * 5 + 10, icon: <Tablet className="w-5 h-5" /> }
    ];

    const topPages = [
      { page: '/', views: Math.floor(Math.random() * 50000) + 20000, bounceRate: Math.random() * 30 + 20, avgTime: Math.random() * 200 + 100 },
      { page: '/about', views: Math.floor(Math.random() * 20000) + 10000, bounceRate: Math.random() * 40 + 30, avgTime: Math.random() * 150 + 80 },
      { page: '/services', views: Math.floor(Math.random() * 15000) + 8000, bounceRate: Math.random() * 35 + 25, avgTime: Math.random() * 180 + 120 },
      { page: '/contact', views: Math.floor(Math.random() * 10000) + 5000, bounceRate: Math.random() * 50 + 40, avgTime: Math.random() * 100 + 60 },
      { page: '/blog', views: Math.floor(Math.random() * 8000) + 3000, bounceRate: Math.random() * 45 + 35, avgTime: Math.random() * 300 + 200 }
    ];

    return {
      metrics,
      userSegments,
      trafficSources,
      devices,
      topPages,
      realTimeUsers: Math.floor(Math.random() * 100) + 20,
      timestamp: Date.now()
    };
  }, []);

  const refreshData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAnalyticsData(generateMockData());
      setIsLoading(false);
    }, 500);
  }, [generateMockData]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(refreshData, refreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, refreshData]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="w-4 h-4 text-green-500" />;
      case 'down':
        return <ArrowDownRight className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Comprehensive Analytics Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Auto Refresh:</label>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Real-time Users */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="w-6 h-6" />
            <div>
              <p className="text-green-100 text-sm">Real-time Users</p>
              <p className="text-2xl font-bold">{analyticsData.realTimeUsers}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-100 text-sm">Currently Active</p>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
              <span className="text-sm">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {analyticsData.metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              selectedMetric === metric.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => setSelectedMetric(selectedMetric === metric.name ? null : metric.name)}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{metric.name}</h3>
              <div className="flex items-center space-x-1">
                {getTrendIcon(metric.trend)}
                <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatNumber(metric.value)}
              {metric.unit && <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>}
            </div>
            
            <div className="text-sm text-gray-600">
              {metric.description}
            </div>
          </motion.div>
        ))}
      </div>

      {/* User Segments */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>User Segments</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsData.userSegments.map((segment, index) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{segment.name}</h4>
                <span className="text-sm text-gray-500">{segment.percentage.toFixed(1)}%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {formatNumber(segment.count)}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${segment.color}`}
                  style={{ width: `${segment.percentage}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Globe className="w-5 h-5" />
          <span>Traffic Sources</span>
        </h3>
        <div className="space-y-3">
          {analyticsData.trafficSources.map((source, index) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`} />
                  <h4 className="font-semibold">{source.name}</h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{formatNumber(source.visits)}</div>
                  <div className="text-sm text-gray-500">{source.percentage.toFixed(1)}%</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Conversion: {source.conversion.toFixed(1)}%</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${source.color}`}
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Device Distribution */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Monitor className="w-5 h-5" />
          <span>Device Distribution</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsData.devices.map((device, index) => (
            <motion.div
              key={device.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {device.icon}
                  <h4 className="font-semibold capitalize">{device.type}</h4>
                </div>
                <span className="text-sm text-gray-500">{device.percentage.toFixed(1)}%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {formatNumber(device.count)}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${device.percentage}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Pages */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Eye className="w-5 h-5" />
          <span>Top Pages</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-4 font-semibold">Page</th>
                <th className="text-right py-2 px-4 font-semibold">Views</th>
                <th className="text-right py-2 px-4 font-semibold">Bounce Rate</th>
                <th className="text-right py-2 px-4 font-semibold">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.topPages.map((page, index) => (
                <motion.tr
                  key={page.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-2 px-4 font-medium">{page.page}</td>
                  <td className="py-2 px-4 text-right">{formatNumber(page.views)}</td>
                  <td className="py-2 px-4 text-right">{page.bounceRate.toFixed(1)}%</td>
                  <td className="py-2 px-4 text-right">{Math.floor(page.avgTime / 60)}m {Math.floor(page.avgTime % 60)}s</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Last updated: {new Date(analyticsData.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;