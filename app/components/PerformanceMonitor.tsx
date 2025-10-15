import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number;
  inp: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  logToConsole?: boolean;
  logToAnalytics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  logToConsole = false,
  logToAnalytics = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: 0,
    inp: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const logger = {
      performance: (name: string, value: number, details?: any) => {
        if (logToConsole) {
          console.log(`[Performance] ${name}:`, value, details);
        }
      }
    };

    // Cumulative Layout Shift
    onCLS((metric) => {
      logger.performance('CLS', metric.value, { metric: 'CLS', value: metric.value });
      if (logToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    // Interaction to Next Paint
    onINP((metric) => {
      logger.performance('INP', metric.value, { metric: 'INP', value: metric.value });
      if (logToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    // First Contentful Paint
    onFCP((metric) => {
      logger.performance('FCP', metric.value, { metric: 'FCP', value: metric.value });
      if (logToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    // Largest Contentful Paint
    onLCP((metric) => {
      logger.performance('LCP', metric.value, { metric: 'LCP', value: metric.value });
      if (logToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    // Time to First Byte
    onTTFB((metric) => {
      logger.performance('TTFB', metric.value, { metric: 'TTFB', value: metric.value });
      if (logToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

  }, [enabled, logToConsole, logToAnalytics]);

  const getScoreColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatValue = (value: number, unit: string = 'ms') => {
    if (unit === 'ms') return `${Math.round(value)}ms`;
    return `${value.toFixed(3)}`;
  };

  if (!enabled) return null;

  return (
    <>
      {/* Performance Monitor Toggle */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Toggle performance monitor"
          title="Performance Monitor"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>

        {isVisible && (
          <div className="absolute bottom-16 left-0 bg-slate-800 text-white p-4 rounded-lg shadow-xl min-w-80">
            <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">CLS (Cumulative Layout Shift)</span>
                <span className={`text-sm font-mono ${getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}`}>
                  {formatValue(metrics.cls, '')}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">INP (Interaction to Next Paint)</span>
                <span className={`text-sm font-mono ${getScoreColor(metrics.inp, { good: 200, needsImprovement: 500 })}`}>
                  {formatValue(metrics.inp)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">FCP (First Contentful Paint)</span>
                <span className={`text-sm font-mono ${getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                  {formatValue(metrics.fcp)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">LCP (Largest Contentful Paint)</span>
                <span className={`text-sm font-mono ${getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                  {formatValue(metrics.lcp)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">TTFB (Time to First Byte)</span>
                <span className={`text-sm font-mono ${getScoreColor(metrics.ttfb, { good: 800, needsImprovement: 1800 })}`}>
                  {formatValue(metrics.ttfb)}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-600 text-xs text-gray-400">
              Press F12 for more details
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PerformanceMonitor;