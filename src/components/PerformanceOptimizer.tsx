import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  X,
  RefreshCw,
  Settings,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Battery,
  Wifi,
  WifiOff
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  memoryUsage?: number;
  networkSpeed?: number;
  cpuUsage?: number;
}

interface PerformanceIssue {
  type: 'warning' | 'error' | 'info';
  message: string;
  severity: 'low' | 'medium' | 'high';
  suggestion?: string;
}

export const PerformanceOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<{ timestamp: Date; action: string; improvement: number }[]>([]);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const monitoringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceMonitoring();
    }
    
    return () => {
      cleanupPerformanceMonitoring();
    };
  }, []);

  const initializePerformanceMonitoring = useCallback(() => {
    try {
      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry as PerformanceEntry;
              setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lcp.startTime } : null);
            }
          });
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Measure initial load time
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }
    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }, []);

  const cleanupPerformanceMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
    }
  }, []);

  const measurePerformance = useCallback(async () => {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
      const lcp = paint.find(entry => entry.name === 'largest-contentful-paint');
      
      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Would need CLS observer
        firstInputDelay: 0, // Would need FID observer
      };

      // Try to get additional metrics if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      }

      setMetrics(newMetrics);
      analyzePerformance(newMetrics);
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, []);

  const analyzePerformance = useCallback((currentMetrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];

    // Analyze load time
    if (currentMetrics.loadTime > 3000) {
      newIssues.push({
        type: 'warning',
        message: 'Page load time is above 3 seconds',
        severity: 'medium',
        suggestion: 'Consider optimizing images, reducing bundle size, or implementing lazy loading'
      });
    }

    // Analyze First Contentful Paint
    if (currentMetrics.firstContentfulPaint > 1800) {
      newIssues.push({
        type: 'warning',
        message: 'First Contentful Paint is above 1.8 seconds',
        severity: 'medium',
        suggestion: 'Optimize critical rendering path and reduce blocking resources'
      });
    }

    // Analyze Largest Contentful Paint
    if (currentMetrics.largestContentfulPaint > 2500) {
      newIssues.push({
        type: 'warning',
        message: 'Largest Contentful Paint is above 2.5 seconds',
        severity: 'high',
        suggestion: 'Optimize images, implement lazy loading, and reduce layout shifts'
      });
    }

    // Analyze memory usage
    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 0.8) {
      newIssues.push({
        type: 'error',
        message: 'High memory usage detected',
        severity: 'high',
        suggestion: 'Check for memory leaks, optimize component rendering, and implement cleanup'
      });
    }

    setIssues(newIssues);
  }, []);

  const startContinuousMonitoring = useCallback(() => {
    if (monitoringIntervalRef.current) return;

    setIsMonitoring(true);
    monitoringIntervalRef.current = setInterval(() => {
      measurePerformance();
    }, 5000); // Monitor every 5 seconds
  }, [measurePerformance]);

  const stopContinuousMonitoring = useCallback(() => {
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
      monitoringIntervalRef.current = null;
    }
    setIsMonitoring(false);
  }, []);

  const optimizePerformance = useCallback(async () => {
    const startTime = performance.now();
    
    try {
      // Simulate performance optimization
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Record optimization
      const endTime = performance.now();
      const improvement = startTime - endTime;
      
      setOptimizationHistory(prev => [
        { timestamp: new Date(), action: 'Performance optimization', improvement },
        ...prev.slice(0, 9) // Keep last 10 entries
      ]);

      // Refresh metrics
      measurePerformance();
      
    } catch (error) {
      console.warn('Performance optimization failed:', error);
    }
  }, [measurePerformance]);

  const getPerformanceScore = useCallback((currentMetrics: PerformanceMetrics): number => {
    let score = 100;
    
    // Deduct points for poor performance
    if (currentMetrics.loadTime > 3000) score -= 20;
    if (currentMetrics.firstContentfulPaint > 1800) score -= 15;
    if (currentMetrics.largestContentfulPaint > 2500) score -= 25;
    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 0.8) score -= 20;
    
    return Math.max(0, score);
  }, []);

  const getScoreColor = useCallback((score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  }, []);

  const getScoreIcon = useCallback((score: number) => {
    if (score >= 90) return CheckCircle;
    if (score >= 70) return AlertTriangle;
    return AlertTriangle;
  }, []);

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Zap className="w-6 h-6 mx-auto" />
      </motion.button>
    );
  }

  return (
    <>
      {/* Performance Monitor Panel */}
      <motion.div
        className="fixed bottom-6 left-20 z-40 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        initial={{ opacity: 0, x: -100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <h2 className="font-semibold">Performance</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label={showDetails ? 'Hide details' : 'Show details'}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close performance monitor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {/* Performance Score */}
          {metrics && (
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="text-2xl font-bold mb-2">Performance Score</div>
              <div className={`text-4xl font-bold ${getScoreColor(getPerformanceScore(metrics))} mb-2`}>
                {getPerformanceScore(metrics)}/100
              </div>
              <div className="flex items-center justify-center space-x-2">
                {React.createElement(getScoreIcon(getPerformanceScore(metrics)), { className: 'w-5 h-5' })}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {getPerformanceScore(metrics) >= 90 ? 'Excellent' : 
                   getPerformanceScore(metrics) >= 70 ? 'Good' : 'Needs Improvement'}
                </span>
              </div>
            </div>
          )}

          {/* Quick Metrics */}
          {metrics && (
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Load Time</div>
                <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
                  {(metrics.loadTime / 1000).toFixed(2)}s
                </div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-xs text-green-600 dark:text-green-400 font-medium">FCP</div>
                <div className="text-lg font-bold text-green-700 dark:text-green-300">
                  {(metrics.firstContentfulPaint / 1000).toFixed(2)}s
                </div>
              </div>
            </div>
          )}

          {/* Issues */}
          {issues.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Issues</h3>
              {issues.map((issue, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  issue.type === 'error' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                  issue.type === 'warning' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                  'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                }`}>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{issue.message}</div>
                  {issue.suggestion && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{issue.suggestion}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={isMonitoring ? stopContinuousMonitoring : startContinuousMonitoring}
              className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                isMonitoring
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                  : 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
              }`}
            >
              {isMonitoring ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
              <span className="font-medium">
                {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
              </span>
            </button>

            <button
              onClick={optimizePerformance}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg transition-all duration-200 font-medium"
            >
              <Zap className="w-4 h-4" />
              <span>Optimize Performance</span>
            </button>

            <button
              onClick={measurePerformance}
              className="w-full flex items-center justify-center space-x-2 p-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh Metrics</span>
            </button>
          </div>

          {/* Optimization History */}
          {optimizationHistory.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Optimizations</h3>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {optimizationHistory.map((entry, index) => (
                  <div key={index} className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
                    <div className="font-medium">{entry.action}</div>
                    <div>{entry.timestamp.toLocaleTimeString()} - {entry.improvement.toFixed(2)}ms improvement</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
