import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });
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

  if (!isVisible) return null;

  return (
    <motion.div
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
            </span>
          </div>
        </div>
      </div>

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
    </motion.div>
  );
};