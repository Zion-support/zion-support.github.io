import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChartBarIcon,
  CogIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  jsHeapSize: number; // JavaScript Heap Size
  jsHeapUsed: number; // JavaScript Heap Used
}

interface PerformanceIssue {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  suggestion: string;
  fixable: boolean;
}

interface PerformanceOptimizerProps {
  className?: string;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  monitoringInterval?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  className = '',
  showMetrics = true,
  autoOptimize = true,
  monitoringInterval = 5000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Performance thresholds based on Core Web Vitals
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  // Initialize performance monitoring
  const initializeMonitoring = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // Observe Core Web Vitals
        observerRef.current = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              updateMetric('lcp', entry.startTime);
            } else if (entry.entryType === 'first-input') {
              if ('processingStart' in entry) {
                updateMetric('fid', (entry as any).processingStart - entry.startTime);
              }
            } else if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as any;
              if (!layoutShiftEntry.hadRecentInput) {
                updateMetric('cls', layoutShiftEntry.value);
              }
            }
          }
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }, []);

  // Update specific metric
  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => prev ? { ...prev, [key]: value } : null);
  }, []);

  // Measure performance metrics
  const measurePerformance = useCallback(async () => {
    const newMetrics: PerformanceMetrics = {
      fcp: 0,
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      domLoad: 0,
      windowLoad: 0,
      jsHeapSize: 0,
      jsHeapUsed: 0
    };

    // Measure FCP
    const fcpEntry = performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      newMetrics.fcp = fcpEntry.startTime;
    }

    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      newMetrics.domLoad = navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart;
      newMetrics.windowLoad = navigationEntry.loadEventEnd - navigationEntry.loadEventStart;
    }

    // Measure LCP
    const lcpEntry = performance.getEntriesByType('largest-contentful-paint')[0];
    if (lcpEntry) {
      newMetrics.lcp = lcpEntry.startTime;
    }

    // Measure FID
    const fidEntry = performance.getEntriesByType('first-input')[0];
    if (fidEntry) {
      newMetrics.fid = (fidEntry as any).processingStart - fidEntry.startTime;
    }

    // Measure CLS
    const clsEntries = performance.getEntriesByType('layout-shift');
    let cls = 0;
    for (const entry of clsEntries) {
      const layoutShiftEntry = entry as any;
      if (!layoutShiftEntry.hadRecentInput) {
        cls += layoutShiftEntry.value;
      }
    }
    newMetrics.cls = cls;

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      newMetrics.jsHeapSize = memory.usedJSHeapSize;
      newMetrics.jsHeapUsed = memory.totalJSHeapSize;
    }

    setMetrics(newMetrics);
    analyzePerformance(newMetrics);
  }, []);

  // Analyze performance and identify issues
  const analyzePerformance = useCallback((currentMetrics: PerformanceMetrics) => {
    const newIssues: PerformanceIssue[] = [];
    let score = 100;

    // Check FCP
    if (currentMetrics.fcp > thresholds.fcp.poor) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'critical',
        title: 'Slow First Contentful Paint',
        description: `FCP is ${Math.round(currentMetrics.fcp)}ms, which is above the poor threshold of ${thresholds.fcp.poor}ms`,
        impact: 'high',
        suggestion: 'Optimize critical rendering path, reduce server response time, eliminate render-blocking resources',
        fixable: true
      });
      score -= 25;
    } else if (currentMetrics.fcp > thresholds.fcp.good) {
      newIssues.push({
        id: 'fcp-warning',
        type: 'warning',
        title: 'First Contentful Paint Could Be Better',
        description: `FCP is ${Math.round(currentMetrics.fcp)}ms, which is above the good threshold of ${thresholds.fcp.good}ms`,
        impact: 'medium',
        suggestion: 'Consider optimizing server response time and critical resources',
        fixable: true
      });
      score -= 10;
    }

    // Check LCP
    if (currentMetrics.lcp > thresholds.lcp.poor) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${Math.round(currentMetrics.lcp)}ms, which is above the poor threshold of ${thresholds.lcp.poor}ms`,
        impact: 'high',
        suggestion: 'Optimize images, reduce server response time, eliminate render-blocking resources',
        fixable: true
      });
      score -= 25;
    } else if (currentMetrics.lcp > thresholds.lcp.good) {
      newIssues.push({
        id: 'lcp-warning',
        type: 'warning',
        title: 'Largest Contentful Paint Could Be Better',
        description: `LCP is ${Math.round(currentMetrics.lcp)}ms, which is above the good threshold of ${thresholds.lcp.good}ms`,
        impact: 'medium',
        suggestion: 'Consider optimizing images and server response time',
        fixable: true
      });
      score -= 10;
    }

    // Check FID
    if (currentMetrics.fid > thresholds.fid.poor) {
      newIssues.push({
        id: 'fid-slow',
        type: 'critical',
        title: 'Slow First Input Delay',
        description: `FID is ${Math.round(currentMetrics.fid)}ms, which is above the poor threshold of ${thresholds.fid.poor}ms`,
        impact: 'high',
        suggestion: 'Reduce JavaScript execution time, break up long tasks, optimize event handlers',
        fixable: true
      });
      score -= 20;
    } else if (currentMetrics.fid > thresholds.fid.good) {
      newIssues.push({
        id: 'fid-warning',
        type: 'warning',
        title: 'First Input Delay Could Be Better',
        description: `FID is ${Math.round(currentMetrics.fid)}ms, which is above the good threshold of ${thresholds.fid.good}ms`,
        impact: 'medium',
        suggestion: 'Consider optimizing JavaScript execution and breaking up long tasks',
        fixable: true
      });
      score -= 8;
    }

    // Check CLS
    if (currentMetrics.cls > thresholds.cls.poor) {
      newIssues.push({
        id: 'cls-high',
        type: 'critical',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${currentMetrics.cls.toFixed(3)}, which is above the poor threshold of ${thresholds.cls.poor}`,
        impact: 'high',
        suggestion: 'Set explicit dimensions for images and videos, avoid inserting content above existing content',
        fixable: true
      });
      score -= 20;
    } else if (currentMetrics.cls > thresholds.cls.good) {
      newIssues.push({
        id: 'cls-warning',
        type: 'warning',
        title: 'Cumulative Layout Shift Could Be Better',
        description: `CLS is ${currentMetrics.cls.toFixed(3)}, which is above the good threshold of ${thresholds.cls.good}`,
        impact: 'medium',
        suggestion: 'Consider setting explicit dimensions for media elements',
        fixable: true
      });
      score -= 8;
    }

    // Check TTFB
    if (currentMetrics.ttfb > thresholds.ttfb.poor) {
      newIssues.push({
        id: 'ttfb-slow',
        type: 'warning',
        title: 'Slow Time to First Byte',
        description: `TTFB is ${Math.round(currentMetrics.ttfb)}ms, which is above the poor threshold of ${thresholds.ttfb.poor}ms`,
        impact: 'medium',
        suggestion: 'Optimize server response time, use CDN, optimize database queries',
        fixable: true
      });
      score -= 15;
    }

    // Check memory usage
    if (currentMetrics.jsHeapUsed > 50 * 1024 * 1024) { // 50MB
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        title: 'High Memory Usage',
        description: `JavaScript heap usage is ${Math.round(currentMetrics.jsHeapUsed / 1024 / 1024)}MB`,
        impact: 'medium',
        suggestion: 'Check for memory leaks, optimize image loading, implement lazy loading',
        fixable: true
      });
      score -= 10;
    }

    setIssues(newIssues);
    setPerformanceScore(Math.max(0, score));
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
    
    intervalRef.current = setInterval(() => {
      measurePerformance();
    }, monitoringInterval);
  }, [measurePerformance, monitoringInterval]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Apply automatic optimizations
  const applyOptimizations = useCallback(() => {
    const optimizations: string[] = [];
    const timestamp = new Date().toLocaleTimeString();

    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        optimizations.push(`Added lazy loading to image: ${img.src}`);
      }
    });

    // Font optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
      optimizations.push('Added crossorigin attribute to font preload');
    });

    // Resource hints
    if (!document.querySelector('link[rel="dns-prefetch"][href="//www.google-analytics.com"]')) {
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);
      optimizations.push('Added DNS prefetch for analytics');
    }

    // Performance monitoring
    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev, `${timestamp}: ${optimizations.join(', ')}`]);
    }

    return optimizations;
  }, []);

  // Get performance score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get score background color
  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900/20';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  useEffect(() => {
    initializeMonitoring();
    
    if (autoOptimize) {
      // Apply initial optimizations
      setTimeout(applyOptimizations, 1000);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [initializeMonitoring, autoOptimize, applyOptimizations]);

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BoltIcon className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Performance Optimizer
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor and optimize website performance in real-time
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isMonitoring 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isMonitoring ? (
              <>
                <PauseIcon className="w-5 h-5" />
                Stop
              </>
            ) : (
              <>
                <PlayIcon className="w-5 h-5" />
                Start
              </>
            )}
          </button>
          
          <button
            onClick={applyOptimizations}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <CogIcon className="w-5 h-5" />
            Optimize
          </button>
        </div>
      </div>

      {/* Performance Score */}
      <div className={`mb-6 p-6 rounded-lg ${getScoreBgColor(performanceScore)}`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Performance Score
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on Core Web Vitals and performance metrics
            </p>
          </div>
          <div className="text-right">
            <div className={`text-4xl font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore}/100
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {performanceScore >= 80 ? 'Excellent' : performanceScore >= 60 ? 'Good' : 'Needs Improvement'}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      {showMetrics && metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FCP</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(metrics.fcp)}ms
            </div>
            <div className={`text-xs ${
              metrics.fcp <= thresholds.fcp.good ? 'text-green-600' :
              metrics.fcp <= thresholds.fcp.poor ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {metrics.fcp <= thresholds.fcp.good ? 'Good' :
               metrics.fcp <= thresholds.fcp.poor ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">LCP</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(metrics.lcp)}ms
            </div>
            <div className={`text-xs ${
              metrics.lcp <= thresholds.lcp.good ? 'text-green-600' :
              metrics.lcp <= thresholds.lcp.poor ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {metrics.lcp <= thresholds.lcp.good ? 'Good' :
               metrics.lcp <= thresholds.lcp.poor ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">FID</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(metrics.fid)}ms
            </div>
            <div className={`text-xs ${
              metrics.fid <= thresholds.fid.good ? 'text-green-600' :
              metrics.fid <= thresholds.fid.poor ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {metrics.fid <= thresholds.fid.good ? 'Good' :
               metrics.fid <= thresholds.fid.poor ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">CLS</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {metrics.cls.toFixed(3)}
            </div>
            <div className={`text-xs ${
              metrics.cls <= thresholds.cls.good ? 'text-green-600' :
              metrics.cls <= thresholds.cls.poor ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {metrics.cls <= thresholds.cls.good ? 'Good' :
               metrics.cls <= thresholds.cls.poor ? 'Needs Improvement' : 'Poor'}
            </div>
          </div>
        </div>
      )}

      {/* Issues and Suggestions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Performance Issues
        </h3>
        
        <div className="space-y-3 max-h-64 overflow-y-auto">
          <AnimatePresence>
            {issues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  issue.type === 'critical' ? 'border-red-200 bg-red-50 dark:bg-red-900/20' :
                  issue.type === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20' :
                  'border-blue-200 bg-blue-50 dark:bg-blue-900/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  {issue.type === 'critical' && (
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mt-0.5" />
                  )}
                  {issue.type === 'warning' && (
                    <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
                  )}
                  {issue.type === 'info' && (
                    <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                  )}
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {issue.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {issue.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        issue.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        issue.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {issue.impact} impact
                      </span>
                      {issue.fixable && (
                        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded">
                          Auto-fixable
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      <strong>Suggestion:</strong> {issue.suggestion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {issues.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <CheckCircleIcon className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <p>No performance issues detected!</p>
              <p className="text-sm">Your website is performing well.</p>
            </div>
          )}
        </div>
      </div>

      {/* Optimization History */}
      {optimizationHistory.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Optimizations
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-32 overflow-y-auto">
            {optimizationHistory.slice(-5).map((entry, index) => (
              <div key={index} className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {entry}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Status */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            isMonitoring ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
          {isMonitoring ? 'Monitoring active' : 'Monitoring stopped'}
        </div>
        
        {metrics && (
          <div>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceOptimizer;

// Performance Monitoring Hook
export const usePerformanceMonitor = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (duration > 16) { // 60fps threshold
        console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);
};

// Debounce Hook
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle Hook
export const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<number>(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
