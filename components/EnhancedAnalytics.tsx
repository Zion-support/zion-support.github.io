import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Users, 
  Eye, MousePointer, 
  Clock, TrendingUp, 
  Globe, Smartphone,
  Monitor, Tablet,
  Download, Share2,
  Heart, MessageCircle
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
  userEngagement: {
    scrollDepth: number;
    clickThroughRate: number;
    timeOnPage: number;
    socialShares: number;
  };
  realTimeUsers: number;
  conversionRate: number;
}

interface EnhancedAnalyticsProps {
  showRealTime?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  showRealTime = true, 
  autoRefresh = true,
  refreshInterval = 30000
}) => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('24h');
  
  // Mock data generator - replace with real analytics API
  const generateMockAnalytics = useCallback((): AnalyticsData => {
    const baseViews = Math.floor(Math.random() * 1000) + 500;
    const baseVisitors = Math.floor(baseViews * 0.7);
    
    return {
      pageViews: baseViews,
      uniqueVisitors: baseVisitors,
      bounceRate: Math.random() * 30 + 20, // 20-50%
      avgSessionDuration: Math.random() * 300 + 120, // 2-7 minutes
      topPages: [
        { page: '/', views: Math.floor(baseViews * 0.4) },
        { page: '/services', views: Math.floor(baseViews * 0.25) },
        { page: '/about', views: Math.floor(baseViews * 0.15) },
        { page: '/contact', views: Math.floor(baseViews * 0.12) },
        { page: '/solutions', views: Math.floor(baseViews * 0.08) }
      ],
      trafficSources: [
        { source: 'Direct', percentage: 35 },
        { source: 'Google', percentage: 28 },
        { source: 'Social Media', percentage: 15 },
        { source: 'Referral', percentage: 12 },
        { source: 'Email', percentage: 10 }
      ],
      deviceTypes: [
        { device: 'Desktop', percentage: 45 },
        { device: 'Mobile', percentage: 40 },
        { device: 'Tablet', percentage: 15 }
      ],
      userEngagement: {
        scrollDepth: Math.random() * 40 + 50, // 50-90%
        clickThroughRate: Math.random() * 15 + 5, // 5-20%
        timeOnPage: Math.random() * 200 + 100, // 1.5-5 minutes
        socialShares: Math.floor(Math.random() * 50) + 10
      },
      realTimeUsers: Math.floor(Math.random() * 20) + 5,
      conversionRate: Math.random() * 8 + 2 // 2-10%
    };
  }, []);

  const fetchAnalytics = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const data = generateMockAnalytics();
      setAnalytics(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [generateMockAnalytics]);

  useEffect(() => {
    fetchAnalytics();

    if (autoRefresh) {
      const interval = setInterval(fetchAnalytics, refreshInterval);
      return () => clearInterval(interval);
    }
    
    return undefined;
  }, [fetchAnalytics, autoRefresh, refreshInterval, timeRange]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'desktop': return Monitor;
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      default: return Globe;
    }
  };

  if (!analytics) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-blue-500" />
          Analytics Dashboard
        </h2>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button
            onClick={fetchAnalytics}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 text-sm"
          >
            {isLoading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Real-time Users */}
      {showRealTime && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Real-time Users</h3>
              <p className="text-green-100">Currently active on your site</p>
            </div>
            <div className="text-4xl font-bold">{analytics.realTimeUsers}</div>
          </div>
        </motion.div>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Page Views</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(analytics.pageViews)}</p>
            </div>
            <Eye className="w-8 h-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(analytics.uniqueVisitors)}</p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{analytics.bounceRate.toFixed(1)}%</p>
            </div>
            <MousePointer className="w-8 h-8 text-orange-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatDuration(analytics.avgSessionDuration)}</p>
            </div>
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
        </motion.div>
      </div>

      {/* Top Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Top Pages
        </h3>
        <div className="space-y-3">
          {analytics.topPages.map((page, index) => (
            <div key={page.page} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {index + 1}
                  </span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {page.page === '/' ? 'Home' : page.page}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {formatNumber(page.views)}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Conversion Rate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Conversion Rate</h3>
            <p className="text-green-100">Percentage of visitors who complete desired actions</p>
          </div>
          <div className="text-4xl font-bold">{analytics.conversionRate.toFixed(1)}%</div>
        </div>
      </motion.div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        Last updated: {lastUpdated.toLocaleString()}
      </div>
    </div>
  );
};

export default EnhancedAnalytics;