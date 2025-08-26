import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  bundleSize: number;
  lighthouseScore: number;
  optimizationSuggestions: string[];
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0
  });

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  showMetrics = false,
  onOptimize,
  autoOptimize = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    lighthouseScore: 0,
    optimizationSuggestions: []
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [optimizationHistory, setOptimizationHistory] = useState<PerformanceMetrics[]>([]);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    const startTime = performance.now();
    
    // Hide loading state after a short delay to prevent flickering
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Enhanced performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        
        setPerformanceMetrics({
          pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0
        });

        // Log performance metrics for monitoring
        console.log('Performance Metrics:', {
          pageLoadTime: `${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`,
          domContentLoaded: `${Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}ms`,
          firstContentfulPaint: fcp ? `${Math.round(fcp.startTime)}ms` : 'N/A'
        });
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Enhanced preloading strategies
    const preloadCriticalResources = () => {
      // Preload critical CSS with higher priority
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      criticalCSS.setAttribute('fetchpriority', 'high');
      document.head.appendChild(criticalCSS);

      // Preload critical fonts with display=swap for better performance
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap';
      fontPreload.crossOrigin = 'anonymous';
      fontPreload.setAttribute('fetchpriority', 'high');
      document.head.appendChild(fontPreload);

      // Preload critical images with proper sizing hints
      const imagePreload = document.createElement('link');
      imagePreload.rel = 'preload';
      imagePreload.as = 'image';
      imagePreload.href = '/images/zion-tech-group-og.jpg';
      imagePreload.setAttribute('fetchpriority', 'high');
      document.head.appendChild(imagePreload);

      // Preload next route for better navigation performance
      const nextRoutePreload = document.createElement('link');
      nextRoutePreload.rel = 'prefetch';
      nextRoutePreload.href = '/services';
      document.head.appendChild(nextRoutePreload);
    };
    
    setMetrics(newMetrics);
    setOptimizationHistory(prev => [...prev.slice(-4), newMetrics]);
    
    if (onOptimize) {
      onOptimize(newMetrics);
    }
    
    return newMetrics;
  }, [onOptimize]);

    // Preload resources when component mounts
    preloadCriticalResources();

    // Enhanced intersection observer for lazy loading with better thresholds
    const observerOptions = {
      root: null,
      rootMargin: '100px', // Increased margin for earlier loading
      threshold: [0, 0.1, 0.5, 1.0] // Multiple thresholds for better performance
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            // Add loading animation
            img.classList.add('loading');
            
            // Load image with error handling
            const newImg = new Image();
            newImg.onload = () => {
              img.src = img.dataset.src!;
              img.classList.remove('lazy', 'loading');
              img.classList.add('loaded');
            };
            newImg.onerror = () => {
              img.classList.remove('loading');
              img.classList.add('error');
              // Fallback to placeholder
              img.src = '/images/placeholder.jpg';
            };
            newImg.src = img.dataset.src;
            
            imageObserver.unobserve(img);
          }
        }
      }
    }
  }, [measurePerformance]);

  // Continuous monitoring
  useEffect(() => {
    if (!showMetrics) return;
    
    // Initial measurement
    measurePerformance();
    
    // Set up continuous monitoring
    const interval = setInterval(() => {
      measurePerformance();
    }, 30000); // Every 30 seconds
    
    // Auto-optimization interval
    const optimizationInterval = setInterval(() => {
      if (autoOptimize) {
        performAutoOptimization();
      }
    }, 60000); // Every minute
    
    return () => {
      clearInterval(interval);
      clearInterval(optimizationInterval);
    };
  }, [showMetrics, measurePerformance, autoOptimize]);

import React, { useEffect, useRef, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasIntersected(true);
          // Unobserve after first intersection for performance
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      // Simulate loading delay for better UX
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded]);

  if (!isVisible) {
    return (
      <div ref={ref} className={className}>
        {fallback}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={className}>
        {fallback}
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};

// Intersection Observer Hook Component
export const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Virtual Scrolling Component
export const VirtualScroll: React.FC<VirtualScrollProps> = ({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const visibleItemCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil(scrollTop / itemHeight) + visibleItemCount + overscan
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const visibleItems = items.slice(startIndex, endIndex + 1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

  useEffect(() => {
    // Enhanced service worker registration with better error handling
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('New version available');
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.error('Service Worker registration failed:', registrationError);
        });
    }

    // Enhanced resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        '//fonts.googleapis.com',
        '//fonts.gstatic.com',
        '//cdn.jsdelivr.net',
        '//unpkg.com'
      ];
      
      domains.forEach(domain => {
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = domain;
        document.head.appendChild(dnsPrefetch);
      });

      // Preconnect to critical domains
      const criticalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];
      
      criticalDomains.forEach(domain => {
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      });
    };

    addResourceHints();
  }, []);

  useEffect(() => {
    // Enhanced caching strategies
    const implementCaching = () => {
      // Cache API for better offline support
      if ('caches' in window) {
        caches.open('zion-tech-group-v1').then((cache) => {
          // Cache critical resources
          const criticalResources = [
            '/',
            '/src/index.css',
            '/images/zion-tech-group-og.jpg'
          ];
          
          cache.addAll(criticalResources).catch((error) => {
            console.log('Caching failed for some resources:', error);
          });
        });
      }
    };

    implementCaching();
  }, []);

  // Enhanced loading indicator
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
          </div>
          <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
          <p className="text-gray-400 text-sm mt-2">Optimizing your experience</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono backdrop-blur-sm">
          <div>FCP: {Math.round(performanceMetrics.firstContentfulPaint)}ms</div>
          <div>Load: {Math.round(performanceMetrics.pageLoadTime)}ms</div>
        </div>
      )}
    </>
  );
};

// Lazy loading wrapper for images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width, height }}
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
=======
// Lazy Image Component
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjI3M0E3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageSrc(placeholder);
    onError?.();
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
    />
  );
};

// Performance Monitor Component
export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
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
  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-semibold">Performance Metrics</div>
      <div>FCP: {metrics.fcp.toFixed(0)}ms</div>
      <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
      <div>FID: {metrics.fid.toFixed(0)}ms</div>
      <div>CLS: {metrics.cls.toFixed(3)}</div>
    </div>
  );
};

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const metrics = {
              // Time to First Byte
              ttfb: navigation.responseStart - navigation.requestStart,
              // DOM Content Loaded
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              // Load Complete
              loadComplete: navigation.loadEventEnd - navigation.fetchStart,
              // First Contentful Paint (estimated)
              fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
            };

            // Log performance metrics
            console.log('🚀 Performance Metrics:', metrics);

            // Send to analytics if available
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.loadComplete),
                custom_parameters: metrics
              });
            }
          }
        }, 0);
      });

      // Monitor Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              console.log('🎯 LCP:', lastEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(lastEntry.startTime)
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEntry & { processingStart: number };
              console.log('⚡ FID:', fidEntry.processingStart - fidEntry.startTime);
              if (window.gtag) {
                window.gtag('event', 'core_web_vital', {
                  event_category: 'Web Vitals',
                  event_label: 'FID',
                  value: Math.round(fidEntry.processingStart - fidEntry.startTime)
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('📐 CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'core_web_vital', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (error) {
          console.warn('Performance monitoring not supported:', error);
        }
      }
    }
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (typeof window !== 'undefined') {
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

        // Add error handling
        img.addEventListener('error', () => {
          img.style.display = 'none';
          console.warn('Image failed to load:', img.src);
        });

        // Add intersection observer for progressive loading
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
                }
              }
            });
          });

          imageObserver.observe(img);
        }
      });
    }
  }, []);

  // Resource hints optimization
  const addResourceHints = useCallback(() => {
    if (typeof window !== 'undefined' && !document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      // Add preconnect for external resources
      const preconnectLinks = [
        { href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { href: 'https://www.google-analytics.com' },
        { href: 'https://www.googletagmanager.com' }
      ];

      preconnectLinks.forEach(({ href, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossorigin) {
          link.setAttribute('crossorigin', crossorigin);
        }
        document.head.appendChild(link);
      });

      // Add DNS prefetch for social media
      const dnsPrefetchLinks = [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://github.com',
        'https://www.youtube.com'
      ];

      dnsPrefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Clean up event listeners on page unload
      window.addEventListener('beforeunload', () => {
        // Remove all event listeners to prevent memory leaks
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          const clone = element.cloneNode(true);
          element.parentNode?.replaceChild(clone, element);
        });
      });

      // Monitor memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const checkMemory = () => {
          const used = Math.round(memory.usedJSHeapSize / 1048576);
          const total = Math.round(memory.totalJSHeapSize / 1048576);
          const limit = Math.round(memory.jsHeapSizeLimit / 1048576);
          
          console.log(`💾 Memory Usage: ${used}MB / ${total}MB (Limit: ${limit}MB)`);
          
          if (used > total * 0.8) {
            console.warn('⚠️ High memory usage detected');
          }
        };

        // Check memory every 30 seconds
        setInterval(checkMemory, 30000);
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeImages();
    addResourceHints();
    optimizeMemory();
  }, [measurePerformance, optimizeImages, addResourceHints, optimizeMemory]);

  return <>{children}</>;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
=======
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enablePreloading?: boolean;
  enableLazyLoading?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enablePreloading = true,
  enableLazyLoading = true,
  enablePerformanceMonitoring = true
}) => {
  
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Lazy load images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;
    
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, [enableLazyLoading]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring) return;
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input-delay') {
              const fidEntry = entry as PerformanceEventTiming;
              console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              const clsEntry = entry as any;
              console.log('CLS:', clsEntry.value);
            }
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance monitoring not supported');
      }
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log('Page Load Time:', loadTime + 'ms');
    });
  }, [enablePerformanceMonitoring]);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {
    if (!enablePreloading) return;
    
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  useEffect(() => {
    preloadCriticalResources();
    setupLazyLoading();
    setupPerformanceMonitoring();
    addResourceHints();
  }, [preloadCriticalResources, setupLazyLoading, setupPerformanceMonitoring, addResourceHints]);

  // Service Worker registration for PWA capabilities
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null; // This component doesn't render anything
};
=======
// Resource Preloader
export const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/critical.css', as: 'style' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
    ];

    preloadLinks.forEach((link) => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value) linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
    });
  }, []);

  return null;
};

// Bundle Size Optimizer
export const BundleOptimizer: React.FC = () => {
  useEffect(() => {
    // Implement dynamic imports for non-critical components
    const loadNonCriticalComponents = async () => {
      // Load components after initial render
      setTimeout(async () => {
        try {
          // Dynamic imports for heavy components
          await Promise.all([
            import('../components/HeavyComponent1'),
            import('../components/HeavyComponent2'),
          ]);
        } catch (error) {
          console.warn('Failed to load non-critical components:', error);
        }
      }, 2000);
    };

    loadNonCriticalComponents();
  }, []);

  return null;
};
=======

// Main Performance Optimizer Component
interface PerformanceOptimizerProps {
  children: ReactNode;
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  showMetrics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableMonitoring = true,
  enableOptimizations = true,
  showMetrics = false
}) => {
  return (
    <div className="performance-optimizer">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;
