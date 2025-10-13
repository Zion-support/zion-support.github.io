import React, { useState, useEffect } from 'react'.
import { motion } from 'framer-motion'.
import React, { BarChart3, TrendingUp, TrendingDown, Eye, MousePointer, Target, DollarSign, Users, Calendar, Download, RefreshCw, Filter, ArrowUpRight, ArrowDownRight } from 'lucide-react'.
interface AnalyticsData {
  impressions: number.
  clicks: number.
  conversions: number.
  spend: number.
  revenue: number.
  ctr: number.
  conversionRate: number.
  roas: number.
  cpc: number.
  cpm: number.
  dailyData: {
    date: string.
    impressions: number.
    clicks: number.
    conversions: number.
    spend: number.
  }[];
  campaignPerformance: {
    id: string.
    name: string.
    impressions: number.
    clicks: number.
    conversions: number.
    spend: number.
    ctr: number.
    conversionRate: number.
  }[];
  deviceBreakdown: {
    device: string.
    impressions: number.
    clicks: number.
    conversions: number.
    percentage: number.
  }[];
  audienceInsights: {
    ageGroup: string.
    impressions: number.
    clicks: number.
    conversions: number.
    percentage: number.
  }[];
}

interface AdAnalyticsDashboardProps {
  className?: string.
}

const AdAnalyticsDashboard: React.FC<AdAnalyticsDashboardProps> = ({ className = '' }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null).
  const [selectedPeriod, setSelectedPeriod] = useState('7d').
  const [isLoading, setIsLoading] = useState(true).
  const [refreshing, setRefreshing] = useState(false).

  // Mock data generation.
  useEffect(() => {
    const generateMockData = (): AnalyticsData => {
      const baseImpressions = Math.floor(Math.random() * 1000000) + 500000.
      const baseClicks = Math.floor(baseImpressions * (Math.random() * 0.05 + 0.02)).
      const baseConversions = Math.floor(baseClicks * (Math.random() * 0.1 + 0.05)).
      const baseSpend = Math.floor(Math.random() * 50000) + 10000.
      const baseRevenue = Math.floor(baseConversions * (Math.random() * 500 + 100)).

      const dailyData = Array.from({ length: 7 }, (_, i) => {
        const date = new Date().
        date.setDate(date.getDate() - (6 - i)).
        return {
          date: date.toISOString().split('T')[0],
          impressions: Math.floor(baseImpressions / 7 * (Math.random() * 0.5 + 0.75)),
          clicks: Math.floor(baseClicks / 7 * (Math.random() * 0.5 + 0.75)),
          conversions: Math.floor(baseConversions / 7 * (Math.random() * 0.5 + 0.75)),
          spend: Math.floor(baseSpend / 7 * (Math.random() * 0.5 + 0.75))
        };
      }).

      const campaignPerformance = [
        {
          id: '1',
          name: 'AI Services Launch',
          impressions: Math.floor(baseImpressions * 0.4),
          clicks: Math.floor(baseClicks * 0.4),
          conversions: Math.floor(baseConversions * 0.4),
          spend: Math.floor(baseSpend * 0.4),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100.
        },
        {
          id: '2',
          name: 'Content Marketing',
          impressions: Math.floor(baseImpressions * 0.3),
          clicks: Math.floor(baseClicks * 0.3),
          conversions: Math.floor(baseConversions * 0.3),
          spend: Math.floor(baseSpend * 0.3),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100.
        },
        {
          id: '3',
          name: 'Retargeting Campaign',
          impressions: Math.floor(baseImpressions * 0.3),
          clicks: Math.floor(baseClicks * 0.3),
          conversions: Math.floor(baseConversions * 0.3),
          spend: Math.floor(baseSpend * 0.3),
          ctr: (baseClicks / baseImpressions) * 100,
          conversionRate: (baseConversions / baseClicks) * 100.
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
          { device: 'Tablet', impressions: Math.floor(baseImpressions * 0.1), clicks: Math.floor(baseClicks * 0.1), conversions: Math.floor(baseConversions * 0.1), percentage: 10 }]
        ],
        audienceInsights: [
          { ageGroup: '18-24', impressions: Math.floor(baseImpressions * 0.15), clicks: Math.floor(baseClicks * 0.15), conversions: Math.floor(baseConversions * 0.15), percentage: 15 },
          { ageGroup: '25-34', impressions: Math.floor(baseImpressions * 0.35), clicks: Math.floor(baseClicks * 0.35), conversions: Math.floor(baseConversions * 0.35), percentage: 35 },
          { ageGroup: '35-44', impressions: Math.floor(baseImpressions * 0.30), clicks: Math.floor(baseClicks * 0.30), conversions: Math.floor(baseConversions * 0.30), percentage: 30 },
          { ageGroup: '45-54', impressions: Math.floor(baseImpressions * 0.15), clicks: Math.floor(baseClicks * 0.15), conversions: Math.floor(baseConversions * 0.15), percentage: 15 },
          { ageGroup: '55+', impressions: Math.floor(baseImpressions * 0.05), clicks: Math.floor(baseClicks * 0.05), conversions: Math.floor(baseConversions * 0.05), percentage: 5 }]
        ],
      };
    };

    const loadData = async () => {
      setIsLoading(true).
      // Simulate API call.
      await new Promise(resolve => setTimeout(resolve, 1000)).
      setAnalyticsData(generateMockData()).
      setIsLoading(false).
    };

    loadData().
  }, [selectedPeriod]).

  const handleRefresh = async () => {
    setRefreshing(true).
    // Simulate API call.
    await new Promise(resolve => setTimeout(resolve, 1000)).
    setRefreshing(false).
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num).
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0.
    }).format(amount).
  };

  const formatPercentage = (num: number) => {
    return `${num.toFixed(2)}%`.
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) {
      return <ArrowUpRight className="w-4 h-4 text-green-500" />.
    } else if (current < previous) {
      return <ArrowDownRight className="w-4 h-4 text-red-500" />.
    }
    return null.
  };

  const getTrendColor = (current: number, previous: number) => {
    if (current > previous) return 'text-green-600'.
    if (current < previous) return 'text-red-600'.
    return 'text-gray-600'.
  };

  if (isLoading) {
    return (
  }

  const Component = () => {
  
    return (
    <div className={`ad-analytics-dashboard ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">"
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <select.
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <motion.div.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
            ))}
      {/* Device and Audience Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  >
            ))}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${audience.percentage}%` }}
                  >
            ))}
};

export default AdAnalyticsDashboard.