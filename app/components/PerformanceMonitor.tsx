'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        const renderTime = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;
        
        // Memory usage (if available)
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
        
        // Network latency estimation
        const networkLatency = navigation ? navigation.responseEnd - navigation.requestStart : 0;

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          memoryUsage: Math.round(memoryUsage * 100) / 100,
          networkLatency: Math.round(networkLatency),
        });
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Update metrics periodically
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono z-50 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
        <div>Network: {metrics.networkLatency}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;