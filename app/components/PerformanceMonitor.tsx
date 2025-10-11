import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  useEffect(() => {
    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));

      // Send to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, metric.value);
      }
    };

    // Measure Core Web Vitals
    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('[Performance] Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 text-white text-xs font-mono z-50">
      <div className="mb-2 text-cyan-400 font-semibold">Performance Metrics</div>
      <div className="space-y-1">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key}:</span>
            <span className={getMetricColor(key, value)}>
              {value ? `${value.toFixed(2)}${getMetricUnit(key)}` : '...'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const getMetricColor = (metric: string, value: number | null): string => {
  if (value === null) return 'text-gray-500';
  
  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 },
  };

  const threshold = thresholds[metric as keyof typeof thresholds];
  if (!threshold) return 'text-white';

  if (value <= threshold.good) return 'text-green-400';
  if (value <= threshold.poor) return 'text-yellow-400';
  return 'text-red-400';
};

const getMetricUnit = (metric: string): string => {
  switch (metric) {
    case 'CLS': return '';
    case 'FID':
    case 'FCP':
    case 'LCP':
    case 'TTFB': return 'ms';
    default: return '';
  }
};

export default PerformanceMonitor;