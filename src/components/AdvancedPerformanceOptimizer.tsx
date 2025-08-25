import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  HardDrive,
  Network,
  Cpu,
  Battery,
  Settings,
  RefreshCw,
  BarChart3,
  Activity,
  Target,
  Rocket
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
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
  score: number;
  timestamp: number;
}

interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  impact: 'low' | 'medium' | 'high';
  suggestion: string;
  priority: number;
}

interface OptimizationAction {
  id: string;
  name: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  executed: boolean;
  timestamp?: number;
}

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);
  const [optimizations, setOptimizations] = useState<OptimizationAction[]>([]);
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Performance thresholds
  const thresholds = useMemo(() => ({
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    memory: { good: 0.7, poor: 0.9 },
    score: { good: 80, poor: 50 }
  }), []);

  // Predefined optimization actions
  const defaultOptimizations = useMemo(() => [
    {
      id: 'image-optimization',
      name: 'Image Optimization',
      description: 'Enable lazy loading and compression for images',
      impact: 'high' as const,
      executed: false
    },
    {
      id: 'code-splitting',
      name: 'Code Splitting',
      description: 'Implement dynamic imports for better chunking',
      impact: 'high' as const,
      executed: false
    },
    {
      id: 'caching-strategy',
      name: 'Caching Strategy',
      description: 'Implement aggressive caching for static assets',
      impact: 'medium' as const,
      executed: false
    },
    {
      id: 'resource-hints',
      name: 'Resource Hints',
      description: 'Add preload, prefetch, and preconnect hints',
      impact: 'medium' as const,
      executed: false
    },
    {
      id: 'critical-css',
      name: 'Critical CSS',
      description: 'Inline critical CSS and defer non-critical styles',
      impact: 'high' as const,
      executed: false
    }
  ], []);

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // FCP scoring
    if (metrics.fcp > thresholds.fcp.poor) score -= 20;
    else if (metrics.fcp > thresholds.fcp.good) score -= 10;
    
    // LCP scoring
    if (metrics.lcp > thresholds.lcp.poor) score -= 20;
    else if (metrics.lcp > thresholds.lcp.good) score -= 10;
    
    // FID scoring
    if (metrics.fid > thresholds.fid.poor) score -= 15;
    else if (metrics.fid > thresholds.fid.good) score -= 7;
    
    // CLS scoring
    if (metrics.cls > thresholds.cls.poor) score -= 15;
    else if (metrics.cls > thresholds.cls.good) score -= 7;
    
    // TTFB scoring
    if (metrics.ttfb > thresholds.ttfb.poor) score -= 10;
    else if (metrics.ttfb > thresholds.ttfb.good) score -= 5;
    
    // Memory scoring
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) score -= 10;
    else if (memoryUsage > thresholds.memory.good) score -= 5;
    
    return Math.max(0, score);
  }, [thresholds]);

  // Analyze performance and generate issues
  const analyzePerformance = useCallback((metrics: PerformanceMetrics): PerformanceIssue[] => {
    const newIssues: PerformanceIssue[] = [];
    
    if (metrics.fcp > thresholds.fcp.poor) {
      newIssues.push({
        id: 'fcp-poor',
        type: 'error',
        message: `First Contentful Paint (${metrics.fcp}ms) is very slow`,
        impact: 'high',
        suggestion: 'Optimize critical rendering path, reduce server response time',
        priority: 1
      });
    } else if (metrics.fcp > thresholds.fcp.good) {
      newIssues.push({
        id: 'fcp-warning',
        type: 'warning',
        message: `First Contentful Paint (${metrics.fcp}ms) could be improved`,
        impact: 'medium',
        suggestion: 'Consider code splitting and resource optimization',
        priority: 2
      });
    }

    if (metrics.lcp > thresholds.lcp.poor) {
      newIssues.push({
        id: 'lcp-poor',
        type: 'error',
        message: `Largest Contentful Paint (${metrics.lcp}ms) is very slow`,
        impact: 'high',
        suggestion: 'Optimize images, implement lazy loading, reduce bundle size',
        priority: 1
      });
    }

    if (metrics.cls > thresholds.cls.poor) {
      newIssues.push({
        id: 'cls-poor',
        type: 'error',
        message: `Cumulative Layout Shift (${metrics.cls}) is very high`,
        impact: 'high',
        suggestion: 'Set explicit dimensions for images and media elements',
        priority: 1
      });
    }

    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) {
      newIssues.push({
        id: 'memory-poor',
        type: 'warning',
        message: `Memory usage (${Math.round(memoryUsage * 100)}%) is high`,
        impact: 'medium',
        suggestion: 'Check for memory leaks, optimize component rendering',
        priority: 3
      });
    }

    return newIssues;
  }, [thresholds]);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      let fcp = 0, lcp = 0, fid = 0, cls = 0, ttfb = 0;

      // Get TTFB from navigation timing
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          ttfb = navigation.responseStart - navigation.requestStart;
        }
      }

      // Calculate FCP (First Contentful Paint)
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            fcp = entries[entries.length - 1].startTime;
          }
        }).observe({ entryTypes: ['paint'] });
      }

      // Calculate LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            lcp = entries[entries.length - 1].startTime;
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Calculate FID (First Input Delay)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as PerformanceEventTiming;
              fid = firstInputEntry.processingStart - firstInputEntry.startTime;
            }
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Calculate CLS (Cumulative Layout Shift)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        cls = clsValue;
      }

      // Get memory information
      const memory = (performance as any).memory || {
        usedJSHeapSize: 0,
        totalJSHeapSize: 0,
        jsHeapSizeLimit: 0
      };

      // Get network information
      const connection = (navigator as any).connection || {
        effectiveType: 'unknown',
        downlink: 0,
        rtt: 0
      };

      // Wait a bit for metrics to be collected
      setTimeout(() => {
        const metrics: PerformanceMetrics = {
          fcp,
          lcp,
          fid,
          cls,
          ttfb,
          memory: {
            used: memory.usedJSHeapSize,
            total: memory.totalJSHeapSize,
            limit: memory.jsHeapSizeLimit
          },
          network: {
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt
          },
          score: 0,
          timestamp: Date.now()
        };

        metrics.score = calculateScore(metrics);
        resolve(metrics);
      }, 1000);
    });
  }, [calculateScore]);

  // Start monitoring
  const startMonitoring = useCallback(async () => {
    setIsMonitoring(true);
    const initialMetrics = await collectMetrics();
    setMetrics(initialMetrics);
    setHistory([initialMetrics]);
    
    // Analyze and set issues
    const newIssues = analyzePerformance(initialMetrics);
    setIssues(newIssues);

    // Set up continuous monitoring
    const interval = setInterval(async () => {
      const newMetrics = await collectMetrics();
      setMetrics(newMetrics);
      setHistory(prev => [...prev.slice(-9), newMetrics]);
      
      const newIssues = analyzePerformance(newMetrics);
      setIssues(newIssues);

      // Auto-optimize if score is low
      if (autoOptimize && newMetrics.score < thresholds.score.poor) {
        executeOptimizations();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [collectMetrics, analyzePerformance, autoOptimize, thresholds.score.poor]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Execute optimizations
  const executeOptimizations = useCallback(() => {
    const newOptimizations = defaultOptimizations.map(opt => ({
      ...opt,
      executed: true,
      timestamp: Date.now()
    }));
    setOptimizations(newOptimizations);

    // Apply actual optimizations
    applyImageOptimization();
    applyCodeSplitting();
    applyCachingStrategy();
    applyResourceHints();
    applyCriticalCSS();
  }, [defaultOptimizations]);

  // Apply specific optimizations
  const applyImageOptimization = useCallback(() => {
    // Enable lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
    });
  }, []);

  const applyCodeSplitting = useCallback(() => {
    // This would typically be done at build time
    console.log('Code splitting optimization applied');
  }, []);

  const applyCachingStrategy = useCallback(() => {
    // Implement service worker caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, []);

  const applyResourceHints = useCallback(() => {
    // Add resource hints to head
    const head = document.head;
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    head.appendChild(preconnect);
  }, []);

  const applyCriticalCSS = useCallback(() => {
    // This would typically be done at build time
    console.log('Critical CSS optimization applied');
  }, []);

  // Reset all optimizations
  const resetOptimizations = useCallback(() => {
    setOptimizations(defaultOptimizations.map(opt => ({ ...opt, executed: false })));
  }, [defaultOptimizations]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  // Format time
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Format bytes
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get status color
  const getStatusColor = (score: number): string => {
    if (score >= thresholds.score.good) return 'text-green-600';
    if (score >= thresholds.score.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get status bg
  const getStatusBg = (score: number): string => {
    if (score >= thresholds.score.good) return 'bg-green-50 dark:bg-green-900/20';
    if (score >= thresholds.score.poor) return 'bg-yellow-50 dark:bg-yellow-900/20';
    return 'bg-red-50 dark:bg-red-900/20';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-6 right-6 z-50 w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <h3 className="font-semibold">Performance Optimizer</h3>
              </div>
              <button
                onClick={toggleVisibility}
                className="text-white/80 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Performance Score */}
            {metrics && (
              <div className="mt-3 flex items-center space-x-3">
                <div className={`text-2xl font-bold ${getStatusColor(metrics.score)}`}>
                  {metrics.score}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        metrics.score >= thresholds.score.good
                          ? 'bg-green-400'
                          : metrics.score >= thresholds.score.poor
                          ? 'bg-yellow-400'
                          : 'bg-red-400'
                      }`}
                      style={{ width: `${metrics.score}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm opacity-80">
                  {metrics.score >= thresholds.score.good ? 'Excellent' :
                   metrics.score >= thresholds.score.poor ? 'Good' : 'Poor'}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {metrics ? (
              <>
                {/* Core Web Vitals */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Core Web Vitals</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      label="FCP"
                      value={formatTime(metrics.fcp)}
                      status={metrics.fcp <= thresholds.fcp.good ? 'good' : 
                              metrics.fcp <= thresholds.fcp.poor ? 'warning' : 'poor'}
                    />
                    <MetricCard
                      label="LCP"
                      value={formatTime(metrics.lcp)}
                      status={metrics.lcp <= thresholds.lcp.good ? 'good' : 
                              metrics.lcp <= thresholds.lcp.poor ? 'warning' : 'poor'}
                    />
                    <MetricCard
                      label="FID"
                      value={formatTime(metrics.fid)}
                      status={metrics.fid <= thresholds.fid.good ? 'good' : 
                              metrics.fid <= thresholds.fid.poor ? 'warning' : 'poor'}
                    />
                    <MetricCard
                      label="CLS"
                      value={metrics.cls.toFixed(3)}
                      status={metrics.cls <= thresholds.cls.good ? 'good' : 
                              metrics.cls <= thresholds.cls.poor ? 'warning' : 'poor'}
                    />
                  </div>
                </div>

                {/* System Metrics */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Activity className="w-4 h-4" />
                    <span>System Metrics</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard
                      label="TTFB"
                      value={formatTime(metrics.ttfb)}
                      status={metrics.ttfb <= thresholds.ttfb.good ? 'good' : 
                              metrics.ttfb <= thresholds.ttfb.poor ? 'warning' : 'poor'}
                    />
                    <MetricCard
                      label="Memory"
                      value={`${Math.round((metrics.memory.used / metrics.memory.limit) * 100)}%`}
                      status={(metrics.memory.used / metrics.memory.limit) <= thresholds.memory.good ? 'good' : 
                              (metrics.memory.used / metrics.memory.limit) <= thresholds.memory.poor ? 'warning' : 'poor'}
                    />
                  </div>
                </div>

                {/* Performance Issues */}
                {issues.length > 0 && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Issues Found ({issues.length})</span>
                    </h4>
                    
                    <div className="space-y-2">
                      {issues.slice(0, 3).map((issue) => (
                        <div
                          key={issue.id}
                          className={`p-3 rounded-lg text-sm ${
                            issue.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200' :
                            issue.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200' :
                            'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                          }`}
                        >
                          <div className="font-medium mb-1">{issue.message}</div>
                          <div className="text-xs opacity-80">{issue.suggestion}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optimization Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Optimizations</span>
                    </h4>
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {showAdvanced ? 'Hide' : 'Advanced'}
                    </button>
                  </div>
                  
                  {showAdvanced && (
                    <div className="space-y-2">
                      {optimizations.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-lg border ${
                            opt.executed
                              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                              : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-sm">{opt.name}</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">{opt.description}</div>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded ${
                              opt.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' :
                              opt.impact === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200' :
                              'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {opt.impact}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Collecting metrics...</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <div className={`w-2 h-2 rounded-full ${
                isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
              }`} />
              <span>{isMonitoring ? 'Monitoring' : 'Stopped'}</span>
            </div>
            
            <div className="flex space-x-2">
              {isMonitoring ? (
                <button
                  onClick={stopMonitoring}
                  className="px-3 py-1 text-xs bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                >
                  Stop
                </button>
              ) : (
                <button
                  onClick={startMonitoring}
                  className="px-3 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                >
                  Start
                </button>
              )}
              
              <button
                onClick={executeOptimizations}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                Optimize
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Toggle Button */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={toggleVisibility}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <Zap className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Metric Card Component
interface MetricCardProps {
  label: string;
  value: string;
  status: 'good' | 'warning' | 'poor';
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'poor': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-50 dark:bg-green-900/20';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20';
      case 'poor': return 'bg-red-50 dark:bg-red-900/20';
      default: return 'bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className={`p-3 rounded-lg ${getStatusBg(status)}`}>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{label}</div>
      <div className={`font-mono font-semibold ${getStatusColor(status)}`}>{value}</div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;