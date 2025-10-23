"use client";
import React, { useState, useEffect } from "react";

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  fps: number;
  loadTime: number;
  bundleSize: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    loadTime: 0,
    bundleSize: 0,
  });

  useEffect(() => {
    // Simulate performance metrics collection
    const updateMetrics = () => {
      setMetrics({
        renderTime: Math.random() * 100 + 10,
        memoryUsage: Math.random() * 50 + 10,
        fps: Math.random() * 30 + 30,
        loadTime: Math.random() * 2000 + 500,
        bundleSize: Math.random() * 500 + 100,
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Performance Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Render Time
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {metrics.renderTime.toFixed(1)}ms
          </p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            Memory Usage
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {metrics.memoryUsage.toFixed(1)}MB
          </p>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-purple-900 mb-2">FPS</h2>
          <p className="text-3xl font-bold text-purple-600">
            {metrics.fps.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
