<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}
=======
import React, { useState, useEffect } from 'react';
import { usePerformance } from '../hooks/usePerformance';
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671

const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

<<<<<<< HEAD
  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-white text-sm z-50">
      <div className="font-semibold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>Render Time: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
      <div className="text-xs text-gray-400 mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
=======
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-3 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-semibold">Performance</div>
      <div>Render: {metrics.renderTime}ms</div>
      <div>Load: {metrics.loadTime}ms</div>
      {metrics.memoryUsage && (
        <div>Memory: {metrics.memoryUsage}MB</div>
      )}
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
    </div>
  );
};

export default PerformanceMonitor;