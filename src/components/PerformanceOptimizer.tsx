import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Cpu, 
  Wifi,
  Settings,
  X,
  RefreshCw,
  Info,
  BarChart3,
  Target,
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  score: number; // Overall performance score
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

interface PerformanceIssue {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: string;
  suggestion: string;
  priority: number;
}

const PerformanceOptimizer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    score: 0,
    memory: { used: 0, total: 0, limit: 0 },
    network: { effectiveType: '4g', downlink: 0, rtt: 0 }
  });
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      initializePerformanceMonitoring();
    }
    
    // Start monitoring interval
    startMonitoring();
    
    return () => {
      stopMonitoring();
    };
  }, []);

  // Auto-optimize when score drops below threshold
  useEffect(() => {
    if (autoOptimize && metrics.score > 0 && metrics.score < 50) {
      performAutoOptimization();
    }
  }, [metrics.score, autoOptimize]);

  const initializePerformanceMonitoring = () => {
    try {
      // Monitor LCP
      if ('PerformanceObserver' in window) {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              const lcp = entry.startTime;
              setMetrics(prev => ({ ...prev, lcp }));
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Monitor FID
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'first-input') {
              const fid = entry.processingStart - entry.startTime;
              setMetrics(prev => ({ ...prev, fid }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Monitor CLS
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.entryType === 'layout-shift') {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Get initial metrics
      updateMetrics();
    } catch (error) {
      console.error('Performance monitoring initialization failed:', error);
    }
  };

  const startMonitoring = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      if (isMonitoring) {
        updateMetrics();
        analyzePerformance();
        setLastUpdate(new Date());
      }
    }, 5000); // Update every 5 seconds
  };

  const stopMonitoring = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };

  const updateMetrics = useCallback(() => {
    try {
      // Get FCP
      const fcpEntry = performance.getEntriesByType('paint').find(
        entry => entry.name === 'first-contentful-paint'
      );
      const fcp = fcpEntry ? fcpEntry.startTime : 0;

      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry ? navigationEntry.responseStart - navigationEntry.requestStart : 0;

      // Get memory info
      const memory = (performance as any).memory ? {
        used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
        limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
      } : { used: 0, total: 0, limit: 0 };

      // Get network info
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const network = connection ? {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0
      } : { effectiveType: 'unknown', downlink: 0, rtt: 0 };

      setMetrics(prev => ({
        ...prev,
        fcp,
        ttfb,
        memory,
        network
      }));

      // Calculate performance score
      calculatePerformanceScore(fcp, metrics.lcp, metrics.fid, metrics.cls, ttfb);
    } catch (error) {
      console.error('Failed to update metrics:', error);
    }
  }, []);

  const calculatePerformanceScore = useCallback((fcp: number, lcp: number, fid: number, cls: number, ttfb: number) => {
    let score = 100;

    // FCP scoring (0-100)
    if (fcp <= 1800) score -= 0;
    else if (fcp <= 3000) score -= 10;
    else score -= 25;

    // LCP scoring (0-100)
    if (lcp <= 2500) score -= 0;
    else if (lcp <= 4000) score -= 10;
    else score -= 25;

    // FID scoring (0-100)
    if (fid <= 100) score -= 0;
    else if (fid <= 300) score -= 10;
    else score -= 25;

    // CLS scoring (0-100)
    if (cls <= 0.1) score -= 0;
    else if (cls <= 0.25) score -= 10;
    else score -= 25;

    // TTFB scoring (0-100)
    if (ttfb <= 800) score -= 0;
    else if (ttfb <= 1800) score -= 10;
    else score -= 25;

    score = Math.max(0, Math.min(100, score));
    setMetrics(prev => ({ ...prev, score }));
  }, []);

  const analyzePerformance = useCallback(() => {
    const newIssues: PerformanceIssue[] = [];

    // Analyze FCP
    if (metrics.fcp > 3000) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'critical',
        title: 'Slow First Contentful Paint',
        description: `FCP is ${Math.round(metrics.fcp)}ms, which is above the recommended 3000ms threshold.`,
        impact: 'High - Users may perceive the page as slow to load',
        suggestion: 'Optimize critical rendering path, reduce render-blocking resources, and optimize server response time.',
        priority: 1
      });
    }

    // Analyze LCP
    if (metrics.lcp > 4000) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${Math.round(metrics.lcp)}ms, which is above the recommended 4000ms threshold.`,
        impact: 'High - Users may perceive the page as slow to load',
        suggestion: 'Optimize images, reduce render-blocking resources, and improve server response time.',
        priority: 1
      });
    }

    // Analyze FID
    if (metrics.fid > 300) {
      newIssues.push({
        id: 'fid-slow',
        type: 'warning',
        title: 'Slow First Input Delay',
        description: `FID is ${Math.round(metrics.fid)}ms, which is above the recommended 300ms threshold.`,
        impact: 'Medium - Users may experience lag when interacting with the page',
        suggestion: 'Reduce JavaScript execution time, break up long tasks, and optimize event handlers.',
        priority: 2
      });
    }

    // Analyze CLS
    if (metrics.cls > 0.25) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${metrics.cls.toFixed(3)}, which is above the recommended 0.25 threshold.`,
        impact: 'Medium - Users may experience visual instability',
        suggestion: 'Set explicit dimensions for images and other media elements, avoid inserting content above existing content.',
        priority: 2
      });
    }

    // Analyze TTFB
    if (metrics.ttfb > 1800) {
      newIssues.push({
        id: 'ttfb-slow',
        type: 'warning',
        title: 'Slow Time to First Byte',
        description: `TTFB is ${Math.round(metrics.ttfb)}ms, which is above the recommended 1800ms threshold.`,
        impact: 'Medium - Server response time is slow',
        suggestion: 'Optimize server performance, use CDN, and implement caching strategies.',
        priority: 3
      });
    }

    // Analyze memory usage
    if (metrics.memory.used > metrics.memory.limit * 0.8) {
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        title: 'High Memory Usage',
        description: `Memory usage is ${metrics.memory.used}MB, which is ${Math.round((metrics.memory.used / metrics.memory.limit) * 100)}% of the limit.`,
        impact: 'Medium - May cause performance degradation or crashes',
        suggestion: 'Optimize memory usage, implement memory leaks detection, and consider code splitting.',
        priority: 3
      });
    }

    // Sort issues by priority
    newIssues.sort((a, b) => a.priority - b.priority);
    setIssues(newIssues);
  }, [metrics]);

  const performAutoOptimization = useCallback(() => {
    const optimizations: string[] = [];
    const timestamp = new Date().toLocaleTimeString();

    // Auto-optimize based on issues
    issues.forEach(issue => {
      switch (issue.id) {
        case 'fcp-slow':
        case 'lcp-slow':
          // Preload critical resources
          preloadCriticalResources();
          optimizations.push(`Preloaded critical resources at ${timestamp}`);
          break;
        case 'memory-high':
          // Suggest garbage collection
          if ('gc' in window) {
            (window as any).gc();
            optimizations.push(`Triggered garbage collection at ${timestamp}`);
          }
          break;
        case 'ttfb-slow':
          // Preconnect to external domains
          preconnectToExternalDomains();
          optimizations.push(`Preconnected to external domains at ${timestamp}`);
          break;
      }
    });

    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev.slice(-9), ...optimizations]);
    }
  }, [issues]);

  const preloadCriticalResources = () => {
    // Preload critical CSS and JS
    const criticalResources = [
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  };

  const preconnectToExternalDomains = () => {
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    return <AlertTriangle className="w-6 h-6 text-red-500" />;
  };

  const getMetricStatus = (value: number, threshold: number, unit: string) => {
    const isGood = value <= threshold;
    return {
      color: isGood ? 'text-green-500' : 'text-red-500',
      icon: isGood ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />
    };
  };

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-20 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open performance monitor"
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-8 h-8" />
                    <div>
                      <h2 className="text-2xl font-bold">Performance Monitor</h2>
                      <p className="text-blue-100">Real-time performance insights and optimization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${getScoreColor(metrics.score)}`}>
                        {metrics.score}
                      </div>
                      <div className="text-sm text-blue-100">Performance Score</div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-blue-200 transition-colors"
                      aria-label="Close performance panel"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isMonitoring}
                        onChange={(e) => setIsMonitoring(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium">Live Monitoring</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={autoOptimize}
                        onChange={(e) => setAutoOptimize(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium">Auto-Optimize</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    Last update: {lastUpdate.toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Core Web Vitals */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Core Web Vitals
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">FCP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.fcp, 1800, 'ms').color}`}>
                            {Math.round(metrics.fcp)}ms
                          </span>
                          {getMetricStatus(metrics.fcp, 1800, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">LCP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.lcp, 2500, 'ms').color}`}>
                            {Math.round(metrics.lcp)}ms
                          </span>
                          {getMetricStatus(metrics.lcp, 2500, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">FID</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.fid, 100, 'ms').color}`}>
                            {Math.round(metrics.fid)}ms
                          </span>
                          {getMetricStatus(metrics.fid, 100, 'ms').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">CLS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.cls, 0.1, '').color}`}>
                            {metrics.cls.toFixed(3)}
                          </span>
                          {getMetricStatus(metrics.cls, 0.1, '').icon}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-gray-500" />
                          <span className="font-medium">TTFB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono ${getMetricStatus(metrics.ttfb, 800, 'ms').color}`}>
                            {Math.round(metrics.ttfb)}ms
                          </span>
                          {getMetricStatus(metrics.ttfb, 800, 'ms').icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* System Resources */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-green-600" />
                      System Resources
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Memory Usage</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metrics.memory.used}MB / {metrics.memory.limit}MB
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              metrics.memory.used / metrics.memory.limit > 0.8 
                                ? 'bg-red-500' 
                                : metrics.memory.used / metrics.memory.limit > 0.6 
                                ? 'bg-yellow-500' 
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${Math.min((metrics.memory.used / metrics.memory.limit) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Network</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metrics.network.effectiveType.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Downlink: {metrics.network.downlink} Mbps</div>
                          <div>RTT: {metrics.network.rtt} ms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Issues */}
                {issues.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Performance Issues ({issues.length})
                    </h3>
                    <div className="space-y-3">
                      {issues.map((issue) => (
                        <div
                          key={issue.id}
                          className={`p-4 rounded-lg border-l-4 ${
                            issue.type === 'critical' 
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                              : issue.type === 'warning' 
                              ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                              : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {issue.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {issue.description}
                              </p>
                              <div className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                                <strong>Impact:</strong> {issue.impact}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-500">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              issue.type === 'critical' 
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : issue.type === 'warning' 
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {issue.type.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optimization History */}
                {optimizationHistory.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-green-600" />
                      Recent Optimizations
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {optimizationHistory.map((optimization, index) => (
                          <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                            • {optimization}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PerformanceOptimizer;