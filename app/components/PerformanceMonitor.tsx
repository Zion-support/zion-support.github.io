<<<<<<< HEAD
'use client'
import React, { useEffect } from 'react'

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const monitorPerformance = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

          // Send to analytics service
          if (window.gtag) {
            window.gtag('event', 'performance_metrics', {
              event_category: 'performance',
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded),
              first_paint: Math.round(firstPaint),
              first_contentful_paint: Math.round(firstContentfulPaint)
            });
          }

          // Log to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance Metrics:', {
              loadTime,
              domContentLoaded,
              firstPaint,
              firstContentfulPaint
            });
          }
        }
      };

      // Monitor after page load
      window.addEventListener('load', monitorPerformance);

      return () => {
        window.removeEventListener('load', monitorPerformance);
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
=======
import React from 'react';
import { Monitor } from 'lucide-react';
interface PerformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Performancemonitor({ className = '', children, ...props }: PerformancemonitorProps) {
  return (
    <div className={`performancemonitor-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
