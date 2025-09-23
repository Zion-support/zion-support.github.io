import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025AdvancedAnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeMetric, setActiveMetric] = useState('roi');
  const [isLoading, setIsLoading] = useState(false);

  const timeRanges = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metrics = [
    { id: 'roi', label: 'ROI', value: '50000%', change: '+12.5%', color: 'green' },
    { id: 'revenue', label: 'Revenue', value: '$2.5M', change: '+8.3%', color: 'blue' },
    { id: 'efficiency', label: 'Efficiency', value: '95%', change: '+5.2%', color: 'purple' },
    { id: 'automation', label: 'Automation', value: '87%', change: '+3.1%', color: 'orange' },
    { id: 'satisfaction', label: 'Satisfaction', value: '98%', change: '+2.8%', color: 'pink' },
    { id: 'uptime', label: 'Uptime', value: '99.9%', change: '+0.1%', color: 'indigo' }
  ];

  const chartData = {
    roi: [
      { month: 'Jan', value: 12000, target: 10000 },
      { month: 'Feb', value: 18500, target: 15000 },
      { month: 'Mar', value: 25000, target: 20000 },
      { month: 'Apr', value: 32000, target: 25000 },
      { month: 'May', value: 41000, target: 30000 },
      { month: 'Jun', value: 50000, target: 35000 }
    ],
    revenue: [
      { month: 'Jan', value: 150000, target: 120000 },
      { month: 'Feb', value: 220000, target: 180000 },
      { month: 'Mar', value: 310000, target: 250000 },
      { month: 'Apr', value: 420000, target: 320000 },
      { month: 'May', value: 580000, target: 400000 },
      { month: 'Jun', value: 750000, target: 500000 }
    ],
    efficiency: [
      { month: 'Jan', value: 75, target: 70 },
      { month: 'Feb', value: 82, target: 75 },
      { month: 'Mar', value: 87, target: 80 },
      { month: 'Apr', value: 91, target: 85 },
      { month: 'May', value: 94, target: 90 },
      { month: 'Jun', value: 95, target: 92 }
    ]
  };

  const topPages = [
    { page: '/ai-2025-ultimate-breakthrough', views: 125000, conversion: 12.5 },
    { page: '/case-studies', views: 98000, conversion: 15.2 },
    { page: '/resources', views: 87000, conversion: 8.7 },
    { page: '/contact', views: 76000, conversion: 22.1 },
    { page: '/services', views: 65000, conversion: 18.9 }
  ];

  const aiInsights = [
    {
      type: 'success',
      title: 'High Performance Alert',
      message: 'ROI has exceeded target by 42% this month. Consider scaling successful strategies.',
      impact: 'High'
    },
    {
      type: 'warning',
      title: 'Optimization Opportunity',
      message: 'Content generation efficiency could improve by 15% with advanced AI models.',
      impact: 'Medium'
    },
    {
      type: 'info',
      title: 'Trend Analysis',
      message: 'Mobile traffic increased 25% - optimize for mobile experience.',
      impact: 'Low'
    }
  ];

  const getColorClass = (color: string) => {
    const colors = {
      green: 'text-green-600 bg-green-50',
      blue: 'text-blue-600 bg-blue-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50',
      pink: 'text-pink-600 bg-pink-50',
      indigo: 'text-indigo-600 bg-indigo-50'
    };
    return colors[color] || 'text-gray-600 bg-gray-50';
  };

  const getInsightIcon = (type: string) => {
    const icons = {
      success: '✅',
      warning: '⚠️',
      info: 'ℹ️'
    };
    return icons[type] || 'ℹ️';
  };

  const getInsightColor = (type: string) => {
    const colors = {
      success: 'border-green-500 bg-green-50',
      warning: 'border-orange-500 bg-orange-50',
      info: 'border-blue-500 bg-blue-50'
    };
    return colors[type] || 'border-gray-500 bg-gray-50';
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">AI 2025 Advanced Analytics</h2>
          <p className="text-xl text-gray-600">
            Real-time insights and performance metrics for your AI transformation
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              activeMetric === metric.id
                ? `border-${metric.color}-500 bg-${metric.color}-50`
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setActiveMetric(metric.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{metric.label}</h3>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${getColorClass(metric.color)}`}>
                {metric.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
            <div className="text-sm text-gray-600">vs. previous period</div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {activeMetric.toUpperCase()} Performance Over Time
        </h3>
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="space-y-4">
            {chartData[activeMetric]?.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 text-sm font-semibold text-gray-600">{data.month}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                  <div
                    className="bg-purple-500 h-6 rounded-full relative flex items-center justify-end pr-2"
                    style={{ width: `${Math.min((data.value / data.target) * 100, 100)}%` }}
                  >
                    <span className="text-white text-xs font-bold">
                      {activeMetric === 'revenue' ? `$${(data.value / 1000).toFixed(0)}K` : `${data.value}%`}
                    </span>
                  </div>
                </div>
                <div className="w-24 text-sm text-gray-600 text-right">
                  Target: {activeMetric === 'revenue' ? `$${(data.target / 1000).toFixed(0)}K` : `${data.target}%`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Performing Pages</h3>
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{page.page}</div>
                    <div className="text-sm text-gray-600">{page.views.toLocaleString()} views</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{page.conversion}%</div>
                  <div className="text-sm text-gray-600">conversion</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Insights</h3>
        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${getInsightColor(insight.type)}`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{getInsightIcon(insight.type)}</span>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High' ? 'bg-red-100 text-red-600' :
                      insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-600">{insight.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Activity */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-time Activity</h3>
        <div className="bg-gray-900 text-green-400 p-6 rounded-xl font-mono text-sm">
          <div className="space-y-2">
            <div>[12:34:56] AI model processing 1,247 requests/min</div>
            <div>[12:34:57] Content generation: 89% efficiency</div>
            <div>[12:34:58] Customer queries: 95% automated response</div>
            <div>[12:34:59] ROI calculation: +2.3% this hour</div>
            <div>[12:35:00] System optimization: 99.9% uptime</div>
            <div className="text-green-300 animate-pulse">[12:35:01] Processing...</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Want Deeper Analytics?</h3>
          <p className="text-xl mb-6 opacity-90">
            Get advanced AI-powered insights and custom analytics for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Custom Analytics
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AdvancedAnalyticsDashboard;