'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, AlertTriangle, CheckCircle, TrendingUp, Clock } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  });

  const [alerts, setAlerts] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  const addAlert = useCallback((alert: string) => {
    setAlerts(prev => [...prev, alert]);
  }, []);

  const getPerformanceScore = useCallback((value: number | null, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'needs-improvement';
    if (value <= thresholds.good) return 'good';
    if (value <= thresholds.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }

    // Time to First Byte
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
      setMetrics(prev => ({ ...prev, memory }));
    }
  }, []);

  useEffect(() => {
    if (enableRealTimeMonitoring) {
      measurePerformance();
      setIsMonitoring(true);
    }
  }, [enableRealTimeMonitoring, measurePerformance]);

  useEffect(() => {
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }

    // Check for performance issues
    const fcpScore = getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 });
    const lcpScore = getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 });
    const fidScore = getPerformanceScore(metrics.fid, { good: 100, poor: 300 });
    const clsScore = getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 });

    if (fcpScore === 'poor') addAlert('First Contentful Paint is too slow');
    if (lcpScore === 'poor') addAlert('Largest Contentful Paint is too slow');
    if (fidScore === 'poor') addAlert('First Input Delay is too high');
    if (clsScore === 'poor') addAlert('Cumulative Layout Shift is too high');
  }, [metrics, onMetricsUpdate, getPerformanceScore, addAlert]);

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreIcon = (score: 'good' | 'needs-improvement' | 'poor') => {
    switch (score) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold">Performance Monitor</h3>
        <div className={`ml-auto w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-gray-400'}`} />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span>First Contentful Paint</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 }))}
            <span className={getScoreColor(getPerformanceScore(metrics.fcp, { good: 1800, poor: 3000 }))}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Largest Contentful Paint</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 }))}
            <span className={getScoreColor(getPerformanceScore(metrics.lcp, { good: 2500, poor: 4000 }))}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>First Input Delay</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(getPerformanceScore(metrics.fid, { good: 100, poor: 300 }))}
            <span className={getScoreColor(getPerformanceScore(metrics.fid, { good: 100, poor: 300 }))}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Cumulative Layout Shift</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 }))}
            <span className={getScoreColor(getPerformanceScore(metrics.cls, { good: 0.1, poor: 0.25 }))}>
              {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
            </span>
          </div>
        </div>

        {metrics.memory && (
          <div className="flex items-center justify-between text-sm">
            <span>Memory Usage</span>
            <span className="text-blue-400">{Math.round(metrics.memory)}MB</span>
          </div>
        )}
      </div>

      {alerts.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-red-400 mb-2">Performance Alerts:</h4>
          <div className="space-y-1">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-red-300">
                <AlertTriangle className="w-3 h-3" />
                <span>{alert}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => measurePerformance()}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Zap className="w-4 h-4" />
        Refresh Metrics
      </button>
    </div>
  );
};

export default AdvancedPerformanceMonitor;