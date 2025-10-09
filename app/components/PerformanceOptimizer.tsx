'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (error) {
          console.warn('FCP observer not supported:', error);
        }

        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('LCP observer not supported:', error);
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('FID observer not supported:', error);
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('CLS observer not supported:', error);
        }
      }

      // Time to First Byte (TTFB)
      if (performance.timing) {
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }

      // Memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / memory.jsHeapSizeLimit 
        }));
      }

      // FPS measurement
      let lastTime = performance.now();
      let frameCount = 0;
      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        if (currentTime - lastTime >= 1000) {
          setMetrics(prev => ({ ...prev, fps: frameCount }));
          frameCount = 0;
          lastTime = currentTime;
        }
        requestAnimationFrame(measureFPS);
      };
      measureFPS();
    };

    measurePerformance();

    // Check if performance is optimized
    const checkOptimization = () => {
      const isGoodFCP = metrics.fcp < 1800;
      const isGoodLCP = metrics.lcp < 2500;
      const isGoodFID = metrics.fid < 100;
      const isGoodCLS = metrics.cls < 0.1;
      const isGoodTTFB = metrics.ttfb < 600;
      const isGoodMemory = metrics.memoryUsage < 0.8;
      const isGoodFPS = metrics.fps > 50;

      setIsOptimized(
        isGoodFCP && isGoodLCP && isGoodFID && isGoodCLS && 
        isGoodTTFB && isGoodMemory && isGoodFPS
      );
    };

    const timer = setTimeout(checkOptimization, 3000);
    return () => clearTimeout(timer);
  }, [metrics]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/90 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2 text-cyan-400">Performance Monitor</div>
      <div className="space-y-1">
        <div className={`flex justify-between ${metrics.fcp < 1800 ? 'text-green-400' : 'text-red-400'}`}>
          <span>FCP:</span>
          <span>{Math.round(metrics.fcp)}ms</span>
        </div>
        <div className={`flex justify-between ${metrics.lcp < 2500 ? 'text-green-400' : 'text-red-400'}`}>
          <span>LCP:</span>
          <span>{Math.round(metrics.lcp)}ms</span>
        </div>
        <div className={`flex justify-between ${metrics.fid < 100 ? 'text-green-400' : 'text-red-400'}`}>
          <span>FID:</span>
          <span>{Math.round(metrics.fid)}ms</span>
        </div>
        <div className={`flex justify-between ${metrics.cls < 0.1 ? 'text-green-400' : 'text-red-400'}`}>
          <span>CLS:</span>
          <span>{metrics.cls.toFixed(3)}</span>
        </div>
        <div className={`flex justify-between ${metrics.ttfb < 600 ? 'text-green-400' : 'text-red-400'}`}>
          <span>TTFB:</span>
          <span>{Math.round(metrics.ttfb)}ms</span>
        </div>
        <div className={`flex justify-between ${metrics.memoryUsage < 0.8 ? 'text-green-400' : 'text-red-400'}`}>
          <span>Memory:</span>
          <span>{(metrics.memoryUsage * 100).toFixed(1)}%</span>
        </div>
        <div className={`flex justify-between ${metrics.fps > 50 ? 'text-green-400' : 'text-red-400'}`}>
          <span>FPS:</span>
          <span>{metrics.fps}</span>
        </div>
      </div>
      <div className={`mt-2 text-center font-bold ${isOptimized ? 'text-green-400' : 'text-yellow-400'}`}>
        {isOptimized ? '✓ Optimized' : '⚠ Needs Optimization'}
      </div>
    </div>
  );
};

export default PerformanceOptimizer;