import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  componentCount: number;
  bundleSize: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  logLevel = 'info',
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0,
    bundleSize: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    const startTime = performance.now();
    
    // Measure page load time
    const loadTime = performance.timing?.loadEventEnd 
      ? performance.timing.loadEventEnd - performance.timing.navigationStart
      : 0;

    // Measure render time
    const renderTime = performance.now() - startTime;

    // Estimate memory usage (if available)
    const memoryUsage = (performance as any).memory?.usedJSHeapSize 
      ? Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)
      : 0;

    // Count React components (rough estimate)
    const componentCount = document.querySelectorAll('[data-reactroot]').length;

    // Estimate bundle size (rough calculation)
    const scripts = document.querySelectorAll('script[src]');
    let bundleSize = 0;
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.includes('vendor')) {
        bundleSize += 50; // Rough estimate
      }
    });

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage,
      componentCount,
      bundleSize,
    });

    // Log performance data
    if (logLevel === 'debug' || logLevel === 'info') {
      console.log('Performance Metrics:', {
        loadTime: `${loadTime}ms`,
        renderTime: `${renderTime.toFixed(2)}ms`,
        memoryUsage: `${memoryUsage}MB`,
        componentCount,
        bundleSize: `${bundleSize}KB`,
      });
    }
  }, [enabled, logLevel]);

  // Set up performance monitoring
  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    measurePerformance();

    // Set up interval monitoring
    const interval = setInterval(measurePerformance, reportInterval);

    // Monitor performance entries
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure' || entry.entryType === 'navigation') {
          if (logLevel === 'debug') {
            console.log('Performance Entry:', entry);
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [enabled, logLevel, reportInterval, measurePerformance]);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!enabled || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-lg z-50 min-w-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-lg"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={`${metrics.loadTime > 3000 ? 'text-red-400' : metrics.loadTime > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span className={`${metrics.renderTime > 100 ? 'text-red-400' : metrics.renderTime > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            {metrics.renderTime.toFixed(2)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory Usage:</span>
          <span className={`${metrics.memoryUsage > 100 ? 'text-red-400' : metrics.memoryUsage > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Components:</span>
          <span className="text-blue-400">{metrics.componentCount}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Bundle Size:</span>
          <span className={`${metrics.bundleSize > 1000 ? 'text-red-400' : metrics.bundleSize > 500 ? 'text-yellow-400' : 'text-green-400'}`}>
            ~{metrics.bundleSize}KB
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;