import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
  renderTime: number;
}

interface PerformanceMonitorProps {
  showDashboard: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showDashboard, 
  onMetricsUpdate,
  className = "fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm z-50"
}) => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const updateMetrics = useCallback(() => {
    const newMetrics: Partial<PerformanceMetrics> = {};

    // Get performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        newMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        newMetrics.renderTime = navigation.loadEventEnd - navigation.navigationStart;
      }

      // Get memory usage
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize;
      }

      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        }
      });

      // Get LCP
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Calculate bundle size (approximate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets')) {
          // This is a rough estimation - in real implementation you'd fetch and measure
          totalSize += 100000; // Assume 100KB per script
        }
      });
      newMetrics.bundleSize = totalSize;
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics as PerformanceMetrics);
    }
  }, [onMetricsUpdate]);

  useEffect(() => {
    if (!showDashboard) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
            break;
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input': {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - entry.startTime }));
            break;
          }
          case 'layout-shift': {
            const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (!layoutShiftEntry.hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (layoutShiftEntry.value || 0) 
              }));
            }
            break;
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance observer not supported:', error);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 2000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [showDashboard, updateMetrics]);

  if (!showDashboard) return null;

  const formatNumber = (value?: number, decimals = 2) => {
    if (value === undefined || value === null) return 'N/A';
    return value.toFixed(decimals);
  };

  const formatBytes = (bytes?: number) => {
    if (bytes === undefined || bytes === null) return 'N/A';
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getPerformanceColor = (value?: number, thresholds: [number, number]) => {
    if (value === undefined || value === null) return 'text-gray-400';
    if (value <= thresholds[0]) return 'text-green-400';
    if (value <= thresholds[1]) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold flex items-center">
          📊 Performance Monitor
        </h3>
        <div className="flex space-x-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-xs text-gray-400 hover:text-white transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? '📈' : '📉'}
          </button>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-xs text-gray-400 hover:text-white transition-colors"
            title={isVisible ? 'Hide details' : 'Show details'}
          >
            {isVisible ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-400">FCP:</span>
              <span className={`ml-1 ${getPerformanceColor(metrics.fcp, [1800, 3000])}`}>
                {formatNumber(metrics.fcp)}ms
              </span>
            </div>
            <div>
              <span className="text-gray-400">LCP:</span>
              <span className={`ml-1 ${getPerformanceColor(metrics.lcp, [2500, 4000])}`}>
                {formatNumber(metrics.lcp)}ms
              </span>
            </div>
            <div>
              <span className="text-gray-400">FID:</span>
              <span className={`ml-1 ${getPerformanceColor(metrics.fid, [100, 300])}`}>
                {formatNumber(metrics.fid)}ms
              </span>
            </div>
            <div>
              <span className="text-gray-400">CLS:</span>
              <span className={`ml-1 ${getPerformanceColor(metrics.cls, [0.1, 0.25])}`}>
                {formatNumber(metrics.cls, 3)}
              </span>
            </div>
          </div>
          
          {isVisible && (
            <div className="pt-2 border-t border-gray-600 space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">TTFB:</span>
                <span className={getPerformanceColor(metrics.ttfb, [800, 1800])}>
                  {formatNumber(metrics.ttfb)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Memory:</span>
                <span className={getPerformanceColor(metrics.memoryUsage, [50 * 1024 * 1024, 100 * 1024 * 1024])}>
                  {formatBytes(metrics.memoryUsage)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Render:</span>
                <span className={getPerformanceColor(metrics.renderTime, [3000, 5000])}>
                  {formatNumber(metrics.renderTime)}ms
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bundle:</span>
                <span>{formatBytes(metrics.bundleSize)}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;