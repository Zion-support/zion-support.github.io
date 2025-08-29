import React, { useEffect, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enablePerformanceMonitoring?: boolean;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer({ 
  children, 
  enableLazyLoading = true, 
  enableImageOptimization = true,
  enablePerformanceMonitoring = true 
}: PerformanceOptimizerProps) {
  
  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMonitoring || !('PerformanceObserver' in window)) return;

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'performance', {
              event_category: 'web_vitals',
              event_label: 'FCP',
              value: Math.round(entry.startTime)
            });
          }
        }
      });
    });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
        if (window.gtag) {
          window.gtag('event', 'performance', {
            event_category: 'web_vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      }
    });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
        if (window.gtag) {
          window.gtag('event', 'performance', {
            event_category: 'web_vitals',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime)
          });
        }
      });
    });

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      if (window.gtag) {
        window.gtag('event', 'performance', {
          event_category: 'web_vitals',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000)
        });
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enablePerformanceMonitoring]);

  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach((img) => {
        imageObserver.observe(img);
      });
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, [enableImageOptimization]);

  // Resource hints optimization
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-ai-solutions.jpg',
        '/images/zion-tech-group-logo.png'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff2') ? 'font' : 'image';
        link.crossOrigin = resource.includes('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, [enablePerformanceMonitoring]);

  // Memory management
  useEffect(() => {
    if (!enablePerformanceMonitoring) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, reduce memory usage
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    };

    const handleBeforeUnload = () => {
      // Clean up before page unload
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enablePerformanceMonitoring]);

  // Lazy loading wrapper
  const LazyWrapper = useMemo(() => {
    if (!enableLazyLoading) {
      return ({ children }: { children: React.ReactNode }) => <>{children}</>;
    }

    return ({ children }: { children: React.ReactNode }) => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '50px'
      });

      return (
        <div ref={ref}>
          {inView ? children : (
            <div className="min-h-[200px] bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg" />
          )}
        </div>
      );
    };
  }, [enableLazyLoading]);

  return (
    <PerformanceOptimizerContext.Provider value={{ enableLazyLoading, enableImageOptimization, enablePerformanceMonitoring }}>
      <LazyWrapper>
        {children}
      </LazyWrapper>
    </PerformanceOptimizerContext.Provider>
  );
}

// Context for performance settings
const PerformanceOptimizerContext = React.createContext({
  enableLazyLoading: true,
  enableImageOptimization: true,
  enablePerformanceMonitoring: true
});

export const usePerformanceOptimizer = () => React.useContext(PerformanceOptimizerContext);

// HOC for lazy loading components
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function LazyLoadedComponent(props: T) {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: '100px'
    });

    return (
      <div ref={ref}>
        {inView ? (
          <Component {...props} />
        ) : (
          fallback || (
            <div className="min-h-[300px] bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-sm">Loading...</p>
              </div>
            </div>
          )
        )}
      </div>
    );
  };
}

// Image optimization component
export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  [key: string]: any;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg" />
      )}
      <img
        src={priority ? src : undefined}
        data-src={priority ? undefined : src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </div>
  );
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const newMetrics: Partial<PerformanceMetrics> = {};

      entries.forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          newMetrics.fcp = entry.startTime;
        } else if (entry.entryType === 'largest-contentful-paint') {
          newMetrics.lcp = entry.startTime;
        } else if (entry.entryType === 'first-input') {
          newMetrics.fid = (entry as any).processingStart - entry.startTime;
        } else if (entry.entryType === 'layout-shift') {
          newMetrics.cls = (entry as any).value;
        }
      });

      if (Object.keys(newMetrics).length > 0) {
        setMetrics(prev => ({ ...prev, ...newMetrics }));
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    return () => observer.disconnect();
  }, []);

  return metrics;
}
