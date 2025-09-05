import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      const fid = performance.getEntriesByType('first-input')[0]?.processingStart || 0;
      const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => acc + (entry as any).value, 0);
      const ttfb = navigation.responseStart - navigation.requestStart;
      const fmp = paint.find(entry => entry.name === 'first-meaningful-paint')?.startTime || 0;

      setMetrics({
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        fmp: Math.round(fmp)
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show monitor in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">FID:</span>
          <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
            {metrics.fid}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb}ms
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AdvancedPerformanceMonitor;