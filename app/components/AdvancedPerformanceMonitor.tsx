'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure Web Vitals
    const measureWebVitals = () => {
      // FCP
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => ({ 
            ...prev, 
            fid: (entry as any).processingStart - entry.startTime 
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }));
      }
    };

    // Memory usage monitoring
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    // Load time monitoring
    const measureLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log('Page load time:', loadTime + 'ms');
    };

    // Resource performance monitoring
    const monitorResourcePerformance = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            
            if (loadTime > 1000) {
              console.log('Slow resource:', resourceEntry.name, loadTime + 'ms');
            }
          }
        });
      });
      observer.observe({ entryTypes: ['resource'] });
    };

    // Long task monitoring
    const monitorLongTasks = () => {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const longTask = entry as PerformanceEntry;
          if (longTask.duration > 50) {
            console.log('Long task detected:', longTask.duration + 'ms');
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    }

    // Initialize all monitoring
    measureWebVitals();
    measureMemoryUsage();
    measureLoadTime();
    monitorResourcePerformance();
    monitorLongTasks();

    // Periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        <div className="text-2xl font-bold text-green-500">A</div>
      </div>
      
      <div className="space-y-2 mb-4">
        {metrics.fcp !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">FCP:</span>
            <span className="font-mono">{Math.round(metrics.fcp)}ms</span>
          </div>
        )}
        {metrics.lcp !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">LCP:</span>
            <span className="font-mono">{Math.round(metrics.lcp)}ms</span>
          </div>
        )}
        {metrics.fid !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">FID:</span>
            <span className="font-mono">{Math.round(metrics.fid)}ms</span>
          </div>
        )}
        {metrics.cls !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">CLS:</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        {metrics.ttfb !== null && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
            <span className="font-mono">{Math.round(metrics.ttfb)}ms</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;