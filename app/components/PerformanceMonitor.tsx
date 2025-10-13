import React, { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  interactionToNextPaint: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  memoryUsage?: number;
  connectionType?: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isCollecting, setIsCollecting] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => ({
      ...prev,
      ...newMetrics
    } as PerformanceMetrics));
  }, []);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    setIsCollecting(true);

    // Measure Core Web Vitals
    onCLS((metric) => {
      updateMetrics({ cumulativeLayoutShift: metric.value });
    });

    onINP((metric) => {
      updateMetrics({ interactionToNextPaint: metric.value });
    });

    onFCP((metric) => {
      updateMetrics({ firstContentfulPaint: metric.value });
    });

    onLCP((metric) => {
      updateMetrics({ largestContentfulPaint: metric.value });
    });

    onTTFB((metric) => {
      updateMetrics({ timeToFirstByte: metric.value });
    });

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      // Get memory usage if available
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / 1024 / 1024 : undefined;
      
      // Get connection type
      const connection = (navigator as any).connection;
      const connectionType = connection ? connection.effectiveType : undefined;

      updateMetrics({
        loadTime,
        memoryUsage,
        connectionType
      });

      setIsCollecting(false);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [updateMetrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getPerformanceScore = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        Performance
        {isCollecting && (
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        )}
      </button>
      
      {isVisible && metrics && (
        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-3">Performance Metrics</h3>
          <div className="space-y-3 text-sm">
            {/* Core Web Vitals */}
            <div className="border-b pb-2">
              <h4 className="font-medium text-gray-700 mb-2">Core Web Vitals</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">FCP:</span>
                  <span className={`font-mono ${getScoreColor(getPerformanceScore(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 }))}`}>
                    {metrics.firstContentfulPaint.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">LCP:</span>
                  <span className={`font-mono ${getScoreColor(getPerformanceScore(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 }))}`}>
                    {metrics.largestContentfulPaint.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">INP:</span>
                  <span className={`font-mono ${getScoreColor(getPerformanceScore(metrics.interactionToNextPaint, { good: 200, needsImprovement: 500 }))}`}>
                    {metrics.interactionToNextPaint.toFixed(0)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CLS:</span>
                  <span className={`font-mono ${getScoreColor(getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 }))}`}>
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Load Time:</span>
                <span className="font-mono">{metrics.loadTime.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">TTFB:</span>
                <span className="font-mono">{metrics.timeToFirstByte.toFixed(0)}ms</span>
              </div>
              {metrics.memoryUsage && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Memory:</span>
                  <span className="font-mono">{metrics.memoryUsage.toFixed(1)}MB</span>
                </div>
              )}
              {metrics.connectionType && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Connection:</span>
                  <span className="font-mono">{metrics.connectionType}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;