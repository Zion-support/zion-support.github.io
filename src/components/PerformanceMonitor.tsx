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

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  onPerformanceIssue
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Calculate performance score
  const calculateScore = useCallback((metrics: PerformanceMetrics) => {
    let score = 100;
    
    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint < 1800) score -= 0;
    else if (metrics.firstContentfulPaint < 3000) score -= 10;
    else score -= 30;
    
    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint < 2500) score -= 0;
    else if (metrics.largestContentfulPaint < 4000) score -= 10;
    else score -= 30;
    
    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift < 0.1) score -= 0;
    else if (metrics.cumulativeLayoutShift < 0.25) score -= 10;
    else score -= 30;
    
    // FID scoring (0-100)
    if (metrics.firstInputDelay < 100) score -= 0;
    else if (metrics.firstInputDelay < 300) score -= 10;
    else score -= 30;
    
    return Math.max(0, score);
  }, []);

  // Collect performance metrics
  const collectMetrics = useCallback(() => {
    if ('performance' in window) {
      const perf = (window as any).performance;
      const navigation = perf.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const newMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToInteractive: navigation.domInteractive - navigation.fetchStart
        };

        // Get FCP
        const fcpEntry = perf.getEntriesByName('first-contentful-paint')[0];
        if (fcpEntry) {
          newMetrics.firstContentfulPaint = fcpEntry.startTime;
        }

        // Get LCP
        const lcpEntries = perf.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          newMetrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
        }

        // Get CLS
        if ('PerformanceObserver' in window) {
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            let clsValue = 0;
            entries.forEach((entry: any) => {
              if (entry.value) {
                clsValue += entry.value;
              }
            });
            newMetrics.cumulativeLayoutShift = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        }

        // Get FID
        if ('PerformanceObserver' in window) {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              const lastEntry = entries[entries.length - 1] as any;
              newMetrics.firstInputDelay = lastEntry.processingStart - lastEntry.startTime;
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        }

        setMetrics(newMetrics);
        const score = calculateScore(newMetrics);
        setPerformanceScore(score);

        // Check for performance issues
        const newIssues: string[] = [];
        if (newMetrics.firstContentfulPaint > 3000) {
          newIssues.push('First Contentful Paint is slow');
        }
        if (newMetrics.largestContentfulPaint > 4000) {
          newIssues.push('Largest Contentful Paint is slow');
        }
        if (newMetrics.cumulativeLayoutShift > 0.25) {
          newIssues.push('Cumulative Layout Shift is high');
        }
        if (newMetrics.firstInputDelay > 300) {
          newIssues.push('First Input Delay is high');
        }

        setIssues(newIssues);
        if (onPerformanceIssue && newIssues.length > 0) {
          newIssues.forEach(issue => onPerformanceIssue(issue));
        }
      }
    }
  }, [calculateScore, onPerformanceIssue]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    collectMetrics();
    
    // Monitor continuously
    intervalRef.current = setInterval(() => {
      collectMetrics();
    }, 5000);
  }, [collectMetrics]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (enabled) {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [enabled, startMonitoring, stopMonitoring]);

  // Get performance status color
  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Get performance status icon
  const getStatusIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5" />;
    return <AlertTriangle className="w-5 h-5" />;
  };

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Performance Monitor
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <Settings className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Performance Score */}
            <div className="flex items-center space-x-3 mb-3">
              <div className={`text-2xl font-bold ${getStatusColor(performanceScore)}`}>
                {performanceScore}
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 dark:text-gray-400">Performance Score</div>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(performanceScore)}
                  <span className="text-xs text-gray-600 dark:text-gray-300">
                    {performanceScore >= 90 ? 'Excellent' : performanceScore >= 70 ? 'Good' : 'Needs Improvement'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-500 dark:text-gray-400">FCP</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {metrics.firstContentfulPaint ? `${Math.round(metrics.firstContentfulPaint)}ms` : 'N/A'}
                </div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-500 dark:text-gray-400">LCP</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {metrics.largestContentfulPaint ? `${Math.round(metrics.largestContentfulPaint)}ms` : 'N/A'}
                </div>
              </div>
            </div>

            {/* Issues */}
            {issues.length > 0 && (
              <div className="mb-3">
                <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">
                  Performance Issues:
                </div>
                <div className="space-y-1">
                  {issues.map((issue, index) => (
                    <div key={index} className="text-xs text-red-500 dark:text-red-400 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={isMonitoring ? stopMonitoring : startMonitoring}
                className={`px-3 py-1 text-xs rounded ${
                  isMonitoring
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {isMonitoring ? 'Stop' : 'Start'} Monitoring
              </button>
              <button
                onClick={collectMetrics}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                Refresh
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
      >
        <BarChart3 className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default PerformanceMonitor;
