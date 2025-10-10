'use client';
import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page load time
      const trackLoadTime = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setMetrics(prev => ({
            ...prev,
            loadTime
          } as PerformanceMetrics));
        }
      };

      // Track Core Web Vitals
      const trackWebVitals = () => {
        if ('web-vitals' in window) {
          // This would be implemented with the web-vitals library
          console.log('Web Vitals tracking enabled');
        }
      };

      // Run tracking after page load
      if (document.readyState === 'complete') {
        trackLoadTime();
        trackWebVitals();
      } else {
        window.addEventListener('load', () => {
          trackLoadTime();
          trackWebVitals();
        });
      }
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
      {metrics && (
        <div>
          <div>Load Time: {metrics.loadTime?.toFixed(2)}ms</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;