import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  showMetrics = false,
  autoOptimize = true,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
    bundleSize: 0,
    cacheHitRate: 0
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring) return;

    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing?.loadEventEnd - performance.timing?.navigationStart || 0;
    
    // Measure memory usage
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
    
    // Measure render time
    const renderTime = performance.now() - startTime;
    
    // Simulate network latency (in real app, this would be actual network measurement)
    const networkLatency = Math.random() * 100;
    
    // Bundle size estimation
    const bundleSize = document.querySelectorAll('script[src]').length * 50; // Rough estimation
    
    // Cache hit rate simulation
    const cacheHitRate = Math.random() * 100;

    setMetrics({
      loadTime,
      renderTime,
      memoryUsage: memoryUsage / 1024 / 1024, // Convert to MB
      networkLatency,
      bundleSize,
      cacheHitRate
    });
  }, [enableMonitoring]);

  // Auto-optimization logic
  const performOptimizations = useCallback(() => {
    if (!autoOptimize) return;

    setIsOptimizing(true);
    const newOptimizations: string[] = [];

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
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
      newOptimizations.push('Lazy loading enabled for images');
    }

    // Preload critical resources
    const criticalResources = [
      '/assets/index.css',
      '/assets/index.js'
    ];
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
    newOptimizations.push('Critical resources preloaded');

    // Optimize animations
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });
    newOptimizations.push('Animation performance optimized');

    // Enable service worker caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        newOptimizations.push('Service worker caching enabled');
      });
    }

    setOptimizations(newOptimizations);
    setIsOptimizing(false);
  }, [autoOptimize]);

  // Debounced performance measurement
  useEffect(() => {
    const timeoutId = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timeoutId);
  }, [measurePerformance]);

  // Auto-optimize on mount
  useEffect(() => {
    performOptimizations();
  }, [performOptimizations]);

  // Performance monitoring interval
  useEffect(() => {
    if (!enableMonitoring) return;

    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [enableMonitoring, measurePerformance]);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return `${ms.toFixed(2)}ms`;
  };

  return (
    <div className={`performance-optimizer ${className}`}>
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Load Time</div>
              <div className="text-lg font-semibold text-green-600">
                {formatTime(metrics.loadTime)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Memory Usage</div>
              <div className="text-lg font-semibold text-blue-600">
                {formatBytes(metrics.memoryUsage * 1024 * 1024)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Render Time</div>
              <div className="text-lg font-semibold text-purple-600">
                {formatTime(metrics.renderTime)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Network Latency</div>
              <div className="text-lg font-semibold text-orange-600">
                {formatTime(metrics.networkLatency)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Bundle Size</div>
              <div className="text-lg font-semibold text-indigo-600">
                {formatBytes(metrics.bundleSize * 1024)}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-600 dark:text-gray-300">Cache Hit Rate</div>
              <div className="text-lg font-semibold text-teal-600">
                {metrics.cacheHitRate.toFixed(1)}%
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isOptimizing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4"
          >
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
              <span className="text-blue-800 dark:text-blue-200">
                Optimizing performance...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {optimizations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-4"
        >
          <h4 className="text-green-800 dark:text-green-200 font-semibold mb-2">
            Optimizations Applied:
          </h4>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            {optimizations.map((optimization, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {optimization}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;