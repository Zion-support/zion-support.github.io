import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Activity, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Eye, 
  Zap,
  BarChart3,
  Minimize2,
  Maximize2,
  Settings,
  RefreshCw,
  Target,
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {

  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domContentLoaded: number;
  loadEvent: number;
  memoryUsage?: {

    used: number;
    total: number;
  };
  networkEffectiveType?: string;
  connectionDownlink?: number;
}

interface PerformanceAlert {

  id: string;
  type: 'warning' | 'error' | 'info';
  metric: keyof PerformanceMetrics;
  message: string;
  suggestion: string;
  timestamp: number;
}

export const EnhancedPerformanceMonitor: React.FC = () => {

  const [metrics, setMetrics] = useState<PerformanceMetrics>({

    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domContentLoaded: 0,
    loadEvent: 0});
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showDetailed, setShowDetailed] = useState(false);

  // Performance thresholds based on Core Web Vitals recommendations
  const thresholds = {

    fcp: { good: 1800, poor: 3000 }, // First Contentful Paint
    lcp: { good: 2500, poor: 4000 }, // Largest Contentful Paint
    fid: { good: 100, poor: 300 },   // First Input Delay
    cls: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
    ttfb: { good: 800, poor: 1800 }, // Time to First Byte
  };

  const getPerformanceScore = useCallback((metric: keyof typeof thresholds, value: number): number => {

    const threshold = thresholds[metric];
    if (!threshold) return 100;
    
    if (value <= threshold.good) return 100;
    if (value >= threshold.poor) return 0;
    
    // Linear interpolation between good and poor
    const range = threshold.poor - threshold.good;
    const position = value - threshold.good;
    return Math.max(0, 100 - (position / range) * 100);
  }, []);

  const getMetricStatus = useCallback((metric: keyof typeof thresholds, value: number): 'good' | 'needs-improvement' | 'poor' => {

    const threshold = thresholds[metric];
    if (!threshold) return 'good';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }, []);

  const collectPerformanceMetrics = useCallback((): PerformanceMetrics => {

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    let fcp = 0;
    let lcp = 0;
    
    // Get First Contentful Paint
    const fcpEntry = paint.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) fcp = fcpEntry.startTime;
    
    // Get Largest Contentful Paint
    if ('getLargestContentfulPaint' in window) {

      try {

        new PerformanceObserver((entryList) => {

          const entries = entryList.getEntries();
          if (entries.length > 0) {

            lcp = entries[entries.length - 1].startTime;
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {

        // // console.warn('LCP observation not supported');
      }
    }

    // Calculate memory usage if available
    let memoryUsage;
    if ('memory' in performance) {

      const memory = (performance as any).memory;
      memoryUsage = {

        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize};
    }

    // Get connection information if available
    let networkEffectiveType;
    let connectionDownlink;
    if ('connection' in navigator) {

      const connection = (navigator as any).connection;
      networkEffectiveType = connection.effectiveType;
      connectionDownlink = connection.downlink;
    }

    return {

      fcp,
      lcp,
      fid: 0, // FID needs to be measured via PerformanceObserver
      cls: 0, // CLS needs to be measured via PerformanceObserver
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.navigationStart : 0,
      loadEvent: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0,
      memoryUsage,
      networkEffectiveType,
      connectionDownlink};
  }, []);

  const generateAlerts = useCallback((newMetrics: PerformanceMetrics) => {

    const newAlerts: PerformanceAlert[] = [];
    const timestamp = Date.now();

    // Check each metric against thresholds
    Object.entries(thresholds).forEach(([metric, threshold]) => {

      const value = newMetrics[metric as keyof PerformanceMetrics] as number;
      const status = getMetricStatus(metric as keyof typeof thresholds, value);
      
      if (status === 'poor') {

        newAlerts.push({

          id: `${metric}-${timestamp}`,
          type: 'error',
          metric: metric as keyof PerformanceMetrics,
          message: `Poor ${metric.toUpperCase()}: ${value.toFixed(0)}ms`,
          suggestion: getOptimizationSuggestion(metric as keyof typeof thresholds),
          timestamp});
      } else if (status === 'needs-improvement') {

        newAlerts.push({

          id: `${metric}-${timestamp}`,
          type: 'warning',
          metric: metric as keyof PerformanceMetrics,
          message: `${metric.toUpperCase()} needs improvement: ${value.toFixed(0)}ms`,
          suggestion: getOptimizationSuggestion(metric as keyof typeof thresholds),
          timestamp});
      }
    });

    // Memory usage alerts
    if (newMetrics.memoryUsage) {

      const memoryUsagePercent = (newMetrics.memoryUsage.used / newMetrics.memoryUsage.total) * 100;
      if (memoryUsagePercent > 80) {

        newAlerts.push({

          id: `memory-${timestamp}`,
          type: 'warning',
          metric: 'memoryUsage' as keyof PerformanceMetrics,
          message: `High memory usage: ${memoryUsagePercent.toFixed(1)}%`,
          suggestion: 'Consider optimizing memory usage by reducing bundle size or lazy loading components.',
          timestamp});
      }
    }

    setAlerts(prev => [...newAlerts, ...prev.slice(0, 9)]); // Keep last 10 alerts
  }, [getMetricStatus]);

  const getOptimizationSuggestion = (metric: keyof typeof thresholds): string => {

    const suggestions = {

      fcp: 'Optimize critical resources, reduce render-blocking CSS/JS, use resource hints.',
      lcp: 'Optimize images, improve server response time, preload critical resources.',
      fid: 'Reduce JavaScript execution time, split long tasks, use web workers.',
      cls: 'Specify image dimensions, avoid dynamic content insertion, use CSS transforms.',
      ttfb: 'Optimize server configuration, use CDN, implement caching strategies.'};
    return suggestions[metric] || 'Review performance best practices.';
  };

  const refreshMetrics = useCallback(() => {

    if (!isEnabled) return;
    
    const newMetrics = collectPerformanceMetrics();
    setMetrics(newMetrics);
    generateAlerts(newMetrics);
  }, [isEnabled, collectPerformanceMetrics, generateAlerts]);

  useEffect(() => {

    // Initial load
    refreshMetrics();

    // Set up auto-refresh
    if (autoRefresh) {

      const interval = setInterval(refreshMetrics, 5000); // Refresh every 5 seconds
      return () => clearInterval(interval);
    }
  }, [refreshMetrics, autoRefresh]);

  const clearAlerts = () => setAlerts([]);

  const getStatusColor = (status: 'good' | 'needs-improvement' | 'poor') => {

    switch (status) {

      case 'good': return 'text-green-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: 'good' | 'needs-improvement' | 'poor') => {

    switch (status) {

      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <TrendingDown className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  if (!isEnabled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-white">Performance Monitor</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`p-1 rounded ${autoRefresh ? 'text-green-400' : 'text-gray-400'} hover:bg-slate-700`}
              title={autoRefresh ? 'Auto-refresh enabled' : 'Auto-refresh disabled'}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDetailed(!showDetailed)}
              className="p-1 rounded text-gray-400 hover:bg-slate-700 hover:text-white"
              title="Toggle detailed view"
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded text-gray-400 hover:bg-slate-700 hover:text-white"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsEnabled(false)}
              className="p-1 rounded text-gray-400 hover:bg-slate-700 hover:text-red-400"
              title="Close monitor"
            >
              ×
            </button>
          </div>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {/* Core Web Vitals */}
              <div className="p-3 space-y-2">
                <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Core Web Vitals</h4>
                
                {/* FCP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(getMetricStatus('fcp', metrics.fcp))}
                    <span className="text-sm text-gray-300">FCP</span>
                  </div>
                  <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('fcp', metrics.fcp))}`}>
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>

                {/* LCP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(getMetricStatus('lcp', metrics.lcp))}
                    <span className="text-sm text-gray-300">LCP</span>
                  </div>
                  <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('lcp', metrics.lcp))}`}>
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>

                {/* TTFB */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(getMetricStatus('ttfb', metrics.ttfb))}
                    <span className="text-sm text-gray-300">TTFB</span>
                  </div>
                  <span className={`text-sm font-mono ${getStatusColor(getMetricStatus('ttfb', metrics.ttfb))}`}>
                    {metrics.ttfb.toFixed(0)}ms
                  </span>
                </div>

                {showDetailed && (
                  <>
                    <div className="border-t border-slate-700 pt-2 mt-2">
                      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2">Additional Metrics</h4>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">DOM Content Loaded</span>
                        <span className="text-sm font-mono text-gray-400">
                          {metrics.domContentLoaded.toFixed(0)}ms
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Load Event</span>
                        <span className="text-sm font-mono text-gray-400">
                          {metrics.loadEvent.toFixed(0)}ms
                        </span>
                      </div>

                      {metrics.memoryUsage && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Memory Usage</span>
                          <span className="text-sm font-mono text-gray-400">
                            {((metrics.memoryUsage.used / metrics.memoryUsage.total) * 100).toFixed(1)}%
                          </span>
                        </div>
                      )}

                      {metrics.networkEffectiveType && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">Connection</span>
                          <span className="text-sm font-mono text-gray-400">
                            {metrics.networkEffectiveType}
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="border-t border-slate-700 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                      Performance Alerts ({alerts.length})
                    </h4>
                    <button
                      onClick={clearAlerts}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Clear
                    </button>
                  </div>
                  
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {alerts.slice(0, 3).map((alert) => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-2 rounded text-xs border-l-2 ${

                          alert.type === 'error' 
                            ? 'bg-red-900/20 border-red-400' 
                            : alert.type === 'warning'
                            ? 'bg-yellow-900/20 border-yellow-400'
                            : 'bg-blue-900/20 border-blue-400'
                        }`}
                      >
                        <div className="font-medium text-white">{alert.message}</div>
                        <div className="text-gray-400 mt-1">{alert.suggestion}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="border-t border-slate-700 p-3">
                <button
                  onClick={refreshMetrics}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Metrics
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};