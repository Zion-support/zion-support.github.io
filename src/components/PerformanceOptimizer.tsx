import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface BundleAnalysis {
  totalSize: number;
  chunkCount: number;
  largestChunks: Array<{ name: string; size: number }>;
  optimizationScore: number;
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
  const [bundleAnalysis, setBundleAnalysis] = useState<BundleAnalysis | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<Array<{ timestamp: number; action: string; impact: string }>>([]);

  // Performance monitoring
  const measurePerformance = useCallback(async () => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => prev ? { ...prev, lcp: entry.startTime } : null);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => prev ? { ...prev, fcp: fcpEntry.startTime } : null);
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => prev ? { ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } : null);
      }

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Bundle analysis
  const analyzeBundle = useCallback(async () => {
    if (!enabled) return;

    try {
      const chunks = performance.getEntriesByType('resource');
      const jsChunks = chunks.filter(chunk => chunk.name.endsWith('.js'));
      
      const totalSize = jsChunks.reduce((sum, chunk) => sum + (chunk as any).transferSize || 0, 0);
      const largestChunks = jsChunks
        .map(chunk => ({ name: chunk.name.split('/').pop() || 'unknown', size: (chunk as any).transferSize || 0 }))
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);

      const optimizationScore = Math.max(0, 100 - (totalSize / 1024 / 1024) * 10); // Penalize large bundles

      setBundleAnalysis({
        totalSize,
        chunkCount: jsChunks.length,
        largestChunks,
        optimizationScore: Math.round(optimizationScore)
      });
    } catch (error) {
      console.warn('Bundle analysis failed:', error);
    }
  }, [enabled]);

  // Auto-optimization
  const performOptimization = useCallback(async () => {
    if (!enabled || !autoOptimize) return;

    setIsOptimizing(true);
    const startTime = Date.now();

    try {
      // Preload critical resources
      const criticalPaths = ['/css/index.css', '/js/chunk-BB6i6xP_.js'];
      criticalPaths.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = path;
        link.as = path.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Add intersection observer for better lazy loading
      if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('lazy-loaded');
              observer.unobserve(element);
            }
          });
        });

        lazyElements.forEach(el => observer.observe(el));
      }

      const endTime = Date.now();
      const impact = `Optimization completed in ${endTime - startTime}ms`;
      
      setOptimizationHistory(prev => [...prev, {
        timestamp: Date.now(),
        action: 'Auto-optimization',
        impact
      }]);

    } catch (error) {
      console.warn('Auto-optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, autoOptimize]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    try {
      // Clear unused event listeners
      const cleanup = () => {
        // This is a placeholder for actual cleanup logic
        // In a real implementation, you'd track and remove unused listeners
      };

      // Schedule garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }

      // Clear console in production
      if (process.env.NODE_ENV === 'production') {
        console.clear();
      }

    } catch (error) {
      console.warn('Memory optimization failed:', error);
    }
  }, [enabled]);

  // Effects
  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    analyzeBundle();

    const interval = setInterval(() => {
      measurePerformance();
      analyzeBundle();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [enabled, measurePerformance, analyzeBundle]);

  useEffect(() => {
    if (!enabled || !autoOptimize) return;

    const timer = setTimeout(performOptimization, 2000); // Optimize after 2 seconds
    return () => clearTimeout(timer);
  }, [enabled, autoOptimize, performOptimization]);

  // Memory optimization on visibility change
  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        optimizeMemory();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [enabled, optimizeMemory]);

  if (!enabled || !showMetrics) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed bottom-4 right-4 bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-4 shadow-lg backdrop-blur-sm z-50 max-w-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Performance Monitor</h3>
          <div className="flex items-center space-x-2">
            {isOptimizing && (
              <div className="w-3 h-3 bg-zion-cyan rounded-full animate-pulse" />
            )}
            <button
              onClick={performOptimization}
              className="text-xs text-zion-cyan hover:text-white transition-colors"
            >
              Optimize
            </button>
          </div>
        </div>

        {metrics && (
          <div className="space-y-2 mb-3">
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">FCP:</span> {metrics.fcp?.toFixed(0)}ms
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">LCP:</span> {metrics.lcp?.toFixed(0)}ms
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">TTFB:</span> {metrics.ttfb?.toFixed(0)}ms
            </div>
          </div>
        )}

        {bundleAnalysis && (
          <div className="space-y-2 mb-3">
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Bundle Score:</span> {bundleAnalysis.optimizationScore}/100
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Chunks:</span> {bundleAnalysis.chunkCount}
            </div>
            <div className="text-xs text-zion-slate-light">
              <span className="text-zion-cyan">Total Size:</span> {(bundleAnalysis.totalSize / 1024 / 1024).toFixed(2)}MB
            </div>
          </div>
        )}

        {optimizationHistory.length > 0 && (
          <div className="text-xs text-zion-slate-light">
            <div className="text-zion-cyan mb-1">Recent Optimizations:</div>
            {optimizationHistory.slice(-2).map((item, index) => (
              <div key={index} className="text-xs opacity-75">
                {item.action}: {item.impact}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
