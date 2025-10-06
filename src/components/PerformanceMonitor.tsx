import React, { useEffect, useState } from 'react';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

interface WebVitalsMetrics {
  [key: string]: number;
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

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.keys(metrics).length > 0) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return <>{children}</>;
};

export default PerformanceMonitor;
