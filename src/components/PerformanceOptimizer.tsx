import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceOptimizerProps {
  enabled?: boolean;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enablePerformanceMonitoring?: boolean;
  enablePrefetching?: boolean;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer({
  enabled = true,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true,
  enablePrefetching = true
}: PerformanceOptimizerProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Initialize performance monitoring
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }

    // Initialize lazy loading
    if (enableLazyLoading) {
      initializeLazyLoading();
    }

    // Initialize image optimization
    if (enableImageOptimization) {
      optimizeImages();
    }

    // Initialize prefetching
    if (enablePrefetching) {
      initializePrefetching();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, enableLazyLoading, enableImageOptimization, enablePerformanceMonitoring, enablePrefetching]);

  // Performance monitoring
  const initializePerformanceMonitoring = () => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }
    }
  };

  // Lazy loading implementation
  const initializeLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('lazy-loaded');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => observerRef.current?.observe(img));
  };

  // Image optimization
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add srcset for responsive images if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        
        img.srcset = `
          ${baseName}-300${extension} 300w,
          ${baseName}-600${extension} 600w,
          ${baseName}-900${extension} 900w,
          ${src} 1200w
        `;
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    });
  };

  // Prefetching implementation
  const initializePrefetching = () => {
    // Prefetch critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Prefetch next page on hover
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    });
  };

  // Performance optimization actions
  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Compress images
    if (enableImageOptimization) {
      await compressImages();
    }

    // Minify CSS and JS
    await minifyAssets();

    // Optimize fonts
    await optimizeFonts();

    setIsOptimizing(false);
  };

  const compressImages = async () => {
    // This would typically involve a service worker or backend API
    console.log('Compressing images...');
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const minifyAssets = async () => {
    // This would typically involve a build process
    console.log('Minifying assets...');
    await new Promise(resolve => setTimeout(resolve, 500));
  };

  const optimizeFonts = async () => {
    // This would typically involve font loading optimization
    console.log('Optimizing fonts...');
    await new Promise(resolve => setTimeout(resolve, 500));
  };

  if (!enabled) return null;

  return (
    <>
      {/* Performance Metrics Display */}
      {enablePerformanceMonitoring && metrics && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Performance Metrics
          </h3>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span className={metrics.fcp < 1800 ? 'text-green-600' : 'text-red-600'}>
                {Math.round(metrics.fcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span className={metrics.lcp < 2500 ? 'text-green-600' : 'text-red-600'}>
                {Math.round(metrics.lcp)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FID:</span>
              <span className={metrics.fid < 100 ? 'text-green-600' : 'text-red-600'}>
                {Math.round(metrics.fid)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">CLS:</span>
              <span className={metrics.cls < 0.1 ? 'text-green-600' : 'text-red-600'}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
              <span className={metrics.ttfb < 600 ? 'text-green-600' : 'text-red-600'}>
                {Math.round(metrics.ttfb)}ms
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Performance Optimization Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 left-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={optimizePerformance}
        disabled={isOptimizing}
        aria-label="Optimize performance"
      >
        <AnimatePresence mode="wait">
          {isOptimizing ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
            />
          ) : (
            <motion.svg
              key="icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Performance Tips */}
      <AnimatePresence>
        {metrics && (metrics.fcp > 1800 || metrics.lcp > 2500 || metrics.cls > 0.1) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-4 right-4 z-50 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 max-w-sm"
          >
            <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              Performance Tips
            </h4>
            <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
              {metrics.fcp > 1800 && (
                <li>• First Contentful Paint is slow. Consider optimizing critical resources.</li>
              )}
              {metrics.lcp > 2500 && (
                <li>• Largest Contentful Paint is slow. Optimize images and fonts.</li>
              )}
              {metrics.cls > 0.1 && (
                <li>• Layout shifts detected. Fix element dimensions and avoid dynamic content.</li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Utility function to measure performance
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
  return end - start;
}

// Utility function to debounce function calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Utility function to throttle function calls
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
