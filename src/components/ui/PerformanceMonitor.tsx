import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, Database, Wifi, WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useServiceWorker';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

export const PerformanceMonitor: React.FC = () => {
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

  if (!isVisible) return null;

  return (
    <motion.div
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
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};