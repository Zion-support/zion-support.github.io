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
  children: React.ReactNode;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false,
  reportEndpoint = '/api/metrics',
  children
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const reportMetric = useCallback(async (metric: any) => {
    if (!enableReporting) return;

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
        }),
      });
    } catch (error) {
      console.warn('Failed to report metric:', error);
    }
  }, [enableReporting, reportEndpoint]);

  useEffect(() => {
    // Only run in development or if explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !showInProduction) return;

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

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }));
      reportMetric(metric);
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
      reportMetric(metric);
    });

    // Monitor memory usage
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      };

      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsage, 5000);
      return () => clearInterval(interval);
    }

    // Monitor load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

  }, [showInProduction, reportMetric]);

  const formatMetric = (value: number | undefined, unit: string = 'ms') => {
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const getPerformanceScore = () => {
    const { firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift, firstInputDelay } = metrics;
    
    let score = 100;
    
    if (firstContentfulPaint && firstContentfulPaint > 1800) score -= 20;
    if (largestContentfulPaint && largestContentfulPaint > 2500) score -= 20;
    if (cumulativeLayoutShift && cumulativeLayoutShift > 0.1) score -= 20;
    if (firstInputDelay && firstInputDelay > 100) score -= 20;
    
    return Math.max(0, score);
  };

  const performanceScore = getPerformanceScore();

  return (
    <>
      {children}
      {(process.env.NODE_ENV === 'development' || showInProduction) && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-mono hover:bg-black/90 transition-colors"
          >
            Perf: {performanceScore}
          </button>
          
          {isVisible && (
            <div className="absolute bottom-12 right-0 bg-black/90 text-white p-4 rounded-lg text-xs font-mono min-w-64 max-w-80">
              <div className="space-y-1">
                <div>Load Time: {formatMetric(metrics.loadTime)}</div>
                <div>FCP: {formatMetric(metrics.firstContentfulPaint)}</div>
                <div>LCP: {formatMetric(metrics.largestContentfulPaint)}</div>
                <div>CLS: {formatMetric(metrics.cumulativeLayoutShift, '')}</div>
                <div>FID: {formatMetric(metrics.firstInputDelay)}</div>
                <div>TTFB: {formatMetric(metrics.timeToFirstByte)}</div>
                <div>Memory: {formatMetric(metrics.memoryUsage, 'MB')}</div>
                <div>INP: {formatMetric(metrics.interactionToNextPaint)}</div>
                <div className="pt-2 border-t border-gray-600">
                  <div>Score: {performanceScore}/100</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdvancedPerformanceMonitor;
