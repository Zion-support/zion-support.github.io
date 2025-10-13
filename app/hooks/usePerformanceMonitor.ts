import { useEffect, useState, useCallback } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  loadTime?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  interactionToNextPaint?: number;
  cumulativeLayoutShift?: number;
  timeToFirstByte?: number;
}

interface UsePerformanceMonitorOptions {
  enabled?: boolean;
  onMetricUpdate?: (metric: PerformanceMetrics) => void;
  debug?: boolean;
}

export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = {}) => {
  const { enabled = true, onMetricUpdate, debug = false } = options;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  const updateMetric = useCallback((metric: any) => {
    if (!enabled) return;

    const metricName = metric.name === 'CLS' ? 'cumulativeLayoutShift' : 
                      metric.name === 'INP' ? 'interactionToNextPaint' :
                      metric.name === 'FCP' ? 'firstContentfulPaint' :
                      metric.name === 'LCP' ? 'largestContentfulPaint' :
                      metric.name === 'TTFB' ? 'timeToFirstByte' : 'loadTime';

    setMetrics(prev => {
      const newMetrics = {
        ...prev,
        [metricName]: metric.value
      };
      
      onMetricUpdate?.(newMetrics);
      
      if (debug) {
        console.log(`Performance metric updated: ${metricName}`, metric.value);
      }
      
      return newMetrics;
    });
  }, [enabled, onMetricUpdate, debug]);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Measure Core Web Vitals
    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        updateMetric({ name: 'loadTime', value: loadTime });
      }
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
  }, [enabled, updateMetric]);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMetricStatus = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return {
    metrics,
    isVisible,
    toggleVisibility,
    getMetricColor,
    getMetricStatus
  };
};
