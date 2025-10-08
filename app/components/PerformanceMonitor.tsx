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

  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    const getPerformanceScore = (): number => {
      let score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // FID - First Input Delay
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // CLS - Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Measure basic performance metrics
    const measureBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        setMetrics(prev => ({
          ...prev,
          loadTime,
          renderTime,
          memoryUsage: memory ? (memory.usedJSHeapSize / 1024 / 1024) : 0
        }));
      }
    };

    // Measure FPS
    const measureFPS = () => {
      let lastTime = performance.now();
      let frameCount = 0;
      
      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          setMetrics(prev => ({ ...prev, fps: frameCount }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
      };
      
      requestAnimationFrame(countFrames);
    };

    // Initialize measurements
    measureBasicMetrics();
    measureWebVitals();
    measureFPS();

    // Update performance score
    const score = getPerformanceScore();
    setPerformanceScore(score);

    // Log performance metrics
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', {
        metrics,
        score,
      });
    }

    // Handle route changes
    const handleRouteChange = () => {
      measureBasicMetrics();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [metrics.loadTime, metrics.renderTime, metrics.memoryUsage]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold text-cyan-400">Performance Monitor</div>
      <div className="space-y-1">
        <div>Load Time: <span className="text-green-400">{metrics.loadTime.toFixed(2)}ms</span></div>
        <div>Render Time: <span className="text-green-400">{metrics.renderTime.toFixed(2)}ms</span></div>
        <div>Memory: <span className="text-yellow-400">{metrics.memoryUsage.toFixed(2)}MB</span></div>
        <div>FPS: <span className="text-blue-400">{metrics.fps}</span></div>
        <div>LCP: <span className="text-purple-400">{metrics.lcp.toFixed(2)}ms</span></div>
        <div>FID: <span className="text-orange-400">{metrics.fid.toFixed(2)}ms</span></div>
        <div>CLS: <span className="text-red-400">{metrics.cls.toFixed(4)}</span></div>
        <div className="pt-2 border-t border-gray-600">
          <div>Score: <span className={`font-bold ${performanceScore >= 90 ? 'text-green-400' : performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>{performanceScore}</span></div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;