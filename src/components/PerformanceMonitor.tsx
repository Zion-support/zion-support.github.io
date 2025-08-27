import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  X,
  Settings,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  cpuUsage?: number;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  onPerformanceIssue?: (issue: string) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  onPerformanceIssue
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });
  const [performanceScore, setPerformanceScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    setIsVisible(true);
    startPerformanceMonitoring();

    return () => {
      stopPerformanceMonitoring();
    };
  }, [enabled]);

  const startPerformanceMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    setIsMonitoring(true);

    // Monitor Core Web Vitals
    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          setMetrics(prev => ({ ...prev, firstInputDelay: entry.processingStart - entry.startTime }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

    } catch (error) {
      console.error('Error setting up performance monitoring:', error);
    }

    // Measure page load time
    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
    }

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      monitorMemoryUsage();
    }

    // Monitor CPU usage (if available)
    monitorCPUUsage();
  }, []);

  const stopPerformanceMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    setIsMonitoring(false);
  }, []);

  const measureLoadTime = useCallback(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      setMetrics(prev => ({ ...prev, loadTime }));
    }
  }, []);

  const monitorMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({ 
        ...prev, 
        memoryUsage: memory.usedJSHeapSize / memory.jsHeapSizeLimit 
      }));
    }
  }, []);

  const monitorCPUUsage = useCallback(() => {
    // Simple CPU usage estimation based on frame rate
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = frameCount;
        const cpuUsage = Math.max(0, 100 - (fps / 60) * 100);
        setMetrics(prev => ({ ...prev, cpuUsage }));
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };
    
    requestAnimationFrame(countFrames);
  }, []);

  // Calculate performance score
  useEffect(() => {
    const calculateScore = () => {
      let score = 100;

      // FCP scoring (0-100)
      if (metrics.firstContentfulPaint > 1800) score -= 20;
      else if (metrics.firstContentfulPaint > 1000) score -= 10;

      // LCP scoring (0-100)
      if (metrics.largestContentfulPaint > 4000) score -= 25;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;

      // CLS scoring (0-100)
      if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 15;

      // FID scoring (0-100)
      if (metrics.firstInputDelay > 300) score -= 20;
      else if (metrics.firstInputDelay > 100) score -= 10;

      // Load time scoring (0-100)
      if (metrics.loadTime > 3000) score -= 10;
      else if (metrics.loadTime > 1000) score -= 5;

      setPerformanceScore(Math.max(0, score));
    };

    calculateScore();
  }, [metrics]);

  // Detect performance issues
  useEffect(() => {
    const newIssues: string[] = [];

    if (metrics.firstContentfulPaint > 1800) {
      newIssues.push('Slow First Contentful Paint');
    }
    if (metrics.largestContentfulPaint > 4000) {
      newIssues.push('Slow Largest Contentful Paint');
    }
    if (metrics.cumulativeLayoutShift > 0.25) {
      newIssues.push('High Cumulative Layout Shift');
    }
    if (metrics.firstInputDelay > 300) {
      newIssues.push('Slow First Input Delay');
    }
    if (metrics.loadTime > 3000) {
      newIssues.push('Slow Page Load Time');
    }

    setIssues(newIssues);

    // Notify parent component of issues
    newIssues.forEach(issue => {
      onPerformanceIssue?.(issue);
    });
  }, [metrics, onPerformanceIssue]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    return <AlertTriangle className="w-5 h-5 text-red-500" />;
  };

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Floating performance button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Performance Monitor"
      >
        <Activity className="w-6 h-6" />
      </motion.button>

      {/* Performance panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-green-500" />
                  Performance Monitor
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Score</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Based on Core Web Vitals</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl font-bold ${getScoreColor(performanceScore)}`}>
                      {performanceScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">/ 100</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  {getScoreIcon(performanceScore)}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {performanceScore >= 90 ? 'Excellent' : performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Load Time</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metrics.loadTime.toFixed(0)}ms
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">FCP</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metrics.firstContentfulPaint.toFixed(0)}ms
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LCP</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metrics.largestContentfulPaint.toFixed(0)}ms
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="w-4 h-4 mr-2 text-red-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CLS</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </div>
                </div>
              </div>

              {/* Issues */}
              {issues.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Issues</h3>
                  <div className="space-y-2">
                    {issues.map((issue, index) => (
                      <div key={index} className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        <span className="text-sm text-red-700 dark:text-red-300">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Resources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">System Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {metrics.memoryUsage !== undefined && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <HardDrive className="w-4 h-4 mr-2 text-indigo-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Memory Usage</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {(metrics.memoryUsage * 100).toFixed(1)}%
                      </div>
                    </div>
                  )}

                  {metrics.cpuUsage !== undefined && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Cpu className="w-4 h-4 mr-2 text-orange-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU Usage</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metrics.cpuUsage.toFixed(1)}%
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Monitoring: {isMonitoring ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <button
                  onClick={isMonitoring ? stopPerformanceMonitoring : startPerformanceMonitoring}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  {isMonitoring ? 'Stop' : 'Start'} Monitoring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(PerformanceMonitor);
