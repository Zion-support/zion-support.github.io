'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
}

interface PerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean;
  enableCoreWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableUserTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  enableCoreWebVitals = true,
  enableResourceTiming = true,
  enableUserTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  reportInterval = 5000,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null,
    firstPaint: null,
    firstContentfulPaint: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  // Core Web Vitals monitoring
  const measureCoreWebVitals = useCallback(() => {
    if (!enableCoreWebVitals || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            break;
          case 'first-input':
            const fid = (entry as any).processingStart - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
            }
            break;
          case 'paint':
            if (entry.name === 'first-paint') {
              setMetrics(prev => ({ ...prev, firstPaint: entry.startTime }));
            } else if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
            }
            break;
        }
      }
    });

    try {
      observer.observe({ 
        entryTypes: [
          'largest-contentful-paint', 
          'first-input', 
          'layout-shift',
          'paint'
        ] 
      });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }, [enableCoreWebVitals]);

  // Navigation timing
  const measureNavigationTiming = useCallback(() => {
    if (!enableResourceTiming) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart
      }));
    }
  }, [enableResourceTiming]);

  // Resource timing
  const measureResourceTiming = useCallback(() => {
    if (!enableResourceTiming) return;

    const resources = performance.getEntriesByType('resource');
    let totalSize = 0;
    let slowResources = 0;

    resources.forEach((resource: any) => {
      totalSize += resource.transferSize || 0;
      if (resource.duration > 1000) {
        slowResources++;
      }
    });

    // Track resource performance
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'resource_performance', {
        event_category: 'Performance',
        event_label: 'Resource Analysis',
        value: totalSize,
        custom_parameter_1: slowResources
      });
    }
  }, [enableResourceTiming]);

  // Memory monitoring
  const measureMemoryUsage = useCallback(() => {
    if (!enableMemoryMonitoring || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const memoryUsage = {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit
    };

    // Track memory usage
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'memory_usage', {
        event_category: 'Performance',
        event_label: 'Memory Usage',
        value: Math.round(memoryUsage.used / 1024 / 1024) // Convert to MB
      });
    }
  }, [enableMemoryMonitoring]);

  // Network monitoring
  const measureNetworkPerformance = useCallback(() => {
    if (!enableNetworkMonitoring || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    if (connection) {
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };

      // Track network performance
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'network_performance', {
          event_category: 'Performance',
          event_label: 'Network Info',
          value: networkInfo.downlink,
          custom_parameter_1: networkInfo.effectiveType,
          custom_parameter_2: networkInfo.rtt
        });
      }
    }
  }, [enableNetworkMonitoring]);

  // User timing marks
  const measureUserTiming = useCallback(() => {
    if (!enableUserTiming) return;

    // Mark important events
    performance.mark('performance-monitor-start');
    
    // Measure time to interactive
    const interactiveTime = performance.now();
    performance.mark('performance-monitor-interactive');
    performance.measure('time-to-interactive', 'performance-monitor-start', 'performance-monitor-interactive');

    // Track user timing
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'user_timing', {
        event_category: 'Performance',
        event_label: 'Time to Interactive',
        value: Math.round(interactiveTime)
      });
    }
  }, [enableUserTiming]);

  // Real-time monitoring
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const interval = setInterval(() => {
      measureMemoryUsage();
      measureNetworkPerformance();
    }, reportInterval);

    return () => clearInterval(interval);
  }, [enableRealTimeMonitoring, reportInterval, measureMemoryUsage, measureNetworkPerformance]);

  // Initial measurements
  useEffect(() => {
    const initializeMonitoring = () => {
      setIsMonitoring(true);
      
      // Measure core web vitals
      measureCoreWebVitals();
      
      // Measure navigation timing after page load
      if (document.readyState === 'complete') {
        measureNavigationTiming();
        measureResourceTiming();
        measureUserTiming();
      } else {
        window.addEventListener('load', () => {
          measureNavigationTiming();
          measureResourceTiming();
          measureUserTiming();
        });
      }
    };

    initializeMonitoring();
  }, [measureCoreWebVitals, measureNavigationTiming, measureResourceTiming, measureUserTiming]);

  // Report metrics
  useEffect(() => {
    if (onMetricsUpdate && isMonitoring) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate, isMonitoring]);

  // Performance budget monitoring
  useEffect(() => {
    const checkPerformanceBudget = () => {
      const budget = {
        lcp: 2500, // 2.5s
        fid: 100,  // 100ms
        cls: 0.1,  // 0.1
        fcp: 1800, // 1.8s
        ttfb: 600  // 600ms
      };

      const violations = [];
      
      if (metrics.lcp && metrics.lcp > budget.lcp) {
        violations.push(`LCP: ${metrics.lcp}ms (budget: ${budget.lcp}ms)`);
      }
      if (metrics.fid && metrics.fid > budget.fid) {
        violations.push(`FID: ${metrics.fid}ms (budget: ${budget.fid}ms)`);
      }
      if (metrics.cls && metrics.cls > budget.cls) {
        violations.push(`CLS: ${metrics.cls} (budget: ${budget.cls})`);
      }
      if (metrics.fcp && metrics.fcp > budget.fcp) {
        violations.push(`FCP: ${metrics.fcp}ms (budget: ${budget.fcp}ms)`);
      }
      if (metrics.ttfb && metrics.ttfb > budget.ttfb) {
        violations.push(`TTFB: ${metrics.ttfb}ms (budget: ${budget.ttfb}ms)`);
      }

      if (violations.length > 0) {
        console.warn('Performance budget violations:', violations);
        
        // Track violations
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as any).gtag('event', 'performance_budget_violation', {
            event_category: 'Performance',
            event_label: 'Budget Violation',
            value: violations.length,
            custom_parameter_1: violations.join('; ')
          });
        }
      }
    };

    if (isMonitoring) {
      checkPerformanceBudget();
    }
  }, [metrics, isMonitoring]);

  // Performance recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      const recommendations = [];

      if (metrics.lcp && metrics.lcp > 4000) {
        recommendations.push('Consider optimizing images and reducing server response time for better LCP');
      }
      if (metrics.fid && metrics.fid > 100) {
        recommendations.push('Consider reducing JavaScript execution time for better FID');
      }
      if (metrics.cls && metrics.cls > 0.25) {
        recommendations.push('Consider adding size attributes to images and avoiding dynamic content insertion');
      }
      if (metrics.ttfb && metrics.ttfb > 800) {
        recommendations.push('Consider optimizing server response time and using a CDN');
      }

      if (recommendations.length > 0) {
        console.info('Performance recommendations:', recommendations);
      }
    };

    if (isMonitoring) {
      generateRecommendations();
    }
  }, [metrics, isMonitoring]);

  return null;
};

export default PerformanceMonitor;