import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  MousePointer,
  Target,
  DollarSign,
  Users,
  Calendar,
  Download,
  RefreshCw,
  Filter,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface AnalyticsData {
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  revenue: number;
  ctr: number;
  conversionRate: number;
  roas: number;
  cpc: number;
  cpm: number;
  dailyData: {
    date: string;
    impressions: number;
    clicks: number;
    conversions: number;
    spend: number;
  }[];
  campaignPerformance: {
    id: string;
    name: string;
    impressions: number;
    clicks: number;
    conversions: number;
    spend: number;
    ctr: number;
    conversionRate: number;
  }[];
  deviceBreakdown: {
    device: string;
    impressions: number;
    clicks: number;
    conversions: number;
    percentage: number;
  }[];
  audienceInsights: {
    ageGroup: string;
    impressions: number;
    clicks: number;
    conversions: number;
    percentage: number;
  }[];
}

interface AdAnalyticsDashboardProps {
  className?: string;
}

const AdAnalyticsDashboard: React.FC<AdAnalyticsDashboardProps> = ({ className = '' }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Mock data generation
  useEffect(() => {
    const generateMockData = (): AnalyticsData => {
      const baseImpressions = Math.floor(Math.random() * 1000000) + 500000;
      const baseClicks = Math.floor(baseImpressions * (Math.random() * 0.05 + 0.02));
      const baseConversions = Math.floor(baseClicks * (Math.random() * 0.1 + 0.05));
      const baseSpend = Math.floor(Math.random() * 50000) + 10000;
      const baseRevenue = Math.floor(baseConversions * (Math.random() * 500 + 100));

      const dailyData = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return {
          date: date.toISOString().split('T')[0],
          impressions: Math.floor(baseImpressions / 7 * (Math.random() * 0.5 + 0.75)),
          clicks: Math.floor(baseClicks / 7 * (Math.random() * 0.5 + 0.75)),
          conversions: Math.floor(baseConversions / 7 * (Math.random() * 0.5 + 0.75)),
          spend: Math.floor(baseSpend / 7 * (Math.random() * 0.5 + 0.75))
        };
      });

      const campaignPerformance = [
        {
          id: '1',
          name: 'AI Services Launch',
          impressions: Math.floor(baseImpressions * 0.4),
          clicks: Math.floor(baseClicks * 0.4),
          conversions: Math.floor(baseConversions * 0.4),
          spend: Math.floor(baseSpend * 0.4),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100
        },
        {
          id: '2',
          name: 'Content Marketing',
          impressions: Math.floor(baseImpressions * 0.3),
          clicks: Math.floor(baseClicks * 0.3),
          conversions: Math.floor(baseConversions * 0.3),
          spend: Math.floor(baseSpend * 0.3),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100
        },
        {
          id: '3',
          name: 'Retargeting Campaign',
          impressions: Math.floor(baseImpressions * 0.3),
          clicks: Math.floor(baseClicks * 0.3),
          conversions: Math.floor(baseConversions * 0.3),
          spend: Math.floor(baseSpend * 0.3),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100
        }
      ];

      return {
        impressions: baseImpressions,
        clicks: baseClicks,
        conversions: baseConversions,
        spend: baseSpend,
        revenue: baseRevenue,
        ctr: (baseClicks / baseImpressions) * 100,
        conversionRate: (baseConversions / baseClicks) * 100,
        roas: baseRevenue / baseSpend,
        cpc: baseSpend / baseClicks,
        cpm: (baseSpend / baseImpressions) * 1000,
        dailyData,
        campaignPerformance,
        deviceBreakdown: [
          { device: 'Desktop', impressions: Math.floor(baseImpressions * 0.5), clicks: Math.floor(baseClicks * 0.5), conversions: Math.floor(baseConversions * 0.5), percentage: 50 },
          { device: 'Mobile', impressions: Math.floor(baseImpressions * 0.4), clicks: Math.floor(baseClicks * 0.4), conversions: Math.floor(baseConversions * 0.4), percentage: 40 },
          { device: 'Tablet', impressions: Math.floor(baseImpressions * 0.1), clicks: Math.floor(baseClicks * 0.1), conversions: Math.floor(baseConversions * 0.1), percentage: 10 }
        ],
        audienceInsights: [
          { ageGroup: '18-24', impressions: Math.floor(baseImpressions * 0.15), clicks: Math.floor(baseClicks * 0.15), conversions: Math.floor(baseConversions * 0.15), percentage: 15 },
          { ageGroup: '25-34', impressions: Math.floor(baseImpressions * 0.35), clicks: Math.floor(baseClicks * 0.35), conversions: Math.floor(baseConversions * 0.35), percentage: 35 },
          { ageGroup: '35-44', impressions: Math.floor(baseImpressions * 0.30), clicks: Math.floor(baseClicks * 0.30), conversions: Math.floor(baseConversions * 0.30), percentage: 30 },
          { ageGroup: '45-54', impressions: Math.floor(baseImpressions * 0.15), clicks: Math.floor(baseClicks * 0.15), conversions: Math.floor(baseConversions * 0.15), percentage: 15 },
          { ageGroup: '55+', impressions: Math.floor(baseImpressions * 0.05), clicks: Math.floor(baseClicks * 0.05), conversions: Math.floor(baseConversions * 0.05), percentage: 5 }
        ]
      };
    };

    const loadData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalyticsData(generateMockData());
      setIsLoading(false);
    };

    loadData();
  }, [selectedPeriod]);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (num: number) => {
    return `${num.toFixed(2)}%`;
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) {
      return <ArrowUpRight className="w-4 h-4 text-green-500" />;
    } else if (current < previous) {
      return <ArrowDownRight className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  const getTrendColor = (current: number, previous: number) => {
    if (current > previous) return 'text-green-600';
    if (current < previous) return 'text-red-600';
    return 'text-gray-600';
  };

  if (isLoading) {
    return (
      <div className={`ad-analytics-dashboard ${className}`}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className={`ad-analytics-dashboard ${className}`}>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No analytics data available</h3>
          <p className="text-gray-600">Start running campaigns to see analytics data</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-analytics-dashboard ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ad Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Track and analyze your advertising performance</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Impressions</p>
              <p className="text-3xl font-bold text-gray-900">{formatNumber(analyticsData.impressions)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+12.5%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Clicks</p>
              <p className="text-3xl font-bold text-gray-900">{formatNumber(analyticsData.clicks)}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <MousePointer className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+8.3%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversions</p>
              <p className="text-3xl font-bold text-gray-900">{formatNumber(analyticsData.conversions)}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+15.2%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(analyticsData.revenue)}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+22.1%</span>
          </div>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CTR</span>
              <span className="text-lg font-semibold text-gray-900">{formatPercentage(analyticsData.ctr)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="text-lg font-semibold text-gray-900">{formatPercentage(analyticsData.conversionRate)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">ROAS</span>
              <span className="text-lg font-semibold text-gray-900">{analyticsData.roas.toFixed(2)}x</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CPC</span>
              <span className="text-lg font-semibold text-gray-900">{formatCurrency(analyticsData.cpc)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CPM</span>
              <span className="text-lg font-semibold text-gray-900">{formatCurrency(analyticsData.cpm)}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <div className="space-y-4">
            {analyticsData.campaignPerformance.map((campaign, index) => (
              <div key={campaign.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                  <p className="text-xs text-gray-600">{formatNumber(campaign.impressions)} impressions</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{formatPercentage(campaign.ctr)}</p>
                  <p className="text-xs text-gray-600">CTR</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Device and Audience Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
          <div className="space-y-4">
            {analyticsData.deviceBreakdown.map((device, index) => (
              <div key={device.device}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{device.device}</span>
                  <span className="text-sm text-gray-600">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Insights</h3>
          <div className="space-y-4">
            {analyticsData.audienceInsights.map((audience, index) => (
              <div key={audience.ageGroup}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{audience.ageGroup}</span>
                  <span className="text-sm text-gray-600">{audience.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${audience.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdAnalyticsDashboard;