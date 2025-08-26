import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  preloadRoutes?: string[];
}

export function PerformanceOptimizer({ children, preloadRoutes = [] }: PerformanceOptimizerProps) {
  const location = useLocation();
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);
  const preloadCache = useRef<Set<string>>(new Set());

  // Performance monitoring
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor Core Web Vitals
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            setMetrics(prev => prev ? { ...prev, lcp } : { lcp, fcp: 0, fid: 0, cls: 0, ttfb: 0 });
          }
        }
      });

      observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay
      observerRef.current.observe({ entryTypes: ['first-input'] });

      // Monitor Layout Shifts
      observerRef.current.observe({ entryTypes: ['layout-shift'] });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Measure FCP and TTFB
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const fcp = navigation.domContentLoadedEventEnd - navigation.navigationStart;
          const ttfb = navigation.responseStart - navigation.requestStart;
          
          setMetrics(prev => prev ? { ...prev, fcp, ttfb } : { fcp, ttfb, lcp: 0, fid: 0, cls: 0 });
        }
      }
    };

    // Measure after a short delay to ensure DOM is ready
    const timer = setTimeout(measurePerformance, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Route preloading
  useEffect(() => {
    const preloadRoute = async (route: string) => {
      if (preloadCache.current.has(route)) return;
      
      try {
        // Preload critical routes
        if (route === '/services') {
          // Preload services page
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);
        }
        
        preloadCache.current.add(route);
      } catch (error) {
        console.warn('Failed to preload route:', route, error);
      }
    };

    // Preload routes based on current location
    preloadRoutes.forEach(route => {
      if (location.pathname !== route) {
        preloadRoute(route);
      }
    });
  }, [location.pathname, preloadRoutes]);

  // Resource hints
  useEffect(() => {
    // Add resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      // Preconnect to critical domains
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);
    };

    addResourceHints();
  }, []);

  // Performance reporting (in development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', metrics);
      
      // Log performance warnings
      if (metrics.lcp > 2500) {
        console.warn('LCP is too slow:', metrics.lcp, 'ms (should be < 2500ms)');
      }
      if (metrics.fid > 100) {
        console.warn('FID is too slow:', metrics.fid, 'ms (should be < 100ms)');
      }
      if (metrics.cls > 0.1) {
        console.warn('CLS is too high:', metrics.cls, ' (should be < 0.1)');
      }
    }
  }, [metrics]);

  return (
    <>
      {children}
      
      {/* Performance monitoring overlay (development only) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
          <div className="mb-2 font-bold">Performance</div>
          <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
          <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
          <div>FID: {metrics.fid.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        </div>
      )}
    </>
  );
}

// Hook for performance monitoring
export function usePerformanceMonitoring() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadTime, setLoadTime] = useState(0);
  const startTimeRef = useRef<number>(0);

  const startLoading = () => {
    setIsLoading(true);
    startTimeRef.current = performance.now();
  };

  const stopLoading = () => {
    setIsLoading(false);
    const endTime = performance.now();
    setLoadTime(endTime - startTimeRef.current);
  };

  const measureAsync = async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    startLoading();
    try {
      const result = await asyncFn();
      return result;
    } finally {
      stopLoading();
    }
  };

  return {
    isLoading,
    loadTime,
    startLoading,
    stopLoading,
    measureAsync
  };
}

// Component for lazy loading with loading states
export function LazyLoader<T extends Record<string, any>>(
  importFn: () => Promise<{ default: React.ComponentType<T> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = React.lazy(importFn);
  
  return function LazyWrapper(props: T) {
    return (
      <React.Suspense fallback={fallback || <div>Loading...</div>}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };
}

// Image optimization component
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  [key: string]: any;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      // Preload priority images
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  if (error) {
    return (
      <div 
        className={`bg-zion-slate-light/20 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-zion-slate-light text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setError(true)}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
