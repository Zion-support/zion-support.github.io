'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memory: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memory: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support LCP
      }

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback for browsers that don't support FID
      }

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support CLS
      }

      // FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        });
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // Fallback for browsers that don't support FCP
      }
    }

    // TTFB
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      }
    }

    // Memory usage
    const updateMemory = () => {
      if ((performance as any).memory) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ 
          ...prev, 
          memory: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      }
    };

    updateMemory();
    const memoryInterval = setInterval(updateMemory, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

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

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold">Performance</span>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {isVisible && (
        <div className="space-y-2">
          {/* LCP */}
          {metrics.lcp !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-blue-400" />
                <span>LCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
                  {Math.round(metrics.lcp)}ms
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.lcp, { good: 2500, poor: 4000 })}
                </span>
              </div>
            </div>
          )}

          {/* FID */}
          {metrics.fid !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-green-400" />
                <span>FID</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
                  {Math.round(metrics.fid)}ms
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.fid, { good: 100, poor: 300 })}
                </span>
              </div>
            </div>
          )}

          {/* CLS */}
          {metrics.cls !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-3 h-3 text-yellow-400" />
                <span>CLS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
                  {metrics.cls.toFixed(3)}
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })}
                </span>
              </div>
            </div>
          )}

          {/* FCP */}
          {metrics.fcp !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-purple-400" />
                <span>FCP</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
                  {Math.round(metrics.fcp)}ms
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.fcp, { good: 1800, poor: 3000 })}
                </span>
              </div>
            </div>
          )}

          {/* TTFB */}
          {metrics.ttfb !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-orange-400" />
                <span>TTFB</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
                  {Math.round(metrics.ttfb)}ms
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.ttfb, { good: 800, poor: 1800 })}
                </span>
              </div>
            </div>
          )}

          {/* Memory */}
          {metrics.memory !== null && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="w-3 h-3 text-red-400" />
                <span>Memory</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={getScoreColor(metrics.memory, { good: 50, poor: 100 })}>
                  {metrics.memory}MB
                </span>
                <span className="text-gray-400">
                  {getScoreText(metrics.memory, { good: 50, poor: 100 })}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;