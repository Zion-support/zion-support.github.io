'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Zap, Clock, Database, X } from 'lucide-react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        setMetrics(prev => {
          const newMetrics = { ...prev };
          
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              newMetrics.lcp = entry.startTime;
              break;
            case 'first-input':
              newMetrics.fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
              break;
            case 'layout-shift':
              newMetrics.cls = (entry as PerformanceEntry & { value: number }).value;
              break;
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                newMetrics.fcp = entry.startTime;
              }
              break;
            case 'navigation':
              newMetrics.ttfb = (entry as PerformanceNavigationTiming).responseStart - entry.startTime;
              break;
          }
          
          return newMetrics;
        });
      });
    });

    try {
      observer.observe({ 
        entryTypes: [
          'largest-contentful-paint', 
          'first-input', 
          'layout-shift', 
          'paint', 
          'navigation'
        ] 
      });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ((performance as any).memory) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: {
            used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
          }
        }));
      }
    };

    const interval = setInterval(handleMemoryUsage, 5000);
    handleMemoryUsage();

    return () => {
      observer.disconnect();
      clearInterval(interval);
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

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Show performance monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        {/* LCP */}
        {metrics.lcp !== null && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
        )}

        {/* FID */}
        {metrics.fid !== null && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        )}

        {/* CLS */}
        {metrics.cls !== null && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
        )}

        {/* FCP */}
        {metrics.fcp !== null && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        )}

        {/* TTFB */}
        {metrics.ttfb !== null && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300">TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
        )}

        {/* Memory Usage */}
        {metrics.memoryUsage && (
          <div className="pt-2 border-t border-gray-600">
            <div className="flex items-center mb-1">
              <Database className="w-3 h-3 mr-1" />
              <span className="text-gray-300">Memory:</span>
            </div>
            <div className="text-xs text-gray-400">
              {metrics.memoryUsage.used}MB / {metrics.memoryUsage.limit}MB
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div
                className="bg-blue-400 h-1 rounded-full"
                style={{ width: `${(metrics.memoryUsage.used / metrics.memoryUsage.limit) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;