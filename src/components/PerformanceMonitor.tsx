import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, TrendingUp, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const getPerformanceScore = useCallback((metric: keyof PerformanceMetrics): 'good' | 'needs-improvement' | 'poor' => {
    const value = metrics[metric];
    if (value === null) return 'good';

    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
      fmp: { good: 2000, poor: 4000 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }, [metrics]);

  const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
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
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.processingStart && entry.startTime) {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let cls = 0;
      entryList.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });
      setMetrics(prev => ({ ...prev, cls }));
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // First Meaningful Paint (estimated)
    const paintEntries = performance.getEntriesByType('paint');
    const fmp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fmp) {
      setMetrics(prev => ({ ...prev, fmp: fmp.startTime }));
    }
  }, [enabled]);

  const checkPerformanceAlerts = useCallback(() => {
    const newAlerts: string[] = [];
    
    if (metrics.lcp && metrics.lcp > 4000) {
      newAlerts.push('LCP is above 4 seconds - consider optimizing images and critical resources');
    }
    
    if (metrics.fid && metrics.fid > 300) {
      newAlerts.push('FID is above 300ms - consider reducing JavaScript execution time');
    }
    
    if (metrics.cls && metrics.cls > 0.25) {
      newAlerts.push('CLS is above 0.25 - consider fixing layout shifts');
    }

    setAlerts(newAlerts);
  }, [metrics]);

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      setIsVisible(true);
    }
  }, [enabled, measurePerformance]);

  useEffect(() => {
    checkPerformanceAlerts();
  }, [checkPerformanceAlerts]);

  useEffect(() => {
    // Auto-hide after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [enabled, measurePerformance]);

  if (!enabled || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-4 right-4 z-50 ${className}`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Performance Monitor</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Metrics */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 space-y-3"
            >
              {Object.entries(metrics).map(([key, value]) => {
                if (value === null) return null;
                const score = getPerformanceScore(key as keyof PerformanceMetrics);
                const color = getScoreColor(score);
                const icon = getScoreIcon(score);
                
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {icon}
                      <span className="text-slate-300 text-sm font-medium uppercase">
                        {key}
                      </span>
                    </div>
                    <span className={`text-sm font-mono ${color}`}>
                      {key === 'cls' ? value.toFixed(3) : `${Math.round(value)}ms`}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="p-4 bg-red-500/10 border-t border-red-500/20">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-semibold">Performance Alerts</span>
            </div>
            <div className="space-y-1">
              {alerts.map((alert, index) => (
                <p key={index} className="text-red-300 text-xs">{alert}</p>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="p-4 bg-slate-800/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">
                {metrics.lcp ? Math.round(metrics.lcp) : '--'}
              </div>
              <div className="text-xs text-slate-400">LCP (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {metrics.fid ? Math.round(metrics.fid) : '--'}
              </div>
              <div className="text-xs text-slate-400">FID (ms)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {metrics.cls ? metrics.cls.toFixed(3) : '--'}
              </div>
              <div className="text-xs text-slate-400">CLS</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
