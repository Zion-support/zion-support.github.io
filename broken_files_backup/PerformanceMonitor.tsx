import React, { useState, useEffect, useCallback } from 'react';
import React, { useEffect, useState, useCallback } from 'react';
import {
  Activity,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Gauge,
  Smartphone,
  Monitor,
  Globe
} from 'lucide-react';
interface PerformanceMetrics {
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react';
interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  X,
  BarChart3,
  Gauge,
  Wifi,
  HardDrive,
  Cpu
} from 'lucide-react';
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  bundleLoadTime: number | null;
  memoryUsage: number | null;
  networkSpeed: number | null;
}
interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}
const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
};
const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    bundleLoadTime: null,
    memoryUsage: null,
    networkSpeed: null,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 0;
    let totalMetrics = 0;
    if (metrics.fcp !== null) {
      totalMetrics++;
      if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.good) score += 100;
      else if (metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.needsImprovement) score += 50;
      else score += 25;
    }
    if (metrics.lcp !== null) {
      totalMetrics++;
      if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.good) score += 100;
      else if (metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.needsImprovement) score += 50;
      else score += 25;
    }
    if (metrics.fid !== null) {
      totalMetrics++;
      if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.good) score += 100;
      else if (metrics.fid <= PERFORMANCE_THRESHOLDS.fid.needsImprovement) score += 50;
      else score += 25;
    }
    if (metrics.cls !== null) {
      totalMetrics++;
      if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.good) score += 100;
      else if (metrics.cls <= PERFORMANCE_THRESHOLDS.cls.needsImprovement) score += 50;
      else score += 25;
    }
    if (metrics.ttfb !== null) {
      totalMetrics++;
      if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.good) score += 100;
      else if (metrics.ttfb <= PERFORMANCE_THRESHOLDS.ttfb.needsImprovement) score += 50;
      else score += 25;
    }
    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0;
  }, []);
  const getMetricStatus = (metric: keyof PerformanceMetrics, value: number | null): 'good' | 'needsImprovement' | 'poor' => {
    if (value === null) return 'good';
    const threshold = PERFORMANCE_THRESHOLDS[metric];
    if (!threshold) return 'good';
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needsImprovement';
    return 'poor';
  };
  const getStatusIcon = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needsImprovement':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };
  const getStatusColor = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-500';
      case 'needsImprovement':
        return 'text-yellow-500';
      case 'poor':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  si: number; // Speed Index
  tti: number; // Time to Interactive
}
  };
  const formatMetric = (metric: keyof PerformanceMetrics, value: number | null): string => {
    if (value === null) return 'N/A';
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
        return `${value.toFixed(0)}ms`;
      case 'cls':
        return value.toFixed(3);
      case 'bundleLoadTime':
        return `${value.toFixed(0)}ms`;
      case 'memoryUsage':
        return `${(value / 1024 / 1024).toFixed(1)}MB`;
      case 'networkSpeed':
        return `${(value / 1024 / 1024).toFixed(1)}MB/s`;
      default:
        return value.toString();
    }
  };
interface PerformanceScore {
  overall: number;
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Settings,
  RefreshCw,
  X
} from 'lucide-react';
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
  bundleSize: number;
  chunkCount: number;
}
    const newScore = {
      fcp: calculateScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }),
      lcp: calculateScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }),
      fid: calculateScore(metrics.fid, { good: 100, needsImprovement: 300 }),
      cls: calculateScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }),
      ttfb: calculateScore(metrics.ttfb, { good: 800, needsImprovement: 1800 }),
      overall: 0
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [measurePerformance]);
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  score: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  } | null;
}
interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}
// Extended interfaces for PerformanceEntry types
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}
interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    score: 0,
    memory: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);
  const thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 },
  };
  const getScore = useCallback((metrics: Omit<PerformanceMetrics, 'score' | 'memory'>): number => {
    let score = 100;
    if (metrics.fcp && metrics.fcp > thresholds.fcp.needsImprovement) score -= 20;
    else if (metrics.fcp && metrics.fcp > thresholds.fcp.good) score -= 10;
    if (metrics.lcp && metrics.lcp > thresholds.lcp.needsImprovement) score -= 20;
    else if (metrics.lcp && metrics.lcp > thresholds.lcp.good) score -= 10;
    if (metrics.fid && metrics.fid > thresholds.fid.needsImprovement) score -= 20;
    else if (metrics.fid && metrics.fid > thresholds.fid.good) score -= 10;
    if (metrics.cls && metrics.cls > thresholds.cls.needsImprovement) score -= 20;
    else if (metrics.cls && metrics.cls > thresholds.cls.good) score -= 10;
    if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.needsImprovement) score -= 20;
    else if (metrics.ttfb && metrics.ttfb > thresholds.ttfb.good) score -= 10;
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Zap,
  Gauge,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Network,
  Cpu,
  HardDrive as Memory,
  Battery
} from 'lucide-react';
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  score: number;
}
interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  impact: 'low' | 'medium' | 'high';
  suggestion: string;
}
const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);
  // Performance thresholds
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    memory: { good: 0.7, poor: 0.9 },
    score: { good: 80, poor: 50 }
  }), []);
  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    // FID scoring
    if (metrics.fid > thresholds.fid.poor) score -= 15;
    else if (metrics.fid > thresholds.fid.good) score -= 7;
    // CLS scoring
    if (metrics.cls > thresholds.cls.poor) score -= 15;
    else if (metrics.cls > thresholds.cls.good) score -= 7;
    // TTFB scoring
    if (metrics.ttfb > thresholds.ttfb.poor) score -= 10;
    else if (metrics.ttfb > thresholds.ttfb.good) score -= 5;
    // Memory scoring
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) score -= 10;
    else if (memoryUsage > thresholds.memory.good) score -= 5;
    return Math.max(0, score);
  }, [thresholds]);
    // Measure bundle load time
    const startTime = performance.now();
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, bundleLoadTime: loadTime }));
    });
    // Measure memory usage if available
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
      };
      updateMemoryUsage();
      const interval = setInterval(updateMemoryUsage, 5000);
      return () => clearInterval(interval);
    }
    // Measure network speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && connection.downlink) {
        setMetrics(prev => ({ ...prev, networkSpeed: connection.downlink * 125000 })); // Convert Mbps to B/s
      }
    }
  }, []);
  useEffect(() => {
    // Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fid: (fid as any).processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      // Time to First Byte
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigation = entries[entries.length - 1] as PerformanceNavigationTiming;
        setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);
  useEffect(() => {
    const score = getPerformanceScore(metrics);
    setPerformanceScore(score);
    // Show monitor if performance is poor
    if (score < 70) {
      setIsVisible(true);
    }
  }, [metrics, getPerformanceScore]);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span className="font-semibold">Performance Monitor</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Gauge className="w-4 h-4" />
                <span className="text-sm font-medium">{performanceScore}</span>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Metrics */}
        {isExpanded && (
          <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Core Web Vitals */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Core Web Vitals
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {(['fcp', 'lcp', 'fid', 'cls', 'ttfb'] as const).map((metric) => {
                  const value = metrics[metric];
                  const status = getMetricStatus(metric, value);
                  return (
                    <div key={metric} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                        {metric}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className={`text-xs font-mono ${getStatusColor(status)}`}>
                          {formatMetric(metric, value)}
                        </span>
                        {getStatusIcon(status)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* System Metrics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Cpu className="w-4 h-4 mr-2" />
                System Metrics
              </h3>
              <div className="space-y-2">
                {metrics.bundleLoadTime !== null && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Bundle Load</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('bundleLoadTime', metrics.bundleLoadTime)}</span>
                  </div>
                )}
                {metrics.memoryUsage !== null && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Memory</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('memoryUsage', metrics.memoryUsage)}</span>
                  </div>
                )}
                {metrics.networkSpeed !== null && (
                  <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Network</span>
                    <span className="text-xs font-mono text-blue-600">{formatMetric('networkSpeed', metrics.networkSpeed)}</span>
                  </div>
                )}
              </div>
            </div>
            {/* Performance Score Breakdown */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance Score
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    performanceScore >= 90 ? 'bg-green-500' :
                    performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${performanceScore}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
          </div>
        )}
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Performance Monitor
          </h3>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ×
          </button>
        </div>
        {/* Overall Score */}
        <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${
                metrics.score >= 90 ? 'text-green-600' :
                metrics.score >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {metrics.score}
              </span>
              <span className="text-sm text-gray-500">/100</span>
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metrics.score >= 90 ? 'bg-green-500' :
                metrics.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${metrics.score}%` }}
            />
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {/* Core Web Vitals */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Core Web Vitals
          </h4>
          <div className="space-y-2">
            {[
              { label: 'FCP', value: metrics.fcp, threshold: thresholds.fcp, unit: 'ms' },
              { label: 'LCP', value: metrics.lcp, threshold: thresholds.lcp, unit: 'ms' },
              { label: 'FID', value: metrics.fid, threshold: thresholds.fid, unit: 'ms' },
              { label: 'CLS', value: metrics.cls, threshold: thresholds.cls, unit: '' },
              { label: 'TTFB', value: metrics.ttfb, threshold: thresholds.ttfb, unit: 'ms' },
            ].map(({ label, value, threshold, unit }) => {
              const status = getMetricStatus(value, threshold);
              return (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{label}</span>
                  <div className="flex items-center gap-2">
                    <span className={getStatusColor(status)}>
                      {formatMetric(value, unit)}
                    </span>
                    <span className={getStatusColor(status)}>
                      {getStatusIcon(status)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Memory Usage */}
        {metrics.memory && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Memory Usage
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Used:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.used)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Limit:</span>
                <span className="text-gray-900 dark:text-white">{formatMemory(metrics.memory.limit)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(metrics.memory.used / metrics.memory.limit) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
        {/* Performance History */}
        {history.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Recent Scores
            </h4>
            <div className="flex gap-1">
              {history.map((item, index) => (
                <div
                  key={index}
                  className={`h-8 w-4 rounded-sm transition-all duration-300 ${
                    item.score >= 90 ? 'bg-green-500' :
                    item.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ height: `${item.score * 0.4}px` }}
                  title={`Score: ${item.score} (${new Date().toLocaleTimeString()})`}
                />
              ))}
            </div>
        {/* Collapsed View */}
        {!isExpanded && (
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  performanceScore >= 90 ? 'bg-green-500' :
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Score: {performanceScore}
                </span>
              </div>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
  // Analyze performance and generate issues
  const analyzePerformance = useCallback((metrics: PerformanceMetrics): PerformanceIssue[] => {
    const newIssues: PerformanceIssue[] = [];
    if (metrics.fcp > thresholds.fcp.poor) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'error',
        message: 'First Contentful Paint is very slow',
        impact: 'high',
        suggestion: 'Optimize critical rendering path, reduce render-blocking resources'
      });
    } else if (metrics.fcp > thresholds.fcp.good) {
      newIssues.push({
        id: 'fcp-warning',
        type: 'warning',
        message: 'First Contentful Paint could be improved',
        impact: 'medium',
        suggestion: 'Consider lazy loading non-critical resources'
      });
    }
    if (metrics.lcp > thresholds.lcp.poor) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'error',
        message: 'Largest Contentful Paint is very slow',
        impact: 'high',
        suggestion: 'Optimize images, implement lazy loading, use CDN'
      });
    }
    if (metrics.cls > thresholds.cls.poor) {
      newIssues.push({
        id: 'cls-high',
        type: 'error',
        message: 'Cumulative Layout Shift is very high',
        impact: 'high',
        suggestion: 'Set explicit dimensions for images and media elements'
      });
    }
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) {
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        message: 'Memory usage is very high',
        impact: 'medium',
        suggestion: 'Check for memory leaks, optimize component rendering'
      });
    }
    return newIssues;
  }, [thresholds]);
  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Use Performance Observer for Core Web Vitals
      if ('PerformanceObserver' in window) {
        let fcp = 0, lcp = 0, fid = 0, cls = 0;
        // FCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          fcp = entries[entries.length - 1].startTime;
        }).observe({ entryTypes: ['paint'] });
        // LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          lcp = entries[entries.length - 1].startTime;
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        // Calculate FID (First Input Delay)
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'first-input') {
                const firstInputEntry = entry as PerformanceEventTiming;
                fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              }
            }
          });
          observer.observe({ entryTypes: ['first-input'] });
        }
        // Calculate CLS (Cumulative Layout Shift)
        if ('PerformanceObserver' in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }
        // Wait a bit for metrics to be collected
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const ttfb = navigation.responseStart - navigation.requestStart;
          const memory = (performance as any).memory || {
            usedJSHeapSize: 0,
            totalJSHeapSize: 0,
            jsHeapSizeLimit: 0
          };
          const network = (navigator as any).connection || {
            effectiveType: 'unknown',
            downlink: 0,
            rtt: 0
          };
          const metrics: PerformanceMetrics = {
            fcp,
            lcp,
            fid,
            cls,
            ttfb,
            memory: {
              used: memory.usedJSHeapSize,
              total: memory.totalJSHeapSize,
              limit: memory.jsHeapSizeLimit
            },
            network: {
              effectiveType: network.effectiveType,
              downlink: network.downlink,
              rtt: network.rtt
            },
            score: 0
          };
          metrics.score = calculateScore(metrics);
          resolve(metrics);
        }, 1000);
      } else {
        // Fallback for older browsers
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const fallbackMetrics: PerformanceMetrics = {
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          memory: { used: 0, total: 0, limit: 0 },
          network: { effectiveType: 'unknown', downlink: 0, rtt: 0 },
          score: 0
        };
        fallbackMetrics.score = calculateScore(fallbackMetrics);
        resolve(fallbackMetrics);
      }
    });
  }, []);
  // Start monitoring
  const startMonitoring = useCallback(async () => {
    setIsMonitoring(true);
    const collectAndUpdate = async () => {
      try {
        const newMetrics = await collectMetrics();
        setMetrics(newMetrics);
        setHistory(prev => [...prev.slice(-9), newMetrics]);
        setIssues(analyzePerformance(newMetrics));
      } catch (error) {
        console.error('Error collecting performance metrics:', error);
      }
    };
    // Initial collection
    await collectAndUpdate();
    // Set up interval for continuous monitoring
    const interval = setInterval(collectAndUpdate, 10000); // Every 10 seconds
    return () => clearInterval(interval);
  }, [collectMetrics, analyzePerformance]);
  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);
  // Get status color
  const getStatusColor = (score: number) => {
    if (score >= thresholds.score.good) return 'text-green-500';
    if (score >= thresholds.score.poor) return 'text-yellow-500';
    return 'text-red-500';
  };
  // Get status icon
  const getStatusIcon = (score: number) => {
    if (score >= thresholds.score.good) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= thresholds.score.poor) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };
  useEffect(() => {
    if (isVisible && !isMonitoring) {
      startMonitoring();
    }
  }, [isVisible, isMonitoring, startMonitoring]);
  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
import React, { useEffect, useState, useCallback } from 'react';
import { Zap, Clock, HardDrive, Wifi, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}
// Extended interfaces for specific performance entry types
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: EventTarget;
}
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }
    const measurePerformance = () => {
      // Check if PerformanceObserver is supported
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
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as FirstInputEntry;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShiftEntry;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
  // Measure Time to First Byte (TTFB)
  const measureTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      if (logToConsole) {
        console.log('TTFB:', metricsRef.current.ttfb, 'ms');
      }
    }
    // Memory usage
    const updateMemoryUsage = () => {
      const memory = getMemoryUsage();
      setMetrics(prev => ({ ...prev, memoryUsage: memory }));
    };
    // Update memory usage periodically
    const memoryInterval = setInterval(updateMemoryUsage, 5000);
    updateMemoryUsage(); // Initial measurement
    // Network information
    const updateNetworkInfo = () => {
      const networkInfo = getNetworkInfo();
      setMetrics(prev => ({ ...prev, networkInfo }));
    };
    updateNetworkInfo(); // Initial measurement
    window.addEventListener('online', updateNetworkInfo);
    window.addEventListener('offline', updateNetworkInfo);
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('online', updateNetworkInfo);
      window.removeEventListener('offline', updateNetworkInfo);
    };
  }, [getMemoryUsage, getNetworkInfo]);
  // Check for performance issues and generate alerts
  const checkPerformanceIssues = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    if (currentMetrics.fcp && currentMetrics.fcp > 2000) {
      newAlerts.push('First Contentful Paint is slow (>2s)');
    }
    if (currentMetrics.lcp && currentMetrics.lcp > 4000) {
      newAlerts.push('Largest Contentful Paint is slow (>4s)');
    }
    if (currentMetrics.fid && currentMetrics.fid > 100) {
      newAlerts.push('First Input Delay is high (>100ms)');
    }
    if (currentMetrics.cls && currentMetrics.cls > 0.1) {
      newAlerts.push('Cumulative Layout Shift is poor (>0.1)');
    }
    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      newAlerts.push('High memory usage detected (>100MB)');
    }
    setAlerts(newAlerts);
  }, []);
  // Initialize performance monitoring
  useEffect(() => {
    measureCoreWebVitals();
    const cleanup = measureAdditionalMetrics();
    // Update metrics periodically
    const updateInterval = setInterval(() => {
      setMetrics(prev => {
        const newMetrics = { ...prev };
        newMetrics.memoryUsage = getMemoryUsage();
        newMetrics.networkInfo = getNetworkInfo();
        return newMetrics;
      });
    }, 10000);
    return () => {
      cleanup();
      clearInterval(updateInterval);
    };
  }, [measureCoreWebVitals, measureAdditionalMetrics, getMemoryUsage, getNetworkInfo]);
  // Check for performance issues when metrics change
  useEffect(() => {
    checkPerformanceIssues(metrics);
    onMetricsUpdate?.(metrics);
  }, [metrics, checkPerformanceIssues, onMetricsUpdate]);
  // Performance score calculation
  const calculatePerformanceScore = () => {
    let score = 100;
    let factors = 0;
    if (metrics.fcp && metrics.fcp > 2000) {
      score -= Math.min(20, (metrics.fcp - 2000) / 100);
      factors++;
    }
    if (metrics.lcp && metrics.lcp > 4000) {
      score -= Math.min(25, (metrics.lcp - 4000) / 200);
      factors++;
    }
    if (metrics.fid && metrics.fid > 100) {
      score -= Math.min(15, (metrics.fid - 100) / 10);
      factors++;
    }
    if (metrics.cls && metrics.cls > 0.1) {
      score -= Math.min(20, metrics.cls * 200);
      factors++;
    }
    if (metrics.memoryUsage && metrics.memoryUsage > 100) {
      score -= Math.min(20, (metrics.memoryUsage - 100) / 10);
      factors++;
    }
    return Math.max(0, Math.round(score));
  };
  const performanceScore = calculatePerformanceScore();
  const scoreColor = performanceScore >= 90 ? 'text-green-400' :
                     performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400';
  if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all duration-200"
          aria-label="Toggle performance monitor"
        >
          <Zap className="w-5 h-5" />
        </button>
      </div>
    );
  }
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <div className="bg-gray-900/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-2xl border border-gray-700 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close performance monitor"
            >
              ×
            </button>
          </div>
          {/* Performance Score */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Performance Score</span>
              <span className={`text-2xl font-bold ${scoreColor}`}>
                {performanceScore}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  performanceScore >= 90 ? 'bg-green-500' :
                  performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${performanceScore}%` }}
              />
            </div>
          </div>
          {/* Core Web Vitals */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Core Web Vitals</h4>
            {metrics.fcp !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FCP</span>
                <span className={metrics.fcp <= 2000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fcp}ms
                </span>
              </div>
            )}
            {metrics.lcp !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">LCP</span>
                <span className={metrics.lcp <= 4000 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.lcp}ms
                </span>
              </div>
            )}
            {metrics.fid !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">FID</span>
                <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.fid}ms
                </span>
              </div>
            )}
            {metrics.cls !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">CLS</span>
                <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
                  {metrics.cls}
                </span>
              </div>
            )}
          </div>
          {/* Additional Metrics */}
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-300">Additional Metrics</h4>
            {metrics.ttfb !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">TTFB</span>
                <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.ttfb}ms
                </span>
              </div>
            )}
            {metrics.domLoad !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">DOM Load</span>
                <span className={metrics.domLoad <= 2000 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.domLoad}ms
                </span>
              </div>
            )}
            {metrics.memoryUsage !== null && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Memory</span>
                <span className={metrics.memoryUsage <= 100 ? 'text-green-400' : 'text-yellow-400'}>
                  {metrics.memoryUsage}MB
                </span>
              </div>
            )}
            {metrics.networkInfo && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network</span>
                <span className="text-cyan-400">{metrics.networkInfo}</span>
              </div>
            )}
          </div>
          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="border-t border-gray-700 pt-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-400" />
                Performance Alerts
              </h4>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {metrics ? (
            <>
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Core Web Vitals</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    label="FCP"
                    value={`${metrics.fcp.toFixed(0)}ms`}
                    status={metrics.fcp <= thresholds.fcp.good ? 'good' : metrics.fcp <= thresholds.fcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="LCP"
                    value={`${metrics.lcp.toFixed(0)}ms`}
                    status={metrics.lcp <= thresholds.lcp.good ? 'good' : metrics.lcp <= thresholds.lcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="FID"
                    value={`${metrics.fid.toFixed(0)}ms`}
                    status={metrics.fid <= thresholds.fid.good ? 'good' : metrics.fid <= thresholds.fid.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="CLS"
                    value={metrics.cls.toFixed(3)}
                    status={metrics.cls <= thresholds.cls.good ? 'good' : metrics.cls <= thresholds.cls.poor ? 'warning' : 'poor'}
                  />
                </div>
              </div>
              {/* System Metrics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>System Metrics</span>
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Memory Usage</span>
                    <span className="font-mono">
                      {((metrics.memory.used / metrics.memory.limit) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        (metrics.memory.used / metrics.memory.limit) > thresholds.memory.poor
                          ? 'bg-red-500'
                          : (metrics.memory.used / metrics.memory.limit) > thresholds.memory.good
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${(metrics.memory.used / metrics.memory.limit) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Network:</span>
                    <span className="ml-2 font-mono">{metrics.network.effectiveType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className="ml-2 font-mono">{metrics.ttfb.toFixed(0)}ms</span>
                  </div>
                </div>
              </div>
              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Issues Found ({issues.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          issue.type === 'error'
                            ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                            : issue.type === 'warning'
                            ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {issue.type === 'error' ? (
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          ) : issue.type === 'warning' ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {issue.suggestion}
                            </p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              issue.impact === 'high'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : issue.impact === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-blue-200'
                            }`}>
                              {issue.impact} impact
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Performance History */}
              {history.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Performance Trend</span>
                  </h4>
                  <div className="h-20 flex items-end space-x-1">
                    {history.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          entry.score >= thresholds.score.good
                            ? 'bg-green-500'
                            : entry.score >= thresholds.score.poor
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ height: `${(entry.score / 100) * 100}%` }}
                        title={`Score: ${entry.score}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Collecting metrics...</p>
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-800 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className={`w-2 h-2 rounded-full ${
              isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`} />
            <span>{isMonitoring ? 'Monitoring' : 'Stopped'}</span>
          </div>
          <div className="flex space-x-2">
            {isMonitoring ? (
              <button
                onClick={stopMonitoring}
                className="px-3 py-1 text-xs bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={startMonitoring}
                className="px-3 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
              >
                Start
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
    newScore.overall = Math.round(
      (newScore.fcp + newScore.lcp + newScore.fid + newScore.cls + newScore.ttfb) / 5
    );
    setScore(newScore);
    // Generate alerts for poor performance
    const newAlerts: string[] = [];
    if (newScore.fcp < 50) newAlerts.push('First Contentful Paint is too slow');
    if (newScore.lcp < 50) newAlerts.push('Largest Contentful Paint is too slow');
    if (newScore.fid < 50) newAlerts.push('First Input Delay is too high');
    if (newScore.cls < 50) newAlerts.push('Cumulative Layout Shift is too high');
    if (newScore.ttfb < 50) newAlerts.push('Time to First Byte is too slow');
    setAlerts(newAlerts);
  }, [metrics, calculateScore]);
  // Start monitoring
  useEffect(() => {
    if (isMonitoring) {
      updateMetrics();
      monitorResources();
      monitorMemory();
      monitorNetwork();
      const interval = setInterval(() => {
        monitorMemory();
        monitorNetwork();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, updateMetrics, monitorResources, monitorMemory, monitorNetwork]);
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 50) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };
  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
      {/* Performance Panel */}
      {isVisible && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ×
              </button>
            </div>
            {/* Overall Score */}
            <div className="mt-3 text-center">
              <div className="text-3xl font-bold">{score.overall}</div>
              <div className="text-sm opacity-90">Performance Score</div>
            </div>
          </div>
          {/* Content */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Control */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMonitoring(!isMonitoring)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isMonitoring
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </button>
              <div className="text-xs text-gray-500">
                {isMonitoring ? 'Live' : 'Stopped'}
              </div>
            </div>
            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Core Web Vitals</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                    {getScoreIcon(score.fcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fcp)}`}>
                    {formatTime(metrics.fcp)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.fcp}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                    {getScoreIcon(score.lcp)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.lcp)}`}>
                    {formatTime(metrics.lcp)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.lcp}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">FID</span>
                    {getScoreIcon(score.fid)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.fid)}`}>
                    {formatTime(metrics.fid)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.fid}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-gray-400">CLS</span>
                    {getScoreIcon(score.cls)}
                  </div>
                  <div className={`text-lg font-semibold ${getScoreColor(score.cls)}`}>
                    {metrics.cls.toFixed(3)}
                  </div>
                  <div className="text-xs text-gray-500">Score: {score.cls}</div>
                </div>
              </div>
            </div>
            {/* System Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Gauge className="w-4 h-4" />
                <span>System Info</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Memory Usage</div>
                  <div className="text-sm font-medium">
                    {formatBytes(memoryUsage.used)} / {formatBytes(memoryUsage.total)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {memoryUsage.limit > 0 ? `${Math.round((memoryUsage.used / memoryUsage.limit) * 100)}%` : 'N/A'}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Network</div>
                  <div className="text-sm font-medium">{networkInfo.effectiveType}</div>
                  <div className="text-xs text-gray-500">{networkInfo.downlink} Mbps</div>
interface PerformanceRecommendation {
  type: 'critical' | 'warning' | 'info';
  message: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
}
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [recommendations, setRecommendations] = useState<PerformanceRecommendation[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  // Performance thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };
  const getPerformanceScore = useCallback((metric: keyof typeof thresholds, value: number): number => {
    const { good, poor } = thresholds[metric];
    if (value <= good) return 100;
    if (value <= poor) return 50;
    return 0;
  }, []);
  const getOverallScore = useCallback((metrics: PerformanceMetrics): number => {
    const scores = [
      getPerformanceScore('fcp', metrics.fcp),
      getPerformanceScore('lcp', metrics.lcp),
      getPerformanceScore('fid', metrics.fid),
      getPerformanceScore('cls', metrics.cls),
      getPerformanceScore('ttfb', metrics.ttfb)
    ];
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [getPerformanceScore]);
  const generateRecommendations = useCallback((metrics: PerformanceMetrics): PerformanceRecommendation[] => {
    const recs: PerformanceRecommendation[] = [];
    if (metrics.fcp > thresholds.fcp.poor) {
      recs.push({
        type: 'critical',
        message: 'First Contentful Paint is too slow',
        impact: 'high',
        action: 'Optimize critical rendering path, reduce server response time'
      });
    }
    if (metrics.lcp > thresholds.lcp.poor) {
      recs.push({
        type: 'critical',
        message: 'Largest Contentful Paint needs improvement',
        impact: 'high',
        action: 'Optimize images, implement lazy loading, reduce bundle size'
      });
    }
    if (metrics.fid > thresholds.fid.poor) {
      recs.push({
        type: 'warning',
        message: 'First Input Delay is affecting user experience',
        impact: 'medium',
        action: 'Reduce JavaScript execution time, implement code splitting'
      });
    }
    if (metrics.cls > thresholds.cls.poor) {
      recs.push({
        type: 'warning',
        message: 'Cumulative Layout Shift is causing visual instability',
        impact: 'medium',
        action: 'Set explicit dimensions for images and media elements'
      });
    }
    if (metrics.bundleSize > 500000) { // 500KB
      recs.push({
        type: 'info',
        message: 'Bundle size could be optimized',
        impact: 'low',
        action: 'Implement tree shaking, code splitting, and lazy loading'
      });
    }
    return recs;
  }, []);
  const measurePerformance = useCallback(async () => {
    try {
      // Measure Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          resolve(fcpEntry ? fcpEntry.startTime : 0);
        }).observe({ entryTypes: ['paint'] });
      });
      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          resolve(lcpEntry ? lcpEntry.startTime : 0);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });
      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1] as PerformanceEventTiming;
          resolve(fidEntry ? fidEntry.processingStart - fidEntry.startTime : 0);
        }).observe({ entryTypes: ['first-input'] });
      });
      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigation.responseStart - navigation.requestStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      const loadComplete = navigation.loadEventEnd - navigation.fetchStart;
      // Estimate bundle size (this is a rough estimate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('js/')) {
          totalSize += 50000; // Rough estimate per chunk
        }
      });
      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        domContentLoaded: Math.round(domContentLoaded),
        loadComplete: Math.round(loadComplete),
        bundleSize: totalSize,
        chunkCount: scripts.length
      };
      setMetrics(newMetrics);
      setRecommendations(generateRecommendations(newMetrics));
      setLastUpdate(new Date());
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [generateRecommendations]);
  useEffect(() => {
    // Initial measurement
    const timer = setTimeout(measurePerformance, 1000);
    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [measurePerformance]);
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  const getMetricColor = (metric: keyof typeof thresholds, value: number) => {
    const score = getPerformanceScore(metric, value);
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </button>
    );
  }
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-cyan-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={measurePerformance}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title="Refresh metrics"
          >
            <RefreshCw className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <BarChart3 className="w-4 h-4 text-gray-500" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            title="Close"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-4">
        {metrics ? (
          <>
            {/* Overall Score */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {getOverallScore(metrics)}
              </div>
              <div className="text-sm text-gray-500">Performance Score</div>
            </div>
            {/* Core Web Vitals */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Core Web Vitals
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">FCP:</span>
                  <span className={getMetricColor('fcp', metrics.fcp)}>
                    {metrics.fcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">LCP:</span>
                  <span className={getMetricColor('lcp', metrics.lcp)}>
                    {metrics.lcp}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">FID:</span>
                  <span className={getMetricColor('fid', metrics.fid)}>
                    {metrics.fid}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">CLS:</span>
                  <span className={getMetricColor('cls', metrics.cls)}>
                    {metrics.cls}
                  </span>
                </div>
              </div>
            </div>
            {/* Additional Metrics */}
            {isExpanded && (
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  Timing Metrics
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className={getMetricColor('ttfb', metrics.ttfb)}>
                      {metrics.ttfb}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">DOM Ready:</span>
                    <span className="text-gray-900 dark:text-white">
                      {metrics.domContentLoaded}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Load Complete:</span>
                    <span className="text-gray-900 dark:text-white">
                      {metrics.loadComplete}ms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
                    <span className="text-gray-900 dark:text-white">
                      {(metrics.bundleSize / 1024).toFixed(1)}KB
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                  Recommendations
                </h4>
                {recommendations.slice(0, isExpanded ? undefined : 2).map((rec, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded text-xs border-l-4 ${
                      rec.type === 'critical'
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : rec.type === 'warning'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                        : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {rec.message}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 mt-1">
                      {rec.action}
                    </div>
                  </div>
                ))}
                {!isExpanded && recommendations.length > 2 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-xs text-cyan-600 hover:text-cyan-700 dark:text-cyan-400"
                  >
                    Show {recommendations.length - 2} more...
                  </button>
                )}
              </div>
            )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-900/90 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all duration-200"
        aria-label="Toggle performance monitor"
      >
        <Zap className="w-5 h-5" />
      </button>
    </div>
  );
};
// Metric Card Component
interface MetricCardProps {
  label: string;
  value: string;
  status: 'good' | 'warning' | 'poor';
}
const MetricCard: React.FC<MetricCardProps> = ({ label, value, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'poor': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };
  const getStatusBg = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-50 dark:bg-green-900/20';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20';
      case 'poor': return 'bg-red-50 dark:bg-red-900/20';
      default: return 'bg-gray-50 dark:bg-gray-900/20';
    }
  };
  return (
    <div className={`p-3 rounded-lg ${getStatusBg(status)}`}>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{label}</div>
      <div className={`font-mono font-semibold ${getStatusColor(status)}`}>{value}</div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-2"></div>
            <div className="text-sm text-gray-500">Measuring performance...</div>
          </div>
        )}
        {/* Footer */}
        <div className="text-xs text-gray-500 text-center border-t border-gray-200 dark:border-gray-700 pt-2">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};
export default PerformanceMonitor;
export { PerformanceMonitor };
export default PerformanceMonitor;
export { PerformanceMonitor };
export default PerformanceMonitor;
}
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || localStorage.getItem('showPerformance') === 'true') {
      setIsVisible(true);
    }
    const measurePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Measure First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        // Measure Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        // Measure First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        // Measure Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        // Measure Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }
        // DOM Content Loaded (using legacy timing API as fallback)
        if ('timing' in performance) {
          const timing = (performance as any).timing;
          const domLoadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...prev, domLoad: domLoadTime }));
          // Window Load
          const windowLoadTime = timing.loadEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime }));
        }
        // Cleanup observers
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };
    // Measure performance after a short delay to ensure page is loaded
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  const getPerformanceScore = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    switch (metric) {
      case 'fcp':
        if (value < 1800) return '🟢 Good';
        if (value < 3000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'lcp':
        if (value < 2500) return '🟢 Good';
        if (value < 4000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'fid':
        if (value < 100) return '🟢 Good';
        if (value < 300) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'cls':
        if (value < 0.1) return '🟢 Good';
        if (value < 0.25) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'ttfb':
        if (value < 800) return '🟢 Good';
        if (value < 1800) return '🟡 Needs Improvement';
        return '🔴 Poor';
      default:
        return 'N/A';
    }
  };
  const getMetricValue = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'domLoad':
      case 'windowLoad':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return 'N/A';
    }
  };
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="font-mono">{getMetricValue('fcp')}</span>
          <span>{getPerformanceScore('fcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="font-mono">{getMetricValue('lcp')}</span>
          <span>{getPerformanceScore('lcp')}</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="font-mono">{getMetricValue('fid')}</span>
          <span>{getPerformanceScore('fid')}</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="font-mono">{getMetricValue('cls')}</span>
          <span>{getPerformanceScore('cls')}</span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className="font-mono">{getMetricValue('ttfb')}</span>
          <span>{getPerformanceScore('ttfb')}</span>
        </div>
        <div className="flex justify-between">
          <span>DOM Load:</span>
          <span className="font-mono">{getMetricValue('domLoad')}</span>
        </div>
        <div className="flex justify-between">
          <span>Window Load:</span>
          <span className="font-mono">{getMetricValue('windowLoad')}</span>
        </div>
      </div>
      <div className="mt-3 pt-2 border-t border-gray-600">
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-zion-cyan text-black text-xs py-1 px-2 rounded hover:bg-zion-cyan/80 transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};
export default PerformanceMonitor;
