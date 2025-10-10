'use client';
import React, { useEffect, useState, memo } from 'react';
import { Activity, Zap, Clock, Wifi } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
  connectionSpeed: string | null;
}

const PerformanceMonitor: React.FC = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
    connectionSpeed: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure Core Web Vitals
    const measureWebVitals = () => {
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
          setMetrics(prev => ({ 
            ...prev, 
            fid: entry.processingStart - entry.startTime 
          }));
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
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
        }));
      }

      // Page Load Time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      });

      // Memory Usage (if available)
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
        }));
      }

      // Connection Speed
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({ 
          ...prev, 
          connectionSpeed: connection.effectiveType || 'unknown'
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measureWebVitals();

    return cleanup;
  }, []);

  if (!isVisible) return null;

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return <Clock className="w-4 h-4" />;
    if (value <= thresholds.good) return <Zap className="w-4 h-4 text-green-400" />;
    if (value <= thresholds.poor) return <Activity className="w-4 h-4 text-yellow-400" />;
    return <Activity className="w-4 h-4 text-red-400" />;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800/95 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 shadow-xl max-w-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            Performance
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white text-xs"
          >
            ×
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {/* FCP */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">FCP</span>
            <div className="flex items-center gap-1">
              {getScoreIcon(metrics.fcp, { good: 1800, poor: 3000 })}
              <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '—'}
              </span>
            </div>
          </div>

          {/* LCP */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">LCP</span>
            <div className="flex items-center gap-1">
              {getScoreIcon(metrics.lcp, { good: 2500, poor: 4000 })}
              <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '—'}
              </span>
            </div>
          </div>

          {/* FID */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">FID</span>
            <div className="flex items-center gap-1">
              {getScoreIcon(metrics.fid, { good: 100, poor: 300 })}
              <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
                {metrics.fid ? `${Math.round(metrics.fid)}ms` : '—'}
              </span>
            </div>
          </div>

          {/* CLS */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">CLS</span>
            <div className="flex items-center gap-1">
              {getScoreIcon(metrics.cls, { good: 0.1, poor: 0.25 })}
              <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
                {metrics.cls ? metrics.cls.toFixed(3) : '—'}
              </span>
            </div>
          </div>

          {/* TTFB */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">TTFB</span>
            <div className="flex items-center gap-1">
              {getScoreIcon(metrics.ttfb, { good: 800, poor: 1800 })}
              <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '—'}
              </span>
            </div>
          </div>

          {/* Load Time */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Load</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">
                {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : '—'}
              </span>
            </div>
          </div>

          {/* Memory Usage */}
          {metrics.memoryUsage && (
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Memory</span>
              <span className="text-cyan-400">{metrics.memoryUsage}MB</span>
            </div>
          )}

          {/* Connection Speed */}
          {metrics.connectionSpeed && (
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Speed</span>
              <div className="flex items-center gap-1">
                <Wifi className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400">{metrics.connectionSpeed}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 pt-2 border-t border-gray-700">
          <button
            onClick={() => {
              localStorage.setItem('show-performance-monitor', 'false');
              setIsVisible(false);
            }}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Hide permanently
          </button>
        </div>
      </div>
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;