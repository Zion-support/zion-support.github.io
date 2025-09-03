import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Users,
  Eye,
  MousePointer,
  Clock,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Download,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: string;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  realTimeUsers: number;
}

const EnhancedAnalytics: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: '0:00',
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0
  });

  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5,
        avgSessionDuration: '3:24',
        topPages: [
          { page: '/', views: 3421 },
          { page: '/products', views: 2156 },
          { page: '/about', views: 1892 },
          { page: '/contact', views: 1234 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45 },
          { source: 'Direct', percentage: 30 },
          { source: 'Social Media', percentage: 15 },
          { source: 'Referral', percentage: 10 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 55 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 10 }
        ],
        realTimeUsers: 23
      });
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTimeRange]);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: React.ReactNode;
    change?: number;
    color?: string;
  }> = ({ title, value, icon, change, color = 'blue' }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${color}-500`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <p className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="24h">Last 24 hours</option>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Page Views"
          value={data.pageViews.toLocaleString()}
          icon={<Eye className="h-6 w-6 text-blue-600" />}
          change={12.5}
          color="blue"
        />
        <StatCard
          title="Unique Visitors"
          value={data.uniqueVisitors.toLocaleString()}
          icon={<Users className="h-6 w-6 text-green-600" />}
          change={8.3}
          color="green"
        />
        <StatCard
          title="Bounce Rate"
          value={`${data.bounceRate}%`}
          icon={<MousePointer className="h-6 w-6 text-red-600" />}
          change={-2.1}
          color="red"
        />
        <StatCard
          title="Avg. Session"
          value={data.avgSessionDuration}
          icon={<Clock className="h-6 w-6 text-purple-600" />}
          change={5.7}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
          <div className="space-y-3">
            {data.topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{page.page}</span>
                <span className="text-sm font-medium text-gray-900">
                  {page.views.toLocaleString()} views
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {data.trafficSources.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{source.source}</span>
                <span className="text-sm font-medium text-gray-900">
                  {source.percentage}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.deviceTypes.map((device) => (
            <div key={device.device} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{device.percentage}%</div>
              <div className="text-sm text-gray-600">{device.device}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Activity</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">{data.realTimeUsers} users online</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedAnalytics;