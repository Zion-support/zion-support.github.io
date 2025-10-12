'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        const renderTime = performance.now();
        
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
        
        setMetrics({
          loadTime,
          renderTime,
          memoryUsage,
          fps: 60 // Placeholder - would need more complex measurement
        });
      }
    };

    measurePerformance();
    
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 text-xs text-white z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
        <div>Memory: {metrics.memoryUsage.toFixed(2)}MB</div>
        <div>FPS: {metrics.fps}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
