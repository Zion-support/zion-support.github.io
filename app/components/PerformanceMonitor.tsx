import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
}

interface PerformanceMonitorProps {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableConsoleLogging = false,
  enableReporting = true,
  reportInterval = 5000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
  });

  const [performanceScore, setPerformanceScore] = useState(0);

  const updateMetrics = useCallback(() => {
    const currentMetrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      memoryUsage: 0,
    };

    // Get memory usage if available
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      currentMetrics.memoryUsage = memory.usedJSHeapSize / (1024 * 1024); // Convert to MB
    }

    setMetrics(currentMetrics);
  }, []);

  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (currentMetrics.lcp !== null) {
      if (currentMetrics.lcp > 4000) score -= 20;
      else if (currentMetrics.lcp > 2500) score -= 10;
    }
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (currentMetrics.fid !== null) {
      if (currentMetrics.fid > 300) score -= 20;
      else if (currentMetrics.fid > 100) score -= 10;
    }
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls > 0.25) score -= 20;
      else if (currentMetrics.cls > 0.1) score -= 10;
    }
    
    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (currentMetrics.fcp !== null) {
      if (currentMetrics.fcp > 3000) score -= 15;
      else if (currentMetrics.fcp > 1800) score -= 8;
    }
    
    // TTFB scoring (Good: <800ms, Needs Improvement: 800-1800ms, Poor: >1800ms)
    if (currentMetrics.ttfb !== null) {
      if (currentMetrics.ttfb > 1800) score -= 15;
      else if (currentMetrics.ttfb > 800) score -= 8;
    }
    
    // Memory usage scoring
    if (currentMetrics.memoryUsage > 50) score -= 10;
    else if (currentMetrics.memoryUsage > 30) score -= 5;
    
    return Math.max(0, score);
  }, []);

  const measureWebVitals = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // TTFB - Time to First Byte
      const ttfbObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: entry.responseStart - entry.requestStart 
          }));
        });
      });
      ttfbObserver.observe({ entryTypes: ['navigation'] });

    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }, []);

  const reportMetrics = useCallback((currentMetrics: PerformanceMetrics, score: number) => {
    if (!enableReporting) return;

    const report = {
      timestamp: new Date().toISOString(),
      metrics: currentMetrics,
      score,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    if (enableConsoleLogging) {
      console.log('Performance Report:', report);
    }

    // In a real application, you would send this data to your analytics service
    // Example: analytics.track('performance_metrics', report);
  }, [enableReporting, enableConsoleLogging]);

  useEffect(() => {
    // Initial metrics update
    updateMetrics();

    // Set up performance observers
    measureWebVitals();

    // Set up interval for continuous monitoring
    const interval = setInterval(() => {
      updateMetrics();
    }, reportInterval);

    // Report metrics after page load
    const handleLoad = () => {
      setTimeout(() => {
        const currentMetrics = metrics;
        const score = getPerformanceScore(currentMetrics);
        setPerformanceScore(score);
        reportMetrics(currentMetrics, score);
      }, 2000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, [updateMetrics, measureWebVitals, reportInterval, getPerformanceScore, reportMetrics, metrics]);

  // Update score when metrics change
  useEffect(() => {
    const score = getPerformanceScore(metrics);
    setPerformanceScore(score);
  }, [metrics, getPerformanceScore]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;