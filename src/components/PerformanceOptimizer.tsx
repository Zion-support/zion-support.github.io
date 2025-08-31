import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  RefreshCw,
  Gauge,
  Database,
  Network,
  Cpu,
  Memory,
  HardDrive
} from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  memoryUsage?: number;
  networkRequests: number;
  bundleSize: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  threshold?: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
  };
}

export function PerformanceOptimizer({ 
  enabled = true, 
  showMetrics = false, 
  autoOptimize = true,
  threshold = {
    loadTime: 3000,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1
  }
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    const layoutShiftEntries = performance.getEntriesByType('layout-shift');
    const resourceEntries = performance.getEntriesByType('resource');

    const newMetrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: layoutShiftEntries.reduce((sum, entry) => sum + (entry as any).value, 0),
      firstInputDelay: 0,
      timeToInteractive: 0,
      networkRequests: resourceEntries.length,
      bundleSize: 0
    };

    // Measure LCP
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        newMetrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // Measure FID
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          newMetrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }

    // Measure TTI (approximation)
    newMetrics.timeToInteractive = Math.max(
      newMetrics.domContentLoaded,
      newMetrics.firstContentfulPaint + 1000
    );

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      newMetrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }

    // Bundle size estimation
    const scripts = document.querySelectorAll('script[src]');
    newMetrics.bundleSize = Array.from(scripts).reduce((total, script) => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk') || src?.includes('main')) {
        return total + 1; // Count main chunks
      }
      return total;
    }, 0);

    setMetrics(newMetrics);
    analyzePerformance(newMetrics);
  }, [enabled, threshold]);

  // Performance analysis and optimization suggestions
  const analyzePerformance = useCallback((currentMetrics: PerformanceMetrics) => {
    if (!autoOptimize) return;

    const newOptimizations: string[] = [];

    if (currentMetrics.loadTime > threshold.loadTime) {
      newOptimizations.push('Consider implementing code splitting and lazy loading');
    }

    if (currentMetrics.firstContentfulPaint > threshold.firstContentfulPaint) {
      newOptimizations.push('Optimize critical rendering path and reduce blocking resources');
    }

    if (currentMetrics.largestContentfulPaint > threshold.largestContentfulPaint) {
      newOptimizations.push('Optimize images and implement resource prioritization');
    }

    if (currentMetrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) {
      newOptimizations.push('Fix layout shifts by setting explicit dimensions for images and ads');
    }

    if (currentMetrics.networkRequests > 50) {
      newOptimizations.push('Reduce network requests through bundling and consolidation');
    }

    if (currentMetrics.bundleSize > 5) {
      newOptimizations.push('Implement tree shaking and remove unused dependencies');
    }

    if (currentMetrics.memoryUsage && currentMetrics.memoryUsage > 100) {
      newOptimizations.push('Optimize memory usage and implement proper cleanup');
    }

    setOptimizations(newOptimizations);
  }, [autoOptimize, threshold]);

  // Auto-optimization functions
  const performOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Implement image lazy loading
      const images = document.querySelectorAll('img[data-src]');
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }

      // Preload critical resources
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });

      // Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('crossorigin', 'anonymous');
      });

      // Add resource hints
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      setOptimizations(prev => [...prev, 'Auto-optimizations applied successfully']);
    } catch (error) {
      console.error('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, []);

  // Performance monitoring setup
  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Continuous monitoring
    const interval = setInterval(measurePerformance, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, [enabled, measurePerformance]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;

    // Deduct points for poor performance
    if (metrics.loadTime > threshold.loadTime) score -= 20;
    if (metrics.firstContentfulPaint > threshold.firstContentfulPaint) score -= 15;
    if (metrics.largestContentfulPaint > threshold.largestContentfulPaint) score -= 15;
    if (metrics.cumulativeLayoutShift > threshold.cumulativeLayoutShift) score -= 10;
    if (metrics.networkRequests > 50) score -= 10;
    if (metrics.bundleSize > 5) score -= 10;

    return Math.max(0, score);
  }, [metrics, threshold]);

  // Performance status
  const getPerformanceStatus = useCallback(() => {
    if (performanceScore >= 90) return { status: 'Excellent', color: 'text-green-400', icon: CheckCircle };
    if (performanceScore >= 70) return { status: 'Good', color: 'text-yellow-400', icon: TrendingUp };
    if (performanceScore >= 50) return { status: 'Fair', color: 'text-orange-400', icon: AlertTriangle };
    return { status: 'Poor', color: 'text-red-400', icon: AlertTriangle };
  }, [performanceScore]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-4 right-4 z-50 w-96 max-w-[90vw] bg-gradient-to-br from-zion-slate-darker to-zion-blue-dark border border-zion-purple/30 rounded-2xl shadow-2xl backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
              <div className="flex items-center space-x-3">
                <Gauge className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-white font-semibold">Performance Monitor</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {/* Performance Score */}
              {metrics && (
                <div className="text-center p-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-xl border border-zion-purple/20">
                  <div className="text-3xl font-bold text-white mb-2">{performanceScore}</div>
                  <div className="text-zion-slate-light text-sm">Performance Score</div>
                  <div className={`flex items-center justify-center space-x-2 mt-2 ${getPerformanceStatus().color}`}>
                    <getPerformanceStatus().icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{getPerformanceStatus().status}</span>
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              {metrics && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zion-slate-dark/50 rounded-lg p-3 border border-zion-purple/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zion-slate-light">Load Time</span>
                    </div>
                    <div className="text-white font-semibold">{(metrics.loadTime / 1000).toFixed(2)}s</div>
                  </div>

                  <div className="bg-zion-slate-dark/50 rounded-lg p-3 border border-zion-purple/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zion-slate-light">FCP</span>
                    </div>
                    <div className="text-white font-semibold">{(metrics.firstContentfulPaint / 1000).toFixed(2)}s</div>
                  </div>

                  <div className="bg-zion-slate-dark/50 rounded-lg p-3 border border-zion-purple/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zion-slate-light">LCP</span>
                    </div>
                    <div className="text-white font-semibold">{(metrics.largestContentfulPaint / 1000).toFixed(2)}s</div>
                  </div>

                  <div className="bg-zion-slate-dark/50 rounded-lg p-3 border border-zion-purple/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Network className="w-4 h-4 text-zion-cyan" />
                      <span className="text-xs text-zion-slate-light">Requests</span>
                    </div>
                    <div className="text-white font-semibold">{metrics.networkRequests}</div>
                  </div>
                </div>
              )}

              {/* Optimizations */}
              {optimizations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Optimization Suggestions</h4>
                  <div className="space-y-2">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="flex items-start space-x-2 p-2 bg-zion-purple/10 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-xs">{optimization}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={performOptimizations}
                  disabled={isOptimizing}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 disabled:opacity-50"
                >
                  {isOptimizing ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  <span>{isOptimizing ? 'Optimizing...' : 'Auto-Optimize'}</span>
                </button>

                <button
                  onClick={measurePerformance}
                  className="px-3 py-2 bg-zion-slate-dark text-zion-cyan text-sm font-medium rounded-lg hover:bg-zion-purple/20 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
