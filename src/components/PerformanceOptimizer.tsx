<<<<<<< HEAD
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  opacity?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  duration = 0.6,
  y = 20,
  scale = 1,
  opacity = 1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, rootMargin });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: scale === 1 ? 1 : 0.95 }}
      animate={isInView ? { opacity, y: 0, scale: 1 } : { opacity: 0, y, scale: scale === 1 ? 1 : 0.95 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}> = ({ src, alt, className = '', placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2YzZjRmNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-60'}`}
    />
  );
};

// Intersection observer hook for performance
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
};

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
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

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
      <div>FID: {metrics.fid.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls.toFixed(3)}</div>
    </div>
  );
};

// Virtual scrolling component for large lists
export const VirtualList: React.FC<{
  items: any[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
}> = ({ items, itemHeight, containerHeight, renderItem }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleItemCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItemCount + 1, items.length);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map((item, index) =>
            renderItem(item, startIndex + index)
          )}
        </div>
      </div>
    </div>
  );
};

// Debounced input hook for search optimization
export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Memoized component wrapper for expensive computations
export const MemoizedComponent = React.memo<{
  children: React.ReactNode;
  className?: string;
}>(({ children, className = '' }) => (
  <div className={className}>{children}</div>
));

MemoizedComponent.displayName = 'MemoizedComponent';
=======
import React, { useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
export const PerformanceOptimizer = ({ children }) => {
    const location = useLocation();
    // Preload critical resources
    useEffect(() => {
        const preloadCriticalResources = () => {
            // Preload critical CSS
            const criticalCSS = document.createElement('link');
            criticalCSS.rel = 'preload';
            criticalCSS.as = 'style';
            criticalCSS.href = '/src/index.css';
            document.head.appendChild(criticalCSS);
            // Preload critical fonts
            const criticalFonts = document.createElement('link');
            criticalFonts.rel = 'preload';
            criticalFonts.as = 'font';
            criticalFonts.href = '/fonts/inter-var.woff2';
            criticalFonts.crossOrigin = 'anonymous';
            document.head.appendChild(criticalFonts);
        };
        preloadCriticalResources();
    }, []);
    // Optimize images on route change
    useEffect(() => {
        const optimizeImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                // Add loading="lazy" to images below the fold
                if (img.getBoundingClientRect().top > window.innerHeight) {
                    img.loading = 'lazy';
                }
                // Add decoding="async" for better performance
                img.decoding = 'async';
                // Add error handling
                img.onerror = () => {
                    img.style.display = 'none';
                };
            });
        };
        // Use requestIdleCallback for non-critical optimization
        if ('requestIdleCallback' in window) {
            requestIdleCallback(optimizeImages);
        }
        else {
            setTimeout(optimizeImages, 100);
        }
    }, [location.pathname]);
    // Memoize expensive computations
    const optimizedChildren = useMemo(() => children, [children]);
    // Optimize scroll performance
    const handleScroll = useCallback(() => {
        // Throttle scroll events for better performance
        if (!window.scrollTimeout) {
            window.scrollTimeout = setTimeout(() => {
                // Handle scroll-based optimizations here
                window.scrollTimeout = null;
            }, 16); // ~60fps
        }
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    // Service Worker registration for caching
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                console.log('SW registered: ', registration);
            })
                .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
        }
    }, []);
    // Intersection Observer for lazy loading
    useEffect(() => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        if (target.dataset.src) {
                            target.src = target.dataset.src;
                            target.removeAttribute('data-src');
                            observer.unobserve(target);
                        }
                    }
                });
            }, {
                rootMargin: '50px',
                threshold: 0.1,
            });
            // Observe all images with data-src
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach((img) => observer.observe(img));
            return () => observer.disconnect();
        }
    }, [location.pathname]);
    return <>{optimizedChildren}</>;
};
// Add global performance optimizations
if (typeof window !== 'undefined') {
    // Optimize long tasks
    if ('scheduler' in window && 'postTask' in window.scheduler) {
        window.scheduler.postTask(() => {
            // Run non-critical tasks during idle time
        }, { priority: 'background' });
    }
    // Optimize memory usage
    if ('memory' in performance) {
        const memoryThreshold = 50 * 1024 * 1024; // 50MB
        if (performance.memory.usedJSHeapSize > memoryThreshold) {
            // Trigger garbage collection if available
            if ('gc' in window) {
                window.gc();
            }
        }
    }
}
export default PerformanceOptimizer;
>>>>>>> cursor/website-audit-and-enhancement-1eed
