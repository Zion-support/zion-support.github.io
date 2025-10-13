import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Measure Core Web Vitals
        getCLS((metric) => {
          setMetrics(prev => ({ ...prev, cls: metric.value }));
          console.log('CLS:', metric);
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prev, fid: metric.value }));
          console.log('FID:', metric);
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prev, fcp: metric.value }));
          console.log('FCP:', metric);
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prev, lcp: metric.value }));
          console.log('LCP:', metric);
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prev, ttfb: metric.value }));
          console.log('TTFB:', metric);
        });
      } catch (error) {
        console.warn('Failed to load web-vitals:', error);
      }
    };

    loadWebVitals();

    // Monitor memory usage if available
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
        });
      }
    };

    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);

    // Monitor page load performance
    const measurePageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page load metrics:', {
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    })

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor resource loading
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((resource: any) => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: any) => ({
          name: r.name,
          duration: Math.round(r.duration) + 'ms'
        })));
      }
    };

    // Monitor resources after a delay
    setTimeout(monitorResources, 5000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('load', measurePageLoad);
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode - show metrics
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <h3 className="font-bold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={`${metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div className={`${metrics.fid > 300 ? 'text-red-400' : metrics.fid > 100 ? 'text-yellow-400' : 'text-green-400'}`}>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls && (
          <div className={`${metrics.cls > 0.25 ? 'text-red-400' : metrics.cls > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.fcp && (
          <div className={`${metrics.fcp > 3000 ? 'text-red-400' : metrics.fcp > 1000 ? 'text-yellow-400' : 'text-green-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 600 ? 'text-yellow-400' : 'text-green-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  )
}

export default PerformanceMonitor;
import React, { useState, useEffect, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
  memoryUsage?: number;
  interactionToNextPaint?: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ showInProduction = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  }, []);

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    if (unit === '') return value.toFixed(4);
    return `${value.toFixed(0)}${unit}`;
  }, []);

  const updateMetrics = useCallback(() => {
    const newMetrics: PerformanceMetrics = {};

    // Load time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      newMetrics.loadTime = loadTime;
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    // Set up Web Vitals monitoring
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
    });

    // Initial metrics update
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, [showInProduction, updateMetrics]);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Performance Metrics</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Load Time:</span>
              <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
                {formatMetric(metrics.loadTime)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">First Contentful Paint:</span>
              <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
                {formatMetric(metrics.firstContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Largest Contentful Paint:</span>
              <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
                {formatMetric(metrics.largestContentfulPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Time to First Byte:</span>
              <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}>
                {formatMetric(metrics.timeToFirstByte)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Cumulative Layout Shift:</span>
              <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
                {formatMetric(metrics.cumulativeLayoutShift, '')}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Interaction to Next Paint:</span>
              <span className={getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}>
                {formatMetric(metrics.interactionToNextPaint)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Memory Usage:</span>
              <span className="text-blue-600">
                {formatMetric(metrics.memoryUsage, 'MB')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-0571
