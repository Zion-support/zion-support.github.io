'use client';
import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
  lcp: number;
  fid: number;
  cls: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measureWebVitals = () => {
      // Measure Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    };

    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    const measureLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    const measureFPS = () => {
      let lastTime = performance.now();
      let frameCount = 0;
      
      const countFrames = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= lastTime + 1000) {
          setMetrics(prev => ({ ...prev, fps: Math.round((frameCount * 1000) / (currentTime - lastTime)) }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFrames);
      };
      
      requestAnimationFrame(countFrames);
    };

    // Initialize measurements
    measureWebVitals();
    measureMemory();
    measureLoadTime();
    measureFPS();

    // Update memory usage periodically
    const memoryInterval = setInterval(measureMemory, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  const getPerformanceGrade = (metric: string, value: number): string => {
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'A' : value <= 4000 ? 'B' : 'C';
      case 'fid':
        return value <= 100 ? 'A' : value <= 300 ? 'B' : 'C';
      case 'cls':
        return value <= 0.1 ? 'A' : value <= 0.25 ? 'B' : 'C';
      case 'fps':
        return value >= 55 ? 'A' : value >= 30 ? 'B' : 'C';
      default:
        return 'N/A';
    }
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-500';
      case 'B': return 'text-yellow-500';
      case 'C': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Open performance monitor"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Load Time</span>
          <span className="text-sm font-mono">{metrics.loadTime}ms</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Memory Usage</span>
          <span className="text-sm font-mono">{metrics.memoryUsage.toFixed(1)}MB</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">FPS</span>
          <span className={`text-sm font-mono ${getGradeColor(getPerformanceGrade('fps', metrics.fps))}`}>
            {metrics.fps} ({getPerformanceGrade('fps', metrics.fps)})
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">LCP</span>
          <span className={`text-sm font-mono ${getGradeColor(getPerformanceGrade('lcp', metrics.lcp))}`}>
            {metrics.lcp.toFixed(0)}ms ({getPerformanceGrade('lcp', metrics.lcp)})
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">FID</span>
          <span className={`text-sm font-mono ${getGradeColor(getPerformanceGrade('fid', metrics.fid))}`}>
            {metrics.fid.toFixed(0)}ms ({getPerformanceGrade('fid', metrics.fid)})
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">CLS</span>
          <span className={`text-sm font-mono ${getGradeColor(getPerformanceGrade('cls', metrics.cls))}`}>
            {metrics.cls.toFixed(3)} ({getPerformanceGrade('cls', metrics.cls)})
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
