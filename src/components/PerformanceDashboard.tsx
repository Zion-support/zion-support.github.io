<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Clock, 
  Target, 
  BarChart3, 
  HardDrive, 
  Wifi, 
  Cpu
} from 'lucide-react';
import { usePerformance } from '../hooks/usePerformance';

interface BundleMetrics {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  chunkCount: number;
}

export const PerformanceDashboard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bundleMetrics, setBundleMetrics] = useState<BundleMetrics | null>(null);
  const [networkMetrics, setNetworkMetrics] = useState({
    latency: 0,
    bandwidth: 0,
    connectionType: 'unknown'
  });
  const performance = usePerformance();

  // Calculate bundle metrics
  const calculateBundleMetrics = useCallback(async () => {
    try {
      const response = await fetch('/api/bundle-metrics');
      if (response.ok) {
        const data = await response.json();
        setBundleMetrics(data);
      }
    } catch (error) {
      // Fallback to estimated metrics based on build output
      setBundleMetrics({
        totalSize: 1200000, // ~1.2MB from build output
        jsSize: 1000000,
        cssSize: 12000,
        imageSize: 80000,
        chunkCount: 45
      });
    }
  }, []);

  // Monitor network performance
  const monitorNetwork = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection) {
        setNetworkMetrics(prev => ({
          ...prev,
          connectionType: connection.effectiveType || 'unknown',
          bandwidth: connection.downlink || 0
        }));
      }
    }

    // Measure latency to a reliable endpoint
    const start = window.performance.now();
    fetch('/api/health', { method: 'HEAD' })
      .then(() => {
        const latency = window.performance.now() - start;
        setNetworkMetrics(prev => ({ ...prev, latency }));
      })
      .catch(() => {
        // Fallback latency measurement
        setNetworkMetrics(prev => ({ ...prev, latency: 50 }));
      });
  }, []);

  useEffect(() => {
    calculateBundleMetrics();
    monitorNetwork();
    
    const interval = setInterval(() => {
      monitorNetwork();
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [calculateBundleMetrics, monitorNetwork]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const generateRecommendations = (fcp: number, lcp: number, fid: number, cls: number, ttfb: number): string[] => {
    const recommendations: string[] = [];

    if (fcp > 1000) {
      recommendations.push('Optimize First Contentful Paint by reducing server response time');
    }
    if (lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by optimizing images and fonts');
    }
    if (fid > 100) {
      recommendations.push('Reduce First Input Delay by optimizing JavaScript execution');
    }
    if (cls > 0.1) {
      recommendations.push('Minimize Cumulative Layout Shift by setting explicit dimensions');
    }
    if (ttfb > 600) {
      recommendations.push('Improve Time to First Byte by optimizing server performance');
    }

    if (recommendations.length === 0) {
      recommendations.push('Performance is excellent! Keep up the good work.');
    }

    return recommendations;
  };

  const refreshMetrics = useCallback(async () => {
    setIsLoading(true);
    try {
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to collect performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshMetrics();

    if (autoRefresh) {
      const interval = setInterval(refreshMetrics, 30000); // Refresh every 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshMetrics]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getMetricColor = (value: number | null, good: number, poor: number) => {
    if (value === null) return 'text-gray-400';
    if (value <= good) return 'text-green-400';
    if (value <= poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getBundleScore = () => {
    if (!bundleMetrics) return 0;
    const totalSize = bundleMetrics.totalSize;
    if (totalSize < 1000000) return 95; // <1MB
    if (totalSize < 2000000) return 85; // <2MB
    if (totalSize < 5000000) return 70; // <5MB
    return 50; // >5MB
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {/* Collapsed View */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle performance dashboard"
      >
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-medium text-sm">Performance</span>
        </div>
        
        {/* Score Indicator */}
        <div className="mt-2 text-center">
          <div className={`text-2xl font-bold ${getScoreColor(performance.overallScore)}`}>
            {performance.overallScore}
          </div>
        </div>

        {/* Bundle Size Indicator */}
        {bundleMetrics && (
          <div className="mt-2 text-center">
            <div className="text-xs text-gray-400">Bundle</div>
            <div className={`text-sm font-medium ${getBundleScore() >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
              {formatBytes(bundleMetrics.totalSize)}
            </div>
          </div>
        )}
      </motion.button>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Performance Dashboard"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Performance Dashboard
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close dashboard"
                >
                  ×
                </button>
              </div>
              <p className="text-cyan-100 text-sm mt-1">
                Real-time performance monitoring
              </p>
            </div>
          </div>
        </div>
        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Overall Score */}
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getScoreIcon(performance.overallScore)}
                  <span className="text-white font-medium">Overall Score</span>
                </div>
                <div className={`text-4xl font-bold ${getScoreColor(performance.overallScore)}`}>
                  {performance.overallScore}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {performance.overallScore >= 90 ? 'Excellent' : 
                   performance.overallScore >= 70 ? 'Good' : 'Needs Improvement'}
                </div>
              </div>

              {/* Bundle Metrics */}
              {bundleMetrics && (
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-blue-400" />
                    Bundle Analysis
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-gray-300">
                      <span className="text-gray-400">Total:</span>
                      <div className="font-medium text-white">{formatBytes(bundleMetrics.totalSize)}</div>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400">Chunks:</span>
                      <div className="font-medium text-white">{bundleMetrics.chunkCount}</div>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400">JS:</span>
                      <div className="font-medium text-white">{formatBytes(bundleMetrics.jsSize)}</div>
                    </div>
                    <div className="text-gray-300">
                      <span className="text-gray-400">CSS:</span>
                      <div className="font-medium text-white">{formatBytes(bundleMetrics.cssSize)}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Bundle Score</span>
                      <span>{getBundleScore()}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          getBundleScore() >= 80 ? 'bg-green-500' : 
                          getBundleScore() >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${getBundleScore()}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Network Metrics */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-green-400" />
                  Network Performance
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-300">
                    <span className="text-gray-400">Latency:</span>
                    <div className={`font-medium ${getMetricColor(networkMetrics.latency, 100, 300)}`}>
                      {formatMetric(networkMetrics.latency, 'ms')}
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-400">Connection:</span>
                    <div className="font-medium text-white capitalize">{networkMetrics.connectionType}</div>
                  </div>
                  {networkMetrics.bandwidth > 0 && (
                    <div className="text-gray-300 col-span-2">
                      <span className="text-gray-400">Bandwidth:</span>
                      <div className="font-medium text-white">{networkMetrics.bandwidth.toFixed(1)} Mbps</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                  Core Web Vitals
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">LCP</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.lcp, 2500, 4000)}`}>
                      {formatMetric(performance.lcp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">FID</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.fid, 100, 300)}`}>
                      {formatMetric(performance.fid)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">CLS</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.cls, 0.1, 0.25)}`}>
                      {performance.cls ? performance.cls.toFixed(3) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Performance Metrics
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">FCP</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.fcp, 1800, 3000)}`}>
                      {formatMetric(performance.fcp)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">TTFB</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.ttfb, 800, 1800)}`}>
                      {formatMetric(performance.ttfb)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">TTI</span>
                    <span className={`text-sm font-medium ${getMetricColor(performance.tti, 3800, 7300)}`}>
                      {formatMetric(performance.tti)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 border-t border-gray-700 p-3 text-center">
              <button
                onClick={calculateBundleMetrics}
                className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                aria-label="Refresh metrics"
              >
                Refresh Metrics
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PerformanceDashboard;
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  loadTime: number;
  responseTime: number;
  errors: number;
  uptime: number;
}

export function PerformanceDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    loadTime: 0,
    responseTime: 0,
    errors: 0,
    uptime: 0
  });
  const [startTime] = useState(Date.now());

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let errorCount = 0;

    // FPS monitoring
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Memory monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const usedMemory = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        setMetrics(prev => ({ ...prev, memory: usedMemory }));
      }
    };

    // Load time monitoring
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    };

    // Response time monitoring
    const measureResponseTime = () => {
      const start = performance.now();
      fetch('/api/health')
        .then(() => {
          const responseTime = performance.now() - start;
          setMetrics(prev => ({ ...prev, responseTime: Math.round(responseTime) }));
        })
        .catch(() => {
          errorCount++;
          setMetrics(prev => ({ ...prev, errors: errorCount }));
        });
    };

    // Uptime monitoring
    const measureUptime = () => {
      const uptime = Math.round((Date.now() - startTime) / 1000);
      setMetrics(prev => ({ ...prev, uptime }));
    };

    // Error monitoring
    const handleError = () => {
      errorCount++;
      setMetrics(prev => ({ ...prev, errors: errorCount }));
    };

    // Start monitoring
    measureFPS();
    measureMemory();
    measureLoadTime();
    
    const memoryInterval = setInterval(measureMemory, 2000);
    const responseInterval = setInterval(measureResponseTime, 5000);
    const uptimeInterval = setInterval(measureUptime, 1000);
    
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      clearInterval(memoryInterval);
      clearInterval(responseInterval);
      clearInterval(uptimeInterval);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, [startTime]);

  const getStatusColor = (metric: keyof PerformanceMetrics, value: number) => {
    switch (metric) {
      case 'fps':
        return value >= 50 ? 'text-green-400' : value >= 30 ? 'text-yellow-400' : 'text-red-400';
      case 'memory':
        return value < 100 ? 'text-green-400' : value < 200 ? 'text-yellow-400' : 'text-red-400';
      case 'loadTime':
        return value < 1000 ? 'text-green-400' : value < 3000 ? 'text-yellow-400' : 'text-red-400';
      case 'responseTime':
        return value < 100 ? 'text-green-400' : value < 500 ? 'text-yellow-400' : 'text-red-400';
      case 'errors':
        return value === 0 ? 'text-green-400' : value < 5 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (metric: keyof PerformanceMetrics, value: number) => {
    switch (metric) {
      case 'fps':
        return value >= 50 ? '🟢' : value >= 30 ? '🟡' : '🔴';
      case 'memory':
        return value < 100 ? '🟢' : value < 200 ? '🟡' : '🔴';
      case 'loadTime':
        return value < 1000 ? '🟢' : value < 3000 ? '🟡' : '🔴';
      case 'responseTime':
        return value < 100 ? '🟢' : value < 500 ? '🟡' : '🔴';
      case 'errors':
        return value === 0 ? '🟢' : value < 5 ? '🟡' : '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400">📊</span>
          <span className="hidden sm:inline">Performance</span>
        </div>
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -400, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-4 left-20 z-40 bg-gray-900/95 backdrop-blur-md text-white p-6 rounded-xl border border-gray-700 shadow-2xl shadow-black/50 min-w-[320px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-cyan-400">Performance Monitor</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* FPS */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>🎬</span>
                  <span>FPS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('fps', metrics.fps)}`}>
                    {metrics.fps}
                  </span>
                  <span>{getStatusIcon('fps', metrics.fps)}</span>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>💾</span>
                  <span>Memory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('memory', metrics.memory)}`}>
                    {metrics.memory}MB
                  </span>
                  <span>{getStatusIcon('memory', metrics.memory)}</span>
                </div>
              </div>

              {/* Load Time */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Load Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('loadTime', metrics.loadTime)}`}>
                    {metrics.loadTime}ms
                  </span>
                  <span>{getStatusIcon('loadTime', metrics.loadTime)}</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>🌐</span>
                  <span>Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('responseTime', metrics.responseTime)}`}>
                    {metrics.responseTime}ms
                  </span>
                  <span>{getStatusIcon('responseTime', metrics.responseTime)}</span>
                </div>
              </div>

              {/* Errors */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>Errors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-mono ${getStatusColor('errors', metrics.errors)}`}>
                    {metrics.errors}
                  </span>
                  <span>{getStatusIcon('errors', metrics.errors)}</span>
                </div>
              </div>

              {/* Uptime */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-cyan-400">
                    {Math.floor(metrics.uptime / 60)}m {metrics.uptime % 60}s
                  </span>
                  <span>🟢</span>
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
              <div className="text-center">
                <span className="text-sm text-gray-400">Overall Status: </span>
                <span className="text-cyan-400 font-semibold">
                  {metrics.errors === 0 && metrics.fps >= 50 ? 'Excellent' : 
                   metrics.errors < 3 && metrics.fps >= 30 ? 'Good' : 'Needs Attention'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
