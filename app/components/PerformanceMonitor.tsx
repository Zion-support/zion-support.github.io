import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = process.env.NODE_ENV === 'production'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  useEffect(() => {
    if (!enableReporting) return;

    const updateMetrics = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      if (onMetricsUpdate) {
        onMetricsUpdate({
          ...metrics,
          [metric.name]: metric.value
        });
      }

      // Send to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }

        // Example: Send to custom analytics
        fetch('/api/analytics/performance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            id: metric.id,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
          })
        }).catch(console.error);
      }
    };

    // Measure Core Web Vitals
    getCLS(updateMetrics);
    getFID(updateMetrics);
    getFCP(updateMetrics);
    getLCP(updateMetrics);
    getTTFB(updateMetrics);

    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.warn('Long task detected:', entry.duration);
          
          if (process.env.NODE_ENV === 'production') {
            // Report long tasks
            fetch('/api/analytics/long-tasks', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                duration: entry.duration,
                startTime: entry.startTime,
                timestamp: Date.now(),
                url: window.location.href
              })
            }).catch(console.error);
          }
        }
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.log('Long task observer not supported');
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting, onMetricsUpdate, metrics]);

  // Monitor memory usage (if available)
  useEffect(() => {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected:', {
          used: memory.usedJSHeapSize,
          total: memory.jsHeapSizeLimit,
          percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
        });
      }
    };

    const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Monitor connection quality
  useEffect(() => {
    if (!('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    const logConnection = () => {
      console.log('Connection info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      });
    };

    logConnection();
    connection.addEventListener('change', logConnection);

    return () => {
      connection.removeEventListener('change', logConnection);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;