import React, { useEffect, useState } from 'react';
import performanceOptimizer, { WebVitalsMetrics } from '../utils/performanceOptimizer';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true,
  enableLongTaskMonitoring = true 
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);

  useEffect(() => {
    // Initialize performance monitoring
    // Add critical resource hints for performance optimization
    performanceOptimizer.prefetchResources([]);
    performanceOptimizer.preconnectDomains([]);
    // Add critical resource hints manually
    if (typeof document !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];
      
      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      });
    }
    
    // Measure page load performance
    const pageLoadMetrics = performanceOptimizer.measurePageLoad();
    if (pageLoadMetrics) {
      setMetrics(pageLoadMetrics);
      if (enableReporting) {
        performanceOptimizer.reportWebVitals(pageLoadMetrics);
      }
    }

    // Monitor long tasks if enabled
    if (enableLongTaskMonitoring) {
      const observer = performanceOptimizer.monitorLongTasks((entries: PerformanceEntryList) => {
        setLongTasks(prev => [...prev, ...entries]);
        console.warn('Long tasks detected:', entries);
      });
      
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [enableReporting, enableLongTaskMonitoring]);

  // Monitor Web Vitals using Performance Observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, LCP: lcp }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ LCP: lcp });
          }
        }
        
        if (entry.entryType === 'first-input') {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, FID: fid }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ FID: fid });
          }
        }
        
        if (entry.entryType === 'layout-shift') {
          const cls = (entry as any).value;
          setMetrics(prev => ({ ...prev, CLS: cls }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ CLS: cls });
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported:', e);
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  // Development mode: Log performance metrics
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);
=======
import React, { ReactNode, useEffect } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance entry:', entry);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);
>>>>>>> main

  return <>{children}</>;
};

export default PerformanceMonitor;