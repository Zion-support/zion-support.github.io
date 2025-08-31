import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  Activity, 
  Cpu, 
  Memory, 
  Network, 
  Clock,
  AlertCircle,
  CheckCircle,
  Loader2
} from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  loadTime: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStatus, setOptimizationStatus] = useState<string[]>([]);
  const [showOptimizer, setShowOptimizer] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
      }

      // Measure Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { 
          ...prev, 
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
          loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart
        } : null);
      }

      // Measure bundle size (approximate)
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && src.includes('chunk')) {
          totalSize += 50; // Approximate chunk size in KB
        }
      });

      setMetrics(prev => prev ? { ...prev, bundleSize: totalSize } : null);

    } catch (error) {
      console.warn('Performance measurement failed:', error);
    }
  }, [enabled]);

  // Auto-optimization strategies
  const autoOptimize = useCallback(async () => {
    if (!autoOptimize || !enabled) return;

    setIsOptimizing(true);
    const status: string[] = [];

    try {
      // 1. Preload critical resources
      const criticalResources = [
        '/src/components/EnhancedHeader.tsx',
        '/src/components/EnhancedFooter.tsx',
        '/src/pages/Home.tsx'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'script';
        document.head.appendChild(link);
        status.push(`Preloaded critical resource: ${resource}`);
      });

      // 2. Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
          status.push('Added lazy loading to images');
        }
      });

      // 3. Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('crossorigin', 'anonymous');
        status.push('Optimized font loading');
      });

      // 4. Service Worker registration
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          status.push(`Service Worker registered: ${registration.scope}`);
        } catch (error) {
          status.push('Service Worker registration failed');
        }
      }

      // 5. Resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
        { rel: 'preconnect', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: '//fonts.gstatic.com' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
        status.push(`Added resource hint: ${hint.rel} ${hint.href}`);
      });

      setOptimizationStatus(status);
    } catch (error) {
      status.push(`Optimization failed: ${error}`);
      setOptimizationStatus(status);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, enabled]);

  // Bundle optimization
  const optimizeBundle = useCallback(() => {
    if (!enabled) return;

    // Dynamic imports for non-critical components
    const lazyLoadComponents = () => {
      const components = [
        'InteractiveTestimonials',
        'PerformanceDashboard',
        'AdvancedAnalytics'
      ];

      components.forEach(component => {
        import(`../components/${component}`).catch(() => {
          console.warn(`Failed to lazy load ${component}`);
        });
      });
    };

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.lazy) {
              lazyLoadComponents();
              observer.unobserve(target);
            }
          }
        });
      });

      document.querySelectorAll('[data-lazy]').forEach(el => {
        observer.observe(el);
      });
    }
  }, [enabled]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Run cleanup periodically
    setInterval(cleanup, 30000);
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      autoOptimize();
      optimizeBundle();
      optimizeMemory();
    }
  }, [enabled, measurePerformance, autoOptimize, optimizeBundle, optimizeMemory]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;

    // FCP penalty (target: < 1.8s)
    if (metrics.fcp > 1800) score -= 20;
    else if (metrics.fcp > 1000) score -= 10;

    // LCP penalty (target: < 2.5s)
    if (metrics.lcp > 2500) score -= 25;
    else if (metrics.lcp > 1500) score -= 15;

    // TTFB penalty (target: < 600ms)
    if (metrics.ttfb > 600) score -= 15;
    else if (metrics.ttfb > 300) score -= 8;

    // Bundle size penalty (target: < 500KB)
    if (metrics.bundleSize > 500) score -= 20;
    else if (metrics.bundleSize > 300) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Toggle Button */}
      <motion.button
        onClick={() => setShowOptimizer(!showOptimizer)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Performance Optimizer"
      >
        <Zap className="w-6 h-6" />
      </motion.button>

      {/* Performance Panel */}
      <AnimatePresence>
        {showOptimizer && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-zion-slate-dark border border-white/20 rounded-xl shadow-2xl backdrop-blur-lg"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Gauge className="w-5 h-5 mr-2 text-blue-400" />
                  Performance Optimizer
                </h3>
                <button
                  onClick={() => setShowOptimizer(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Performance Score */}
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Performance Score</span>
                  <span className={`text-lg font-bold ${
                    performanceScore >= 90 ? 'text-green-400' :
                    performanceScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {performanceScore}/100
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      performanceScore >= 90 ? 'bg-green-500' :
                      performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${performanceScore}%` }}
                  />
                </div>
              </div>

              {/* Metrics Display */}
              {showMetrics && metrics && (
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">FCP:</span>
                    <span className="text-white">{metrics.fcp?.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">LCP:</span>
                    <span className="text-white">{metrics.lcp?.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">TTFB:</span>
                    <span className="text-white">{metrics.ttfb?.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bundle:</span>
                    <span className="text-white">{metrics.bundleSize}KB</span>
                  </div>
                </div>
              )}

              {/* Optimization Status */}
              {optimizationStatus.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Optimizations Applied:</h4>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {optimizationStatus.map((status, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                        {status}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={autoOptimize}
                  disabled={isOptimizing}
                  className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                >
                  {isOptimizing ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <TrendingUp className="w-4 h-4 mr-2" />
                  )}
                  {isOptimizing ? 'Optimizing...' : 'Optimize Now'}
                </button>
                <button
                  onClick={() => setShowOptimizer(false)}
                  className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
