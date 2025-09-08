<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, { useEffect, useState, memo } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
  bundleSize: number;
}

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Monitor Core Web Vitals
    if ('performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        // console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor navigation timing
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            // console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
            // console.log('DOM Content Loaded:', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup observers
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

=======
    // Only show in development or when explicitly enabled
    const shouldShow = import.meta.env.DEV || 
      localStorage.getItem('showPerformanceMonitor') === 'true';
    
    if (!shouldShow) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      const renderTime = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Estimate bundle size (this would be more accurate with webpack-bundle-analyzer)
      const bundleSize = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .reduce((total, entry) => total + (entry.transferSize || 0), 0);

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        bundleSize: Math.round(bundleSize / 1024) // Convert to KB
      });
    };

    // Measure after a short delay to ensure all resources are loaded
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
        localStorage.setItem('showPerformanceMonitor', (!isVisible).toString());
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!metrics || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg border border-white/20 text-xs font-mono z-50">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">Performance Monitor</h4>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      <div className="space-y-1">
        <div>Load Time: {metrics.loadTime}ms</div>
        <div>Render Time: {metrics.renderTime}ms</div>
        <div>Bundle Size: {metrics.bundleSize}KB</div>
        {metrics.memoryUsage && (
          <div>Memory: {Math.round(metrics.memoryUsage / 1024 / 1024)}MB</div>
        )}
      </div>
      <div className="mt-2 text-gray-400 text-xs">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export { PerformanceMonitor };
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
export default PerformanceMonitor;