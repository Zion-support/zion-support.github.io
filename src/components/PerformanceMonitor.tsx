import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  EyeOff,
  RefreshCw,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number; // Page Load Time
  memoryUsage?: number; // Memory Usage (if available)
  networkSpeed?: number; // Network Speed (if available)
}

interface ErrorLog {
  id: string;
  timestamp: number;
  message: string;
  stack?: string;
  type: 'error' | 'warning' | 'info';
  url: string;
  userAgent: string;
}

interface PerformanceMonitorProps {
  showDetails?: boolean;
  enableRealTime?: boolean;
  logErrors?: boolean;
  performanceThresholds?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDetails = false,
  enableRealTime = true,
  logErrors = true,
  performanceThresholds = {
    fcp: 1800,
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    ttfb: 600
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [isVisible, setIsVisible] = useState(showDetails);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const observerRef = useRef<PerformanceObserver | null>(null);
  const errorCountRef = useRef(0);
  const warningCountRef = useRef(0);

  // Performance monitoring setup
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enableRealTime || !('PerformanceObserver' in window)) return;

    try {
      // Monitor Core Web Vitals
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });

      observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance monitoring setup failed:', error);
    }
  }, [enableRealTime]);

  // Error monitoring setup
  const setupErrorMonitoring = useCallback(() => {
    if (!logErrors) return;

    const handleError = (event: ErrorEvent) => {
      const errorLog: ErrorLog = {
        id: `error-${Date.now()}-${errorCountRef.current++}`,
        timestamp: Date.now(),
        message: event.message,
        stack: event.error?.stack,
        type: 'error',
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      setErrors(prev => [errorLog, ...prev.slice(0, 49)]); // Keep last 50 errors
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorLog: ErrorLog = {
        id: `promise-${Date.now()}-${errorCountRef.current++}`,
        timestamp: Date.now(),
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        type: 'error',
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      setErrors(prev => [errorLog, ...prev.slice(0, 49)]);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [logErrors]);

  // Measure performance metrics
  const measurePerformance = useCallback(async () => {
    if (!('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // Measure FID (simplified)
    let fid = 0;
    if ('PerformanceEventTiming' in window) {
      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        fid = (fidEntries[0] as any).processingStart - (fidEntries[0] as any).startTime;
      }
    }

    // Measure CLS (simplified)
    let cls = 0;
    if ('PerformanceObserver' in window) {
      // This is a simplified CLS measurement
      cls = 0; // Would need more complex implementation for accurate CLS
    }

    const newMetrics: PerformanceMetrics = {
      fcp,
      lcp,
      fid,
      cls,
      ttfb: navigation.responseStart - navigation.requestStart,
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      memoryUsage: (performance as any).memory?.usedJSHeapSize,
      networkSpeed: navigation.transferSize > 0 ? navigation.transferSize / (navigation.loadEventEnd - navigation.fetchStart) : undefined
    };

    setMetrics(newMetrics);
    setLastUpdate(new Date());
  }, []);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    setupPerformanceMonitoring();
    setupErrorMonitoring();
    
    // Initial measurement
    measurePerformance();
    
    // Set up periodic measurements
    const interval = setInterval(measurePerformance, 5000);
    
    return () => clearInterval(interval);
  }, [setupPerformanceMonitoring, setupErrorMonitoring, measurePerformance]);

  // Stop monitoring
  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  // Get performance status
  const getPerformanceStatus = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    if (!performanceThresholds[metric]) return 'unknown';
    
    const threshold = performanceThresholds[metric];
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'needs-improvement';
    return 'poor';
  }, [performanceThresholds]);

  // Get status color
  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  }, []);

  // Get status icon
  const getStatusIcon = useCallback((status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="w-4 h-4" />;
      case 'needs-improvement': return <AlertTriangle className="w-4 h-4" />;
      case 'poor': return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  }, []);

  // Format metric value
  const formatMetric = useCallback((metric: keyof PerformanceMetrics, value: number) => {
    if (metric === 'cls') return value.toFixed(3);
    if (metric === 'memoryUsage') return `${(value / 1024 / 1024).toFixed(1)} MB`;
    if (metric === 'networkSpeed') return `${(value / 1024).toFixed(1)} KB/s`;
    return `${Math.round(value)}ms`;
  }, []);

  useEffect(() => {
    if (enableRealTime) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [enableRealTime, startMonitoring]);

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 z-50 w-80 max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5" />
          <h3 className="font-semibold">Performance Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            title="Hide Monitor"
          >
            <EyeOff className="w-4 h-4" />
          </button>
          <button
            onClick={measurePerformance}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            title="Refresh Metrics"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
        {/* Status Overview */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</span>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-xs text-gray-500">
              {isMonitoring ? 'Monitoring' : 'Stopped'}
            </span>
          </div>
        </div>

        {/* Performance Metrics */}
        {metrics && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Core Web Vitals</h4>
            
            {Object.entries(metrics).map(([key, value]) => {
              if (typeof value !== 'number' || key === 'memoryUsage' || key === 'networkSpeed') return null;
              
              const status = getPerformanceStatus(key as keyof PerformanceMetrics, value);
              const statusColor = getStatusColor(status);
              const statusIcon = getStatusIcon(status);
              
              return (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                      {key}
                    </span>
                    <span className={statusColor}>
                      {statusIcon}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-gray-800 dark:text-gray-200">
                    {formatMetric(key as keyof PerformanceMetrics, value)}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Error Log */}
        {errors.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Recent Errors</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {errors.slice(0, 5).map((error) => (
                <div key={error.id} className="text-xs p-2 bg-red-50 dark:bg-red-900/20 rounded border-l-2 border-red-500">
                  <div className="font-medium text-red-700 dark:text-red-300">
                    {error.message.substring(0, 50)}...
                  </div>
                  <div className="text-red-600 dark:text-red-400">
                    {new Date(error.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Last Update */}
        <div className="text-xs text-gray-500 text-center">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-3 py-1 text-xs rounded-full transition-colors ${
              isMonitoring 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isMonitoring ? 'Stop' : 'Start'} Monitoring
          </button>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Errors: {errorCountRef.current}</span>
            <span>Warnings: {warningCountRef.current}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
