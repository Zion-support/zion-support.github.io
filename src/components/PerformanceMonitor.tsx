<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Monitor page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Monitor memory usage if available
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    // Monitor render performance
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({ 
            ...prev, 
            renderTime: Math.round(entry.duration) 
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    // Update memory usage periodically
    const interval = setInterval(updateMemoryUsage, 5000);

    return () => {
      observer.disconnect();
=======
import React, { useEffect } from 'react';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Monitor bundle size and load times
    const monitorBundleSize = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        });
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    observeWebVitals();
    monitorBundleSize();
    monitorMemory();

    // Log performance metrics every 30 seconds in development
    const interval = setInterval(() => {
      monitorMemory();
    }, 30000);

    return () => {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
      clearInterval(interval);
    };
  }, []);

<<<<<<< HEAD
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Memory: {metrics.memoryUsage}MB</div>
      </div>
    </div>
  );
=======
  return null; // This component doesn't render anything
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
};

export default PerformanceMonitor;