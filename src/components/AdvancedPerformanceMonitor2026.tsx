"use client";
'use client';

import React, { useState, useEffect } from 'react';

const AdvancedPerformanceMonitor2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [systemStatus, setSystemStatus] = useState('optimal');
  const [performanceMetrics, setPerformanceMetrics] = useState({
    cpu: 87,
    memory: 92,
    network: 95,
    storage: 78,
    aiProcessing: 99
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPerformanceMetrics(prev => ({
        cpu: Math.max(60, Math.min(100, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(70, Math.min(100, prev.memory + (Math.random() - 0.5) * 8)),
        network: Math.max(80, Math.min(100, prev.network + (Math.random() - 0.5) * 5)),
        storage: Math.max(60, Math.min(100, prev.storage + (Math.random() - 0.5) * 6)),
        aiProcessing: Math.max(95, Math.min(100, prev.aiProcessing + (Math.random() - 0.5) * 2))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value) => {
    if (value >= 90) return 'text-green-400';
    if (value >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusBg = (value) => {
    if (value >= 90) return 'from-green-500 to-emerald-500';
    if (value >= 75) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getSystemStatusColor = () => {
    const avgPerformance = Object.values(performanceMetrics).reduce((ab) => a + b0) / Object.values(performanceMetrics).length;
    if (avgPerformance >= 90) return 'text-green-400';
    if (avgPerformance >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSystemStatusText = () => {
    const avgPerformance = Object.values(performanceMetrics).reduce((ab) => a + b0) / Object.values(performanceMetrics).length;
    if (avgPerformance >= 90) return 'Optimal';
    if (avgPerformance >= 75) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className={`py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Performance
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Monitor 2026
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real-time system monitoringperformance analyticsand predictive maintenance 
            for your AI-powered infrastructure
          </p>
        </div>

        {/* System Status Overview */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">System Status</h3>
            <div className={`text-4xl font-bold ${getSystemStatusColor()} mb-2`}>
              {getSystemStatusText()}
            </div>
            <p className="text-gray-300">Overall system health and performance</p>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.entries(performanceMetrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm text-gray-300 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className={`text-2xl font-bold ${getStatusColor(value)} mb-2`}>
                  {Math.round(value)}%
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getStatusBg(value)} transition-all duration-500`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400">
                  {value >= 90 ? 'Excellent' : value >= 75 ? 'Good' : 'Needs Attention'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* CPU Usage Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">CPU Usage</h3>
            <div className="h-32 flex items-end justify-between space-x-1">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t"
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                    minHeight: '10px'
                  }}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Last 20 minutes - Real-time monitoring
            </div>
          </div>

          {/* Memory Usage Chart */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Memory Usage</h3>
            <div className="h-32 flex items-end justify-between space-x-1">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                  style={{
                    height: `${Math.random() * 70 + 30}%`,
                    minHeight: '10px'
                  }}
                />
              ))}
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Last 20 minutes - Real-time monitoring
            </div>
          </div>
        </div>

        {/* AI Processing Insights */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl p-8 border border-cyan-400/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">AI Processing Insights</h3>
            <p className="text-gray-200">
              Advanced AI systems are operating at peak efficiency with intelligent optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-white text-lg">AI Accuracy</div>
              <div className="text-gray-300 text-sm">Neural processing efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">0.1ms</div>
              <div className="text-white text-lg">Response Time</div>
              <div className="text-gray-300 text-sm">Average processing latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white text-lg">Uptime</div>
              <div className="text-gray-300 text-sm">Continuous operation</div>
            </div>
          </div>
        </div>

        {/* Alerts and Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">System Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">All systems operational</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Storage optimization recommended</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">AI processing at peak performance</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Recommendations</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                • Consider scaling AI processing capacity
              </div>
              <div className="text-gray-300">
                • Optimize storage allocation for better performance
              </div>
              <div className="text-gray-300">
                • Enable advanced neural network features
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor2026;