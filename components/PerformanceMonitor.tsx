'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, RefreshCw } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage?: number;
  connectionSpeed?: string;
}

interface WebVitals {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [webVitals, setWebVitals] = useState<WebVitals[]>([]);

  const getConnectionSpeed = useCallback(() => {
    if (typeof window === 'undefined' || !('connection' in navigator)) return 'unknown';
    
    const connection = (navigator as any).connection;
    if (!connection) return 'unknown';
    
    const effectiveType = connection.effectiveType;
    const downlink = connection.downlink;
    
    if (effectiveType === '4g' && downlink > 1.5) return 'fast';
    if (effectiveType === '3g' || (effectiveType === '4g' && downlink <= 1.5)) return 'medium';
    return 'slow';
  }, []);

  const getMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return undefined;
    
    const memory = (performance as any).memory;
    return memory ? Math.round(memory.usedJSHeapSize / 1048576) : undefined; // Convert to MB
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Enhanced Performance Observer
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const newMetrics: Partial<PerformanceMetrics> = {};

      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming;
            newMetrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            newMetrics.timeToInteractive = navEntry.domInteractive - navEntry.navigationStart;
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              newMetrics.firstContentfulPaint = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            newMetrics.largestContentfulPaint = entry.startTime;
            break;
          case 'first-input':
            const fiEntry = entry as PerformanceEventTiming;
            newMetrics.firstInputDelay = fiEntry.processingStart - fiEntry.startTime;
            break;
          case 'layout-shift':
            const lsEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
            if (!lsEntry.hadRecentInput) {
              newMetrics.cumulativeLayoutShift = (newMetrics.cumulativeLayoutShift || 0) + lsEntry.value;
            }
            break;
        }
      });

      setMetrics((prev) => ({ 
        ...prev, 
        ...newMetrics,
        memoryUsage: getMemoryUsage(),
        connectionSpeed: getConnectionSpeed()
      } as PerformanceMetrics));
    });

    // Observe all performance entry types
    const entryTypes = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
    entryTypes.forEach(type => {
      try {
        observer.observe({ entryTypes: [type] });
      } catch (e) {
        console.warn(`Could not observe ${type} entries:`, e);
      }
    });

    // Web Vitals collection
    const collectWebVitals = (metric: WebVitals) => {
      setWebVitals(prev => [...prev.filter(v => v.name !== metric.name), metric]);
    };

    // Simulate Web Vitals collection (in real app, use web-vitals library)
    const simulateWebVitals = () => {
      setTimeout(() => {
        collectWebVitals({
          name: 'CLS',
          value: metrics?.cumulativeLayoutShift || 0,
          delta: 0,
          id: 'cls-1'
        });
      }, 1000);
    };

    simulateWebVitals();

    return () => observer.disconnect();
  }, [getMemoryUsage, getConnectionSpeed, metrics?.cumulativeLayoutShift]);

  const getScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600 bg-green-50';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-50';
      case 'poor': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreIcon = (score: string) => {
    switch (score) {
      case 'good': return <TrendingUp className="h-4 w-4" />;
      case 'needs-improvement': return <Clock className="h-4 w-4" />;
      case 'poor': return <AlertTriangle className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const refreshMetrics = () => {
    setMetrics(null);
    setWebVitals([]);
    // Trigger a page reload to get fresh metrics
    window.location.reload();
  };

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_SHOW_PERFORMANCE !== 'true') {
    return null;
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 z-50 group"
        title="Show Performance Metrics"
      >
        <Activity className="h-5 w-5 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-96 z-50 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Performance Metrics
        </h3>
        <div className="flex gap-2">
          <button
            onClick={refreshMetrics}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Refresh Metrics"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        {metrics?.firstContentfulPaint && (
          <div className={`flex justify-between items-center p-2 rounded ${getScoreColor(getScore(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }))}`}>
            <span className="flex items-center gap-2">
              {getScoreIcon(getScore(metrics.firstContentfulPaint, { good: 1800, poor: 3000 }))}
              First Contentful Paint:
            </span>
            <span className="font-medium">
              {metrics.firstContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics?.largestContentfulPaint && (
          <div className={`flex justify-between items-center p-2 rounded ${getScoreColor(getScore(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }))}`}>
            <span className="flex items-center gap-2">
              {getScoreIcon(getScore(metrics.largestContentfulPaint, { good: 2500, poor: 4000 }))}
              Largest Contentful Paint:
            </span>
            <span className="font-medium">
              {metrics.largestContentfulPaint.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics?.firstInputDelay && (
          <div className={`flex justify-between items-center p-2 rounded ${getScoreColor(getScore(metrics.firstInputDelay, { good: 100, poor: 300 }))}`}>
            <span className="flex items-center gap-2">
              {getScoreIcon(getScore(metrics.firstInputDelay, { good: 100, poor: 300 }))}
              First Input Delay:
            </span>
            <span className="font-medium">
              {metrics.firstInputDelay.toFixed(0)}ms
            </span>
          </div>
        )}

        {metrics?.cumulativeLayoutShift && (
          <div className={`flex justify-between items-center p-2 rounded ${getScoreColor(getScore(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }))}`}>
            <span className="flex items-center gap-2">
              {getScoreIcon(getScore(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }))}
              Cumulative Layout Shift:
            </span>
            <span className="font-medium">
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </span>
          </div>
        )}

        {metrics?.memoryUsage && (
          <div className="flex justify-between items-center p-2 rounded bg-blue-50 text-blue-700">
            <span className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Memory Usage:
            </span>
            <span className="font-medium">
              {metrics.memoryUsage}MB
            </span>
          </div>
        )}

        {metrics?.connectionSpeed && (
          <div className="flex justify-between items-center p-2 rounded bg-purple-50 text-purple-700">
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Connection:
            </span>
            <span className="font-medium capitalize">
              {metrics.connectionSpeed}
            </span>
          </div>
        )}
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <details className="text-xs">
            <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
              Debug Info
            </summary>
            <pre className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(metrics, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;