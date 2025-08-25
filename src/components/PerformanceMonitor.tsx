import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  HardDrive,
  Network,
  Cpu,
  HardDrive as Memory,
  Battery
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
}

interface PerformanceIssue {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  impact: 'low' | 'medium' | 'high';
  suggestion: string;
}

const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [issues, setIssues] = useState<PerformanceIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

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
        id: 'fcp-slow',
        type: 'error',
        message: 'First Contentful Paint is very slow',
        impact: 'high',
        suggestion: 'Optimize critical rendering path, reduce render-blocking resources'
      });
    } else if (metrics.fcp > thresholds.fcp.good) {
      newIssues.push({
        id: 'fcp-warning',
        type: 'warning',
        message: 'First Contentful Paint could be improved',
        impact: 'medium',
        suggestion: 'Consider lazy loading non-critical resources'
      });
    }
    
    if (metrics.lcp > thresholds.lcp.poor) {
      newIssues.push({
        id: 'lcp-slow',
        type: 'error',
        message: 'Largest Contentful Paint is very slow',
        impact: 'high',
        suggestion: 'Optimize images, implement lazy loading, use CDN'
      });
    }
    
    if (metrics.cls > thresholds.cls.poor) {
      newIssues.push({
        id: 'cls-high',
        type: 'error',
        message: 'Cumulative Layout Shift is very high',
        impact: 'high',
        suggestion: 'Set explicit dimensions for images and media elements'
      });
    }
    
    const memoryUsage = metrics.memory.used / metrics.memory.limit;
    if (memoryUsage > thresholds.memory.poor) {
      newIssues.push({
        id: 'memory-high',
        type: 'warning',
        message: 'Memory usage is very high',
        impact: 'medium',
        suggestion: 'Check for memory leaks, optimize component rendering'
      });
    }
    
    return newIssues;
  }, [thresholds]);

  // Collect performance metrics
  const collectMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      // Use Performance Observer for Core Web Vitals
      if ('PerformanceObserver' in window) {
        let fcp = 0, lcp = 0, fid = 0, cls = 0;
        
        // FCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          fcp = entries[entries.length - 1].startTime;
        }).observe({ entryTypes: ['paint'] });
        
        // LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          lcp = entries[entries.length - 1].startTime;
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
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
        }
        
        // Wait a bit for metrics to be collected
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const ttfb = navigation.responseStart - navigation.requestStart;
          
          const memory = (performance as any).memory || {
            usedJSHeapSize: 0,
            totalJSHeapSize: 0,
            jsHeapSizeLimit: 0
          };
          
          const network = (navigator as any).connection || {
            effectiveType: 'unknown',
            downlink: 0,
            rtt: 0
          };
          
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
              effectiveType: network.effectiveType,
              downlink: network.downlink,
              rtt: network.rtt
            },
            score: 0
          };
          
          metrics.score = calculateScore(metrics);
          resolve(metrics);
        }, 1000);
      } else {
        // Fallback for older browsers
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const fallbackMetrics: PerformanceMetrics = {
          fcp: 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          memory: { used: 0, total: 0, limit: 0 },
          network: { effectiveType: 'unknown', downlink: 0, rtt: 0 },
          score: 0
        };
        fallbackMetrics.score = calculateScore(fallbackMetrics);
        resolve(fallbackMetrics);
      }
    });
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(async () => {
    setIsMonitoring(true);
    
    const collectAndUpdate = async () => {
      try {
        const newMetrics = await collectMetrics();
        setMetrics(newMetrics);
        setHistory(prev => [...prev.slice(-9), newMetrics]);
        setIssues(analyzePerformance(newMetrics));
      } catch (error) {
        console.error('Error collecting performance metrics:', error);
      }
    };
    
    // Initial collection
    await collectAndUpdate();
    
    // Set up interval for continuous monitoring
    const interval = setInterval(collectAndUpdate, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  }, [collectMetrics, analyzePerformance]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  // Get status color
  const getStatusColor = (score: number) => {
    if (score >= thresholds.score.good) return 'text-green-500';
    if (score >= thresholds.score.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get status icon
  const getStatusIcon = (score: number) => {
    if (score >= thresholds.score.good) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= thresholds.score.poor) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  useEffect(() => {
    if (isVisible && !isMonitoring) {
      startMonitoring();
    }
  }, [isVisible, isMonitoring, startMonitoring]);

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        className="fixed bottom-4 right-4 z-50 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gauge className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Performance Monitor</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          
          {/* Overall Score */}
          {metrics && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm opacity-90">Overall Score</span>
              <div className="flex items-center space-x-2">
                {getStatusIcon(metrics.score)}
                <span className={`text-2xl font-bold ${getStatusColor(metrics.score)}`}>
                  {metrics.score}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {metrics ? (
            <>
              {/* Core Web Vitals */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Core Web Vitals</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    label="FCP"
                    value={`${metrics.fcp.toFixed(0)}ms`}
                    status={metrics.fcp <= thresholds.fcp.good ? 'good' : metrics.fcp <= thresholds.fcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="LCP"
                    value={`${metrics.lcp.toFixed(0)}ms`}
                    status={metrics.lcp <= thresholds.lcp.good ? 'good' : metrics.lcp <= thresholds.lcp.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="FID"
                    value={`${metrics.fid.toFixed(0)}ms`}
                    status={metrics.fid <= thresholds.fid.good ? 'good' : metrics.fid <= thresholds.fid.poor ? 'warning' : 'poor'}
                  />
                  <MetricCard
                    label="CLS"
                    value={metrics.cls.toFixed(3)}
                    status={metrics.cls <= thresholds.cls.good ? 'good' : metrics.cls <= thresholds.cls.poor ? 'warning' : 'poor'}
                  />
                </div>
              </div>

              {/* System Metrics */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <Cpu className="w-4 h-4" />
                  <span>System Metrics</span>
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Memory Usage</span>
                    <span className="font-mono">
                      {((metrics.memory.used / metrics.memory.limit) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        (metrics.memory.used / metrics.memory.limit) > thresholds.memory.poor
                          ? 'bg-red-500'
                          : (metrics.memory.used / metrics.memory.limit) > thresholds.memory.good
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${(metrics.memory.used / metrics.memory.limit) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Network:</span>
                    <span className="ml-2 font-mono">{metrics.network.effectiveType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className="ml-2 font-mono">{metrics.ttfb.toFixed(0)}ms</span>
                  </div>
                </div>
              </div>

              {/* Performance Issues */}
              {issues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Issues Found ({issues.length})</span>
                  </h4>
                  
                  <div className="space-y-2">
                    {issues.map((issue) => (
                      <div
                        key={issue.id}
                        className={`p-3 rounded-lg border-l-4 ${
                          issue.type === 'error'
                            ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                            : issue.type === 'warning'
                            ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {issue.type === 'error' ? (
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          ) : issue.type === 'warning' ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {issue.message}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {issue.suggestion}
                            </p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              issue.impact === 'high'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : issue.impact === 'medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:bg-blue-200'
                            }`}>
                              {issue.impact} impact
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance History */}
              {history.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Performance Trend</span>
                  </h4>
                  
                  <div className="h-20 flex items-end space-x-1">
                    {history.map((entry, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          entry.score >= thresholds.score.good
                            ? 'bg-green-500'
                            : entry.score >= thresholds.score.poor
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ height: `${(entry.score / 100) * 100}%` }}
                        title={`Score: ${entry.score}`}
                      />
                    ))}
                  </div>
                </div>
              )}
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
          </div>
        </div>
      </motion.div>
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

export { PerformanceMonitor };
export default PerformanceMonitor;