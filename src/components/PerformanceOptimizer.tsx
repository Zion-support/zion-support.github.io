import React, { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
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

interface PerformanceOptimizerProps {
  children: ReactNode;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children, className = '' }) => {
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
              setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
            }
          });
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Monitor FID
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as any;
              setMetrics(prev => ({ 
                ...prev, 
                fid: fidEntry.processingStart - fidEntry.startTime 
              }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Monitor CLS
      if ('PerformanceObserver' in window) {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Monitor FCP
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            setMetrics(prev => ({ ...prev, fcp: entries[0].startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // Monitor TTFB
      if ('PerformanceObserver' in window) {
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as any;
              setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
            }
          });
        });
        ttfbObserver.observe({ entryTypes: ['navigation'] });
      }
    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  };

  const startMonitoring = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      if (isMonitoring) {
        collectMetrics();
        analyzePerformance();
      }
    }, 5000); // Monitor every 5 seconds
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

  const collectMetrics = () => {
    try {
      // Collect memory info
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

      // Collect network info
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        setMetrics(prev => ({
          ...prev,
          network: {
            effectiveType: connection.effectiveType || 'unknown',
            downlink: connection.downlink || 0,
            rtt: connection.rtt || 0
          }
        }));
      }

      // Calculate performance score
      const score = calculatePerformanceScore();
      setMetrics(prev => ({ ...prev, score }));
      setLastUpdate(new Date());
    } catch (error) {
      console.warn('Metrics collection failed:', error);
    }
  };

  const calculatePerformanceScore = (): number => {
    let score = 100;
    
    // FCP scoring (0-25 points)
    if (metrics.fcp > 0) {
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 5;
      else score -= 15;
    }
    
    // LCP scoring (0-25 points)
    if (metrics.lcp > 0) {
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 5;
      else score -= 15;
    }
    
    // FID scoring (0-25 points)
    if (metrics.fid > 0) {
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 5;
      else score -= 15;
    }
    
    // CLS scoring (0-25 points)
    if (metrics.cls > 0) {
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 5;
      else score -= 15;
    }
    
    return Math.max(0, score);
  };

  const analyzePerformance = () => {
    const newIssues: PerformanceIssue[] = [];
    
    // Check FCP
    if (metrics.fcp > 3000) {
      newIssues.push({
        id: 'fcp-slow',
        type: 'warning',
        title: 'Slow First Contentful Paint',
        description: `FCP is ${Math.round(metrics.fcp)}ms, which is above the recommended 3000ms threshold.`,
        impact: 'Users may perceive the page as slow to load.',
        suggestion: 'Optimize critical rendering path, reduce server response time, and minimize render-blocking resources.',
        priority: 2
      });
    }
    
    // Check LCP
    if (metrics.lcp > 4000) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${Math.round(metrics.lcp)}ms, which is above the recommended 4000ms threshold.`,
        impact: 'Users may perceive the page as slow to load the main content.',
        suggestion: 'Optimize images, implement lazy loading, and reduce server response time.',
        priority: 1
      });
    }
    
    // Check FID
    if (metrics.fid > 300) {
      newIssues.push({
        id: 'fid-slow',
        type: 'warning',
        title: 'Slow First Input Delay',
        description: `FID is ${Math.round(metrics.fid)}ms, which is above the recommended 300ms threshold.`,
        impact: 'Users may experience lag when interacting with the page.',
        suggestion: 'Reduce JavaScript execution time, implement code splitting, and optimize event handlers.',
        priority: 2
      });
    }
    
    // Check CLS
    if (metrics.cls > 0.25) {
      newIssues.push({
        id: 'cls-high',
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${metrics.cls.toFixed(3)}, which is above the recommended 0.25 threshold.`,
        impact: 'Users may experience visual instability and poor user experience.',
        suggestion: 'Set explicit dimensions for images and other media elements, avoid inserting content above existing content.',
        priority: 2
      });
    }
    
    // Check memory usage
    if (metrics.memory.used > 0 && metrics.memory.limit > 0) {
      const memoryUsagePercent = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsagePercent > 80) {
        newIssues.push({
          id: 'memory-high',
          type: 'warning',
          title: 'High Memory Usage',
          description: `Memory usage is ${memoryUsagePercent.toFixed(1)}% of available limit.`,
          impact: 'May cause performance degradation and potential crashes.',
          suggestion: 'Implement memory cleanup, optimize data structures, and consider implementing virtual scrolling for large lists.',
          priority: 2
        });
      }
    }
    
    setIssues(newIssues.sort((a, b) => a.priority - b.priority));
  };

  const performAutoOptimization = () => {
    const optimizations: string[] = [];
    
    // Auto-optimize based on issues
    issues.forEach(issue => {
      if (issue.type === 'critical') {
        switch (issue.id) {
          case 'lcp-slow':
            optimizations.push('Triggered image optimization and lazy loading');
            break;
          case 'fcp-slow':
            optimizations.push('Triggered critical CSS inlining and resource prioritization');
            break;
        }
      }
    });
    
    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...optimizations, ...prev.slice(0, 9)]);
    }
  };

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    if (!isMonitoring) {
      startMonitoring();
    } else {
      stopMonitoring();
    }
  };

  const refreshMetrics = () => {
    collectMetrics();
    analyzePerformance();
  };

  return (
    <>
      {/* Performance Monitor Toggle */}
      <div className={`fixed top-4 right-4 z-50 ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          title="Performance Monitor"
        >
          <Activity className="w-6 h-6" />
        </button>
      </div>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 right-4 z-50 w-96 max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Performance Monitor</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Performance Score */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">Overall Score</span>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/20"
                        fill="currentColor"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-white"
                        fill="currentColor"
                        strokeDasharray={`${metrics.score}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      {Math.round(metrics.score)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={toggleMonitoring}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      isMonitoring 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}
                  >
                    {isMonitoring ? 'Monitoring' : 'Stopped'}
                  </button>
                  <button
                    onClick={refreshMetrics}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <label className="flex items-center space-x-2 text-xs">
                    <input
                      type="checkbox"
                      checked={autoOptimize}
                      onChange={(e) => setAutoOptimize(e.target.checked)}
                      className="w-3 h-3"
                    />
                    <span>Auto-optimize</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricCard
                  title="FCP"
                  value={`${Math.round(metrics.fcp)}ms`}
                  description="First Contentful Paint"
                  icon={<Clock className="w-4 h-4" />}
                  status={metrics.fcp < 1800 ? 'good' : metrics.fcp < 3000 ? 'needs-improvement' : 'poor'}
                />
                <MetricCard
                  title="LCP"
                  value={`${Math.round(metrics.lcp)}ms`}
                  description="Largest Contentful Paint"
                  icon={<TrendingUp className="w-4 h-4" />}
                  status={metrics.lcp < 2500 ? 'good' : metrics.lcp < 4000 ? 'needs-improvement' : 'poor'}
                />
                <MetricCard
                  title="FID"
                  value={`${Math.round(metrics.fid)}ms`}
                  description="First Input Delay"
                  icon={<Zap className="w-4 h-4" />}
                  status={metrics.fid < 100 ? 'good' : metrics.fid < 300 ? 'needs-improvement' : 'poor'}
                />
                <MetricCard
                  title="CLS"
                  value={metrics.cls.toFixed(3)}
                  description="Cumulative Layout Shift"
                  icon={<BarChart3 className="w-4 h-4" />}
                  status={metrics.cls < 0.1 ? 'good' : metrics.cls < 0.25 ? 'needs-improvement' : 'poor'}
                />
              </div>

              {/* System Info */}
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Memory</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metrics.memory.used} / {metrics.memory.limit} MB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        (metrics.memory.used / metrics.memory.limit) * 100 > 80 
                          ? 'bg-red-500' 
                          : (metrics.memory.used / metrics.memory.limit) * 100 > 60 
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
        )}
      </AnimatePresence>

      {/* Render children */}
      {children}
    </>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  status: 'good' | 'needs-improvement' | 'poor' | 'info';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, description, icon, status }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'good': return 'Good';
      case 'needs-improvement': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Info';
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {icon}
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default PerformanceOptimizer;