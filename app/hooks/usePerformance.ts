import { useEffect, useState, useCallback } from 'react';
import { getPerformanceTracker, PerformanceMetrics } from '../utils/performance';

export interface UsePerformanceOptions {
  trackWebVitals?: boolean;
  trackNavigation?: boolean;
  trackResources?: boolean;
  reportInterval?: number;
}

export const usePerformance = (options: UsePerformanceOptions = {}) => {
  const {
    trackWebVitals = true,
    trackNavigation = true,
    trackResources = true,
    reportInterval = 5000
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isTracking, setIsTracking] = useState(false);

  const tracker = getPerformanceTracker();

  const updateMetrics = useCallback(() => {
    const currentMetrics = tracker.getMetrics();
    setMetrics(currentMetrics);
  }, [tracker]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setIsTracking(true);

    // Update metrics immediately
    updateMetrics();

    // Set up interval for periodic updates
    const interval = setInterval(updateMetrics, reportInterval);

    return () => {
      clearInterval(interval);
      setIsTracking(false);
    };
  }, [updateMetrics, reportInterval]);

  const getMetricValue = useCallback((metricName: keyof PerformanceMetrics) => {
    return metrics[metricName];
  }, [metrics]);

  const isMetricGood = useCallback((metricName: keyof PerformanceMetrics) => {
    const value = metrics[metricName];
    if (value === undefined) return null;

    // Core Web Vitals thresholds
    switch (metricName) {
      case 'cls':
        return value <= 0.1; // Good: ≤ 0.1, Needs Improvement: ≤ 0.25, Poor: > 0.25
      case 'fcp':
        return value <= 1800; // Good: ≤ 1.8s, Needs Improvement: ≤ 3.0s, Poor: > 3.0s
      case 'lcp':
        return value <= 2500; // Good: ≤ 2.5s, Needs Improvement: ≤ 4.0s, Poor: > 4.0s
      case 'ttfb':
        return value <= 800; // Good: ≤ 800ms, Needs Improvement: ≤ 1800ms, Poor: > 1800ms
      case 'inp':
        return value <= 200; // Good: ≤ 200ms, Needs Improvement: ≤ 500ms, Poor: > 500ms
      default:
        return null;
    }
  }, [metrics]);

  const getPerformanceScore = useCallback(() => {
    const metricNames: (keyof PerformanceMetrics)[] = ['cls', 'fcp', 'lcp', 'ttfb', 'inp'];
    const scores = metricNames
      .map(name => isMetricGood(name))
      .filter(score => score !== null) as boolean[];
    
    if (scores.length === 0) return null;
    
    const goodCount = scores.filter(score => score).length;
    return Math.round((goodCount / scores.length) * 100);
  }, [isMetricGood]);

  const getPerformanceReport = useCallback(() => {
    const score = getPerformanceScore();
    const report = {
      score,
      metrics,
      isTracking,
      recommendations: [] as string[]
    };

    // Generate recommendations based on metrics
    if (metrics.lcp && metrics.lcp > 2500) {
      report.recommendations.push('Consider optimizing images and reducing server response time for better LCP');
    }
    if (metrics.fcp && metrics.fcp > 1800) {
      report.recommendations.push('Optimize critical rendering path and reduce render-blocking resources for better FCP');
    }
    if (metrics.cls && metrics.cls > 0.1) {
      report.recommendations.push('Ensure images and ads have size attributes to prevent layout shifts');
    }
    if (metrics.ttfb && metrics.ttfb > 800) {
      report.recommendations.push('Improve server response time and consider using a CDN');
    }
    if (metrics.inp && metrics.inp > 200) {
      report.recommendations.push('Optimize JavaScript execution and reduce main thread blocking time');
    }

    return report;
  }, [metrics, isTracking, getPerformanceScore]);

  return {
    metrics,
    isTracking,
    getMetricValue,
    isMetricGood,
    getPerformanceScore,
    getPerformanceReport,
    updateMetrics
  };
};