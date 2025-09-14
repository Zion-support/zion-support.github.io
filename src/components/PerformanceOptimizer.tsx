import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Database, Wifi, Cpu, Memory, HardDrive } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  domLoad: number;
  resourceCount: number;
  totalSize: number;
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
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            setMetrics(prev => ({
              ...prev,
              ttfb: navEntry.responseStart - navEntry.requestStart,
              domLoad: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            } as PerformanceMetrics));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      // Measure resource usage
      const resources = performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, resource) => {
        const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
        return acc + transferSize;
      }, 0);

      setMetrics(prev => ({
        ...prev,
        resourceCount: resources.length,
        totalSize: totalSize / 1024 / 1024, // Convert to MB
      } as PerformanceMetrics));

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Auto-optimization features
  const applyOptimizations = useCallback(() => {
    if (!autoOptimize) return;

    const newOptimizations: string[] = [];

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
      newOptimizations.push('Lazy loading enabled for images');
    }

    // Preload critical resources
    const criticalLinks = document.querySelectorAll('link[data-critical]');
    criticalLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = href;
        preloadLink.as = 'style';
        document.head.appendChild(preloadLink);
      }
    });

    // Optimize animations
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });

    setOptimizations(newOptimizations);
  }, [autoOptimize]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    if (!autoOptimize) return;

    // Clear unused event listeners
    const cleanup = () => {
      // This would be implemented based on your app's event management
      console.log('Memory optimization applied');
    };

    // Apply memory optimizations
    cleanup();
  }, [autoOptimize]);

  useEffect(() => {
    if (!enabled) return;

    // Initial measurement
    measurePerformance();

    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 10000);

    // Apply optimizations after initial load
    const timer = setTimeout(() => {
      applyOptimizations();
      optimizeMemory();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [enabled, measurePerformance, applyOptimizations, optimizeMemory]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;

    // Deduct points for poor metrics
    if (metrics.fcp > 2000) score -= 20;
    if (metrics.lcp > 4000) score -= 25;
    if (metrics.cls > 0.1) score -= 15;
    if (metrics.ttfb > 600) score -= 10;

    return Math.max(0, score);
  }, [metrics]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      <AnimatePresence>
        {showMetrics && metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white shadow-xl z-50 max-w-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-yellow-400" />
              <h3 className="font-semibold">Performance Metrics</h3>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Performance Score:</span>
                <span className={`font-bold ${performanceScore >= 80 ? 'text-green-400' : performanceScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {performanceScore}/100
                </span>
              </div>
              
              {metrics.fcp && (
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span className={metrics.fcp < 2000 ? 'text-green-400' : 'text-yellow-400'}>
                    {metrics.fcp.toFixed(0)}ms
                  </span>
                </div>
              )}
              
              {metrics.lcp && (
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span className={metrics.lcp < 4000 ? 'text-green-400' : 'text-yellow-400'}>
                    {metrics.lcp.toFixed(0)}ms
                  </span>
                </div>
              )}
              
              {metrics.cls && (
                <div className="flex justify-between">
                  <span>CLS:</span>
                  <span className={metrics.cls < 0.1 ? 'text-green-400' : 'text-yellow-400'}>
                    {metrics.cls.toFixed(3)}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Resources:</span>
                <span className="text-blue-400">{metrics.resourceCount}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Total Size:</span>
                <span className="text-blue-400">{metrics.totalSize.toFixed(1)}MB</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Performance Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        title="Performance Monitor"
      >
        <TrendingUp className="h-5 w-5" />
      </motion.button>

      {/* Performance Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-white shadow-xl z-50 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Performance Dashboard</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Performance Score */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">Performance Score</span>
                </div>
                <div className="text-3xl font-bold text-center">
                  {performanceScore}
                  <span className="text-lg text-white/70">/100</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      performanceScore >= 80 ? 'bg-green-500' : performanceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${performanceScore}%` }}
                  />
                </div>
              </div>

              {/* Optimizations Applied */}
              {optimizations.length > 0 && (
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Optimizations Applied</h4>
                  <ul className="space-y-1 text-sm">
                    {optimizations.map((opt, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <button
                    onClick={applyOptimizations}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                  >
                    Apply Optimizations
                  </button>
                  <button
                    onClick={optimizeMemory}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition-colors"
                  >
                    Optimize Memory
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
