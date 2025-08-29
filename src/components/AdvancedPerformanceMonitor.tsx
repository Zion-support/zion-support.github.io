import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  Memory, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  RefreshCw
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
  bundleSize: number;
  lighthouseScore: number;
}

interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
}

export const AdvancedPerformanceMonitor: React.FC<{ showMetrics?: boolean }> = ({ 
  showMetrics = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    lighthouseScore: 0,
  });
  
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Performance measurement utilities
  const measureLoadTime = useCallback(() => {
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      return Math.round(loadTime);
    }
    return 0;
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
    }
    return 0;
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    try {
      const start = performance.now();
      await fetch('/api/health', { method: 'HEAD' });
      const end = performance.now();
      return Math.round(end - start);
    } catch {
      return 0;
    }
  }, []);

  const calculateLighthouseScore = useCallback((loadTime: number, bundleSize: number) => {
    let score = 100;
    
    if (loadTime > 3000) score -= 20;
    if (loadTime > 5000) score -= 30;
    if (bundleSize > 500) score -= 15;
    if (bundleSize > 1000) score -= 25;
    
    return Math.max(0, score);
  }, []);

  const updateMetrics = useCallback(async () => {
    const loadTime = measureLoadTime();
    const memoryUsage = measureMemoryUsage();
    const networkLatency = await measureNetworkLatency();
    
    // Estimate bundle size (in production, this would come from build metrics)
    const bundleSize = Math.round(Math.random() * 800 + 200); // Simulated for demo
    
    const lighthouseScore = calculateLighthouseScore(loadTime, bundleSize);
    
    setMetrics({
      loadTime,
      memoryUsage,
      cpuUsage: Math.round(Math.random() * 30 + 10), // Simulated CPU usage
      networkLatency,
      bundleSize,
      lighthouseScore,
    });

    // Generate alerts based on metrics
    const newAlerts: PerformanceAlert[] = [];
    
    if (loadTime > 3000) {
      newAlerts.push({
        type: 'warning',
        message: `Page load time is ${loadTime}ms, consider optimizing`,
        timestamp: new Date(),
      });
    }
    
    if (memoryUsage > 100) {
      newAlerts.push({
        type: 'warning',
        message: `Memory usage is ${memoryUsage}MB, monitor for leaks`,
        timestamp: new Date(),
      });
    }
    
    if (lighthouseScore < 70) {
      newAlerts.push({
        type: 'error',
        message: `Performance score is ${lighthouseScore}/100, needs optimization`,
        timestamp: new Date(),
      });
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 5));
    }
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency, calculateLighthouseScore]);

  useEffect(() => {
    if (showMetrics) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 10000); // Update every 10 seconds
      return () => clearInterval(interval);
    }
  }, [showMetrics, updateMetrics]);

  const getPerformanceStatus = (score: number) => {
    if (score >= 90) return { color: 'text-green-600', icon: CheckCircle, label: 'Excellent' };
    if (score >= 70) return { color: 'text-yellow-600', icon: AlertTriangle, label: 'Good' };
    return { color: 'text-red-600', icon: AlertTriangle, label: 'Needs Improvement' };
  };

  const getMetricColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!showMetrics) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed right-4 top-20 z-50"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <h3 className="font-semibold">Performance Monitor</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.div>
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
                  transition={{ duration: 0.3 }}
                  className="p-4 space-y-4"
                >
                  {/* Overall Score */}
                  <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                    {(() => {
                      const status = getPerformanceStatus(metrics.lighthouseScore);
                      const Icon = status.icon;
                      return (
                        <div>
                          <Icon className={`w-8 h-8 mx-auto mb-2 ${status.color}`} />
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {metrics.lighthouseScore}
                          </div>
                          <div className={`text-sm font-medium ${status.color}`}>
                            {status.label}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      icon={Clock}
                      label="Load Time"
                      value={`${metrics.loadTime}ms`}
                      color={getMetricColor(metrics.loadTime, { good: 2000, warning: 4000 })}
                    />
                    <MetricCard
                      icon={Memory}
                      label="Memory"
                      value={`${metrics.memoryUsage}MB`}
                      color={getMetricColor(metrics.memoryUsage, { good: 50, warning: 100 })}
                    />
                    <MetricCard
                      icon={Network}
                      label="Latency"
                      value={`${metrics.networkLatency}ms`}
                      color={getMetricColor(metrics.networkLatency, { good: 100, warning: 300 })}
                    />
                    <MetricCard
                      icon={HardDrive}
                      label="Bundle Size"
                      value={`${metrics.bundleSize}KB`}
                      color={getMetricColor(metrics.bundleSize, { good: 300, warning: 600 })}
                    />
                  </div>

                  {/* Alerts */}
                  {alerts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-yellow-600" />
                        Performance Alerts
                      </h4>
                      {alerts.map((alert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-3 rounded-lg text-sm ${
                            alert.type === 'error' 
                              ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                              : alert.type === 'warning'
                              ? 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                              : 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                          }`}
                        >
                          {alert.message}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={updateMetrics}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </button>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed right-4 top-4 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    </AnimatePresence>
  );
};

// Metric Card Component
const MetricCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}> = ({ icon: Icon, label, value, color }) => (
  <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg text-center">
    <Icon className={`w-5 h-5 mx-auto mb-2 ${color}`} />
    <div className={`text-lg font-semibold ${color}`}>{value}</div>
    <div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

// Refresh Icon Component
const RefreshCw: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);