'use client';

import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  warnings: string[];
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    warnings: []
  });

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      const renderTime = performance.now();
      
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      const warnings: string[] = [];
      if (loadTime > 3000) warnings.push('Slow page load time');
      if (renderTime > 100) warnings.push('Slow render time');
      if (memoryUsage > 50 * 1024 * 1024) warnings.push('High memory usage');

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        warnings
      });
    };

    measurePerformance();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
      <div className="font-semibold text-gray-800 mb-2">Performance Monitor</div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className="font-mono">{metrics.renderTime.toFixed(2)}ms</span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="font-mono">{(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</span>
        </div>
      </div>

      {metrics.warnings.length > 0 && (
        <div className="mt-2 p-2 bg-red-50 rounded text-xs">
          <div className="font-semibold text-red-800 mb-1">Warnings:</div>
          {metrics.warnings.map((warning, index) => (
            <div key={index} className="text-red-700">• {warning}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;