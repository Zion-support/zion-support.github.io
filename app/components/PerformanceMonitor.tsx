'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  cls: number | null;
  inp: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null
  });

  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000)
        });
      }
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'INP',
          value: Math.round(metric.value)
        });
      }
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value)
        });
      }
    });

    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value)
        });
      }
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value)
        });
      }
    });

    // Track page load time
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'page_load_time', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(loadTime)
          });
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0 && typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'slow_resources', {
            event_category: 'Performance',
            event_label: 'Slow Resources',
            value: slowResources.length
          });
        }
      }
    };

    // Track after a delay to allow resources to load
    const resourceTimer = setTimeout(trackResourcePerformance, 3000);

    return () => {
      clearTimeout(resourceTimer);
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);

  // Track user interactions for performance insights
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
        gtag('event', 'user_interaction', {
          event_category: 'Engagement',
          event_label: event.type,
          value: 1
        });
      }
    };

    // Track various user interactions
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, { passive: true });
    });

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteraction);
      });
    };
  }, []);

  // Monitor memory usage (if available)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemoryUsage = () => {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };

        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory Usage',
            value: Math.round(memoryUsage.used / 1024 / 1024) // Convert to MB
          });
        }
      };

      // Check memory usage every 30 seconds
      const memoryInterval = setInterval(checkMemoryUsage, 30000);
      return () => clearInterval(memoryInterval);
    }
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;