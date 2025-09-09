import React, { useEffect, useCallback, useRef, useState } from 'react';

interface AdvancedMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  tbt: number; // Total Blocking Time
  si: number;  // Speed Index
  fmp: number; // First Meaningful Paint
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  onMetricsUpdate?: (metrics: AdvancedMetrics) => void;
  enableAutoOptimization?: boolean;
}

export function AdvancedPerformanceOptimizer({ 
  enableMonitoring = false, 
  onMetricsUpdate,
  enableAutoOptimization = true
}: PerformanceOptimizerProps) {
  const metricsRef = useRef<Partial<AdvancedMetrics>>({});
  const observersRef = useRef<PerformanceObserver[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<AdvancedMetrics[]>([]);

  // Advanced performance measurement
  const measureAdvancedPerformance = useCallback(() => {
    if (!('PerformanceObserver' in window) || !enableMonitoring) return;

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            updateMetrics();
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observersRef.current.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer failed:', error);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metricsRef.current.lcp = lastEntry.startTime;
          updateMetrics();
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observersRef.current.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer failed:', error);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.processingStart && entry.startTime) {
            metricsRef.current.fid = entry.processingStart - entry.startTime;
            updateMetrics();
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observersRef.current.push(fidObserver);
    } catch (error) {
      console.warn('FID observer failed:', error);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        updateMetrics();
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observersRef.current.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer failed:', error);
    }

    // Navigation Timing
    try {
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.entryType === 'navigation') {
            metricsRef.current.ttfb = entry.responseStart - entry.requestStart;
            updateMetrics();
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      observersRef.current.push(navigationObserver);
    } catch (error) {
      console.warn('Navigation observer failed:', error);
    }

    // Long Task Detection for TBT
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        let totalBlockingTime = 0;
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            totalBlockingTime += entry.duration - 50;
          }
        });
        metricsRef.current.tbt = totalBlockingTime;
        updateMetrics();
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      observersRef.current.push(longTaskObserver);
    } catch (error) {
      console.warn('Long task observer failed:', error);
    }
  }, []);

  const updateMetrics = useCallback(() => {
    if (onMetricsUpdate && metricsRef.current) {
      const metrics = metricsRef.current as AdvancedMetrics;
      onMetricsUpdate(metrics);
      setOptimizationHistory(prev => [...prev.slice(-9), metrics]);
    }
  }, [onMetricsUpdate]);

  // Auto-optimization based on metrics
  const autoOptimize = useCallback(() => {
    if (!enableAutoOptimization || !metricsRef.current) return;

    const metrics = metricsRef.current as AdvancedMetrics;
    const optimizations: string[] = [];

    // FCP optimization
    if (metrics.fcp && metrics.fcp > 1800) {
      optimizations.push('FCP: Consider reducing render-blocking resources');
    }

    // LCP optimization
    if (metrics.lcp && metrics.lcp > 2500) {
      optimizations.push('LCP: Optimize largest contentful paint element');
    }

    // FID optimization
    if (metrics.fid && metrics.fid > 100) {
      optimizations.push('FID: Reduce JavaScript execution time');
    }

    // CLS optimization
    if (metrics.cls && metrics.cls > 0.1) {
      optimizations.push('CLS: Fix layout shifts by setting dimensions');
    }

    // TBT optimization
    if (metrics.tbt && metrics.tbt > 200) {
      optimizations.push('TBT: Break up long tasks');
    }

    if (optimizations.length > 0) {
      console.log('🚀 Performance Optimizations Suggested:', optimizations);
      setIsOptimizing(true);
      
      // Apply automatic optimizations
      setTimeout(() => {
        applyOptimizations(optimizations);
        setIsOptimizing(false);
      }, 1000);
    }
  }, [enableAutoOptimization]);

  const applyOptimizations = useCallback((optimizations: string[]) => {
    // Implement automatic optimizations
    optimizations.forEach(optimization => {
      if (optimization.includes('FCP')) {
        // Preload critical resources
        const criticalResources = document.querySelectorAll('link[rel="preload"]');
        if (criticalResources.length === 0) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.href = '/src/main.tsx';
          preloadLink.as = 'script';
          document.head.appendChild(preloadLink);
        }
      }
      
      if (optimization.includes('LCP')) {
        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (!img.loading) {
            img.loading = 'eager';
          }
        });
      }
      
      if (optimization.includes('CLS')) {
        // Set dimensions for images
        const images = document.querySelectorAll('img:not([width]):not([height])');
        images.forEach(img => {
          img.style.aspectRatio = '16/9';
          img.style.width = '100%';
        });
      }
    });
  }, []);

  useEffect(() => {
    if (enableMonitoring) {
      measureAdvancedPerformance();
    }

    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
    };
  }, [enableMonitoring, measureAdvancedPerformance]);

  useEffect(() => {
    if (enableAutoOptimization) {
      const timer = setTimeout(autoOptimize, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, enableAutoOptimization]);

  return (
    <div className="performance-optimizer">
      {isOptimizing && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          🚀 Optimizing performance...
        </div>
      )}
    </div>
  );
}

export default AdvancedPerformanceOptimizer;