import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  });

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        // Memory usage (if available)
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

        // Web Vitals
        let lcp = 0, fid = 0, cls = 0;

        // Largest Contentful Paint
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          lcp = lcpEntries[lcpEntries.length - 1].startTime;
        }

        // First Input Delay
        const fidEntries = performance.getEntriesByType('first-input');
        if (fidEntries.length > 0) {
          fid = fidEntries[0].processingStart - fidEntries[0].startTime;
        }

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsEntries = performance.getEntriesByType('layout-shift');
        clsEntries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        cls = clsValue;

        setMetrics(prev => ({
          ...prev,
          loadTime,
          memoryUsage,
          lcp,
          fid,
          cls,
        }));
      }
    };

    // FPS monitoring
    let lastTime = performance.now();
    let frameCount = 0;
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Initial measurement
    measurePerformance();
    measureFPS();

    // Re-measure on route changes
    const handleRouteChange = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    // Performance observer for Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime,
            }));
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            setMetrics(prev => ({
              ...prev,
              fid: fidEntry.processingStart - fidEntry.startTime,
            }));
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              setMetrics(prev => ({
                ...prev,
                cls: prev.cls + clsEntry.value,
              }));
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => {
        observer.disconnect();
        window.removeEventListener('popstate', handleRouteChange);
      };
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage.toFixed(2)}MB</span></div>
        <div>FPS: <span className={metrics.fps >= 60 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>{metrics.fps}</span></div>
        <div>LCP: <span className={metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}>{metrics.lcp.toFixed(2)}ms</span></div>
        <div>FID: <span className={metrics.fid < 100 ? 'text-green-400' : metrics.fid < 300 ? 'text-yellow-400' : 'text-red-400'}>{metrics.fid.toFixed(2)}ms</span></div>
        <div>CLS: <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>{metrics.cls.toFixed(3)}</span></div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;