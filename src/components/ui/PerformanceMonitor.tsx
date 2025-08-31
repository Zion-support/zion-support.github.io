<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, Database, Wifi, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useServiceWorker';
=======
import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

<<<<<<< HEAD
export const PerformanceMonitor: React.FC = () => {
=======
interface PerformanceMonitorProps {
  showDetails?: boolean;
  autoHide?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  autoHide = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    // Measure DOM and window load times
    const domLoadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    const windowLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

    setMetrics(prev => ({
      ...prev,
      domLoad: domLoadTime,
      windowLoad: windowLoadTime
    }));

    // Measure Core Web Vitals if supported
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
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Show performance monitor after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      clearTimeout(timer);
      if ('PerformanceObserver' in window) {
        // Clean up observers
        const observers = [fcpObserver, lcpObserver, fidObserver, clsObserver];
        observers.forEach(observer => observer?.disconnect());
      }
    };
  }, []);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): { score: number; color: string; label: string } => {
    const value = metrics[metric];
    if (value === null) return { score: 0, color: 'text-gray-400', label: 'N/A' };

    let score = 0;
    let color = 'text-red-500';
    let label = 'Poor';

    switch (metric) {
      case 'fcp':
        if (value < 1800) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 3000) { score = 80; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'lcp':
        if (value < 2500) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 4000) { score = 80; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'fid':
        if (value < 100) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 300) { score = 80; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
      case 'cls':
        if (value < 0.1) { score = 100; color = 'text-green-500'; label = 'Good'; }
        else if (value < 0.25) { score = 80; color = 'text-yellow-500'; label = 'Needs Improvement'; }
        break;
    }

    return { score, color, label };
  };
=======
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const getPerformanceScore = useCallback((metric: keyof PerformanceMetrics): number => {
    if (!metrics[metric]) return 0;
    
    const value = metrics[metric]!;
    const thresholdValue = threshold[metric as keyof typeof threshold];
    
    if (metric === 'cls') {
      // CLS is better when lower
      return Math.max(0, 100 - (value / thresholdValue) * 100);
    } else {
      // Other metrics are better when lower
      return Math.max(0, 100 - (value / thresholdValue) * 100);
    }
  }, [metrics, threshold]);

  const getMetricColor = useCallback((score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  const getMetricIcon = useCallback((score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 50) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  }, []);

  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries[0];
      if (fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
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

    // Navigation timing
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({
        ...prev,
        ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
        domLoad: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
        windowLoad: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
      }));
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [threshold]);

  useEffect(() => {
    if (autoHide && metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {
      const timer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [metrics, autoHide]);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  if (!isVisible) return null;

  return (
    <motion.div
<<<<<<< HEAD
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed bottom-4 right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-80"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      {/* Connection Status */}
      <div className="flex items-center space-x-2 mb-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4 text-green-500" />
            <span className="text-xs text-green-600 dark:text-green-400">Online</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4 text-red-500" />
            <span className="text-xs text-red-600 dark:text-red-400">Offline</span>
          </>
        )}
      </div>

      {/* Core Web Vitals */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">FCP</span>
          <span className={getPerformanceScore('fcp').color}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">LCP</span>
          <span className={getPerformanceScore('lcp').color}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">FID</span>
          <span className={getPerformanceScore('fid').color}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">CLS</span>
          <span className={getPerformanceScore('cls').color}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
        </div>
      </div>

      {/* Load Times */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">DOM Load</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.domLoad ? `${Math.round(metrics.domLoad)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">Window Load</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.windowLoad ? `${Math.round(metrics.windowLoad)}ms` : 'N/A'}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600 dark:text-gray-400">TTFB</span>
          <span className="text-gray-900 dark:text-white">
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600 dark:text-gray-400">Overall Score</span>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {Math.round(
                Object.keys(metrics).reduce((acc, key) => {
                  const score = getPerformanceScore(key as keyof PerformanceMetrics).score;
                  return acc + score;
                }, 0) / Object.keys(metrics).length
              )}
=======
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Performance</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">FCP</span>
          <div className="flex items-center gap-2">
            {getMetricIcon(getPerformanceScore('fcp'))}
            <span className={`text-sm font-medium ${getMetricColor(getPerformanceScore('fcp'))}`}>
              {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '—'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">LCP</span>
          <div className="flex items-center gap-2">
            {getMetricIcon(getPerformanceScore('lcp'))}
            <span className={`text-sm font-medium ${getMetricColor(getPerformanceScore('lcp'))}`}>
              {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '—'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">FID</span>
          <div className="flex items-center gap-2">
            {getMetricIcon(getPerformanceScore('fid'))}
            <span className={`text-sm font-medium ${getMetricColor(getPerformanceScore('fid'))}`}>
              {metrics.fid ? `${Math.round(metrics.fid)}ms` : '—'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">CLS</span>
          <div className="flex items-center gap-2">
            {getMetricIcon(getPerformanceScore('cls'))}
            <span className={`text-sm font-medium ${getMetricColor(getPerformanceScore('cls'))}`}>
              {metrics.cls ? metrics.cls.toFixed(3) : '—'}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </span>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-3 pt-3 border-t border-gray-200"
          >
            <div className="space-y-2 text-xs text-gray-600">
              {metrics.ttfb && (
                <div className="flex justify-between">
                  <span>TTFB:</span>
                  <span>{Math.round(metrics.ttfb)}ms</span>
                </div>
              )}
              {metrics.domLoad && (
                <div className="flex justify-between">
                  <span>DOM Load:</span>
                  <span>{Math.round(metrics.domLoad)}ms</span>
                </div>
              )}
              {metrics.windowLoad && (
                <div className="flex justify-between">
                  <span>Window Load:</span>
                  <span>{Math.round(metrics.windowLoad)}ms</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        ×
      </button>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    </motion.div>
  );
};