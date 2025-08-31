import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enabled = true, 
  showMetrics = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
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
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
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
        if (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png')) {
          const baseUrl = src.split('.')[0];
          const extension = src.split('.').pop();
          img.srcset = `${baseUrl}-300w.${extension} 300w, ${baseUrl}-600w.${extension} 600w, ${baseUrl}-900w.${extension} 900w`;
          img.sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px';
        }
      }
    });
  }, []);

  // Resource hints optimization
  const addResourceHints = useCallback(() => {
    const head = document.head;
    
    // DNS prefetch for external domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//fonts.googleapis.com';
    head.appendChild(dnsPrefetch);

    // Preconnect for critical resources
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = '//fonts.googleapis.com';
    head.appendChild(preconnect);

    // Preload critical CSS
    const preloadCSS = document.createElement('link');
    preloadCSS.rel = 'preload';
    preloadCSS.href = '/src/index.css';
    preloadCSS.as = 'style';
    head.appendChild(preloadCSS);
  }, []);

  // Bundle optimization
  const optimizeBundles = useCallback(() => {
    // Dynamic imports for non-critical components
    const loadNonCriticalComponents = () => {
      import('./EnhancedAnalyticsDashboard').catch(() => {});
      import('./AIContentOptimizer').catch(() => {});
    };

    // Load non-critical components after page load
    if (document.readyState === 'complete') {
      loadNonCriticalComponents();
    } else {
      window.addEventListener('load', loadNonCriticalComponents);
    }
  }, []);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners
    const cleanup = () => {
      // Remove unused event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Clean up on page unload
    window.addEventListener('beforeunload', cleanup);
  }, []);

  // Main optimization function
  const runOptimizations = useCallback(async () => {
    if (!enabled) return;
    
    setIsOptimizing(true);
    
    try {
      // Run optimizations in parallel
      await Promise.all([
        optimizeImages(),
        addResourceHints(),
        optimizeBundles(),
        optimizeMemory()
      ]);
      
      // Measure performance after optimizations
      measurePerformance();
      
    } catch (error) {
      console.warn('Performance optimization failed:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enabled, optimizeImages, addResourceHints, optimizeBundles, optimizeMemory, measurePerformance]);

  useEffect(() => {
    if (enabled) {
      runOptimizations();
    }
  }, [enabled, runOptimizations]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance monitoring overlay */}
      {showMetrics && metrics && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm"
        >
          <h3 className="font-bold mb-2">Performance Metrics</h3>
          <div className="space-y-1">
            <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
            <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
            <div>FID: {metrics.fid?.toFixed(2)}ms</div>
            <div>CLS: {metrics.cls?.toFixed(3)}</div>
            <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
          </div>
        </motion.div>
      )}

      {/* Optimization status indicator */}
      {isOptimizing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-lg z-50"
        >
          Optimizing performance...
        </motion.div>
      )}
    </>
  );
};
