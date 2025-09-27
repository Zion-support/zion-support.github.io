import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPain, t: number;
  firstContentfulPain, t: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToInteractive?: number;
}

interface PerformanceTrackerProps {
  onMetricsCollected?: (metrics: PerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  enableAnalytics?: boolean;
}

export default function PerformanceTracker({
  onMetricsCollected,
  enableConsoleLogging = false,
  enableAnalytics = true
}: PerformanceTrackerProps): null {
  const metricsCollected = useRef(false);

  const collectMetrics = useCallback(() => {
    if (metricsCollected.current || typeof window === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const metrics: PerformanceMetrics = {
        loadTim, e: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      };

      // Collect Web Vitals if available
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metrics.largestContentfulPaint = lastEntry.startTime;
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP not supported
        }

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID not supported
        }

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cumulativeLayoutShift = clsValue;
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS not supported
        }

        // Time to Interactive (TTI) approximation
        setTimeout(() => {
          const longTasks = performance.getEntriesByType('longtask');
          const lastLongTask = longTasks[longTasks.length - 1];
          metrics.timeToInteractive = lastLongTask ? lastLongTask.startTime + lastLongTask.duration : metrics.domContentLoaded;
          
          // Finalize metrics collection
          metricsCollected.current = true;
          
          if (enableConsoleLogging) {
            console.group('🚀 Performance Metrics');
            console.log('Load Time:', `${metrics.loadTime.toFixed(2)}ms`);
            console.log('DOM Content Loaded:', `${metrics.domContentLoaded.toFixed(2)}ms`);
            console.log('First Paint:', `${metrics.firstPaint.toFixed(2)}ms`);
            console.log('First Contentful Paint:', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
            if (metrics.largestContentfulPaint) {
              console.log('Largest Contentful Paint:', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
            }
            if (metrics.firstInputDelay) {
              console.log('First Input Delay:', `${metrics.firstInputDelay.toFixed(2)}ms`);
            }
            if (metrics.cumulativeLayoutShift) {
              console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
            }
            if (metrics.timeToInteractive) {
              console.log('Time to Interactive:', `${metrics.timeToInteractive.toFixed(2)}ms`);
            }
            console.groupEnd();
          }

          // Send to analytics
          if (enableAnalytics && typeof window !== 'undefined') {
            // Google Analytics 4
            if (window.gtag) {
              window.gtag('event', 'page_load_metrics', {
                load_time: Math.round(metrics.loadTime),
                dom_content_loaded: Math.round(metrics.domContentLoaded),
                first_paint: Math.round(metrics.firstPaint),
                first_contentful_paint: Math.round(metrics.firstContentfulPaint),
                largest_contentful_paint: metrics.largestContentfulPaint ? Math.round(metrics.largestContentfulPaint) : null,
                first_input_delay: metrics.firstInputDelay ? Math.round(metrics.firstInputDelay) : null,
                cumulative_layout_shift: metrics.cumulativeLayoutShift ? Math.round(metrics.cumulativeLayoutShift * 1000) : null,
                time_to_interactive: metrics.timeToInteractive ? Math.round(metrics.timeToInteractive) : null
              });
            }

            // Send Core Web Vitals
            if (metrics.largestContentfulPaint) {
              sendWebVital('LCP', metrics.largestContentfulPaint);
            }
            if (metrics.firstInputDelay) {
              sendWebVital('FID', metrics.firstInputDelay);
            }
            if (metrics.cumulativeLayoutShift) {
              sendWebVital('CLS', metrics.cumulativeLayoutShift);
            }
          }

          // Custom callback
          onMetricsCollected?.(metrics);
        }, 1000);
      }
    } catch (error) {
      console.warn('Performance tracking error:', error);
    }
  }, [onMetricsCollected, enableConsoleLogging, enableAnalytics]);

  const sendWebVital = (name: string, value: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true
      });
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  }, [collectMetrics]);

  return null;
}

// Hook for using performance metrics in components
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const handleMetrics = (collectedMetrics: PerformanceMetrics) => {
      setMetrics(collectedMetrics);
      setIsLoading(false);
    };

    // This would be rendered in the app
    // <PerformanceTracker onMetricsCollected={handleMetrics} />
    
    return () => {
      setIsLoading(false);
    };
  }, []);

  return { metrics, isLoading };
}

// Utility function to get performance grade
export function getPerformanceGrade(metrics: PerformanceMetrics): {
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  score: number;
  recommendations: string[];
  webVitals: {
    lcp: { valu, e: number; statu, s: 'good' | 'needs-improvement' | 'poor' };
    fid: { valu, e: number; statu, s: 'good' | 'needs-improvement' | 'poor' };
    cls: { valu, e: number; statu, s: 'good' | 'needs-improvement' | 'poor' };
  };
} {
  let score = 100;
  const recommendations: string[] = [];

  // Web Vitals status determination
  const webVitals = {
    lc, p: { 
      valu, e: metrics.largestContentfulPaint || 0, 
      status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    },
    fid: { 
      valu, e: metrics.firstInputDelay || 0, 
      status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    },
    cls: { 
      valu, e: metrics.cumulativeLayoutShift || 0, 
      status: 'good' as 'good' | 'needs-improvement' | 'poor' 
    }
  };

  // Load Time scoring (target: < 3000ms)
  if (metrics.loadTime > 5000) {
    score -= 30;
    recommendations.push('Optimize page load time (currently over 5 seconds)');
  } else if (metrics.loadTime > 3000) {
    score -= 15;
    recommendations.push('Consider optimizing page load time');
  }

  // First Contentful Paint scoring (target: < 1800ms)
  if (metrics.firstContentfulPaint > 3000) {
    score -= 25;
    recommendations.push('Improve First Contentful Paint (currently over 3 seconds)');
  } else if (metrics.firstContentfulPaint > 1800) {
    score -= 10;
    recommendations.push('Consider improving First Contentful Paint');
  }

  // Largest Contentful Paint scoring (target: < 2500ms)
  if (metrics.largestContentfulPaint) {
    if (metrics.largestContentfulPaint > 4000) {
      score -= 25;
      webVitals.lcp.status = 'poor';
      recommendations.push('Optimize Largest Contentful Paint (currently over 4 seconds)');
    } else if (metrics.largestContentfulPaint > 2500) {
      score -= 10;
      webVitals.lcp.status = 'needs-improvement';
      recommendations.push('Consider optimizing Largest Contentful Paint');
    } else {
      webVitals.lcp.status = 'good';
    }
  }

  // First Input Delay scoring (target: < 100ms)
  if (metrics.firstInputDelay) {
    if (metrics.firstInputDelay > 300) {
      score -= 20;
      webVitals.fid.status = 'poor';
      recommendations.push('Reduce First Input Delay (currently over 300ms)');
    } else if (metrics.firstInputDelay > 100) {
      score -= 5;
      webVitals.fid.status = 'needs-improvement';
      recommendations.push('Consider reducing First Input Delay');
    } else {
      webVitals.fid.status = 'good';
    }
  }

  // Cumulative Layout Shift scoring (target: < 0.1)
  if (metrics.cumulativeLayoutShift) {
    if (metrics.cumulativeLayoutShift > 0.25) {
      score -= 20;
      webVitals.cls.status = 'poor';
      recommendations.push('Fix layout shifts (CLS over 0.25)');
    } else if (metrics.cumulativeLayoutShift > 0.1) {
      score -= 10;
      webVitals.cls.status = 'needs-improvement';
      recommendations.push('Consider reducing layout shifts');
    } else {
      webVitals.cls.status = 'good';
    }
  }

  // Determine grade
  let grade: 'A' | 'B' | 'C' | 'D' | 'F';
  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else grade = 'F';

  return { grade, score: Math.max(0, score), recommendations, webVitals };
}

// Enhanced performance monitoring with real-time updates
export function useRealTimePerformance() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateMetrics = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const currentMetrics: PerformanceMetrics = {
          loadTim, e: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };

        setMetrics(currentMetrics);
      } catch (error) {
        console.warn('Real-time performance monitoring error:', error);
      }
    };

    // Initial metrics
    updateMetrics();

    // Monitor for changes
    const observer = new PerformanceObserver((list) => {
      updateMetrics();
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      setIsMonitoring(true);
    } catch (e) {
      console.warn('Performance observer not supported');
    }

    return () => {
      observer.disconnect();
      setIsMonitoring(false);
    };
  }, []);

  return { metrics, isMonitoring };
}