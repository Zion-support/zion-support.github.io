import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  Clock, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging,
  Settings,
  X,
  RefreshCw,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkSpeed?: number;
  batteryLevel?: number;
  isOnline: boolean;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  showFloatingButton?: boolean;
  className?: string;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true,
  showFloatingButton = true,
  className = '',
  onMetricsUpdate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
    isOnline: navigator.onLine,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);
  
  const observerRef = useRef<PerformanceObserver | null>(null);
  const metricsRef = useRef<PerformanceMetrics>(metrics);

  // Show floating button after a delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enableMonitoring) return;

    const initPerformanceMonitoring = () => {
      // Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        try {
          // First Contentful Paint
          observerRef.current = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({
                  ...prev,
                  firstContentfulPaint: entry.startTime,
                }));
              }
            });
          });
          observerRef.current.observe({ entryTypes: ['paint'] });

          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: lastEntry.startTime,
              }));
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            list.getEntries().forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            setMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: clsValue,
            }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              setMetrics(prev => ({
                ...prev,
                firstInputDelay: entry.processingStart - entry.startTime,
              }));
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (error) {
          console.warn('Performance monitoring initialization failed:', error);
        }
      }

      // Network monitoring
      const updateNetworkInfo = () => {
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          setMetrics(prev => ({
            ...prev,
            networkSpeed: connection.effectiveType === '4g' ? 100 : 
                          connection.effectiveType === '3g' ? 50 : 
                          connection.effectiveType === '2g' ? 25 : 10,
          }));
        }
      };

      // Battery monitoring
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setMetrics(prev => ({
            ...prev,
            batteryLevel: battery.level * 100,
          }));
          
          battery.addEventListener('levelchange', () => {
            setMetrics(prev => ({
              ...prev,
              batteryLevel: battery.level * 100,
            }));
          });
        });
      }

      // Memory monitoring
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
        }));
      }

      // Initial load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          timeToInteractive: navigation.domInteractive - navigation.fetchStart,
        }));
      }

      updateNetworkInfo();
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      initPerformanceMonitoring();
    } else {
      window.addEventListener('load', initPerformanceMonitoring);
    }

    // Online/offline status
    const handleOnlineStatus = () => {
      setMetrics(prev => ({ ...prev, isOnline: navigator.onLine }));
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [enableMonitoring]);

  // Calculate performance score
  useEffect(() => {
    const calculateScore = (): number => {
      let score = 100;

      // FCP scoring (0-25 points)
      if (metrics.firstContentfulPaint < 1800) score += 25;
      else if (metrics.firstContentfulPaint < 3000) score += 15;
      else if (metrics.firstContentfulPaint < 4000) score += 5;

      // LCP scoring (0-25 points)
      if (metrics.largestContentfulPaint < 2500) score += 25;
      else if (metrics.largestContentfulPaint < 4000) score += 15;
      else if (metrics.largestContentfulPaint < 5000) score += 5;

      // CLS scoring (0-25 points)
      if (metrics.cumulativeLayoutShift < 0.1) score += 25;
      else if (metrics.cumulativeLayoutShift < 0.25) score += 15;
      else if (metrics.cumulativeLayoutShift < 0.4) score += 5;

      // FID scoring (0-25 points)
      if (metrics.firstInputDelay < 100) score += 25;
      else if (metrics.firstInputDelay < 300) score += 15;
      else if (metrics.firstInputDelay < 500) score += 5;

      return Math.max(0, Math.min(100, score));
    };

    const score = calculateScore();
    setPerformanceScore(score);

    // Notify parent component
    if (onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Apply performance optimizations
  const applyOptimizations = useCallback(async () => {
    if (!enableOptimizations) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    try {
      // Image optimization
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index < 10) { // Limit to first 10 images
          if (!img.loading) {
            img.loading = 'lazy';
            newOptimizations.push('Lazy loading enabled for images');
          }
        }
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css',
      ];

      criticalResources.forEach(href => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = href.endsWith('.css') ? 'style' : 'font';
          document.head.appendChild(link);
          newOptimizations.push('Critical resources preloaded');
        }
      });

      // Service worker registration
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          newOptimizations.push('Service worker registered');
        } catch (error) {
          console.warn('Service worker registration failed:', error);
        }
      }

      // Resource hints
      const resourceHints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      ];

      resourceHints.forEach(hint => {
        if (!document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`)) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          document.head.appendChild(link);
        }
      });
      newOptimizations.push('Resource hints added');

      // Wait a bit to show progress
      await new Promise(resolve => setTimeout(resolve, 1000));

      setOptimizations(newOptimizations);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableOptimizations]);

  const getPerformanceGrade = (score: number): { grade: string; color: string; label: string } => {
    if (score >= 90) return { grade: 'A', color: 'text-green-500', label: 'Excellent' };
    if (score >= 80) return { grade: 'B', color: 'text-blue-500', label: 'Good' };
    if (score >= 70) return { grade: 'C', color: 'text-yellow-500', label: 'Fair' };
    if (score >= 60) return { grade: 'D', color: 'text-orange-500', label: 'Poor' };
    return { grade: 'F', color: 'text-red-500', label: 'Very Poor' };
  };

  const formatMetric = (value: number, unit: string): string => {
    if (value === 0) return 'N/A';
    return `${value.toFixed(1)}${unit}`;
  };

  const { grade, color, label } = getPerformanceGrade(performanceScore);

  if (!showFloatingButton) return null;

  return (
    <>
      {/* Floating Performance Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/30 ${className}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Performance Monitor"
            aria-expanded={isOpen}
            aria-haspopup="dialog"
          >
            <Zap className="w-6 h-6 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Performance Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-zion-slate rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="performance-panel-title"
              aria-describedby="performance-panel-description"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-light">
                <div>
                  <h2 id="performance-panel-title" className="text-xl font-bold text-gray-900 dark:text-white">
                    Performance Monitor
                  </h2>
                  <p id="performance-panel-description" className="text-sm text-gray-600 dark:text-gray-300">
                    Monitor and optimize your website performance
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close performance panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Performance Score */}
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {performanceScore}
                  </div>
                  <div className={`text-3xl font-bold ${color} mb-2`}>
                    {grade}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {label} Performance
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Core Web Vitals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MetricCard
                      label="First Contentful Paint"
                      value={formatMetric(metrics.firstContentfulPaint, 'ms')}
                      status={metrics.firstContentfulPaint < 1800 ? 'good' : metrics.firstContentfulPaint < 3000 ? 'warning' : 'poor'}
                      description="Time to first content"
                    />
                    <MetricCard
                      label="Largest Contentful Paint"
                      value={formatMetric(metrics.largestContentfulPaint, 'ms')}
                      status={metrics.largestContentfulPaint < 2500 ? 'good' : metrics.largestContentfulPaint < 4000 ? 'warning' : 'poor'}
                      description="Time to largest content"
                    />
                    <MetricCard
                      label="Cumulative Layout Shift"
                      value={formatMetric(metrics.cumulativeLayoutShift, '')}
                      status={metrics.cumulativeLayoutShift < 0.1 ? 'good' : metrics.cumulativeLayoutShift < 0.25 ? 'warning' : 'poor'}
                      description="Visual stability"
                    />
                    <MetricCard
                      label="First Input Delay"
                      value={formatMetric(metrics.firstInputDelay, 'ms')}
                      status={metrics.firstInputDelay < 100 ? 'good' : metrics.firstInputDelay < 300 ? 'warning' : 'poor'}
                      description="Interactivity"
                    />
                    <MetricCard
                      label="Load Time"
                      value={formatMetric(metrics.loadTime, 'ms')}
                      status={metrics.loadTime < 2000 ? 'good' : metrics.loadTime < 4000 ? 'warning' : 'poor'}
                      description="Page load time"
                    />
                    <MetricCard
                      label="Time to Interactive"
                      value={formatMetric(metrics.timeToInteractive, 'ms')}
                      status={metrics.timeToInteractive < 3000 ? 'good' : metrics.timeToInteractive < 5000 ? 'warning' : 'poor'}
                      description="Interactive readiness"
                    />
                  </div>
                </div>

                {/* System Metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    System Metrics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SystemMetricCard
                      icon={Wifi}
                      label="Network"
                      value={metrics.isOnline ? 'Online' : 'Offline'}
                      status={metrics.isOnline ? 'good' : 'poor'}
                      subValue={metrics.networkSpeed ? `${metrics.networkSpeed} Mbps` : 'Unknown'}
                    />
                    <SystemMetricCard
                      icon={Battery}
                      label="Battery"
                      value={metrics.batteryLevel ? `${Math.round(metrics.batteryLevel)}%` : 'Unknown'}
                      status={metrics.batteryLevel ? (metrics.batteryLevel > 20 ? 'good' : 'warning') : 'neutral'}
                      subValue={metrics.batteryLevel ? (metrics.batteryLevel > 20 ? 'Good' : 'Low') : ''}
                    />
                    <SystemMetricCard
                      icon={Gauge}
                      label="Memory"
                      value={metrics.memoryUsage ? `${Math.round(metrics.memoryUsage)}%` : 'Unknown'}
                      status={metrics.memoryUsage ? (metrics.memoryUsage < 70 ? 'good' : 'warning') : 'neutral'}
                      subValue={metrics.memoryUsage ? (metrics.memoryUsage < 70 ? 'Normal' : 'High') : ''}
                    />
                  </div>
                </div>

                {/* Optimizations */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Performance Optimizations
                    </h3>
                    <button
                      onClick={applyOptimizations}
                      disabled={isOptimizing}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      {isOptimizing ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Zap className="w-4 h-4" />
                      )}
                      <span>{isOptimizing ? 'Optimizing...' : 'Apply Optimizations'}</span>
                    </button>
                  </div>
                  
                  {optimizations.length > 0 ? (
                    <div className="space-y-2">
                      {optimizations.map((optimization, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-800 dark:text-green-200">{optimization}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-4 text-gray-500 dark:text-gray-400">
                      Click "Apply Optimizations" to see available improvements
                    </div>
                  )}
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recommendations
                  </h3>
                  <div className="space-y-3">
                    {performanceScore < 90 && (
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                            Performance can be improved
                          </p>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                            Consider optimizing images, reducing bundle size, and implementing lazy loading
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {metrics.cumulativeLayoutShift > 0.1 && (
                      <div className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <Info className="w-5 h-5 text-orange-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                            Layout shifts detected
                          </p>
                          <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                            Reserve space for dynamic content to prevent layout shifts
                          </p>
                        </div>
                      </div>
                    )}

                    {performanceScore >= 90 && (
                      <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-green-800 dark:text-green-200">
                            Excellent performance!
                          </p>
                          <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                            Your website is performing well. Keep monitoring for any regressions.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Metric Card Component
interface MetricCardProps {
  label: string;
  value: string;
  status: 'good' | 'warning' | 'poor';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, status, description }) => {
  const statusColors = {
    good: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
    warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20',
    poor: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
  };

  const statusIcons = {
    good: <CheckCircle className="w-4 h-4 text-green-600" />,
    warning: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
    poor: <AlertTriangle className="w-4 h-4 text-red-600" />,
  };

  return (
    <div className={`p-4 border rounded-lg ${statusColors[status]}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        {statusIcons[status]}
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{description}</div>
    </div>
  );
};

// System Metric Card Component
interface SystemMetricCardProps {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  status: 'good' | 'warning' | 'poor' | 'neutral';
  subValue: string;
}

const SystemMetricCard: React.FC<SystemMetricCardProps> = ({ icon: Icon, label, value, status, subValue }) => {
  const statusColors = {
    good: 'text-green-600',
    warning: 'text-yellow-600',
    poor: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-zion-slate-light rounded-lg">
      <div className="flex items-center space-x-3 mb-3">
        <Icon className={`w-5 h-5 ${statusColors[status]}`} />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      {subValue && (
        <div className="text-xs text-gray-600 dark:text-gray-400">{subValue}</div>
      )}
    </div>
  );
};
