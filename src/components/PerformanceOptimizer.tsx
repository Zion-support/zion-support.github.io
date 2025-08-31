import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  X,
  BarChart3,
  Gauge,
  Clock,
  Smartphone,
  Monitor
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  domSize: number; // DOM size
  resourceCount: number; // Number of resources
  totalSize: number; // Total page size
}

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled,
  showMetrics = true,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    domSize: 0,
    resourceCount: 0,
    totalSize: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [showDetailedMetrics, setShowDetailedMetrics] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<string[]>([]);

  // Calculate performance score (0-100)
  const performanceScore = useMemo(() => {
    let score = 100;
    
    // Core Web Vitals scoring
    if (metrics.fcp > 1800) score -= 20; // FCP should be < 1.8s
    if (metrics.lcp > 2500) score -= 20; // LCP should be < 2.5s
    if (metrics.fid > 100) score -= 15;  // FID should be < 100ms
    if (metrics.cls > 0.1) score -= 15;  // CLS should be < 0.1
    
    // Additional metrics
    if (metrics.ttfb > 800) score -= 10;  // TTFB should be < 800ms
    if (metrics.domSize > 1500) score -= 10; // DOM size should be < 1500 nodes
    if (metrics.resourceCount > 50) score -= 10; // Resource count should be < 50
    
    return Math.max(0, score);
  }, [metrics]);

  // Get performance status and color
  const getPerformanceStatus = useCallback(() => {
    if (performanceScore >= 90) return { status: 'Excellent', color: 'text-green-400', bgColor: 'bg-green-500' };
    if (performanceScore >= 70) return { status: 'Good', color: 'text-yellow-400', bgColor: 'bg-yellow-500' };
    if (performanceScore >= 50) return { status: 'Fair', color: 'text-orange-400', bgColor: 'bg-orange-500' };
    return { status: 'Poor', color: 'text-red-400', bgColor: 'bg-red-500' };
  }, [performanceScore]);

  // Get optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const suggestions: string[] = [];
    
    if (metrics.fcp > 1800) suggestions.push('Optimize First Contentful Paint by reducing render-blocking resources');
    if (metrics.lcp > 2500) suggestions.push('Improve Largest Contentful Paint by optimizing images and critical resources');
    if (metrics.fid > 100) suggestions.push('Reduce First Input Delay by minimizing JavaScript execution time');
    if (metrics.cls > 0.1) suggestions.push('Fix Cumulative Layout Shift by setting explicit dimensions for images and ads');
    if (metrics.ttfb > 800) suggestions.push('Optimize Time to First Byte by improving server response time');
    if (metrics.domSize > 1500) suggestions.push('Reduce DOM size by removing unnecessary elements');
    if (metrics.resourceCount > 50) suggestions.push('Reduce resource count by combining and minifying files');
    
    return suggestions.length > 0 ? suggestions : ['Performance is optimal! Keep up the good work.'];
  }, [metrics]);

  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: Math.round(entry.startTime) }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: Math.round(entry.processingStart - entry.startTime) }));
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      // Measure FCP
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: Math.round(fcpEntry.startTime) }));
      }

      // Measure CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure additional metrics
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart),
          domSize: document.querySelectorAll('*').length,
          resourceCount: performance.getEntriesByType('resource').length,
          totalSize: performance.getEntriesByType('resource').reduce((total, resource) => {
            return total + (resource.transferSize || 0);
          }, 0)
        }));
      }

      return () => {
        observer.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Auto-optimization function
  const performAutoOptimization = useCallback(() => {
    if (!autoOptimize) return;

    const optimizations: string[] = [];
    
    // Image optimization
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        optimizations.push('Added lazy loading to images');
      }
    });

    // Font optimization
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach(link => {
      link.setAttribute('crossorigin', 'anonymous');
      optimizations.push('Added crossorigin to font preloads');
    });

    // Resource hints
    if (!document.querySelector('link[rel="dns-prefetch"][href="//www.google-analytics.com"]')) {
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//www.google-analytics.com';
      document.head.appendChild(dnsPrefetch);
      optimizations.push('Added DNS prefetch for analytics');
    }

    if (optimizations.length > 0) {
      setOptimizationHistory(prev => [...prev, ...optimizations]);
    }
  }, [autoOptimize]);

  // Initialize performance monitoring
  useEffect(() => {
    if (!enabled) return;

    setIsVisible(true);
    
    // Initial measurement
    const cleanup = measurePerformance();
    
    // Periodic measurement every 10 seconds
    const interval = setInterval(() => {
      measurePerformance();
      performAutoOptimization();
    }, 10000);

    return () => {
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [enabled, measurePerformance, performAutoOptimization]);

  if (!enabled || !isVisible) return null;

  const { status, color, bgColor } = getPerformanceStatus();
  const suggestions = getOptimizationSuggestions();

  return (
    <>
      {/* Floating Performance Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowDetailedMetrics(!showDetailedMetrics)}
          className={`relative p-3 rounded-full shadow-lg ${bgColor} text-white hover:shadow-xl transition-all duration-300`}
          aria-label="Performance Monitor"
        >
          <Activity className="w-5 h-5" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className={`text-xs font-bold ${color.replace('text-', 'text-')}`}>
              {performanceScore}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Detailed Performance Dashboard */}
      <AnimatePresence>
        {showDetailedMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowDetailedMetrics(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-zion-slate-dark border border-zion-purple/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-zion-cyan" />
                  <h2 className="text-2xl font-bold text-white">Performance Dashboard</h2>
                </div>
                <button
                  onClick={() => setShowDetailedMetrics(false)}
                  className="p-2 hover:bg-zion-purple/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-zion-slate-light" />
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{performanceScore}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance Score</h3>
                    <p className={`text-lg ${color}`}>{status}</p>
                  </div>
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-zion-cyan" />
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="FCP"
                    value={`${metrics.fcp}ms`}
                    status={metrics.fcp <= 1800 ? 'good' : 'poor'}
                    description="First Contentful Paint"
                  />
                  <MetricCard
                    label="LCP"
                    value={`${metrics.lcp}ms`}
                    status={metrics.lcp <= 2500 ? 'good' : 'poor'}
                    description="Largest Contentful Paint"
                  />
                  <MetricCard
                    label="FID"
                    value={`${metrics.fid}ms`}
                    status={metrics.fid <= 100 ? 'good' : 'poor'}
                    description="First Input Delay"
                  />
                  <MetricCard
                    label="CLS"
                    value={metrics.cls.toFixed(3)}
                    status={metrics.cls <= 0.1 ? 'good' : 'poor'}
                    description="Cumulative Layout Shift"
                  />
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-zion-cyan" />
                  Additional Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <MetricCard
                    label="TTFB"
                    value={`${metrics.ttfb}ms`}
                    status={metrics.ttfb <= 800 ? 'good' : 'poor'}
                    description="Time to First Byte"
                  />
                  <MetricCard
                    label="DOM Size"
                    value={metrics.domSize.toLocaleString()}
                    status={metrics.domSize <= 1500 ? 'good' : 'poor'}
                    description="DOM Elements"
                  />
                  <MetricCard
                    label="Resources"
                    value={metrics.resourceCount.toString()}
                    status={metrics.resourceCount <= 50 ? 'good' : 'poor'}
                    description="Total Resources"
                  />
                  <MetricCard
                    label="Total Size"
                    value={`${(metrics.totalSize / 1024 / 1024).toFixed(1)}MB`}
                    status={metrics.totalSize <= 2 * 1024 * 1024 ? 'good' : 'poor'}
                    description="Page Size"
                  />
                </div>
              </div>

              {/* Optimization Suggestions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                  Optimization Suggestions
                </h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-zion-slate-darker rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zion-slate-light text-sm">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimization History */}
              {optimizationHistory.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Recent Optimizations
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {optimizationHistory.slice(-5).map((optimization, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <p className="text-green-300 text-sm">{optimization}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
  status: 'good' | 'poor';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, status, description }) => {
  const getStatusColor = (status: 'good' | 'poor') => {
    return status === 'good' ? 'text-green-400' : 'text-red-400';
  };

  const getStatusIcon = (status: 'good' | 'poor') => {
    return status === 'good' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zion-slate-light">{label}</span>
        <span className={getStatusColor(status)}>
          {getStatusIcon(status)}
        </span>
      </div>
      <div className="text-xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-zion-slate-light">{description}</div>
    </div>
  );
};
