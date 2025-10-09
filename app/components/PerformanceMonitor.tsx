<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
>>>>>>> cursor/analyze-improve-and-deploy-application-7970

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
=======
import React, { useEffect, useState } from 'react';
import { Activity, Clock, Zap } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
<<<<<<< HEAD
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
<<<<<<< HEAD
=======
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const measurePerformance = () => {
      // Measure First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Measure Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure First Input Delay
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Measure Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Send metrics to analytics (if available)
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        
        if (metrics.fcp) gtag('event', 'web_vitals', { name: 'FCP', value: Math.round(metrics.fcp) });
        if (metrics.lcp) gtag('event', 'web_vitals', { name: 'LCP', value: Math.round(metrics.lcp) });
        if (metrics.fid) gtag('event', 'web_vitals', { name: 'FID', value: Math.round(metrics.fid) });
        if (metrics.cls) gtag('event', 'web_vitals', { name: 'CLS', value: Math.round(metrics.cls * 1000) });
        if (metrics.ttfb) gtag('event', 'web_vitals', { name: 'TTFB', value: Math.round(metrics.ttfb) });
      }
    };

    // Send metrics after a delay to ensure all are collected
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', measurePerformance);
    };
  }, [metrics]);

  // Don't render anything visible
  return null;
};

export default PerformanceMonitor;
>>>>>>> cursor/analyze-improve-and-deploy-application-7970
=======
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  useEffect(() => {
    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now();

      // Measure memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Measure FPS
      let frameCount = 0;
      let lastTime = performance.now();
      
      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          setMetrics(prev => ({ ...prev, fps, loadTime, memoryUsage }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(measureFPS);
      };

      measureFPS();
    };

    measurePerformance();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="flex items-center space-x-2 mb-2">
        <Activity className="w-4 h-4" />
        <span className="font-semibold">Performance</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Clock className="w-3 h-3" />
          <span>Load: {metrics.loadTime.toFixed(0)}ms</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Zap className="w-3 h-3" />
          <span>FPS: {metrics.fps}</span>
        </div>
        
        {metrics.memoryUsage > 0 && (
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3" />
            <span>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
