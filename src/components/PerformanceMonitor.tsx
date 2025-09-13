import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
}

interface PerformanceAlert {
  type: 'warning' | 'error' | 'success';
  message: string;
  metric: string;
  value: number;
  threshold: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    domLoad: { good: 2000, poor: 4000 },
    windowLoad: { good: 3000, poor: 6000 }
  };

  const getMetricStatus = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    const threshold = thresholds[metric];
    if (value <= threshold.good) return 'success';
    if (value <= threshold.poor) return 'warning';
    return 'error';
  }, []);

  const getMetricColor = useCallback((status: string) => {
    switch (status) {
      case 'success': return 'text-zion-green';
      case 'warning': return 'text-zion-orange';
      case 'error': return 'text-zion-red';
      default: return 'text-gray-400';
    }
  }, []);

  const getMetricIcon = useCallback((status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'error': return <AlertTriangle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Core Web Vitals
      const fcp = performance.getEntriesByType('paint')
        .find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      const lcp = performance.getEntriesByType('largest-contentful-paint')
        .pop()?.startTime || 0;
      
      const fid = performance.getEntriesByType('first-input')
        .reduce((min, entry) => Math.min(min, entry.processingStart - entry.startTime), Infinity) || 0;
      
      const cls = performance.getEntriesByType('layout-shift')
        .reduce((sum, entry) => sum + (entry as any).value, 0) || 0;

      // Navigation timing
      const navigation = performance.getNavigation();
      const ttfb = navigation.responseStart - navigation.requestStart;
      const domLoad = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      const windowLoad = navigation.loadEventEnd - navigation.loadEventStart;

      const newMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: Math.round(fid),
        cls: Math.round(cls * 1000) / 1000,
        ttfb: Math.round(ttfb),
        domLoad: Math.round(domLoad),
        windowLoad: Math.round(windowLoad)
      };

      setMetrics(newMetrics);

      // Generate alerts
      const newAlerts: PerformanceAlert[] = [];
      Object.entries(newMetrics).forEach(([key, value]) => {
        const status = getMetricStatus(key as keyof PerformanceMetrics, value);
        if (status !== 'success') {
          newAlerts.push({
            type: status === 'warning' ? 'warning' : 'error',
            message: `${key.toUpperCase()} is ${status === 'warning' ? 'suboptimal' : 'poor'}`,
            metric: key,
            value,
            threshold: thresholds[key as keyof PerformanceMetrics].good
          });
        }
      });

      setAlerts(newAlerts);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }, [getMetricStatus]);

  useEffect(() => {
    // Initial measurement
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }

    // Periodic monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, [measurePerformance]);

  useEffect(() => {
    // Show monitor after page load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-2xl shadow-zion-cyan/10">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-zion-cyan" />
            <span className="text-sm font-semibold text-white">Performance</span>
            {alerts.length > 0 && (
              <span className="px-2 py-1 bg-zion-red text-white text-xs rounded-full">
                {alerts.length}
              </span>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-zion-cyan"
          >
            <TrendingUp className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-3">
            {metrics && (
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(metrics).map(([key, value]) => {
                  const status = getMetricStatus(key as keyof PerformanceMetrics, value);
                  return (
                    <div key={key} className="text-center p-2 bg-zion-slate/50 rounded">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        {getMetricIcon(status)}
                        <span className="text-xs font-medium text-gray-300">{key.toUpperCase()}</span>
                      </div>
                      <div className={`text-lg font-bold ${getMetricColor(status)}`}>
                        {key === 'cls' ? value.toFixed(3) : value}ms
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium text-zion-orange">Performance Issues:</div>
                {alerts.slice(0, 3).map((alert, index) => (
                  <div key={index} className="text-xs p-2 bg-zion-red/20 border border-zion-red/30 rounded">
                    <div className="flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 text-zion-red" />
                      <span className="text-zion-red">{alert.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex space-x-2 pt-2 border-t border-zion-cyan/20">
              <button
                onClick={measurePerformance}
                className="flex-1 px-3 py-2 bg-zion-cyan/20 text-zion-cyan text-xs rounded hover:bg-zion-cyan/30 transition-colors"
              >
                Refresh
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-3 py-2 bg-zion-slate text-gray-300 text-xs rounded hover:bg-zion-slate-light transition-colors"
              >
                Hide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
