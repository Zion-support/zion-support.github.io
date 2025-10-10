
'use client';

import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay: 0, // Would need to measure this separately
        cumulativeLayoutShift: 0, // Would need to measure this separately
        timeToInteractive: navigation.domInteractive - navigation.navigationStart,
      };

      setMetrics(performanceMetrics);
      
      if (onMetricsUpdate) {
        onMetricsUpdate(performanceMetrics);
      }

      // Report to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'page_load',
          value: Math.round(performanceMetrics.loadTime),
          custom_parameters: performanceMetrics,

        });
      }
    };


    // Measure Core Web Vitals
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Monitor page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          // Send performance metrics
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'page_load_time', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(loadTime),
            });
            
            (window as any).gtag('event', 'dom_content_loaded', {
              event_category: 'Performance',
              event_label: 'DOM Content Loaded',
              value: Math.round(domContentLoaded),
            });
          }
        }
      });
    }

    // Monitor resource loading
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources
              console.warn('Slow resource detected:', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize,
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return <>{children}</>;

};

export default PerformanceMonitor;