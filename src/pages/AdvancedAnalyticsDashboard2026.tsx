import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Target, Zap, Globe } from 'lucide-react';

const AdvancedAnalyticsDashboard2026: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  const timeframes = [
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
    { value: '90d', label: '90D' }
  ];

  const analyticsData = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$2.4M',
      change: 12.5,
      trend: 'up',
      color: 'from-green-500 to-emerald-500',
      icon: DollarSign
    },
    {
      id: 2,
      title: 'Active Users',
      value: '45.2K',
      change: 8.3,
      trend: 'up',
      color: 'from-blue-500 to-cyan-500',
      icon: Users
    },
    {
      id: 3,
      title: 'Conversion Rate',
      value: '3.2%',
      change: -2.1,
      trend: 'down',
      color: 'from-purple-500 to-pink-500',
      icon: Target
    },
    {
      id: 4,
      title: 'Performance Score',
      value: '94.7',
      change: 5.8,
      trend: 'up',
      color: 'from-orange-500 to-red-500',
      icon: Activity
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="w-4 h-4 text-green-400" />
    ) : (
      <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
    );
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Advanced Analytics Dashboard 2026</h1>
                <p className="text-gray-400">Comprehensive business intelligence and insights</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeframe === timeframe.value
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {timeframe.label}
                </button>
              ))}
            </div>
          </div>

          {/* Analytics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analyticsData.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(item.trend)}
                    <span className={`text-sm font-medium ${getChangeColor(item.change)}`}>
                      {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{item.value}</h3>
                <p className="text-gray-400 text-sm">{item.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Revenue Trends</h3>
              <div className="h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Chart visualization would go here</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">User Engagement</h3>
              <div className="h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Chart visualization would go here</p>
              </div>
            </motion.div>
          </div>

          {/* Key Insights */}
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Key Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Peak Performance</h4>
                <p className="text-gray-300 text-sm">System operating at 94.7% efficiency during peak hours</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Growth Trend</h4>
                <p className="text-gray-300 text-sm">Revenue increased by 12.5% compared to last period</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Global Reach</h4>
                <p className="text-gray-300 text-sm">Active users across 45+ countries worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard2026;