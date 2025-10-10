'use client';
import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const handleMetric = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Send to analytics service
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Measure Core Web Vitals
    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);

    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Send navigation timing to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_timing', {
              event_category: 'Performance',
              load_time: Math.round(navEntry.loadEventEnd - navEntry.loadEventStart),
              dom_content_loaded: Math.round(navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart),
              first_byte: Math.round(navEntry.responseStart - navEntry.requestStart),
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Monitor resource loading performance
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Log slow resources
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Monitor memory usage
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        
        // Log memory usage if it's high
        if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
          console.warn('High memory usage detected:', {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
          });
        }
      }
    };

    const interval = setInterval(checkMemoryUsage, 30000); // Check every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Monitor user interactions
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    let interactionCount = 0;
    let lastInteractionTime = Date.now();

    const handleInteraction = () => {
      interactionCount++;
      lastInteractionTime = Date.now();
    };

    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    // Send interaction data periodically
    const interval = setInterval(() => {
      if (interactionCount > 0) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'user_interaction', {
            event_category: 'Engagement',
            interaction_count: interactionCount,
            time_since_last: Date.now() - lastInteractionTime
          });
        }
        interactionCount = 0;
      }
    }, 60000); // Every minute

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
      clearInterval(interval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;