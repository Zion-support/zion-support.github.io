'use client';
import React, { useEffect, useState, useCallback } from 'react';

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({}
  enableAdvancedCaching = true,
const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({
  enableAdvancedCaching = true;
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableResourceHints = true,
  enableServiceWorker = true,
  enableCriticalCSS = true,
  enableWebVitals = true
}) => {}
  const [performanceMetrics, setPerformanceMetrics] = useState({)}
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({)
    fcp: 0;)
    lcp: 0;)
    fid: 0),
    cls: 0),
    ttfb: 0;
  });

  // Web Vitals monitoring;
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      const measureWebVitals = () => {
        // First Contentful Paint;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
  // Web Vitals monitoring
  useEffect(() => {}
    if (enableWebVitals && typeof window !== 'undefined') {}
      const measureWebVitals = () => {}
        // First Contentful Paint
        new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {}
            if (entry.name === 'first-contentful-paint') {}
              setPerformanceMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        }).observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        new PerformanceObserver((list) => {}
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setPerformanceMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {}
            setPerformanceMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift;
        let clsValue = 0;
        new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {}
            if (!(entry as any).hadRecentInput) {}
              clsValue += (entry as any).value;
              setPerformanceMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });
      };

      measureWebVitals();
    }
  }, [enableWebVitals]);

  // Advanced caching strategies
  const setupAdvancedCaching = useCallback(() => {}
    if (typeof window === 'undefined') return;

    // Service Worker for advanced caching
    if ('serviceWorker' in navigator && enableServiceWorker) {}
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {}
          // })
        .catch((registrationError) => {}
          // });
    }

    // Memory-based caching for API responses;
    const cache = new Map();
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {}
      const url = typeof input === 'string' ? input : input.url;
      const cacheKey = `${url}_${JSON.stringify(init)}`;

      if (cache.has(cacheKey)) {}
        return cache.get(cacheKey);
      }

      const response = await originalFetch(input, init);
      if (response.ok) {}
        cache.set(cacheKey, response.clone());
      }

      return response;
    };
  }, [enableServiceWorker]);

  // Image optimization with WebP and lazy loading
  const optimizeImages = useCallback(() => {}
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {}
      entries.forEach((entry) => {}
        if (entry.isIntersecting) {}
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {}
            // Check for WebP support
            const canvas = document.createElement('canvas');
            const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

            if (webpSupported && !src.includes('.webp')) {}
              img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
            } else {}
              img.src = src;
            }

            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }

interface AdvancedPerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<AdvancedPerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Advanced performance optimizations
    const optimizePerformance = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
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

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {}
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    let optimizedCount = 0;

    criticalResources.forEach((resource) => {}
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);

  }, []);

  // Resource hints for better performance
  const addResourceHints = useCallback(() => {}
    if (typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ];

    hints.forEach((hint) => {}
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.rel === 'preconnect') {}
        link.crossOrigin = 'anonymous';
      }

      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
      }
    });

    return optimizedCount;
  }, []);

  // Critical CSS inlining
  const inlineCriticalCSS = useCallback(() => {}
    if (typeof window === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;

    scripts.forEach((script) => {
      // Add defer attribute if not already present
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
        optimizedCount++;
      }
    });

    return optimizedCount;
  }, []);

      (window as any).gtag('event', 'web_vitals', {)
        event_category: 'Performance')
        event_label: 'Core Web Vitals')
        value: Math.round(performanceMetrics.lcp)
        custom_map: {
  // Performance monitoring and reporting
  const reportPerformanceMetrics = useCallback(() => {}
    if (typeof window === 'undefined') return;

    // Report to analytics
    if ('gtag' in window) {}
      (window as any).gtag('event', 'web_vitals', {)}
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(performanceMetrics.lcp),
        custom_map: {}
          fcp: Math.round(performanceMetrics.fcp),
          lcp: Math.round(performanceMetrics.lcp),
          fid: Math.round(performanceMetrics.fid),
          cls: Math.round(performanceMetrics.cls * 1000) / 1000;
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

  useEffect(() => {}
    if (enableWebVitals && performanceMetrics.lcp > 0) {}
      reportPerformanceMetrics();
    }
  }, [enableWebVitals, performanceMetrics, reportPerformanceMetrics]);

  return null;
      // Preload critical resources
      const criticalResources = [
        '/fonts/main.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });
    };

    optimizePerformance();
  }, []);

    <div className="performance-optimized" data-optimized={isOptimized}>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="optimization-debug" style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000;
        }}>
          <div>Images: {optimizationMetrics.imagesOptimized,}</div></div></div>
          <div>Scripts: {optimizationMetrics.scriptsOptimized,}</div>
          <div>CSS: {optimizationMetrics.cssOptimized,}</div>
          <div>Total: {optimizationMetrics.totalSavings,}</div>
        </div>
      )}
    </div>
  );
  return <>{children}</>;
};

export default AdvancedPerformanceOptimizer;