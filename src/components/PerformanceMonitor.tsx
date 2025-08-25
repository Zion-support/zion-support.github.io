import React, { useEffect, useState, useCallback } from 'react';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
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

  useEffect(() => {
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
        const fid = entries[entries.length - 1] as any;
        if (fid.processingStart && fid.startTime) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
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
    </div>
  );
};

export default PerformanceMonitor;