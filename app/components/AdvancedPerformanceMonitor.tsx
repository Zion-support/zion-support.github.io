import React, { useState, useEffect, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface AdvancedPerformanceMonitorProps {
  showInProduction?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  showInProduction = false,
  enableReporting = false,
  reportEndpoint = '/api/performance'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToFirstByte: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const reportMetric = useCallback(async (metric: any) => {
    if (!enableReporting) return;

    try {
      const payload = {
        name: metric.name || 'custom',
        value: metric.value || metric,
        delta: metric.delta || 0,
        id: metric.id || 'unknown',
        navigationType: metric.navigationType || 'unknown',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      await fetch(reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.warn('Failed to report metric:', error);
    }
  }, [enableReporting, reportEndpoint]);

  useEffect(() => {
    // Only run in development or if explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !showInProduction) return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      getFCP((metric) => {
        setMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
        reportMetric(metric);
      });

      getLCP((metric) => {
        setMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
        reportMetric(metric);
      });

      getFID((metric) => {
        setMetrics(prev => ({ ...prev, firstInputDelay: metric.value }));
        reportMetric(metric);
      });

      getCLS((metric) => {
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
        reportMetric(metric);
      });

      getTTFB((metric) => {
        setMetrics(prev => ({ ...prev, timeToFirstByte: metric.value }));
        reportMetric(metric);
      });
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [showInProduction, reportMetric]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number, unit: string = 'ms') => {
    return `${Math.round(value)}${unit}`;
  };

  if (!isVisible && process.env.NODE_ENV === 'development') {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-full shadow-lg transition-colors"
        title="Show Performance Monitor"
      >
        📊
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 shadow-xl max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-cyan-400">Performance Monitor</h3>
        <button
          onClick={toggleVisibility}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
            {formatValue(metrics.firstContentfulPaint)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
            {formatValue(metrics.largestContentfulPaint)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
            {formatValue(metrics.firstInputDelay)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getScoreColor(metrics.timeToFirstByte, { good: 800, needsImprovement: 1800 })}>
            {formatValue(metrics.timeToFirstByte)}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          {enableReporting ? '📡 Reporting enabled' : '📡 Reporting disabled'}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;