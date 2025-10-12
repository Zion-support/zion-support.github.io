'use client';
import React, { useEffect, useState } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    setIsVisible(shouldShow);

    // Measure Core Web Vitals
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
      console.log('CLS:', metric);
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, FID: metric.value }));
      console.log('FID:', metric);
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
      console.log('FCP:', metric);
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
      console.log('LCP:', metric);
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
      console.log('TTFB:', metric);
    });

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation Timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              domInteractive: navEntry.domInteractive - navEntry.navigationStart
            });
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }

    // Memory usage monitoring
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }

  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>LCP (Largest Contentful Paint):</span>
          <span className={getScoreColor(metrics.LCP, { good: 2.5, needsImprovement: 4.0 })}>
            {metrics.LCP ? `${metrics.LCP.toFixed(2)}s` : '...'} 
            {metrics.LCP && ` (${getScoreText(metrics.LCP, { good: 2.5, needsImprovement: 4.0 })})`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID (First Input Delay):</span>
          <span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>
            {metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'}
            {metrics.FID && ` (${getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS (Cumulative Layout Shift):</span>
          <span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.CLS ? metrics.CLS.toFixed(3) : '...'}
            {metrics.CLS && ` (${getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP (First Contentful Paint):</span>
          <span className={getScoreColor(metrics.FCP, { good: 1.8, needsImprovement: 3.0 })}>
            {metrics.FCP ? `${metrics.FCP.toFixed(2)}s` : '...'}
            {metrics.FCP && ` (${getScoreText(metrics.FCP, { good: 1.8, needsImprovement: 3.0 })})`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB (Time to First Byte):</span>
          <span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>
            {metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'}
            {metrics.TTFB && ` (${getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})`}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
        <button
          onClick={() => {
            localStorage.setItem('debug-performance', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-gray-400 hover:text-white"
        >
          Hide Performance Monitor
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;