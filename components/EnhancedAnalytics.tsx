import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Eye, MousePointer,
  Clock
} from 'lucide-react';

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

const EnhancedAnalytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
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

      setAnalyticsData({
        pageViews: 12543,
        uniqueVisitors: 8932,
        bounceRate: 42.5,
        avgSessionDuration: 3.2,
        topPages: [
          { page: '/', views: 3421 },
          { page: '/services', views: 2156 },
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
      console.error('Error fetching analytics data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedTimeRange]);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);
;
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
      className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'
    >
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-600'>{title}</p>
          <p className='text-2xl font-bold text-gray-900 mt-1'>{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '+' : ''}{change}% from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
;
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-64'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-900'>Analytics Dashboard</h1>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
        >
          <option value='24h'>Last 24 hours</option>
          <option value='7d'>Last 7 days</option>
          <option value='30d'>Last 30 days</option>
          <option value='90d'>Last 90 days</option>
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <StatCard
          title='Page Views'
          value={analyticsData.pageViews.toLocaleString()}
          icon={<Eye className='w-6 h-6 text-blue-600' />}
          change={12.5}
          color='blue'
        />
        <StatCard
          title='Unique Visitors'
          value={analyticsData.uniqueVisitors.toLocaleString()}
          icon={<Users className='w-6 h-6 text-green-600' />}
          change={8.3}
          color='green'
        />
        <StatCard
          title='Bounce Rate'
          value={`${analyticsData.bounceRate}%`}
          icon={<MousePointer className='w-6 h-6 text-orange-600' />}
          change={-2.1}
          color='orange'
        />
        <StatCard
          title='Avg. Session Duration'
          value={`${analyticsData.avgSessionDuration}m`}
          icon={<Clock className='w-6 h-6 text-purple-600' />}
          change={5.7}
          color='purple'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white rounded-xl shadow-lg p-6'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>Top Pages</h3>
          <div className='space-y-3'>
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className='flex items-center justify-between'>
                <span className='text-gray-600'>{page.page}</span>
                <span className='font-medium'>{page.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white rounded-xl shadow-lg p-6'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>Traffic Sources</h3>
          <div className='space-y-3'>
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className='flex items-center justify-between'>
                <span className='text-gray-600'>{source.source}</span>
                <span className='font-medium'>{source.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-xl shadow-lg p-6'
      >
        <h3 className='text-lg font-semibold text-gray-900 mb-4'>Device Types</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {analyticsData.deviceTypes.map((device, index) => (
            <div key={index} className='text-center'>
              <div className='text-2xl font-bold text-gray-900'>{device.percentage}%</div>
              <div className='text-sm text-gray-600'>{device.device}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedAnalytics;