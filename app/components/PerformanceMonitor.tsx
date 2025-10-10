import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Memory, TrendingUp } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const loadTime = performance.now();
      
      const newMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Get First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        newMetrics.firstContentfulPaint = fcpEntry.startTime;
      }

      // Get Largest Contentful Paint
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
      }

      // Get First Input Delay
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        newMetrics.firstInputDelay = (fidEntries[0] as any).processingStart - fidEntries[0].startTime;
      }

      // Get Cumulative Layout Shift
      const clsEntries = performance.getEntriesByType('layout-shift');
      let cls = 0;
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      newMetrics.cumulativeLayoutShift = cls;

      // Monitor memory usage (Chrome only)
      if ((performance as any).memory) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        };
      }

      setMetrics(newMetrics);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
  };

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-cyan-400">Performance</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center text-gray-300">
              <Clock className="w-3 h-3 mr-1" />
              Load Time
            </span>
            <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="flex items-center text-gray-300">
              <Zap className="w-3 h-3 mr-1" />
              FCP
            </span>
            <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="flex items-center text-gray-300">
              <TrendingUp className="w-3 h-3 mr-1" />
              LCP
            </span>
            <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="flex items-center text-gray-300">
              <Activity className="w-3 h-3 mr-1" />
              FID
            </span>
            <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
              {metrics.firstInputDelay.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="flex items-center text-gray-300">
              <Activity className="w-3 h-3 mr-1" />
              CLS
            </span>
            <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </span>
          </div>
          
          {metrics.memoryUsage && (
            <div className="flex items-center justify-between">
              <span className="flex items-center text-gray-300">
                <Memory className="w-3 h-3 mr-1" />
                Memory
              </span>
              <span className="text-gray-300">
                {metrics.memoryUsage.used}MB / {metrics.memoryUsage.limit}MB
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;