import React, { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    if (componentRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observerRef.current.observe(componentRef.current);
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime } as PerformanceMetrics));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcpEntry = entries[entries.length - 1];
          if (lcpEntry) {
            setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime } as PerformanceMetrics));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fidEntry = entries[entries.length - 1];
          if (fidEntry) {
            setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime } as PerformanceMetrics));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue } as PerformanceMetrics));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart } as PerformanceMetrics));
        }

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/orbitron-v28-latin-700.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/rajdhani-v15-latin-500.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Performance optimization functions
  const optimizeImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      if (img instanceof HTMLImageElement && img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    });
  };

  const optimizeFonts = () => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  };

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Optimize scroll performance
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Add scroll optimization logic here
      const scrolledElements = document.querySelectorAll('[data-scroll-optimize]');
      scrolledElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.willChange = 'transform';
        }
      });
    }, 16);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clean up event listeners and references
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  // Performance score calculation
  const getPerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 100;
    
    if (metrics.fcp > 1800) score -= 20;
    if (metrics.lcp > 2500) score -= 25;
    if (metrics.fid > 100) score -= 20;
    if (metrics.cls > 0.1) score -= 25;
    if (metrics.ttfb > 600) score -= 10;
    
    return Math.max(0, score);
  };

  return (
    <div ref={componentRef} className="performance-optimizer">
      {/* Performance metrics display (development only) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
          <div className="font-bold mb-2">Performance Metrics</div>
          <div>FCP: {metrics.fcp?.toFixed(0)}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
          <div>FID: {metrics.fid?.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(0)}ms</div>
          <div className="mt-2 font-bold">
            Score: {getPerformanceScore(metrics)}/100
          </div>
        </div>
      )}
      
      {/* Hidden performance optimization elements */}
      <div className="sr-only">
        <div data-scroll-optimize />
        <img data-src="/images/placeholder.jpg" alt="" />
      </div>
    </div>
  );
}
