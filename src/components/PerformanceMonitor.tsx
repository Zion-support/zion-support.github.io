import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  X,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  overall: 'good' | 'needs-improvement' | 'poor';
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoHide?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = true,
  autoHide = true,
  threshold = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 800
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    overall: 'good'
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  // Get performance rating
  const getRating = useCallback((value: number, threshold: number, metric: string): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === 'cls') {
      // CLS is lower is better
      if (value <= threshold * 0.5) return 'good';
      if (value <= threshold) return 'needs-improvement';
      return 'poor';
    }
    
    // Other metrics: higher is better
    if (value <= threshold * 0.75) return 'good';
    if (value <= threshold) return 'needs-improvement';
    return 'poor';
  }, []);

  // Calculate overall performance score
  const calculateOverallScore = useCallback((metrics: Partial<PerformanceMetrics>): 'good' | 'needs-improvement' | 'poor' => {
    const scores = [];
    
    if (metrics.fcp) scores.push(getRating(metrics.fcp, threshold.fcp, 'fcp'));
    if (metrics.lcp) scores.push(getRating(metrics.lcp, threshold.lcp, 'lcp'));
    if (metrics.fid) scores.push(getRating(metrics.fid, threshold.fid, 'fid'));
    if (metrics.cls) scores.push(getRating(metrics.cls, threshold.cls, 'cls'));
    if (metrics.ttfb) scores.push(getRating(metrics.ttfb, threshold.ttfb, 'ttfb'));

    if (scores.length === 0) return 'good';

    const goodCount = scores.filter(s => s === 'good').length;
    const poorCount = scores.filter(s => s === 'poor').length;
    const total = scores.length;

    if (poorCount > total * 0.3) return 'poor';
    if (goodCount >= total * 0.7) return 'good';
    return 'needs-improvement';
  }, [threshold, getRating]);

  // Measure First Contentful Paint
  const measureFCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({
            ...prev,
            fcp: fcpEntry.startTime,
            overall: calculateOverallScore({ ...prev, fcp: fcpEntry.startTime })
          }));
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, [calculateOverallScore]);

  // Measure Largest Contentful Paint
  const measureLCP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({
            ...prev,
            lcp: lcpEntry.startTime,
            overall: calculateOverallScore({ ...prev, lcp: lcpEntry.startTime })
          }));
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, [calculateOverallScore]);

  // Measure First Input Delay
  const measureFID = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({
              ...prev,
              fid: entry.processingStart - entry.startTime,
              overall: calculateOverallScore({ ...prev, fid: entry.processingStart - entry.startTime })
            }));
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }, [calculateOverallScore]);

  // Measure Cumulative Layout Shift
  const measureCLS = useCallback(() => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => ({
              ...prev,
              cls: clsValue,
              overall: calculateOverallScore({ ...prev, cls: clsValue })
            }));
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }, [calculateOverallScore]);

  // Measure Time to First Byte
  const measureTTFB = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
        if (navigationEntry) {
          const ttfb = (navigationEntry as any).responseStart - (navigationEntry as any).requestStart;
          setMetrics(prev => ({
            ...prev,
            ttfb,
            overall: calculateOverallScore({ ...prev, ttfb })
          }));
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [calculateOverallScore]);

  // Measure First Meaningful Paint
  const measureFMP = useCallback(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fmpEntry = entries.find(entry => entry.name === 'first-meaningful-paint');
        if (fmpEntry) {
          setMetrics(prev => ({
            ...prev,
            fmp: fmpEntry.startTime
          }));
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    // Wait for page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        measureFCP();
        measureLCP();
        measureFID();
        measureCLS();
        measureTTFB();
        measureFMP();
      });
    } else {
      measureFCP();
      measureLCP();
      measureFID();
      measureCLS();
      measureTTFB();
      measureFMP();
    }

    // Show metrics after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (autoHide) {
        setTimeout(() => setIsVisible(false), 10000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [enabled, autoHide, measureFCP, measureLCP, measureFID, measureCLS, measureTTFB, measureFMP]);

  // Generate alerts for poor performance
  useEffect(() => {
    const newAlerts: string[] = [];
    
    if (metrics.fcp && metrics.fcp > threshold.fcp) {
      newAlerts.push(`First Contentful Paint (${Math.round(metrics.fcp)}ms) is above threshold (${threshold.fcp}ms)`);
    }
    if (metrics.lcp && metrics.lcp > threshold.lcp) {
      newAlerts.push(`Largest Contentful Paint (${Math.round(metrics.lcp)}ms) is above threshold (${threshold.lcp}ms)`);
    }
    if (metrics.fid && metrics.fid > threshold.fid) {
      newAlerts.push(`First Input Delay (${Math.round(metrics.fid)}ms) is above threshold (${threshold.fid}ms)`);
    }
    if (metrics.cls && metrics.cls > threshold.cls) {
      newAlerts.push(`Cumulative Layout Shift (${metrics.cls.toFixed(3)}) is above threshold (${threshold.cls})`);
    }
    if (metrics.ttfb && metrics.ttfb > threshold.ttfb) {
      newAlerts.push(`Time to First Byte (${Math.round(metrics.ttfb)}ms) is above threshold (${threshold.ttfb}ms)`);
    }

    setAlerts(newAlerts);
  }, [metrics, threshold]);

  if (!enabled || !showMetrics) return null;

  const getStatusIcon = (rating: 'good' | 'needs-improvement' | 'poor') => {
    switch (rating) {
      case 'good': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor': return <X className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusColor = (rating: 'good' | 'needs-improvement' | 'poor') => {
    switch (rating) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl z-50 max-w-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-white">Performance Monitor</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
              >
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-slate-700 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Overall Status */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Overall Performance</span>
              {getStatusIcon(metrics.overall)}
            </div>
            <div className={`text-lg font-bold ${getStatusColor(metrics.overall)}`}>
              {metrics.overall === 'good' && 'Excellent'}
              {metrics.overall === 'needs-improvement' && 'Good'}
              {metrics.overall === 'poor' && 'Needs Improvement'}
            </div>
          </div>

          {/* Detailed Metrics */}
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-slate-700"
            >
              <div className="p-4 space-y-3">
                {metrics.fcp !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">FCP</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{Math.round(metrics.fcp)}ms</span>
                      {getStatusIcon(getRating(metrics.fcp, threshold.fcp, 'fcp'))}
                    </div>
                  </div>
                )}
                
                {metrics.lcp !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">LCP</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{Math.round(metrics.lcp)}ms</span>
                      {getStatusIcon(getRating(metrics.lcp, threshold.lcp, 'lcp'))}
                    </div>
                  </div>
                )}
                
                {metrics.fid !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">FID</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{Math.round(metrics.fid)}ms</span>
                      {getStatusIcon(getRating(metrics.fid, threshold.fid, 'fid'))}
                    </div>
                  </div>
                )}
                
                {metrics.cls !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">CLS</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{metrics.cls.toFixed(3)}</span>
                      {getStatusIcon(getRating(metrics.cls, threshold.cls, 'cls'))}
                    </div>
                  </div>
                )}
                
                {metrics.ttfb !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">TTFB</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{Math.round(metrics.ttfb)}ms</span>
                      {getStatusIcon(getRating(metrics.ttfb, threshold.ttfb, 'ttfb'))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="border-t border-slate-700 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-400">Performance Alerts</span>
              </div>
              <div className="space-y-1">
                {alerts.slice(0, 2).map((alert, index) => (
                  <div key={index} className="text-xs text-yellow-300 bg-yellow-500/10 p-2 rounded">
                    {alert}
                  </div>
                ))}
                {alerts.length > 2 && (
                  <div className="text-xs text-gray-400 text-center">
                    +{alerts.length - 2} more alerts
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Info */}
          <div className="border-t border-slate-700 p-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Info className="w-3 h-3" />
              <span>Core Web Vitals monitoring active</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
