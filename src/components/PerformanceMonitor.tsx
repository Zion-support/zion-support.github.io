import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  BarChart3,
  Cpu,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  memory: number; // Memory usage
  cpu: number; // CPU usage
  network: string; // Network type
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoHide?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  theme?: 'light' | 'dark' | 'auto';
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enabled = true,
  showMetrics = false,
  autoHide = true,
  position = 'top-right',
  theme = 'auto'
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const getPerformanceMetrics = useCallback(async () => {
    if (!enabled || typeof window === 'undefined') return;

    try {
      // Get Core Web Vitals
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      // Get memory info if available
      const memory = (performance as any).memory ? 
        Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0;
      
      // Get network info
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const network = connection ? connection.effectiveType || 'unknown' : 'unknown';
      
      const newMetrics: PerformanceMetrics = {
        fcp: Math.round(fcp),
        lcp: Math.round(lcp),
        fid: 0, // Would need to be measured with user interaction
        cls: 0, // Would need to be measured with layout shift observer
        ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        memory,
        cpu: 0, // Not directly available in browsers
        network
      };

      setMetrics(newMetrics);

      // Check for performance issues
      const newAlerts: string[] = [];
      if (newMetrics.fcp > 1800) newAlerts.push('First Contentful Paint is slow (>1.8s)');
      if (newMetrics.lcp > 2500) newAlerts.push('Largest Contentful Paint is slow (>2.5s)');
      if (newMetrics.ttfb > 600) newAlerts.push('Time to First Byte is slow (>600ms)');
      if (newMetrics.memory > 100) newAlerts.push('High memory usage (>100MB)');
      
      setAlerts(newAlerts);

    } catch (error) {
      console.warn('Failed to get performance metrics:', error);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    getPerformanceMetrics();

    // Set up periodic monitoring
    const interval = setInterval(getPerformanceMetrics, 5000);

    // Set up performance observer for LCP
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          if (lastEntry) {
            setMetrics(prev => prev ? {
              ...prev,
              lcp: Math.round(lastEntry.startTime)
            } : null);
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [enabled, getPerformanceMetrics]);

  useEffect(() => {
    if (autoHide && alerts.length === 0) {
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    } else if (alerts.length > 0) {
      setIsVisible(true);
    }
  }, [alerts, autoHide]);

  const getStatusColor = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return 'text-green-500';
    if (value <= thresholds.needsImprovement) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusIcon = (value: number, thresholds: { good: number; needsImprovement: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <AlertTriangle className="w-4 h-4" />;
    return <X className="w-4 h-4" />;
  };

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  if (!enabled || !isVisible || !metrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        className={`fixed ${positionClasses[position]} z-50`}
      >
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-4 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <Settings className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="mb-3 space-y-1">
              {alerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400"
                >
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{alert}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Core Web Vitals */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">FCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(metrics.fcp, { good: 1800, needsImprovement: 3000 })}`}>
                  {metrics.fcp}ms
                </span>
                {getStatusIcon(metrics.fcp, { good: 1800, needsImprovement: 3000 })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">LCP</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(metrics.lcp, { good: 2500, needsImprovement: 4000 })}`}>
                  {metrics.lcp}ms
                </span>
                {getStatusIcon(metrics.lcp, { good: 2500, needsImprovement: 4000 })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">TTFB</span>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium ${getStatusColor(metrics.ttfb, { good: 600, needsImprovement: 1500 })}`}>
                  {metrics.ttfb}ms
                </span>
                {getStatusIcon(metrics.ttfb, { good: 600, needsImprovement: 1500 })}
              </div>
            </div>
          </div>

          {/* Expanded metrics */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Memory</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.memory}MB
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Network</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.network}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">CLS</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Refresh button */}
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={getPerformanceMetrics}
              className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Refresh Metrics</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor;