import React, { useState, useEffect } from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

export default function PerformanceDashboard({ className = '' }: PerformanceDashboardProps) {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0, // eslint-disable-line @typescript-eslint/no-explicit-any
        fps: 60 // Placeholder
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-4">Performance Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-md">
          <h4 className="font-semibold text-blue-800">Load Time</h4>
          <p className="text-2xl font-bold text-blue-600">{metrics.loadTime.toFixed(2)}ms</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h4 className="font-semibold text-green-800">Memory Usage</h4>
          <p className="text-2xl font-bold text-green-600">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-md">
          <h4 className="font-semibold text-purple-800">FPS</h4>
          <p className="text-2xl font-bold text-purple-600">{metrics.fps}</p>
        </div>
      </div>
    </div>
  );
}
