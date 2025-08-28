import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Clock, HardDrive, Wifi, AlertTriangle, CheckCircle, X, ChevronDown } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  showDetails?: boolean;
}

export function PerformanceMonitor({ 
  enabled = true, 
  autoRefresh = true, 
  refreshInterval = 30000,
  showDetails = false 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const calculateMetrics = useCallback(() => {
    if (!window.performance) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    const fid = 0; // First Input Delay - would need to be measured during user interaction
    const cls = 0; // Cumulative Layout Shift - would need to be measured over time
    
    const ttfb = navigation.responseStart - navigation.requestStart;
    const loadTime = navigation.loadEventEnd - navigation.navigationStart;
    
    // Estimate bundle size (this is a rough approximation)
    const bundleSize = performance.memory?.usedJSHeapSize || 0;
    
    return {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      bundleSize,
      loadTime
    };
  }, []);

  const getPerformanceScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.ttfb > 600) score -= 15;
    if (metrics.loadTime > 3000) score -= 15;
    
    return Math.max(0, score);
  }, []);

  const getPerformanceColor = useCallback((score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, []);

  const getPerformanceStatus = useCallback((score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  }, []);

  const checkPerformanceIssues = useCallback((metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    
    if (metrics.fcp > 1800) {
      newAlerts.push('First Contentful Paint is slow (>1.8s)');
    }
    if (metrics.lcp > 2500) {
      newAlerts.push('Largest Contentful Paint is slow (>2.5s)');
    }
    if (metrics.ttfb > 600) {
      newAlerts.push('Time to First Byte is slow (>600ms)');
    }
    if (metrics.loadTime > 3000) {
      newAlerts.push('Page load time is slow (>3s)');
    }
    
    setAlerts(newAlerts);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const updateMetrics = () => {
      const newMetrics = calculateMetrics();
      if (newMetrics) {
        setMetrics(newMetrics);
        checkPerformanceIssues(newMetrics);
      }
    };

    // Initial calculation
    updateMetrics();

    // Set up auto-refresh
    if (autoRefresh) {
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [enabled, autoRefresh, refreshInterval, calculateMetrics, checkPerformanceIssues]);

  useEffect(() => {
    // Show monitor after page load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!enabled || !isVisible) return null;

  const score = metrics ? getPerformanceScore(metrics) : 0;
  const status = getPerformanceStatus(score);
  const statusColor = getPerformanceColor(score);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-white">Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-cyan-400/20 rounded-lg transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-red-400/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>

          {/* Score Display */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400">Performance Score</span>
              <span className={`text-sm font-bold ${statusColor}`}>{score}/100</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <motion.div
                className={`h-2 rounded-full ${
                  score >= 90 ? 'bg-green-400' : 
                  score >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="text-center">
              <span className={`text-xs font-medium ${statusColor}`}>{status}</span>
            </div>
          </div>

          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && metrics && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-cyan-400/20"
              >
                <div className="p-4 space-y-3">
                  {/* Core Web Vitals */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">FCP</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.fcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Zap className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">LCP</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.lcp.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <Wifi className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">TTFB</div>
                      <div className="text-sm font-medium text-white">
                        {metrics.ttfb.toFixed(0)}ms
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                      <HardDrive className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Load</div>
                      <div className="text-sm font-medium text-white">
                        {(metrics.loadTime / 1000).toFixed(1)}s
                      </div>
                    </div>
                  </div>

                  {/* Alerts */}
                  {alerts.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-xs font-medium">Performance Issues</span>
                      </div>
                      <div className="space-y-1">
                        {alerts.map((alert, index) => (
                          <div key={index} className="text-xs text-gray-300 bg-yellow-400/10 p-2 rounded">
                            {alert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Refresh Button */}
                  <button
                    onClick={() => {
                      const newMetrics = calculateMetrics();
                      if (newMetrics) {
                        setMetrics(newMetrics);
                        checkPerformanceIssues(newMetrics);
                      }
                    }}
                    className="w-full py-2 px-3 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 text-xs font-medium rounded-lg transition-colors"
                  >
                    Refresh Metrics
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
