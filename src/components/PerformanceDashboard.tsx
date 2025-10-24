'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 60
  });

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      const renderTime = performance.now();
      
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Simple FPS calculation
      let fps = 60;
      let lastTime = performance.now();
      const calculateFPS = () => {
        const currentTime = performance.now();
        fps = 1000 / (currentTime - lastTime);
        lastTime = currentTime;
      };
      
      calculateFPS();

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        fps
      });
    };

    measurePerformance();
    
    const interval = setInterval(measurePerformance, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Dashboard</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900">Load Time</h3>
          <p className="text-2xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-900">Render Time</h3>
          <p className="text-2xl font-bold text-green-600">{metrics.renderTime.toFixed(2)}ms</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-yellow-900">Memory Usage</h3>
          <p className="text-2xl font-bold text-yellow-600">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-900">FPS</h3>
          <p className="text-2xl font-bold text-purple-600">{metrics.fps.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;