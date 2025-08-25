import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  HardDrive, 
  Network, 
  Cpu, 
  MemoryStick,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  RefreshCw,
  Settings,
  BarChart3,
  Gauge
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domLoad: number; // DOM Content Loaded
  windowLoad: number; // Window Load
  memoryUsage?: number; // Memory usage in MB
  bundleSize: number; // Estimated bundle size in KB
  networkRequests: number; // Number of network requests
  cacheHitRate: number; // Cache hit rate percentage
  jsHeapSize?: number; // JavaScript heap size
  jsHeapUsed?: number; // JavaScript heap used
}

interface PerformanceScore {
  overall: number;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  onScoreUpdate?: (score: PerformanceScore) => void;
  className?: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = true,
  autoRefresh = true,
  refreshInterval = 30000, // 30 seconds
  onMetricsUpdate,
  onScoreUpdate,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [score, setScore] = useState<PerformanceScore | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const refreshTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize performance observer
  useEffect(() => {
    if (typeof PerformanceObserver !== 'undefined') {
      try {
        // Observe LCP
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          if (lastEntry && 'value' in lastEntry) {
            updateMetric('lcp', lastEntry.value as number);
          }
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          if (lastEntry && 'value' in lastEntry) {
            updateMetric('fid', lastEntry.value as number);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe CLS
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          updateMetric('cls', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          observerRef.current?.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }, []);

  // Auto-refresh functionality
  useEffect(() => {
    if (autoRefresh) {
      refreshTimerRef.current = setInterval(() => {
        collectMetrics();
      }, refreshInterval);

      return () => {
        if (refreshTimerRef.current) {
          clearInterval(refreshTimerRef.current);
        }
      };
    }
  }, [autoRefresh, refreshInterval]);

  // Collect initial metrics
  useEffect(() => {
    collectMetrics();
  }, []);

  // Update individual metric
  const updateMetric = useCallback((key: keyof PerformanceMetrics, value: number) => {
    setMetrics(prev => {
      if (!prev) return null;
      const updated = { ...prev, [key]: value };
      calculateScore(updated);
      return updated;
    });
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(async () => {
    setIsLoading(true);
    
    try {
      const newMetrics: PerformanceMetrics = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        domLoad: 0,
        windowLoad: 0,
        bundleSize: 0,
        networkRequests: 0,
        cacheHitRate: 0
      };

      // Get navigation timing
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
          const nav = navigationEntries[0] as PerformanceNavigationTiming;
          newMetrics.ttfb = nav.responseStart - nav.requestStart;
          newMetrics.domLoad = nav.domContentLoadedEventEnd - (nav as any).navigationStart;
          newMetrics.windowLoad = nav.loadEventEnd - (nav as any).navigationStart;
        }
      }

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        }
      });

      // Get resource timing for network analysis
      const resourceEntries = performance.getEntriesByType('resource');
      newMetrics.networkRequests = resourceEntries.length;
      
      let totalSize = 0;
      let cachedRequests = 0;
      
      resourceEntries.forEach(entry => {
        const resource = entry as PerformanceResourceTiming;
        if (resource.transferSize > 0) {
          totalSize += resource.transferSize;
        }
        if (resource.transferSize === 0 && resource.decodedBodySize > 0) {
          cachedRequests++;
        }
      });

      newMetrics.bundleSize = Math.round(totalSize / 1024); // Convert to KB
      newMetrics.cacheHitRate = resourceEntries.length > 0 
        ? Math.round((cachedRequests / resourceEntries.length) * 100) 
        : 0;

      // Get memory info if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        newMetrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        newMetrics.jsHeapSize = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        newMetrics.jsHeapUsed = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      }

      // Get current LCP, FID, and CLS if available
      if (metrics) {
        newMetrics.lcp = metrics.lcp;
        newMetrics.fid = metrics.fid;
        newMetrics.cls = metrics.cls;
      }

      setMetrics(newMetrics);
      calculateScore(newMetrics);
      setLastUpdate(new Date());
      
      // Check for performance alerts
      checkPerformanceAlerts(newMetrics);
      
      // Notify parent component
      onMetricsUpdate?.(newMetrics);
      
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
    } finally {
      setIsLoading(false);
    }
  }, [metrics, onMetricsUpdate]);

  // Calculate performance score
  const calculateScore = useCallback((currentMetrics: PerformanceMetrics) => {
    const scores = {
      fcp: calculateFCPScore(currentMetrics.fcp),
      lcp: calculateLCPScore(currentMetrics.lcp),
      fid: calculateFIDScore(currentMetrics.fid),
      cls: calculateCLSScore(currentMetrics.cls),
      ttfb: calculateTTFBScore(currentMetrics.ttfb)
    };

    const overallScore = Math.round(
      Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length
    );

    const newScore: PerformanceScore = {
      overall: overallScore,
      ...scores
    };

    setScore(newScore);
    onScoreUpdate?.(newScore);
  }, [onScoreUpdate]);

  // Calculate individual metric scores
  const calculateFCPScore = (fcp: number): number => {
    if (fcp <= 1800) return 100;
    if (fcp <= 3000) return 75;
    if (fcp <= 5000) return 50;
    return 25;
  };

  const calculateLCPScore = (lcp: number): number => {
    if (lcp <= 2500) return 100;
    if (lcp <= 4000) return 75;
    if (lcp <= 6000) return 50;
    return 25;
  };

  const calculateFIDScore = (fid: number): number => {
    if (fid <= 100) return 100;
    if (fid <= 300) return 75;
    if (fid <= 500) return 50;
    return 25;
  };

  const calculateCLSScore = (cls: number): number => {
    if (cls <= 0.1) return 100;
    if (cls <= 0.25) return 75;
    if (cls <= 0.5) return 50;
    return 25;
  };

  const calculateTTFBScore = (ttfb: number): number => {
    if (ttfb <= 800) return 100;
    if (ttfb <= 1800) return 75;
    if (ttfb <= 3000) return 50;
    return 25;
  };

  // Check for performance alerts
  const checkPerformanceAlerts = (currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    
    if (currentMetrics.lcp > 4000) {
      newAlerts.push('LCP is above recommended threshold (4s)');
    }
    if (currentMetrics.fid > 300) {
      newAlerts.push('FID is above recommended threshold (300ms)');
    }
    if (currentMetrics.cls > 0.25) {
      newAlerts.push('CLS is above recommended threshold (0.25)');
    }
    if (currentMetrics.ttfb > 1800) {
      newAlerts.push('TTFB is above recommended threshold (1.8s)');
    }
    if (currentMetrics.bundleSize > 500) {
      newAlerts.push('Bundle size is large (>500KB)');
    }
    
    setAlerts(newAlerts);
  };

  // Get score color
  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  // Get score icon
  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (score >= 70) return <Info className="w-4 h-4 text-yellow-500" />;
    return <AlertTriangle className="w-4 h-4 text-red-500" />;
  };

  // Format time
  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  // Format size
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  };

  if (!showMetrics) return null;

  return (
    <div className={`fixed top-4 left-4 z-40 ${className}`}>
      {/* Performance Monitor Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 
          text-white rounded-lg shadow-lg 
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Performance Monitor"
        aria-expanded={isOpen}
      >
        <Activity className="w-5 h-5" />
        
        {/* Performance indicator */}
        {score && (
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white">
            <div 
              className={`w-full h-full rounded-full ${getScoreColor(score.overall).replace('text-', 'bg-')}`}
            />
          </div>
        )}
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 left-0 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                Performance Monitor
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={collectMetrics}
                  disabled={isLoading}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
                  aria-label="Refresh metrics"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Toggle details"
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close performance monitor"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Overall Score */}
            {score && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
                  {getScoreIcon(score.overall)}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {score.overall}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {score.overall >= 90 ? 'Excellent' : 
                   score.overall >= 70 ? 'Good' : 
                   score.overall >= 50 ? 'Needs Improvement' : 'Poor'}
                </div>
              </div>
            )}

            {/* Core Web Vitals */}
            {metrics && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Core Web Vitals</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">LCP</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formatTime(metrics.lcp)}
                    </div>
                    {score && (
                      <div className={`text-xs ${getScoreColor(score.lcp)}`}>
                        Score: {score.lcp}
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">FID</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formatTime(metrics.fid)}
                    </div>
                    {score && (
                      <div className={`text-xs ${getScoreColor(score.fid)}`}>
                        Score: {score.fid}
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-purple-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">CLS</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {metrics.cls.toFixed(3)}
                    </div>
                    {score && (
                      <div className={`text-xs ${getScoreColor(score.cls)}`}>
                        Score: {score.cls}
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Network className="w-4 h-4 text-orange-500" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">FCP</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {formatTime(metrics.fcp)}
                    </div>
                    {score && (
                      <div className={`text-xs ${getScoreColor(score.fcp)}`}>
                        Score: {score.fcp}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Detailed Metrics */}
            {showDetails && metrics && (
              <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Detailed Metrics</h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
                    <span className="text-gray-900 dark:text-white">{formatTime(metrics.ttfb)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">DOM Load:</span>
                    <span className="text-gray-900 dark:text-white">{formatTime(metrics.domLoad)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Window Load:</span>
                    <span className="text-gray-900 dark:text-white">{formatTime(metrics.windowLoad)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bundle Size:</span>
                    <span className="text-gray-900 dark:text-white">{formatSize(metrics.bundleSize * 1024)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Network Requests:</span>
                    <span className="text-gray-900 dark:text-white">{metrics.networkRequests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Cache Hit Rate:</span>
                    <span className="text-gray-900 dark:text-white">{metrics.cacheHitRate}%</span>
                  </div>
                  {metrics.memoryUsage && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Memory Usage:</span>
                      <span className="text-gray-900 dark:text-white">{formatSize(metrics.memoryUsage * 1024 * 1024)}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Performance Alerts */}
            {alerts.length > 0 && (
              <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Performance Alerts
                </h4>
                <div className="space-y-1">
                  {alerts.map((alert, index) => (
                    <div key={index} className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
              {lastUpdate && (
                <p>Last updated: {lastUpdate.toLocaleTimeString()}</p>
              )}
              <p>Auto-refresh: {autoRefresh ? 'On' : 'Off'}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerformanceMonitor;