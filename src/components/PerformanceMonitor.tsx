import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Wifi, 
  Cpu, 
  Memory, 
  Battery,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Settings,
  RefreshCw,
  BarChart3,
  Gauge,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

interface PerformanceMetrics {
  fps: number;
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  network: {
    downlink: number;
    effectiveType: string;
    rtt: number;
  };
  timing: {
    domContentLoaded: number;
    loadComplete: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
  };
  errors: {
    count: number;
    lastError: string;
    timestamp: number;
  };
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  autoHide?: boolean;
  refreshInterval?: number;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = true,
  position = 'top-right',
  autoHide = true,
  refreshInterval = 2000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: { used: 0, total: 0, limit: 0 },
    network: { downlink: 0, effectiveType: 'unknown', rtt: 0 },
    timing: {
      domContentLoaded: 0,
      loadComplete: 0,
      firstPaint: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0
    },
    errors: { count: 0, lastError: '', timestamp: 0 }
  });

  const [performanceScore, setPerformanceScore] = useState(0);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);

  // FPS calculation
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  // Performance observer for Core Web Vitals
  useEffect(() => {
    if (!enabled) return;

    let observer: PerformanceObserver | null = null;

    try {
      // Observe Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          
          if (lastEntry && 'startTime' in lastEntry) {
            setMetrics(prev => ({
              ...prev,
              timing: {
                ...prev.timing,
                largestContentfulPaint: lastEntry.startTime
              }
            }));
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [enabled]);

  // FPS monitoring
  useEffect(() => {
    if (!enabled || !isMonitoring) return;

    let animationFrameId: number;

    const measureFPS = () => {
      const currentTime = performance.now();
      setFrameCount(prev => prev + 1);

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        setFrameCount(0);
        setLastTime(currentTime);
      }

      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [enabled, isMonitoring, lastTime, frameCount]);

  // Memory monitoring
  useEffect(() => {
    if (!enabled) return;

    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memory: {
            used: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024),
            total: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024),
            limit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024)
          }
        }));
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, refreshInterval);

    return () => clearInterval(interval);
  }, [enabled, refreshInterval]);

  // Network monitoring
  useEffect(() => {
    if (!enabled || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    
    const updateNetworkInfo = () => {
      setMetrics(prev => ({
        ...prev,
        network: {
          downlink: connection.downlink || 0,
          effectiveType: connection.effectiveType || 'unknown',
          rtt: connection.rtt || 0
        }
      }));
    };

    updateNetworkInfo();
    
    if (connection.addEventListener) {
      connection.addEventListener('change', updateNetworkInfo);
    }

    return () => {
      if (connection.removeEventListener) {
        connection.removeEventListener('change', updateNetworkInfo);
      }
    };
  }, [enabled]);

  // Performance timing
  useEffect(() => {
    if (!enabled) return;

    const updateTiming = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          timing: {
            ...prev.timing,
            domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
            loadComplete: Math.round(navigation.loadEventEnd - navigation.navigationStart)
          }
        }));
      }

      // First Paint and First Contentful Paint
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-paint') {
          setMetrics(prev => ({
            ...prev,
            timing: { ...prev.timing, firstPaint: Math.round(entry.startTime) }
          }));
        }
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            timing: { ...prev.timing, firstContentfulPaint: Math.round(entry.startTime) }
          }));
        }
      });
    };

    if (document.readyState === 'complete') {
      updateTiming();
    } else {
      window.addEventListener('load', updateTiming);
      return () => window.removeEventListener('load', updateTiming);
    }
  }, [enabled]);

  // Error monitoring
  useEffect(() => {
    if (!enabled) return;

    const handleError = (event: ErrorEvent) => {
      setMetrics(prev => ({
        ...prev,
        errors: {
          count: prev.errors.count + 1,
          lastError: event.message,
          timestamp: Date.now()
        }
      }));
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setMetrics(prev => ({
        ...prev,
        errors: {
          count: prev.errors.count + 1,
          lastError: event.reason?.toString() || 'Unhandled Promise Rejection',
          timestamp: Date.now()
        }
      }));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enabled]);

  // Calculate performance score
  useEffect(() => {
    if (!enabled) return;

    let score = 100;

    // FPS scoring
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 50) score -= 15;

    // Memory scoring
    const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
    if (memoryUsage > 80) score -= 20;
    else if (memoryUsage > 60) score -= 10;

    // Timing scoring
    if (metrics.timing.firstContentfulPaint > 2000) score -= 20;
    else if (metrics.timing.firstContentfulPaint > 1500) score -= 10;

    if (metrics.timing.largestContentfulPaint > 4000) score -= 20;
    else if (metrics.timing.largestContentfulPaint > 2500) score -= 10;

    // Network scoring
    if (metrics.network.downlink < 1) score -= 15;
    else if (metrics.network.downlink < 5) score -= 5;

    // Error scoring
    if (metrics.errors.count > 5) score -= 20;
    else if (metrics.errors.count > 0) score -= 10;

    setPerformanceScore(Math.max(0, score));
  }, [enabled, metrics]);

  // Generate recommendations
  useEffect(() => {
    if (!enabled) return;

    const newRecommendations: string[] = [];

    if (metrics.fps < 50) {
      newRecommendations.push('Consider reducing animations or optimizing rendering');
    }

    if (metrics.memory.used / metrics.memory.limit > 0.7) {
      newRecommendations.push('Memory usage is high - check for memory leaks');
    }

    if (metrics.timing.firstContentfulPaint > 2000) {
      newRecommendations.push('First contentful paint is slow - optimize critical rendering path');
    }

    if (metrics.timing.largestContentfulPaint > 4000) {
      newRecommendations.push('Largest contentful paint is slow - optimize images and layout');
    }

    if (metrics.network.downlink < 2) {
      newRecommendations.push('Network speed is slow - consider offline capabilities');
    }

    if (metrics.errors.count > 0) {
      newRecommendations.push('JavaScript errors detected - review error handling');
    }

    setRecommendations(newRecommendations);
  }, [enabled, metrics]);

  // Auto-hide functionality
  useEffect(() => {
    if (!enabled || !autoHide || !isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [enabled, autoHide, isOpen]);

  // Toggle monitoring
  const toggleMonitoring = useCallback(() => {
    setIsMonitoring(!isMonitoring);
  }, [isMonitoring]);

  // Refresh metrics
  const refreshMetrics = useCallback(() => {
    // Force refresh of all metrics
    setMetrics(prev => ({ ...prev }));
  }, []);

  // Get performance status
  const getPerformanceStatus = useMemo(() => {
    if (performanceScore >= 90) return { color: 'text-green-500', icon: CheckCircle, label: 'Excellent' };
    if (performanceScore >= 70) return { color: 'text-yellow-500', icon: AlertTriangle, label: 'Good' };
    if (performanceScore >= 50) return { color: 'text-orange-500', icon: AlertTriangle, label: 'Fair' };
    return { color: 'text-red-500', icon: AlertTriangle, label: 'Poor' };
  }, [performanceScore]);

  if (!enabled) return null;

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <>
      {/* Performance Monitor Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${positionClasses[position]} z-50 p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white`}
        aria-label="Performance Monitor"
        aria-expanded={isOpen}
        aria-controls="performance-panel"
      >
        <Activity className="w-6 h-6" />
      </button>

      {/* Performance Monitor Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="performance-panel"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed ${positionClasses[position]} top-16 z-40 w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden`}
            role="dialog"
            aria-labelledby="performance-title"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <h2 id="performance-title" className="text-lg font-semibold flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Performance Monitor
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMonitoring}
                    className={`p-1 rounded transition-colors ${
                      isMonitoring ? 'bg-white/20' : 'hover:bg-white/10'
                    }`}
                    title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                  >
                    <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`} />
                  </button>
                  <button
                    onClick={refreshMetrics}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                    title="Refresh Metrics"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                    title={isMinimized ? 'Expand' : 'Minimize'}
                  >
                    <BarChart3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Score */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Performance Score:
                </span>
                <div className="flex items-center space-x-2">
                  <getPerformanceStatus.icon className={`w-5 h-5 ${getPerformanceStatus.color}`} />
                  <span className={`text-lg font-bold ${getPerformanceStatus.color}`}>
                    {performanceScore}/100
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    ({getPerformanceStatus.label})
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            {!isMinimized && (
              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                {/* FPS */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">FPS</span>
                  </div>
                  <span className={`text-sm font-mono ${
                    metrics.fps >= 50 ? 'text-green-600' : metrics.fps >= 30 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.fps}
                  </span>
                </div>

                {/* Memory Usage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Memory className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Memory</span>
                  </div>
                  <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
                    {metrics.memory.used}MB / {metrics.memory.limit}MB
                  </span>
                </div>

                {/* Network */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wifi className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Network</span>
                  </div>
                  <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
                    {metrics.network.downlink.toFixed(1)} Mbps
                  </span>
                </div>

                {/* First Contentful Paint */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">FCP</span>
                  </div>
                  <span className={`text-sm font-mono ${
                    metrics.timing.firstContentfulPaint <= 1500 ? 'text-green-600' : 
                    metrics.timing.firstContentfulPaint <= 2500 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.timing.firstContentfulPaint}ms
                  </span>
                </div>

                {/* Largest Contentful Paint */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Monitor className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">LCP</span>
                  </div>
                  <span className={`text-sm font-mono ${
                    metrics.timing.largestContentfulPaint <= 2500 ? 'text-green-600' : 
                    metrics.timing.largestContentfulPaint <= 4000 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {metrics.timing.largestContentfulPaint}ms
                  </span>
                </div>

                {/* Errors */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-slate-600 dark:text-slate-400 mr-2" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Errors</span>
                  </div>
                  <span className={`text-sm font-mono ${
                    metrics.errors.count === 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metrics.errors.count}
                  </span>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      Recommendations
                    </h3>
                    <ul className="space-y-1">
                      {recommendations.map((rec, index) => (
                        <li key={index} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-600">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>Auto-refresh: {refreshInterval / 1000}s</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceMonitor;
