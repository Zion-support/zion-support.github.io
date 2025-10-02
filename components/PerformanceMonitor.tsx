'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or for admin users
    if (process.env.NODE_ENV === 'development' || window.location.search.includes('debug=true')) {
      setIsVisible(true);
      
      // Measure performance metrics
      const measurePerformance = () => {
        if ('performance' in window && 'PerformanceObserver' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          // Core Web Vitals
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            
            entries.forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                setMetrics(prev => ({
                  ...prev,
                  largestContentfulPaint: entry.startTime,
                } as PerformanceMetrics));
              }
              
              if (entry.entryType === 'first-input') {
                setMetrics(prev => ({
                  ...prev,
                  firstInputDelay: entry.processingStart - entry.startTime,
                } as PerformanceMetrics));
              }
              
              if (entry.entryType === 'layout-shift') {
                const clsEntry = entry as any;
                if (!clsEntry.hadRecentInput) {
                  setMetrics(prev => ({
                    ...prev,
                    cumulativeLayoutShift: (prev?.cumulativeLayoutShift || 0) + clsEntry.value,
                  } as PerformanceMetrics));
                }
              }
            });
          });

          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

          // Basic metrics
          setMetrics({
            loadTime: navigation.loadEventEnd - navigation.navigationStart,
            firstContentfulPaint: 0,
            largestContentfulPaint: 0,
            firstInputDelay: 0,
            cumulativeLayoutShift: 0,
          });

          // First Contentful Paint
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: fcpEntry.startTime,
              } as PerformanceMetrics));
            }
          });
          
          fcpObserver.observe({ entryTypes: ['paint'] });

          return () => {
            observer.disconnect();
            fcpObserver.disconnect();
          };
        }
      };

      const cleanup = measurePerformance();
      return cleanup;
    }
  }, []);

  if (!isVisible || !metrics) return null;

  const getScoreColor = (score: number, thresholds: { good: number; poor: number }) => {
    if (score <= thresholds.good) return 'text-green-600';
    if (score <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreText = (score: number, thresholds: { good: number; poor: number }) => {
    if (score <= thresholds.good) return 'Good';
    if (score <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
            {metrics.firstInputDelay.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Core Web Vitals: {getScoreText(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}
        </div>
      </div>
    </div>
  );
}