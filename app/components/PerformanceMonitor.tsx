import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
  fid?: number;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  navigationTiming?: PerformanceNavigationTiming;
  memoryInfo?: any;
  connectionInfo?: any;
}

const PerformanceMonitor: React.FC = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    metrics: {}
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP, onFID }) => {
        const metrics: PerformanceMetrics = {};
        
        const handleMetric = (metric: any) => {
          metrics[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
          
          setPerformanceData(prev => ({
            ...prev,
            metrics: { ...prev.metrics, ...metrics }
          }));
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`Performance metric ${metric.name}:`, metric.value);
          }
          
          // Store metrics for analytics
          if (process.env.NODE_ENV === 'production') {
            sendToAnalytics(metric);
          }
        };
        
        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
        onFID(handleMetric);
      }).catch(() => {
        // Silently fail if web-vitals is not available
        console.warn('Web Vitals not available');
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navTiming = entry as PerformanceNavigationTiming;
            setPerformanceData(prev => ({
              ...prev,
              navigationTiming: navTiming
            }));
            
            if (process.env.NODE_ENV === 'development') {
              console.log('Navigation timing:', navTiming);
            }
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      
      // Monitor memory usage if available
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        setPerformanceData(prev => ({
          ...prev,
          memoryInfo
        }));
      }

      // Monitor connection info if available
      if ('connection' in navigator) {
        const connectionInfo = (navigator as any).connection;
        setPerformanceData(prev => ({
          ...prev,
          connectionInfo
        }));
      }
      
      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
  }, []);

  const sendToAnalytics = (metric: any) => {
    try {
      // Send to your analytics service
      // Example: Google Analytics, Mixpanel, etc.
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metric', {
          metric_name: metric.name,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_id: metric.id,
          metric_rating: metric.rating
        });
      }
    } catch (error) {
      console.error('Failed to send performance metric to analytics:', error);
    }
  };

  // Log performance data in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && performanceData.metrics) {
      console.group('Performance Metrics');
      console.table(performanceData.metrics);
      if (performanceData.navigationTiming) {
        console.log('Navigation Timing:', performanceData.navigationTiming);
      }
      if (performanceData.memoryInfo) {
        console.log('Memory Info:', performanceData.memoryInfo);
      }
      if (performanceData.connectionInfo) {
        console.log('Connection Info:', performanceData.connectionInfo);
      }
      console.groupEnd();
    }
  }, [performanceData]);

  return null;
};

export default PerformanceMonitor;
