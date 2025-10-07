import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

interface WebVitalsMetrics {
<<<<<<< HEAD
  [key: string]: number;
=======
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  children, 
  enableReporting = true,
  enableLongTaskMonitoring = true 
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);

  useEffect(() => {
    // Basic performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page load time:', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
<<<<<<< HEAD
      
      return () => observer.disconnect();
    }
    
    return undefined;
  }, []);

  useEffect(() => {
    // Add critical resource hints for performance optimization
    if (typeof document !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];
      
      hints.forEach(hint => {
        const link = document.createElement('link');
        Object.entries(hint).forEach(([key, value]) => {
          link.setAttribute(key, value as string);
        });
        document.head.appendChild(link);
      });
    }
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  useEffect(() => {
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance entry:', entry);
          }
          
          // Track specific metrics
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({
              ...prev,
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
            }));
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
    return undefined;
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
  }, []);
=======

      // Monitor long tasks
      if (enableLongTaskMonitoring) {
        const longTaskObserver = new PerformanceObserver((list) => {
          const longTasks = list.getEntries().filter(entry => entry.duration > 50);
          setLongTasks(prev => [...prev, ...longTasks]);
          
          if (enableReporting) {
            console.warn('Long task detected:', longTasks);
          }
        });
        
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      }

      // Monitor Core Web Vitals
      if (enableReporting) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, FCP: entry.startTime }));
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, LCP: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ ...prev, FID: entry.processingStart - entry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setMetrics(prev => ({ ...prev, CLS: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    }

    return () => {
      // Cleanup observers
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Performance observers are automatically cleaned up when the component unmounts
      }
    };
  }, [enableReporting, enableLongTaskMonitoring]);

  // Log metrics when they change
  useEffect(() => {
    if (Object.keys(metrics).length > 0 && enableReporting) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics, enableReporting]);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return <>{children}</>;
};

export default PerformanceMonitor;
