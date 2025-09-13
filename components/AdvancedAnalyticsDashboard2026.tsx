'use client';

import React, { useState, useEffect } from 'react';

interface Metric {
  id: string;
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  format: 'number' | 'percentage' | 'currency';
  icon: string;
  color: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const AdvancedAnalyticsDashboard2026: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  const metrics: Metric[] = [
    {
      id: '1',
      title: 'Total Users',
      value: 125430,
      change: 12.5,
      trend: 'up',
      format: 'number',
      icon: '👥',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Page Views',
      value: 2847392,
      change: 8.3,
      trend: 'up',
      format: 'number',
      icon: '👁️',
      color: 'green'
    },
    {
      id: '3',
      title: 'Conversion Rate',
      value: 3.47,
      change: -2.1,
      trend: 'down',
      format: 'percentage',
      icon: '📈',
      color: 'red'
    },
    {
      id: '4',
      title: 'Revenue',
      value: 125430,
      change: 15.8,
      trend: 'up',
      format: 'currency',
      icon: '💰',
      color: 'purple'
    },
    {
      id: '5',
      title: 'Bounce Rate',
      value: 34.2,
      change: -5.2,
      trend: 'up',
      format: 'percentage',
      icon: '📉',
      color: 'green'
    },
    {
      id: '6',
      title: 'Avg. Session',
      value: 4.2,
      change: 7.1,
      trend: 'up',
      format: 'number',
      icon: '⏱️',
      color: 'blue'
    }
  ];

  const timeRanges = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        }).format(value);
      case 'percentage':
        return `${value.toFixed(1)}%`;
      case 'number':
        return new Intl.NumberFormat('en-US').format(value);
      default:
        return value.toString();
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend: string, change: number) => {
    if (trend === 'up') {
      return change > 0 ? 'text-green-600' : 'text-red-600';
    } else if (trend === 'down') {
      return change > 0 ? 'text-green-600' : 'text-red-600';
    }
    return 'text-gray-600';
  };

  const getMetricColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-200';
      case 'green':
        return 'bg-green-50 border-green-200';
      case 'red':
        return 'bg-red-50 border-red-200';
      case 'purple':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  useEffect(() => {
    setIsLoading(true);
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectedTimeRange]);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                📊 ADVANCED ANALYTICS 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Real-time Analytics Dashboard
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive insights into your AI platform performance and user engagement
              </p>
            </div>
            
            {/* Time Range Selector */}
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setSelectedTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTimeRange === range.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className={`p-6 rounded-xl border-2 ${getMetricColor(metric.color)} ${
                isLoading ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <div className={`text-sm font-medium ${getTrendColor(metric.trend, metric.change)}`}>
                  {getTrendIcon(metric.trend)} {Math.abs(metric.change)}%
                </div>
              </div>
              
              <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {isLoading ? '...' : formatValue(metric.value, metric.format)}
              </div>
              
              <div className="flex items-center text-sm">
                <span className={`font-medium ${getTrendColor(metric.trend, metric.change)}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="text-gray-500 ml-2">vs previous period</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* User Growth Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">User Growth</h3>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <p className="text-gray-600">Interactive chart would be here</p>
                <p className="text-sm text-gray-500">+12.5% growth this period</p>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { source: 'Direct', percentage: 45, color: 'bg-blue-500' },
                { source: 'Search', percentage: 30, color: 'bg-green-500' },
                { source: 'Social', percentage: 15, color: 'bg-purple-500' },
                { source: 'Referral', percentage: 10, color: 'bg-orange-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.source}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Performance Insights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">Page Speed</h4>
              <p className="text-2xl font-bold text-green-600">2.1s</p>
              <p className="text-sm text-gray-500">Average load time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-gray-900 mb-1">Mobile Users</h4>
              <p className="text-2xl font-bold text-blue-600">68%</p>
              <p className="text-sm text-gray-500">Of total traffic</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
              <p className="text-2xl font-bold text-purple-600">127</p>
              <p className="text-sm text-gray-500">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-1">Engagement</h4>
              <p className="text-2xl font-bold text-orange-600">4.2m</p>
              <p className="text-sm text-gray-500">Avg. session time</p>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🤖</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Recommendations</h3>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Optimize Mobile Experience</h4>
                  <p className="text-sm opacity-90">
                    Your mobile bounce rate is 15% higher than desktop. Consider optimizing 
                    mobile page speed and user experience.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Content Strategy</h4>
                  <p className="text-sm opacity-90">
                    AI-related content shows 40% higher engagement. Focus on creating 
                    more AI-focused content to increase user retention.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Peak Traffic Times</h4>
                  <p className="text-sm opacity-90">
                    Schedule important content releases between 2-4 PM EST for maximum 
                    visibility and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard2026;