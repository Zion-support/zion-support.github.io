import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Clock, Database, Wifi, Cpu, Memory } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  networkLatency: number;
  cpuUsage: number;
  fps: number;
}

interface PerformanceOptimizerProps {
  showMetrics?: boolean;
  enableOptimizations?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  enableOptimizations = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    cpuUsage: 0,
    fps: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;

      // Memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100 : 0;

      // FPS calculation
      let frameCount = 0;
      let lastTime = performance.now();
      
      const countFPS = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          setMetrics(prev => ({ ...prev, fps }));
          frameCount = 0;
          lastTime = currentTime;
        }
        
        requestAnimationFrame(countFPS);
      };

      if (enableOptimizations) {
        requestAnimationFrame(countFPS);
      }

      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage
      }));
    }
  }, [enableOptimizations]);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    const newOptimizations: string[] = [];

    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });

      newOptimizations.push('Lazy image loading enabled');
    }

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      document.head.appendChild(link);
    });

    newOptimizations.push('Critical resources preloaded');

    // Service worker registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        newOptimizations.push('Service worker registered');
      }).catch(() => {
        // Service worker registration failed
      });
    }

    // Resource hints
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });

    newOptimizations.push('Resource hints added');

    setOptimizations(newOptimizations);
  }, []);

  useEffect(() => {
    if (enableOptimizations) {
      applyOptimizations();
    }

    // Measure initial performance
    const timer = setTimeout(measurePerformance, 1000);

    // Continuous monitoring
    const interval = setInterval(measurePerformance, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [enableOptimizations, applyOptimizations, measurePerformance]);

  // Performance recommendations
  const getRecommendations = () => {
    const recommendations: string[] = [];

    if (metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing images and reducing bundle size');
    }

    if (metrics.memoryUsage > 80) {
      recommendations.push('Memory usage is high - check for memory leaks');
    }

    if (metrics.fps < 30) {
      recommendations.push('Low FPS detected - optimize animations and rendering');
    }

    return recommendations;
  };

  if (!showMetrics) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm z-50"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
              <Zap className="w-4 h-4 mr-2 text-blue-500" />
              Performance Monitor
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-400">Load Time</span>
              <span className="font-mono text-gray-900 dark:text-white">
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-400">Memory</span>
              <span className="font-mono text-gray-900 dark:text-white">
                {metrics.memoryUsage.toFixed(1)}%
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-400">FPS</span>
              <span className="font-mono text-gray-900 dark:text-white">
                {metrics.fps}
              </span>
            </div>

            {optimizations.length > 0 && (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Optimizations applied:
                </p>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  {optimizations.map((opt, index) => (
                    <li key={index} className="flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {getRecommendations().length > 0 && (
              <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  Recommendations:
                </p>
                <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                  {getRecommendations().map((rec, index) => (
                    <li key={index} className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={() => measurePerformance()}
            className="w-full mt-3 px-3 py-2 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            Refresh Metrics
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
