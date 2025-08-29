import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Wifi, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
}

interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  metric: string;
  value: number;
  threshold: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;
    
    // LCP scoring (0-100)
    if (metrics.lcp > 4000) score -= 25;
    else if (metrics.lcp > 2500) score -= 15;
    
    // FID scoring (0-100)
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
    
    // CLS scoring (0-100)
    if (metrics.cls > 0.25) score -= 25;
    else if (metrics.cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const checkPerformanceThresholds = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: PerformanceAlert[] = [];
    
    if (metrics.fcp > 1800) {
      newAlerts.push({
        id: `fcp-${Date.now()}`,
        type: 'warning',
        message: 'First Contentful Paint is slow',
        timestamp: new Date(),
        metric: 'FCP',
        value: metrics.fcp,
        threshold: 1800
      });
    }
    
    if (metrics.lcp > 4000) {
      newAlerts.push({
        id: `lcp-${Date.now()}`,
        type: 'error',
        message: 'Largest Contentful Paint is very slow',
        timestamp: new Date(),
        metric: 'LCP',
        value: metrics.lcp,
        threshold: 4000
      });
    }
    
    if (metrics.fid > 300) {
      newAlerts.push({
        id: `fid-${Date.now()}`,
        type: 'warning',
        message: 'First Input Delay is high',
        timestamp: new Date(),
        metric: 'FID',
        value: metrics.fid,
        threshold: 300
      });
    }
    
    if (metrics.cls > 0.25) {
      newAlerts.push({
        id: `cls-${Date.now()}`,
        type: 'error',
        message: 'Cumulative Layout Shift is poor',
        timestamp: new Date(),
        metric: 'CLS',
        value: metrics.cls,
        threshold: 0.25
      });
    }
    
    if (newAlerts.length > 0) {
      setAlerts(prev => [...prev, ...newAlerts]);
    }
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      // Measure Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
          }
        }).observe({ entryTypes: ['paint'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            resolve(lcpEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            resolve(fidEntry.processingStart - fidEntry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });

      // Measure TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;

      // Get memory info
      const memory = (performance as any).memory || {
        used: 0,
        total: 0,
        limit: 0
      };

      // Get network info
      const connection = (navigator as any).connection || {
        effectiveType: 'unknown',
        downlink: 0,
        rtt: 0
      };

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        memory,
        network: {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt
        }
      };

      setMetrics(newMetrics);
      checkPerformanceThresholds(newMetrics);
    } catch (error) {
      console.error('Error measuring performance:', error);
    }
  }, [checkPerformanceThresholds]);

  useEffect(() => {
    // Initial measurement
    measurePerformance();
    
    // Set up periodic measurements
    const interval = setInterval(measurePerformance, 10000);
    
    return () => clearInterval(interval);
  }, [measurePerformance]);

  const getMetricColor = (metric: string, value: number): string => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1000, needsImprovement: 1800 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 }
    };
    
    const threshold = thresholds[metric];
    if (!threshold) return 'text-gray-500';
    
    if (value <= threshold.good) return 'text-green-500';
    if (value <= threshold.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMetricStatus = (metric: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      fcp: { good: 1000, needsImprovement: 1800 },
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 }
    };
    
    const threshold = thresholds[metric];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const formatMetric = (metric: string, value: number): string => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'fcp' || metric === 'lcp' || metric === 'fid' || metric === 'ttfb') {
      return `${Math.round(value)}ms`;
    }
    return value.toString();
  };

  if (!metrics) return null;

  const performanceScore = getPerformanceScore(metrics);

  return (
    <>
      {/* Floating Performance Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed bottom-6 right-20 z-40 w-80 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <h3 className="font-semibold">Performance</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {isExpanded ? '−' : '+'}
                </button>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3 text-center">
                <div className="text-2xl font-bold">{performanceScore}</div>
                <div className="text-sm text-blue-100">Performance Score</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              {/* Core Web Vitals */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Core Web Vitals</h4>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>FCP:</span>
                    <span className={getMetricColor('fcp', metrics.fcp)}>
                      {formatMetric('fcp', metrics.fcp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>LCP:</span>
                    <span className={getMetricColor('lcp', metrics.lcp)}>
                      {formatMetric('lcp', metrics.lcp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>FID:</span>
                    <span className={getMetricColor('fid', metrics.fid)}>
                      {formatMetric('fid', metrics.fid)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>CLS:</span>
                    <span className={getMetricColor('cls', metrics.cls)}>
                      {formatMetric('cls', metrics.cls)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Additional Metrics</h4>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>TTFB:</span>
                    <span>{formatMetric('ttfb', metrics.ttfb)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Memory:</span>
                    <span>{Math.round(metrics.memory.used / 1024 / 1024)}MB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Network:</span>
                    <span>{metrics.network.effectiveType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>RTT:</span>
                    <span>{metrics.network.rtt}ms</span>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Alerts</h4>
                  <div className="space-y-1">
                    {alerts.slice(-3).map((alert) => (
                      <div
                        key={alert.id}
                        className={`text-xs p-2 rounded ${
                          alert.type === 'error' ? 'bg-red-100 text-red-800' :
                          alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}
                      >
                        <div className="flex items-center space-x-1">
                          {alert.type === 'error' ? <AlertTriangle className="w-3 h-3" /> :
                           alert.type === 'warning' ? <AlertTriangle className="w-3 h-3" /> :
                           <CheckCircle className="w-3 h-3" />}
                          <span>{alert.message}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
