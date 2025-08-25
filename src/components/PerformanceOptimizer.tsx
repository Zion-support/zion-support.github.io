import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    pageLoadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0
  });

  useEffect(() => {
    // Show loading state on route change
    setIsLoading(true);
    
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
      });
    }, observerOptions);

    // Observe all lazy images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    // Cleanup observer
    return () => {
      imageObserver.disconnect();
    };
  }, []);

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
    <img
      data-src={src}
      alt={alt}
      className={`lazy ${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        filter: isLoaded ? 'none' : 'blur(5px)'
      }}
    />
  );
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    if ('performance' in window) {
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
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          const fid = fidEntry.processingStart - fidEntry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          cls += layoutShiftEntry.value;
        }
        setMetrics(prev => ({ ...prev, cls }));
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

  return metrics;
};

export default PerformanceOptimizer;
