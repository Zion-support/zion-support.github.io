import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp, 
  Clock, 
  HardDrive,
  Wifi,
  Smartphone,
  Monitor,
  X
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memory: number;
  network: string;
  device: string;
  timestamp: number;
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: number;
}

export default function AdvancedPerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const performanceThresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getPerformanceScore = useCallback((metric: keyof typeof performanceThresholds, value: number): number => {
    const { good, poor } = performanceThresholds[metric];
    if (value <= good) return 100;
    if (value <= poor) return 50;
    return 25;
  }, []);

  const getOverallScore = useCallback((metrics: PerformanceMetrics): number => {
    const scores = [
      getPerformanceScore('fcp', metrics.fcp),
      getPerformanceScore('lcp', metrics.lcp),
      getPerformanceScore('fid', metrics.fid),
      getPerformanceScore('cls', metrics.cls * 1000), // Convert to ms for scoring
      getPerformanceScore('ttfb', metrics.ttfb)
    ];
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }, [getPerformanceScore]);

  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const navigationEntry = entries.find(entry => entry.entryType === 'navigation') as PerformanceNavigationTiming;
          
          if (navigationEntry) {
            const metrics: PerformanceMetrics = {
              fcp: 0,
              lcp: 0,
              fid: 0,
              cls: 0,
              ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
              memory: (performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0,
              network: navigator.connection?.effectiveType || 'unknown',
              device: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
              timestamp: Date.now()
            };

            // Collect Web Vitals
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
            if (fcpEntry) metrics.fcp = fcpEntry.startTime;

            const lcpEntry = entries.find(entry => entry.name === 'largest-contentful-paint');
            if (lcpEntry) metrics.lcp = lcpEntry.startTime;

            const fidEntry = entries.find(entry => entry.name === 'first-input-delay');
            if (fidEntry) metrics.fid = fidEntry.processingStart - fidEntry.startTime;

            // CLS calculation
            let cls = 0;
            const clsEntries = entries.filter(entry => entry.entryType === 'layout-shift');
            clsEntries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                cls += entry.value;
              }
            });
            metrics.cls = cls;

            resolve(metrics);
            observer.disconnect();
          }
        });

        observer.observe({ entryTypes: ['navigation', 'paint', 'measure', 'layout-shift'] });
      } else {
        // Fallback for older browsers
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        resolve({
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
          memory: 0,
          network: 'unknown',
          device: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
          timestamp: Date.now()
        });
      }
    });
  });

  const checkAlerts = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];
    
    Object.entries(performanceThresholds).forEach(([metric, thresholds]) => {
      const value = metrics[metric as keyof PerformanceMetrics] as number;
      if (value > thresholds.poor) {
        newAlerts.push({
          id: `${metric}-${Date.now()}`,
          type: 'error',
          message: `${metric.toUpperCase()} is critically high: ${value}ms`,
          metric,
          value,
          threshold: thresholds.poor,
          timestamp: Date.now()
        });
      } else if (value > thresholds.good) {
        newAlerts.push({
          id: `${metric}-${Date.now()}`,
          type: 'warning',
          message: `${metric.toUpperCase()} needs attention: ${value}ms`,
          metric,
          value,
          threshold: thresholds.good,
          timestamp: Date.now()
        });
      }
    });

    if (metrics.memory > 100) {
      newAlerts.push({
        id: `memory-${Date.now()}`,
        type: 'warning',
        message: `High memory usage: ${metrics.memory.toFixed(1)}MB`,
        metric: 'memory',
        value: metrics.memory,
        threshold: 100,
        timestamp: Date.now()
      });
    }

    setAlerts(prev => [...newAlerts, ...prev].slice(0, 10));
  }, []);

  const updateMetrics = useCallback(async () => {
    try {
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      checkAlerts(newMetrics);
    } catch (error) {
      console.error('Failed to collect performance metrics:', error);
    }
  }, [collectMetrics, checkAlerts]);

  useEffect(() => {
    updateMetrics();
    
    if (autoRefresh) {
      const interval = setInterval(updateMetrics, 10000);
      return () => clearInterval(interval);
    }
  }, [updateMetrics, autoRefresh]);

  const getMetricColor = (metric: string, value: number): string => {
    const thresholds = performanceThresholds[metric as keyof typeof performanceThresholds];
    if (!thresholds) return 'text-gray-400';
    
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMetricIcon = (metric: string, value: number) => {
    const thresholds = performanceThresholds[metric as keyof typeof performanceThresholds];
    if (!thresholds) return <Info className="w-4 h-4" />;
    
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4 text-green-400" />;
    if (value <= thresholds.poor) return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    return <AlertTriangle className="w-4 h-4 text-red-400" />;
  };

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Activity className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 w-80 bg-zion-slate-light/95 backdrop-blur-md rounded-xl shadow-2xl border border-zion-cyan/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-zion-cyan" />
          <h3 className="text-white font-semibold">Performance Monitor</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`p-1 rounded ${autoRefresh ? 'text-zion-cyan' : 'text-gray-400'}`}
            title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
          >
            <Zap className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {metrics && (
          <>
            {/* Overall Score */}
            <div className="mb-4 text-center">
              <div className="text-2xl font-bold text-white">
                {getOverallScore(metrics)}
              </div>
              <div className="text-sm text-gray-400">Performance Score</div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {Object.entries(performanceThresholds).map(([metric, thresholds]) => {
                const value = metrics[metric as keyof PerformanceMetrics] as number;
                const score = getPerformanceScore(metric as keyof typeof performanceThresholds, value);
                
                return (
                  <div key={metric} className="bg-zion-slate/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase">{metric}</span>
                      {getMetricIcon(metric, value)}
                    </div>
                    <div className={`text-lg font-semibold ${getMetricColor(metric, value)}`}>
                      {value.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-500">
                      {score >= 80 ? 'Good' : score >= 50 ? 'Needs Work' : 'Poor'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* System Info */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-zion-slate/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <HardDrive className="w-4 h-4 text-zion-cyan" />
                  <span className="text-xs text-gray-400">Memory</span>
                </div>
                <div className="text-white font-semibold">
                  {metrics.memory.toFixed(1)}MB
                </div>
              </div>
              <div className="bg-zion-slate/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  {metrics.device === 'mobile' ? (
                    <Smartphone className="w-4 h-4 text-zion-cyan" />
                  ) : (
                    <Monitor className="w-4 h-4 text-zion-cyan" />
                  )}
                  <span className="text-xs text-gray-400">Device</span>
                </div>
                <div className="text-white font-semibold capitalize">
                  {metrics.device}
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={updateMetrics}
              className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-2 rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
            >
              Refresh Metrics
            </button>
          </>
        )}

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-white mb-2">Recent Alerts</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-2 rounded-lg text-xs ${
                    alert.type === 'error' ? 'bg-red-500/20 text-red-300' :
                    alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                    alert.type === 'info' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-green-500/20 text-green-300'
                  }`}
                >
                  {alert.message}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}