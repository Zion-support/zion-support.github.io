'use client';

import React, { useState, useEffect } from 'react';

const AdvancedAnalyticsDashboard2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('roi');
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = {
    roi: {
      title: "ROI Performance",
      value: "15,000%",
      change: "+2,500%",
      trend: "up",
      data: [100, 250, 500, 1200, 2500, 5000, 8000, 12000, 15000]
    },
    accuracy: {
      title: "Prediction Accuracy",
      value: "99.9%",
      change: "+0.3%",
      trend: "up",
      data: [95, 96, 97, 98, 98.5, 99, 99.3, 99.6, 99.9]
    },
    efficiency: {
      title: "System Efficiency",
      value: "98.7%",
      change: "+5.2%",
      trend: "up",
      data: [85, 88, 91, 93, 94, 95, 96, 97, 98.7]
    },
    adoption: {
      title: "User Adoption",
      value: "87.3%",
      change: "+12.1%",
      trend: "up",
      data: [45, 52, 58, 63, 68, 72, 76, 81, 87.3]
    }
  };

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const currentMetric = metrics[selectedMetric];

  return (
    <div className={`py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Analytics
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Dashboard 2026
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real-time insights, predictive analytics, and comprehensive performance metrics 
            for your AI-powered business transformation
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  timeRange === range.value
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(metrics).map(([key, metric]) => (
            <div
              key={key}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                selectedMetric === key ? 'ring-2 ring-cyan-400 ring-opacity-50' : ''
              }`}
              onClick={() => setSelectedMetric(key)}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  {metric.title}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className={`text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change} vs last period
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {currentMetric.title} Trend
            </h3>
            <p className="text-gray-300">
              Performance over the last {timeRange === '7d' ? '7 days' : timeRange === '30d' ? '30 days' : timeRange === '90d' ? '90 days' : 'year'}
            </p>
          </div>

          {/* Chart Visualization */}
          <div className="h-64 flex items-end justify-between space-x-2">
            {currentMetric.data.map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg transition-all duration-500 hover:from-cyan-400 hover:to-blue-400"
                style={{
                  height: `${(value / Math.max(...currentMetric.data)) * 100}%`,
                  minHeight: '20px'
                }}
                title={`${value}${selectedMetric === 'roi' ? '%' : selectedMetric === 'accuracy' ? '%' : selectedMetric === 'efficiency' ? '%' : '%'}`}
              />
            ))}
          </div>

          {/* Chart Labels */}
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            {currentMetric.data.map((_, index) => (
              <span key={index}>
                {timeRange === '7d' ? `Day ${index + 1}` : 
                 timeRange === '30d' ? `Week ${index + 1}` :
                 timeRange === '90d' ? `Month ${index + 1}` :
                 `Q${index + 1}`}
              </span>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Peak Performance</h3>
            <p className="text-gray-300">
              Your AI systems are operating at 99.9% efficiency, delivering unprecedented results
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-3">Exponential Growth</h3>
            <p className="text-gray-300">
              ROI has increased by 2,500% in the last period, showing consistent upward trajectory
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Real-time Optimization</h3>
            <p className="text-gray-300">
              AI continuously optimizes performance, adapting to changing conditions automatically
            </p>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Optimize Further?
            </h3>
            <p className="text-gray-200 mb-6">
              Your AI systems are performing exceptionally well. Consider these optimization opportunities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="text-lg font-semibold text-white mb-2">Scale Operations</div>
                <div className="text-gray-300 text-sm">Expand AI deployment to additional departments</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="text-lg font-semibold text-white mb-2">Advanced Features</div>
                <div className="text-gray-300 text-sm">Enable next-generation AI capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard2026;