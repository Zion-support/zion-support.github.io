import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  X,
  Settings,
  BarChart3,
  Cpu,
  HardDrive,
  Network,
  Smartphone
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domSize: number;
  resourceCount: number;
  totalSize: number;
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoOptimizationEnabled, setAutoOptimizationEnabled] = useState(autoOptimize);

  // Enhanced performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled) return;

    try {
      // Core Web Vitals
      const fcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            resolve(fcpEntry.startTime);
          }
        }).observe({ entryTypes: ['paint'] });
      });

      const lcp = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            resolve(lcpEntry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });

      const fid = await new Promise<number>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries.find(entry => entry.entryType === 'first-input');
          if (fidEntry) {
            resolve(fidEntry.processingStart - fidEntry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      });

      const cls = await new Promise<number>((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              clsValue += (entry as any).value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      });

      // Additional metrics
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry?.responseStart - navigationEntry?.requestStart || 0;
      
      const domSize = document.querySelectorAll('*').length;
      const resourceCount = performance.getEntriesByType('resource').length;
      const totalSize = performance.getEntriesByType('resource').reduce((acc, resource) => {
        return acc + (resource as PerformanceResourceTiming).transferSize || 0;
      }, 0);

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        domSize,
        resourceCount,
        totalSize
      };

      setMetrics(newMetrics);
      generateOptimizations(newMetrics);
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Generate optimization suggestions
  const generateOptimizations = useCallback((currentMetrics: PerformanceMetrics) => {
    const suggestions: string[] = [];

    if (currentMetrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Consider optimizing critical rendering path.');
    }

    if (currentMetrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and reduce render-blocking resources.');
    }

    if (currentMetrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
    }

    if (currentMetrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure stable layouts and proper image dimensions.');
    }

    if (currentMetrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.');
    }

    if (currentMetrics.domSize > 1500) {
      suggestions.push('DOM size is large. Consider code splitting and lazy loading.');
    }

    if (currentMetrics.resourceCount > 50) {
      suggestions.push('Too many resources. Implement resource bundling and optimization.');
    }

    if (currentMetrics.totalSize > 2 * 1024 * 1024) { // 2MB
      suggestions.push('Total resource size is large. Implement compression and optimization.');
    }

    setOptimizations(suggestions);
  }, []);

  // Auto-optimization
  const applyAutoOptimizations = useCallback(() => {
    if (!autoOptimizationEnabled || !optimizations.length) return;

    // Apply automatic optimizations
    optimizations.forEach(optimization => {
      if (optimization.includes('images')) {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
          }
        });
      }

      if (optimization.includes('JavaScript')) {
        // Defer non-critical JavaScript
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach(script => {
          if (script instanceof HTMLScriptElement) {
            script.defer = true;
          }
        });
      }
    });
  }, [autoOptimizationEnabled, optimizations]);

  // Performance monitoring interval
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(measurePerformance, 10000); // Check every 10 seconds
    measurePerformance(); // Initial measurement

    return () => clearInterval(interval);
  }, [enabled, measurePerformance]);

  // Auto-apply optimizations
  useEffect(() => {
    if (autoOptimizationEnabled && optimizations.length > 0) {
      const timer = setTimeout(applyAutoOptimizations, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoOptimizationEnabled, optimizations, applyAutoOptimizations]);

  // Show performance issues
  useEffect(() => {
    if (metrics && (metrics.fcp > 2000 || metrics.lcp > 3000 || metrics.cls > 0.15)) {
      setIsVisible(true);
    }
  }, [metrics]);

  if (!enabled) return null;

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;

    let score = 100;

    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 20;
    if (metrics.fid > 100) score -= 15;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 10;
    if (metrics.domSize > 1500) score -= 10;
    if (metrics.resourceCount > 50) score -= 10;

    return Math.max(0, score);
  };

  const getPerformanceStatus = (): 'excellent' | 'good' | 'needs-improvement' | 'poor' => {
    const score = getPerformanceScore();
    if (score >= 90) return 'excellent';
    if (score >= 70) return 'good';
    if (score >= 50) return 'needs-improvement';
    return 'poor';
  };

  const status = getPerformanceStatus();
  const statusColors = {
    excellent: 'text-green-500',
    good: 'text-blue-500',
    'needs-improvement': 'text-yellow-500',
    poor: 'text-red-500'
  };

  const statusIcons = {
    excellent: CheckCircle,
    good: CheckCircle,
    'needs-improvement': AlertTriangle,
    poor: AlertTriangle
  };

  const StatusIcon = statusIcons[status];

  return (
    <>
      {/* Floating Performance Indicator */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg
                ${status === 'excellent' ? 'bg-green-500 hover:bg-green-600' : ''}
                ${status === 'good' ? 'bg-blue-500 hover:bg-blue-600' : ''}
                ${status === 'needs-improvement' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
                ${status === 'poor' ? 'bg-red-500 hover:bg-red-600' : ''}
                text-white font-medium transition-all duration-300
              `}
            >
              <StatusIcon className="w-5 h-5" />
              <span className="hidden sm:inline">Performance: {getPerformanceScore()}/100</span>
              <span className="sm:hidden">Perf</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Performance Dashboard */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Performance Dashboard
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Real-time performance monitoring and optimization
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {metrics ? (
                  <div className="space-y-6">
                    {/* Performance Score */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700">
                        <StatusIcon className={`w-5 h-5 ${statusColors[status]}`} />
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          Performance Score: {getPerformanceScore()}/100
                        </span>
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Core Web Vitals
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="FCP"
                          value={`${(metrics.fcp / 1000).toFixed(2)}s`}
                          status={metrics.fcp <= 1800 ? 'good' : 'poor'}
                          description="First Contentful Paint"
                          icon={Clock}
                        />
                        <MetricCard
                          title="LCP"
                          value={`${(metrics.lcp / 1000).toFixed(2)}s`}
                          status={metrics.lcp <= 2500 ? 'good' : 'poor'}
                          description="Largest Contentful Paint"
                          icon={TrendingUp}
                        />
                        <MetricCard
                          title="FID"
                          value={`${metrics.fid.toFixed(0)}ms`}
                          status={metrics.fid <= 100 ? 'good' : 'poor'}
                          description="First Input Delay"
                          icon={Zap}
                        />
                        <MetricCard
                          title="CLS"
                          value={metrics.cls.toFixed(3)}
                          status={metrics.cls <= 0.1 ? 'good' : 'poor'}
                          description="Cumulative Layout Shift"
                          icon={Activity}
                        />
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Metrics
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <MetricCard
                          title="TTFB"
                          value={`${metrics.ttfb.toFixed(0)}ms`}
                          status={metrics.ttfb <= 600 ? 'good' : 'poor'}
                          description="Time to First Byte"
                          icon={Network}
                        />
                        <MetricCard
                          title="DOM Size"
                          value={metrics.domSize.toLocaleString()}
                          status={metrics.domSize <= 1500 ? 'good' : 'poor'}
                          description="Total DOM Elements"
                          icon={Cpu}
                        />
                        <MetricCard
                          title="Resources"
                          value={metrics.resourceCount.toString()}
                          status={metrics.resourceCount <= 50 ? 'good' : 'poor'}
                          description="Total Resources"
                          icon={HardDrive}
                        />
                        <MetricCard
                          title="Total Size"
                          value={`${(metrics.totalSize / (1024 * 1024)).toFixed(1)}MB`}
                          status={metrics.totalSize <= 2 * 1024 * 1024 ? 'good' : 'poor'}
                          description="Resource Size"
                          icon={Smartphone}
                        />
                      </div>
                    </div>

                    {/* Optimization Suggestions */}
                    {optimizations.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Optimization Suggestions
                        </h3>
                        <div className="space-y-2">
                          {optimizations.map((optimization, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                            >
                              <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-yellow-800 dark:text-yellow-200">
                                {optimization}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Auto-optimization Toggle */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Auto-optimization
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automatically apply performance optimizations
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoOptimizationEnabled}
                          onChange={(e) => setAutoOptimizationEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-500 dark:text-gray-400">Measuring performance...</p>
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

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string;
  status: 'good' | 'poor';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, status, description, icon: Icon }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="flex items-center space-x-3 mb-2">
        <Icon className={`w-5 h-5 ${status === 'good' ? 'text-green-500' : 'text-red-500'}`} />
        <span className="text-sm font-medium text-gray-900 dark:text-white">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
    </div>
  );
};
