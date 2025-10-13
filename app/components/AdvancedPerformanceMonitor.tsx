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
  totalBlockingTime?: number;
  speedIndex?: number;
}

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({ 
  showInProduction = false,
  enableReporting = true,
  reportEndpoint = '/api/performance'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isCollecting, setIsCollecting] = useState(true);

  const getMetricColor = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const getMetricStatus = useCallback((value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  }, []);

  const formatMetric = useCallback((value: number | undefined, unit: string = 'ms') => {
    if (value === undefined || value === null) return 'N/A';
    if (unit === 'ms') return `${value.toFixed(0)}${unit}`;
    if (unit === 'MB') return `${value.toFixed(1)}${unit}`;
    return `${value.toFixed(2)}${unit}`;
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

    // Navigation timing
    if (performance.timing) {
      const timing = performance.timing;
      newMetrics.timeToFirstByte = timing.responseStart - timing.navigationStart;
    }

    setMetrics(prev => ({ ...prev, ...newMetrics }));
  }, []);

  const reportMetric = useCallback(async (metric: any) => {
    if (!enableReporting || process.env.NODE_ENV === 'development') return;

    try {
      await fetch(reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.warn('Failed to report metric:', error);
    }
  }, [enableReporting, reportEndpoint]);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: entry.startTime }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, firstInputDelay: (entry as any).processingStart - entry.startTime }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cumulativeLayoutShift: (entry as any).value }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, timeToFirstByte: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // Measure memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize / 1024 / 1024 }));
      }

      // Measure load time
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        setMetrics(prev => ({ ...prev, loadTime }));
      });
    };

    // Set up Web Vitals monitoring
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
      reportMetric(metric);
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
      reportMetric(metric);
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
      reportMetric(metric);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
      reportMetric(metric);
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, interactionToNextPaint: metric.value }));
      reportMetric(metric);
    });

    // Initial metrics update
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Stop collecting after 30 seconds
    const stopCollecting = setTimeout(() => {
      setIsCollecting(false);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopCollecting);
    };
  }, [showInProduction, updateMetrics, reportMetric]);

  // Don't render in production unless explicitly enabled
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 text-white px-3 py-2 rounded-lg text-xs font-mono hover:bg-black/90 transition-colors"
      >
        Perf {isCollecting ? '●' : '○'}
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-black/90 text-white p-4 rounded-lg text-xs font-mono min-w-64 max-w-96">
          <div className="space-y-2">
            <div className="font-bold text-cyan-400 mb-2">Performance Metrics</div>
            
            {metrics.loadTime && (
              <div className="flex justify-between">
                <span>Load Time:</span>
                <span className={getMetricColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
                  {formatMetric(metrics.loadTime)} ({getMetricStatus(metrics.loadTime, { good: 2000, poor: 4000 })})
                </span>
              </div>
            )}
            
            {metrics.firstContentfulPaint && (
              <div className="flex justify-between">
                <span>FCP:</span>
                <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
                  {formatMetric(metrics.firstContentfulPaint)} ({getMetricStatus(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })})
                </span>
              </div>
            )}
            
            {metrics.largestContentfulPaint && (
              <div className="flex justify-between">
                <span>LCP:</span>
                <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
                  {formatMetric(metrics.largestContentfulPaint)} ({getMetricStatus(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })})
                </span>
              </div>
            )}
            
            {metrics.cumulativeLayoutShift && (
              <div className="flex justify-between">
                <span>CLS:</span>
                <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
                  {formatMetric(metrics.cumulativeLayoutShift, '')} ({getMetricStatus(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })})
                </span>
              </div>
            )}
            
            {metrics.timeToFirstByte && (
              <div className="flex justify-between">
                <span>TTFB:</span>
                <span className={getMetricColor(metrics.timeToFirstByte, { good: 800, poor: 1800 })}>
                  {formatMetric(metrics.timeToFirstByte)} ({getMetricStatus(metrics.timeToFirstByte, { good: 800, poor: 1800 })})
                </span>
              </div>
            )}
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory:</span>
                <span className={getMetricColor(metrics.memoryUsage, { good: 50, poor: 100 })}>
                  {formatMetric(metrics.memoryUsage, 'MB')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;