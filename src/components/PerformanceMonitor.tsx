import React, { useEffect, useState, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Info,
  BarChart3
} from 'lucide-react';

interface PerformanceMetrics {
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
    
    return Math.max(0, score);
  }, [thresholds]);

  const getMetricStatus = (metric: number | null, threshold: { good: number; needsImprovement: number }): 'good' | 'needsImprovement' | 'poor' => {
    if (!metric) return 'good';
    if (metric <= threshold.good) return 'good';
    if (metric <= threshold.needsImprovement) return 'needsImprovement';
    return 'poor';
  };

  const getStatusColor = (status: 'good' | 'needsImprovement' | 'poor'): string => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needsImprovement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: 'good' | 'needsImprovement' | 'poor') => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needsImprovement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms'): string => {
    if (value === null) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  const formatMemory = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({
            ...prev,
            fcp: fcp.startTime,
            score: getScore({ ...prev, fcp: fcp.startTime })
          }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({
            ...prev,
            lcp: lcp.startTime,
            score: getScore({ ...prev, lcp: lcp.startTime })
          }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1] as FirstInputEntry;
        if (fid && 'processingStart' in fid) {
          setMetrics(prev => ({
            ...prev,
            fid: fid.processingStart - fid.startTime,
            score: getScore({ ...prev, fid: fid.processingStart - fid.startTime })
          }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        setMetrics(prev => ({
          ...prev,
          cls: clsValue,
          score: getScore({ ...prev, cls: clsValue })
        }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({
          ...prev,
          ttfb,
          score: getScore({ ...prev, ttfb })
        }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [getScore]);

  useEffect(() => {
    // Memory monitoring
    if ('memory' in performance) {
      const updateMemory = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memory: {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit,
          }
        }));
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Store metrics history
    if (metrics.score > 0) {
      setHistory(prev => [...prev.slice(-9), metrics]);
    }
  }, [metrics.score]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Performance Monitor"
      >
        <BarChart3 className="w-6 h-6" />
      </button>
    );
  }

  return (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceMonitor;