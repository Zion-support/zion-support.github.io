'use client';
import React, { useEffect, useState } from 'react';
import { Activity, Zap, Cpu, HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memoryUsage: number | null;
  memoryLimit: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memoryUsage: null,
    memoryLimit: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
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

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }
      }

      // Memory usage
      const checkMemory = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({
            ...prev,
            memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
            memoryLimit: memory.jsHeapSizeLimit / 1024 / 1024 // Convert to MB
          }));
        }
      };

      // Check memory usage every 30 seconds
      setInterval(checkMemory, 30000);
      checkMemory(); // Initial check
    };

    measurePerformance();
  }, []);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  const formatValue = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Show performance metrics"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-3">
        {/* Core Web Vitals */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">FCP:</span>
              <span className={getScoreColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}>
                {formatValue(metrics.fcp)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">LCP:</span>
              <span className={getScoreColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}>
                {formatValue(metrics.lcp)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">FID:</span>
              <span className={getScoreColor(metrics.fid, { good: 100, needsImprovement: 300 })}>
                {formatValue(metrics.fid)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CLS:</span>
              <span className={getScoreColor(metrics.cls, { good: 0.1, needsImprovement: 0.25 })}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Memory Usage */}
        {metrics.memoryUsage !== null && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-300">Memory Usage</h4>
            <div className="text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Used:</span>
                <span className="text-cyan-400">{formatValue(metrics.memoryUsage, 'MB')}</span>
              </div>
              {metrics.memoryLimit && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Limit:</span>
                  <span className="text-gray-400">{formatValue(metrics.memoryLimit, 'MB')}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;
