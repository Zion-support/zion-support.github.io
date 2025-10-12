'use client';
<<<<<<< HEAD
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            console.log('Performance Metrics:', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        setInterval(() => {
          const memory = (performance as any).memory;
          console.log('Memory Usage:', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds
      }
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

=======
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    onINP((metric) => {
      setMetrics(prev => ({ ...prev, fid: metric.value }));
    });
  }, []);

  // This component doesn't render anything visible
  // It just monitors performance metrics
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
  return null;
};

export default PerformanceMonitor;
