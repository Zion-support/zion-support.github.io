import React, { useEffect, useState, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToInteractive?: number;
  memoryUsage?: number;
  networkInfo?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  enableMemoryTracking?: boolean;
  enableNetworkTracking?: boolean;
  reportInterval?: number;
}

export default function PerformanceMonitor({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  enableMemoryTracking = true,
  enableNetworkTracking = true,
  reportInterval = 5000
}: PerformanceMonitorProps): null {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const collectInitialMetrics = useCallback(() => {
    if (typeof window === 'undefined') return null;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const initialMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      };

      // Memory usage (if available)
      if (enableMemoryTracking && 'memory' in performance) {
        const memory = (performance as any).memory;
        initialMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }

      // Network information (if available)
      if (enableNetworkTracking && 'connection' in navigator) {
        const connection = (navigator as any).connection;
        initialMetrics.networkInfo = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0
        };
      }

      return initialMetrics;
    } catch (error) {
      console.warn('Failed to collect initial performance metrics:', error);
      return null;
    }
  }, [enableMemoryTracking, enableNetworkTracking]);

  const collectWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => {
        const updated = { ...prev, ...newMetrics };
        onMetricsUpdate?.(updated);
        return updated;
      });
    };

    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        updateMetrics({ largestContentfulPaint: lastEntry.startTime });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          updateMetrics({ firstInputDelay: entry.processingStart - entry.startTime });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        updateMetrics({ cumulativeLayoutShift: clsValue });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }

    // Long Tasks (for TTI approximation)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastLongTask = entries[entries.length - 1];
        if (lastLongTask) {
          const tti = lastLongTask.startTime + lastLongTask.duration;
          updateMetrics({ timeToInteractive: tti });
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long tasks not supported
    }
  }, [onMetricsUpdate]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;

    setIsMonitoring(true);

    // Collect initial metrics
    const initialMetrics = collectInitialMetrics();
    if (initialMetrics) {
      setMetrics(initialMetrics);
      onMetricsUpdate?.(initialMetrics);
    }

    // Set up Web Vitals collection
    collectWebVitals();

    // Set up real-time monitoring
    if (enableRealTimeMonitoring) {
      intervalRef.current = setInterval(() => {
        const currentMetrics = collectInitialMetrics();
        if (currentMetrics) {
          setMetrics(prev => {
            const updated = { ...prev, ...currentMetrics };
            onMetricsUpdate?.(updated);
            return updated;
          });
        }
      }, reportInterval);
    }
  }, [isMonitoring, collectInitialMetrics, collectWebVitals, enableRealTimeMonitoring, reportInterval, onMetricsUpdate]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Start monitoring when component mounts
    startMonitoring();

    // Cleanup on unmount
    return () => {
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  // Performance grade calculation
  const getPerformanceGrade = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    const issues: string[] = [];

    // Load Time (target: < 3000ms)
    if (metrics.loadTime > 5000) {
      score -= 30;
      issues.push('Load time over 5 seconds');
    } else if (metrics.loadTime > 3000) {
      score -= 15;
      issues.push('Load time over 3 seconds');
    }

    // First Contentful Paint (target: < 1800ms)
    if (metrics.firstContentfulPaint > 3000) {
      score -= 25;
      issues.push('FCP over 3 seconds');
    } else if (metrics.firstContentfulPaint > 1800) {
      score -= 10;
      issues.push('FCP over 1.8 seconds');
    }

    // Largest Contentful Paint (target: < 2500ms)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) {
        score -= 25;
        issues.push('LCP over 4 seconds');
      } else if (metrics.largestContentfulPaint > 2500) {
        score -= 10;
        issues.push('LCP over 2.5 seconds');
      }
    }

    // First Input Delay (target: < 100ms)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) {
        score -= 20;
        issues.push('FID over 300ms');
      } else if (metrics.firstInputDelay > 100) {
        score -= 5;
        issues.push('FID over 100ms');
      }
    }

    // Cumulative Layout Shift (target: < 0.1)
    if (metrics.cumulativeLayoutShift) {
      if (metrics.cumulativeLayoutShift > 0.25) {
        score -= 20;
        issues.push('CLS over 0.25');
      } else if (metrics.cumulativeLayoutShift > 0.1) {
        score -= 10;
        issues.push('CLS over 0.1');
      }
    }

    const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
    
    return { grade, score: Math.max(0, score), issues };
  }, []);

  // Performance recommendations
  const getRecommendations = useCallback((metrics: PerformanceMetrics) => {
    const recommendations: string[] = [];

    if (metrics.loadTime > 3000) {
      recommendations.push('Optimize server response time and reduce bundle size');
    }

    if (metrics.firstContentfulPaint > 1800) {
      recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
    }

    if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and largest content element');
    }

    if (metrics.firstInputDelay && metrics.firstInputDelay > 100) {
      recommendations.push('Reduce JavaScript execution time and optimize main thread');
    }

    if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Fix layout shifts by reserving space for dynamic content');
    }

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {
      recommendations.push('Optimize memory usage and fix memory leaks');
    }

    return recommendations;
  }, []);

  return null;
}

// Hook for using performance metrics
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleMetricsUpdate = useCallback((newMetrics: PerformanceMetrics) => {
    setMetrics(newMetrics);
    setIsLoading(false);
  }, []);

  const monitor = PerformanceMonitor({
    onMetricsUpdate: handleMetricsUpdate,
    enableRealTimeMonitoring: true,
    enableMemoryTracking: true,
    enableNetworkTracking: true
  });

  return {
    ...monitor,
    metrics,
    isLoading
  };
}

// Performance optimization utilities
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Lazy load images
  lazyLoadImage: (img: HTMLImageElement, src: string) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
        }
      });
    });
    observer.observe(img);
  },

  // Preload critical resources
  preloadResource: (href: string, as: string) => {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
};