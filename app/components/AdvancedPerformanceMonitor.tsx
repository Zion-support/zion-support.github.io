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
    // Only show in development or if explicitly enabled
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

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

  const getOverallScore = () => {
    const scores = [];
    
    if (metrics.largestContentfulPaint) {
      scores.push(metrics.largestContentfulPaint <= 2500 ? 100 : metrics.largestContentfulPaint <= 4000 ? 50 : 0);
    }
    if (metrics.firstInputDelay) {
      scores.push(metrics.firstInputDelay <= 100 ? 100 : metrics.firstInputDelay <= 300 ? 50 : 0);
    }
    if (metrics.cumulativeLayoutShift) {
      scores.push(metrics.cumulativeLayoutShift <= 0.1 ? 100 : metrics.cumulativeLayoutShift <= 0.25 ? 50 : 0);
    }
    
    if (scores.length === 0) return 'N/A';
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };

  const overallScore = getOverallScore();
  const scoreColor = overallScore === 'N/A' ? 'text-gray-400' : 
                    overallScore >= 90 ? 'text-green-400' : 
                    overallScore >= 50 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
      >
        <div className={`w-2 h-2 rounded-full ${isCollecting ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
        Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-96 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
            <div className={`text-sm font-medium ${scoreColor}`}>
              Score: {overallScore}
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            {/* Core Web Vitals */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Core Web Vitals</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Largest Contentful Paint:</span>
                  <div className="text-right">
                    <span className={getMetricColor(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}>
                      {formatMetric(metrics.largestContentfulPaint)}
                    </span>
                    <div className="text-xs text-gray-500">
                      {getMetricStatus(metrics.largestContentfulPaint || 0, { good: 2500, poor: 4000 })}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">First Input Delay:</span>
                  <div className="text-right">
                    <span className={getMetricColor(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}>
                      {formatMetric(metrics.firstInputDelay)}
                    </span>
                    <div className="text-xs text-gray-500">
                      {getMetricStatus(metrics.firstInputDelay || 0, { good: 100, poor: 300 })}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Cumulative Layout Shift:</span>
                  <div className="text-right">
                    <span className={getMetricColor(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}>
                      {formatMetric(metrics.cumulativeLayoutShift, '')}
                    </span>
                    <div className="text-xs text-gray-500">
                      {getMetricStatus(metrics.cumulativeLayoutShift || 0, { good: 0.1, poor: 0.25 })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">First Contentful Paint:</span>
                <span className={getMetricColor(metrics.firstContentfulPaint || 0, { good: 1800, poor: 3000 })}>
                  {formatMetric(metrics.firstContentfulPaint)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Time to First Byte:</span>
                <span className={getMetricColor(metrics.timeToFirstByte || 0, { good: 800, poor: 1800 })}>
                  {formatMetric(metrics.timeToFirstByte)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Interaction to Next Paint:</span>
                <span className={getMetricColor(metrics.interactionToNextPaint || 0, { good: 200, poor: 500 })}>
                  {formatMetric(metrics.interactionToNextPaint)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Load Time:</span>
                <span className={getMetricColor(metrics.loadTime || 0, { good: 2000, poor: 4000 })}>
                  {formatMetric(metrics.loadTime)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Memory Usage:</span>
                <span className="text-blue-400">
                  {formatMetric(metrics.memoryUsage, 'MB')}
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Status: {isCollecting ? 'Collecting...' : 'Complete'}</span>
                <span>Mode: {process.env.NODE_ENV}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;
