'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  overallScore: number;
}

interface EnhancedPerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  enableRealTimeMonitoring = false,
  onMetricsUpdate,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600,
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    overallScore: 0,
  });

  const calculateScore = useCallback((metricValue: number | null, threshold: number, isLowerBetter: boolean = true): number => {
    if (metricValue === null) return 0;
    
    if (isLowerBetter) {
      return metricValue <= threshold ? 100 : Math.max(0, 100 - ((metricValue - threshold) / threshold) * 100);
    } else {
      return metricValue >= threshold ? 100 : Math.max(0, (metricValue / threshold) * 100);
    }
  }, []);

  const calculateOverallScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    const scores = [
      calculateScore(currentMetrics.fcp, threshold.fcp),
      calculateScore(currentMetrics.lcp, threshold.lcp),
      calculateScore(currentMetrics.fid, threshold.fid),
      calculateScore(currentMetrics.cls, threshold.cls, true),
      calculateScore(currentMetrics.ttfb, threshold.ttfb),
    ].filter(score => score > 0);

    return scores.length > 0 ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
  }, [calculateScore, threshold]);

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const entryName = entry.name;
        const entryValue = entry.startTime;

        setMetrics(prevMetrics => {
          let newMetrics = { ...prevMetrics };

          switch (entryName) {
            case 'first-contentful-paint':
              newMetrics.fcp = entryValue;
              break;
            case 'largest-contentful-paint':
              newMetrics.lcp = entryValue;
              break;
            case 'first-input-delay':
              newMetrics.fid = entryValue;
              break;
            case 'cumulative-layout-shift':
              newMetrics.cls = entryValue;
              break;
            case 'time-to-first-byte':
              newMetrics.ttfb = entryValue;
              break;
            case 'first-meaningful-paint':
              newMetrics.fmp = entryValue;
              break;
          }

          const overallScore = calculateOverallScore(newMetrics);
          newMetrics.overallScore = overallScore;

          if (onMetricsUpdate) {
            onMetricsUpdate(newMetrics);
          }

          return newMetrics;
        });
      }
    });

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    return () => observer.disconnect();
  }, [onMetricsUpdate, calculateOverallScore]);

  const measureResourceTiming = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const resources = performance.getEntriesByType('resource');
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    if (navigation) {
      setMetrics(prevMetrics => {
        const newMetrics = {
          ...prevMetrics,
          ttfb: navigation.responseStart - navigation.requestStart,
        };
        
        const overallScore = calculateOverallScore(newMetrics);
        newMetrics.overallScore = overallScore;

        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics);
        }

        return newMetrics;
      });
    }
  }, [onMetricsUpdate, calculateOverallScore]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();
    measureResourceTiming();

    // Measure metrics periodically
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [enableRealTimeMonitoring, measureWebVitals, measureResourceTiming]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}</div>
        <div className="font-bold text-green-400">
          Score: {metrics.overallScore}/100
        </div>
      </div>
    </div>
  );
};

export default EnhancedPerformanceMonitor;