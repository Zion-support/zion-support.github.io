import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceOptimizerProps { children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
    }

// Lazy loading wrapper component
export const LazyLoadWrapper: React.FC = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, rootMargin });
  
  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5     }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="min-h-[200px] bg-gradient-to-r from-zion-slate-dark to-zion-slate animate-pulse rounded-lg" />
      )}
    </div>
  );
};

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
    }

export const OptimizedImage: React.FC = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  
  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zion-slate-dark text-zion-cyan ${className}`}>
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark to-zion-slate animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </div>
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({ fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint']     });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint']     });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
      });
      fidObserver.observe({ entryTypes: ['first-input']     });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as ).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift']     });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return metrics;
};

// Main performance optimizer component
export const PerformanceOptimizer: React.FC = ({ children }) => {
  const metrics = usePerformanceMonitor();
  const [showMetrics, setShowMetrics] = useState(false);

  // Performance optimization effects
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/zion-tech-group-logo.png'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('font') ? 'font' : 'image';
      link.crossOrigin = resource.includes('font') ? 'anonymous' : '';
      document.head.appendChild(link);
    });

    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, []);

  return (
    <>
      {children}
      
      {/* Performance metrics display (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setShowMetrics(!showMetrics)}
            className="bg-zion-cyan text-zion-slate-dark px-3 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan/80 transition-colors">
            {showMetrics ? 'Hide' : 'Show'} Performance
          </button>
          
          {showMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full right-0 mb-2 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg p-4 text-white text-sm min-w-[300px]">
              <h4 className="font-semibold mb-2 text-zion-cyan">Performance Metrics</h4>
              <div className="space-y-1">
                <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
                <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
                <div>FID: {metrics.fid.toFixed(2)}ms</div>
                <div>CLS: {metrics.cls.toFixed(3)}</div>
                <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};

// Export individual components
export { LazyLoadWrapper, OptimizedImage, usePerformanceMonitor };
