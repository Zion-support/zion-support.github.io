'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  INP: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const updateMetrics = (metric: any) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value
      }));

      // Report to analytics if enabled
      if (enableReporting && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Callback for parent components
      if (onMetricsUpdate) {
        onMetricsUpdate({
          ...metrics,
          [metric.name]: metric.value
        });
      }
    };

    // Measure Core Web Vitals
    onCLS(updateMetrics);
    onFID(updateMetrics);
    onFCP(updateMetrics);
    onLCP(updateMetrics);
    onTTFB(updateMetrics);

    // Monitor resource loading performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });

    // Monitor memory usage
    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    // Check memory usage every 30 seconds
    const memoryInterval = setInterval(checkMemoryUsage, 30000);

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn('Long task detected:', {
          duration: entry.duration,
          startTime: entry.startTime
        });
      }
    });

    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // Cleanup
    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, [enableReporting, onMetricsUpdate, metrics]);

  // Performance score calculation
  const getPerformanceScore = () => {
    const scores = [];
    
    if (metrics.LCP !== null) {
      if (metrics.LCP <= 2500) scores.push(100);
      else if (metrics.LCP <= 4000) scores.push(80);
      else if (metrics.LCP <= 6000) scores.push(60);
      else scores.push(40);
    }
    
    if (metrics.FID !== null) {
      if (metrics.FID <= 100) scores.push(100);
      else if (metrics.FID <= 300) scores.push(80);
      else if (metrics.FID <= 500) scores.push(60);
      else scores.push(40);
    }
    
    if (metrics.CLS !== null) {
      if (metrics.CLS <= 0.1) scores.push(100);
      else if (metrics.CLS <= 0.25) scores.push(80);
      else if (metrics.CLS <= 0.4) scores.push(60);
      else scores.push(40);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  };

  const performanceScore = getPerformanceScore();

  // Show performance metrics in development
  if (process.env.NODE_ENV === 'development' && isVisible) {
    return (
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-1">
          <div>Score: {performanceScore}/100</div>
          {metrics.LCP && <div>LCP: {Math.round(metrics.LCP)}ms</div>}
          {metrics.FID && <div>FID: {Math.round(metrics.FID)}ms</div>}
          {metrics.CLS && <div>CLS: {metrics.CLS.toFixed(3)}</div>}
          {metrics.FCP && <div>FCP: {Math.round(metrics.FCP)}ms</div>}
          {metrics.TTFB && <div>TTFB: {Math.round(metrics.TTFB)}ms</div>}
        </div>
      </div>
    );
  }

  // Show performance button in development
  if (process.env.NODE_ENV === 'development' && !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg z-50"
        title="Show Performance Metrics"
      >
        📊
      </button>
    );
  }

  return null;
};

export default PerformanceMonitor;