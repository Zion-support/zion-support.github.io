'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
  loadTime: number | null;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            setMetrics(prev => ({ ...prev, cls: metric.value }));
          });
          
          getFID((metric) => {
            setMetrics(prev => ({ ...prev, fid: metric.value }));
          });
          
          getFCP((metric) => {
            setMetrics(prev => ({ ...prev, fcp: metric.value }));
          });
          
          getLCP((metric) => {
            setMetrics(prev => ({ ...prev, lcp: metric.value }));
          });
          
          getTTFB((metric) => {
            setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          });
        });
      }
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Measure page load time
    const measureLoadTime = () => {
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      });
    };

    // Report metrics to analytics
    const reportMetric = (metric: string, value: number) => {
      // Analytics reporting would go here
      console.log(`Performance metric: ${metric} = ${value}`);
    };

    measureWebVitals();
    measureMemory();
    measureLoadTime();

    // Set up periodic memory monitoring
    const interval = setInterval(measureMemory, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getMetricColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Toggle performance monitor"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {isVisible && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Performance Monitor
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">First Contentful Paint</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
                {formatMetric(metrics.fcp)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Largest Contentful Paint</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
                {formatMetric(metrics.lcp)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">First Input Delay</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.fid, { good: 100, poor: 300 })}`}>
                {formatMetric(metrics.fid)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Cumulative Layout Shift</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
                {formatMetric(metrics.cls, '')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Time to First Byte</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.ttfb, { good: 600, poor: 1500 })}`}>
                {formatMetric(metrics.ttfb)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</span>
              <span className="text-sm font-mono text-blue-500">
                {formatMetric(metrics.memory, 'MB')}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Load Time</span>
              <span className={`text-sm font-mono ${getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}`}>
                {formatMetric(metrics.loadTime)}
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
