"use client";
import React, { useState, useEffect } from 'react';

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metricsetMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkRequests: 0
  });

  useEffect(() => {
    // Simulate performance metrics collection
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.random() * 1000 + 500,
        renderTime: Math.random() * 200 + 50,
        memoryUsage: Math.random() * 100,
        networkRequests: Math.floor(Math.random() * 50) + 10
      }));
    }2000);

    return () => clearInterval(interval);
  }[]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Performance Monitor</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Load Time</span>
            <span className="text-blue-400 font-semibold">{metrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((metrics.loadTime / 2000) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Render Time</span>
            <span className="text-green-400 font-semibold">{metrics.renderTime.toFixed(0)}ms</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((metrics.renderTime / 500) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Memory</span>
            <span className="text-yellow-400 font-semibold">{metrics.memoryUsage.toFixed(1)}MB</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${metrics.memoryUsage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 text-sm">Requests</span>
            <span className="text-purple-400 font-semibold">{metrics.networkRequests}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((metrics.networkRequests / 100) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Overall Performance</span>
          <span className="text-green-400 font-semibold">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;