import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  BarChart3, 
  PieChart,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

export function AdvancedAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({
    visitors: 0,
    conversions: 0,
    revenue: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: []
  });
  
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAnalyticsData({
        visitors: Math.floor(Math.random() * 10000) + 5000,
        conversions: Math.floor(Math.random() * 500) + 100,
        revenue: Math.floor(Math.random() * 50000) + 10000,
        bounceRate: Math.random() * 30 + 20,
        avgSessionDuration: Math.floor(Math.random() * 300) + 120,
        topPages: [
          { page: '/', views: Math.floor(Math.random() * 5000) + 2000 },
          { page: '/services', views: Math.floor(Math.random() * 3000) + 1500 },
          { page: '/contact', views: Math.floor(Math.random() * 2000) + 1000 },
          { page: '/about', views: Math.floor(Math.random() * 1500) + 800 },
          { page: '/pricing', views: Math.floor(Math.random() * 1000) + 500 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45 },
          { source: 'Direct', percentage: 25 },
          { source: 'Social Media', percentage: 20 },
          { source: 'Referral', percentage: 10 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 60 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 5 }
        ]
      });
      
      setIsLoading(false);
    };
    
    fetchData();
  }, [timeRange]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Advanced Analytics Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Real-time insights and performance metrics
        </p>
        
        {/* Time Range Selector */}
        <div className="flex justify-center mt-4 space-x-2">
          {['1d', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-blue-600" />
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {formatNumber(analyticsData.visitors)}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Total Visitors</div>
          <div className="text-green-600 text-xs mt-2">+12.5% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formatNumber(analyticsData.conversions)}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Conversions</div>
          <div className="text-green-600 text-xs mt-2">+8.3% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6 text-yellow-600" />
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {formatCurrency(analyticsData.revenue)}
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Revenue</div>
          <div className="text-green-600 text-xs mt-2">+15.2% vs last period</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-purple-600" />
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.floor(analyticsData.avgSessionDuration / 60)}m {analyticsData.avgSessionDuration % 60}s
            </div>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">Avg Session</div>
          <div className="text-green-600 text-xs mt-2">+5.7% vs last period</div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Top Pages
          </h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{page.page}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatNumber(page.views)} views
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            Traffic Sources
          </h3>
          <div className="space-y-3">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{source.source}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {source.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Types */}
      <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analyticsData.deviceTypes.map((device, index) => {
            const icons = [Monitor, Smartphone, Tablet];
            const IconComponent = icons[index] || Monitor;
            return (
              <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{device.device}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{device.percentage}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
