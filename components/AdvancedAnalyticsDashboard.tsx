<<<<<<< HEAD
=======
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnalyticsData {
  visitors: {
    total: number;
    unique: number;
    returning: number;
    new: number;
    growth: number;
  };
  traffic: {
    organic: number;
    direct: number;
    social: number;
    referral: number;
    paid: number;
  };
  engagement: {
    bounceRate: number;
    avgSessionDuration: number;
    pagesPerSession: number;
    conversionRate: number;
  };
  performance: {
    pageLoadTime: number;
    serverResponseTime: number;
    errorRate: number;
    uptime: number;
  };
  revenue: {
    total: number;
    growth: number;
    avgOrderValue: number;
    transactions: number;
  };
}

interface TimeRange {
  label: string;
  value: string;
  days: number;
}

const timeRanges: TimeRange[] = [
  { label: 'Last 7 days', value: '7d', days: 7 },
  { label: 'Last 30 days', value: '30d', days: 30 },
  { label: 'Last 90 days', value: '90d', days: 90 },
  { label: 'Last year', value: '1y', days: 365 }
];

const AdvancedAnalyticsDashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>(timeRanges[1]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    visitors: {
      total: 0,
      unique: 0,
      returning: 0,
      new: 0,
      growth: 0
    },
    traffic: {
      organic: 0,
      direct: 0,
      social: 0,
      referral: 0,
      paid: 0
    },
    engagement: {
      bounceRate: 0,
      avgSessionDuration: 0,
      pagesPerSession: 0,
      conversionRate: 0
    },
    performance: {
      pageLoadTime: 0,
      serverResponseTime: 0,
      errorRate: 0,
      uptime: 0
    },
    revenue: {
      total: 0,
      growth: 0,
      avgOrderValue: 0,
      transactions: 0
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState<string>('visitors');

  // Simulate data fetching
  const fetchAnalyticsData = useCallback(async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate mock data based on time range
    const multiplier = selectedTimeRange.days / 30; // Scale data based on time range

    const mockData: AnalyticsData = {
      visitors: {
        total: Math.round((Math.random() * 50000 + 10000) * multiplier),
        unique: Math.round((Math.random() * 30000 + 8000) * multiplier),
        returning: Math.round((Math.random() * 20000 + 5000) * multiplier),
        new: Math.round((Math.random() * 25000 + 3000) * multiplier),
        growth: Math.random() * 40 - 10 // -10% to +30%
      },
      traffic: {
        organic: Math.round((Math.random() * 40 + 30) * multiplier),
        direct: Math.round((Math.random() * 30 + 20) * multiplier),
        social: Math.round((Math.random() * 20 + 10) * multiplier),
        referral: Math.round((Math.random() * 15 + 5) * multiplier),
        paid: Math.round((Math.random() * 25 + 10) * multiplier)
      },
      engagement: {
        bounceRate: Math.random() * 30 + 40,
        avgSessionDuration: Math.random() * 200 + 100,
        pagesPerSession: Math.random() * 3 + 2,
        conversionRate: Math.random() * 5 + 1
      },
      performance: {
        pageLoadTime: Math.random() * 2000 + 500,
        serverResponseTime: Math.random() * 500 + 100,
        errorRate: Math.random() * 2,
        uptime: Math.random() * 5 + 95
      },
      revenue: {
        total: Math.round((Math.random() * 100000 + 50000) * multiplier),
        growth: Math.random() * 50 - 10,
        avgOrderValue: Math.random() * 200 + 50,
        transactions: Math.round((Math.random() * 1000 + 200) * multiplier)
      }
    };

    setAnalyticsData(mockData);
    setIsLoading(false);
  }, [selectedTimeRange]);

  useEffect(() => {
    fetchAnalyticsData();
  }, [fetchAnalyticsData]);

  const formatNumber = (num: number, type: 'currency' | 'percentage' | 'number' = 'number') => {
    if (type === 'currency') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    }
    if (type === 'percentage') {
      return `${num.toFixed(1)}%`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return 'text-green-600 dark:text-green-400';
    if (growth < 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return '📈';
    if (growth < 0) return '📉';
    return '➡️';
  };

  const MetricCard = ({ title, value, growth, type = 'number', icon }: {
    title: string;
    value: number;
    growth?: number;
    type?: 'currency' | 'percentage' | 'number';
    icon: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">{icon}</div>
        {growth !== undefined && (
          <div className={`flex items-center space-x-1 text-sm ${getGrowthColor(growth)}`}>
            <span>{getGrowthIcon(growth)}</span>
            <span>{formatNumber(growth, 'percentage')}</span>
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        {formatNumber(value, type)}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {title}
      </div>
    </motion.div>
  );

  const ProgressBar = ({ value, max, label, color = 'blue' }: {
    value: number;
    max: number;
    label: string;
    color?: string;
  }) => {
    const percentage = (value / max) * 100;
    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500'
    };

    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span>{label}</span>
          <span>{formatNumber(value)}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive insights into your application performance
          </p>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeRange.value === range.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Visitors"
          value={analyticsData.visitors.total}
          growth={analyticsData.visitors.growth}
          icon="👥"
        />
        <MetricCard
          title="Unique Visitors"
          value={analyticsData.visitors.unique}
          icon="🎯"
        />
        <MetricCard
          title="Conversion Rate"
          value={analyticsData.engagement.conversionRate}
          type="percentage"
          icon="💰"
        />
        <MetricCard
          title="Total Revenue"
          value={analyticsData.revenue.total}
          growth={analyticsData.revenue.growth}
          type="currency"
          icon="💵"
        />
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Traffic Sources
          </h3>
          
          <div className="space-y-4">
            <ProgressBar
              value={analyticsData.traffic.organic}
              max={analyticsData.visitors.total}
              label="Organic Search"
              color="green"
            />
            <ProgressBar
              value={analyticsData.traffic.direct}
              max={analyticsData.visitors.total}
              label="Direct Traffic"
              color="blue"
            />
            <ProgressBar
              value={analyticsData.traffic.social}
              max={analyticsData.visitors.total}
              label="Social Media"
              color="purple"
            />
            <ProgressBar
              value={analyticsData.traffic.referral}
              max={analyticsData.visitors.total}
              label="Referral"
              color="yellow"
            />
            <ProgressBar
              value={analyticsData.traffic.paid}
              max={analyticsData.visitors.total}
              label="Paid Advertising"
              color="red"
            />
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Engagement Metrics
          </h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Bounce Rate</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.engagement.bounceRate, 'percentage')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Avg Session Duration</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(analyticsData.engagement.avgSessionDuration / 60)}m {Math.round(analyticsData.engagement.avgSessionDuration % 60)}s
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Pages per Session</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.engagement.pagesPerSession)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.engagement.conversionRate, 'percentage')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance & Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Performance Metrics
          </h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Page Load Time</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.performance.pageLoadTime)}ms
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Server Response</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.performance.serverResponseTime)}ms
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Error Rate</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.performance.errorRate, 'percentage')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Uptime</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.performance.uptime, 'percentage')}
              </span>
            </div>
          </div>
        </div>

        {/* Revenue Metrics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Revenue Metrics
          </h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total Revenue</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.revenue.total, 'currency')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Growth</span>
              <span className={`text-2xl font-bold ${getGrowthColor(analyticsData.revenue.growth)}`}>
                {formatNumber(analyticsData.revenue.growth, 'percentage')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Avg Order Value</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.revenue.avgOrderValue, 'currency')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Transactions</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(analyticsData.revenue.transactions)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button
          onClick={fetchAnalyticsData}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Refresh Data
        </button>
        <button
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          Export Report
        </button>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Schedule Report
        </button>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
