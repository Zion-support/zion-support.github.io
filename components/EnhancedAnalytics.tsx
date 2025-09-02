import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  MousePointer,
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
      console.error('Error fetching analytics data: ', error);
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
      className='bg-white rounded-xl shadow-lg p-6 border border-gray-100'
    >
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-600'>{title}</p>
          <p className='text-2xl font-bold text-gray-900'>{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% from last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-8'
        >
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>Analytics Dashboard</h1>
          <div className='flex items-center space-x-4'>
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className='bg-white border border-gray-300 rounded-lg px-3 py-2'
            >
              <option value='24h'>Last 24 Hours</option>
              <option value='7d'>Last 7 Days</option>
              <option value='30d'>Last 30 Days</option>
              <option value='90d'>Last 90 Days</option>
            </select>
            <span className='text-gray-500'>Data updated in real-time</span>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'
        >
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
            icon={<MousePointer className='w-6 h-6 text-red-600' />}
            change={-2.1}
            color='red'
          />
          <StatCard
            title='Avg Session Duration'
            value={`${analyticsData.avgSessionDuration}m`}
            icon={<Clock className='w-6 h-6 text-purple-600' />}
            change={5.7}
            color='purple'
          />
        </motion.div>

        {/* Charts and Tables */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-white rounded-xl shadow-lg p-6'
          >
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Top Pages</h3>
            <div className='space-y-3'>
              {analyticsData.topPages.map((page, index) => (
                <div key={page.page} className='flex items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-gray-400 text-sm'>#{index + 1}</span>
                    <span className='font-medium'>{page.page}</span>
                  </div>
                  <span className='text-blue-600 font-semibold'>
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-white rounded-xl shadow-lg p-6'
          >
            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Traffic Sources</h3>
            <div className='space-y-3'>
              {analyticsData.trafficSources.map((source) => (
                <div key={source.source} className='flex items-center justify-between'>
                  <span>{source.source}</span>
                  <div className='flex items-center space-x-2'>
                    <div className='w-20 bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-blue-500 h-2 rounded-full'
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className='text-sm text-gray-600'>{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;