import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
              performanceDataRef.current.lcp = entry.startTime;
            } else if (entry.entryType === 'first-input-delay') {
              const fid = (entry as any).processingStart - entry.startTime;
              console.log('FID:', fid);
              performanceDataRef.current.fid = fid;
            } else if (entry.entryType === 'layout-shift') {
              console.log('CLS:', (entry as any).value);
              performanceDataRef.current.cls = (entry as any).value;
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    }

    // Monitor First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
              performanceDataRef.current.fcp = entry.startTime;
            }
          }
        });

        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP monitoring failed:', error);
      }
    }

    // Monitor Time to First Byte
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              const ttfb = navEntry.responseStart - navEntry.requestStart;
              console.log('TTFB:', ttfb);
              performanceDataRef.current.ttfb = ttfb;
            }
          }
        });

        observer.observe({ entryTypes: ['navigation'] });
      } catch (error) {
        console.warn('TTFB monitoring failed:', error);
      }
    }
  }, [enablePerformanceMonitoring]);

  // Lazy loading with Intersection Observer
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach((img) => imageObserver.observe(img));

    return imageObserver;
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js')) {
        link.as = 'script';
      }
      
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
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
      
      // Add fetchpriority="high" for above-the-fold images
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, []);

  // Optimize fonts
  const optimizeFonts = useCallback(() => {
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  }, []);

  // Setup performance monitoring
  useEffect(() => {
    monitorPerformance();
  }, [monitorPerformance]);

  // Setup lazy loading
  useEffect(() => {
    const imageObserver = setupLazyLoading();
    
    return () => {
      if (imageObserver) {
        imageObserver.disconnect();
      }
    };
  }, [setupLazyLoading]);

  // Setup resource optimization
  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    optimizeFonts();
  }, [preloadCriticalResources, optimizeImages, optimizeFonts]);

  // Performance reporting
  useEffect(() => {
    const reportPerformance = () => {
      const metrics = performanceDataRef.current;
      
      // Send to analytics (replace with your analytics service)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: 'core_web_vitals',
          value: Math.round(metrics.lcp),
          custom_parameters: {
            fcp: Math.round(metrics.fcp),
            lcp: Math.round(metrics.lcp),
            fid: Math.round(metrics.fid),
            cls: metrics.cls.toFixed(3),
            ttfb: Math.round(metrics.ttfb)
          }
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.group('Performance Metrics');
        console.log('FCP:', metrics.fcp, 'ms');
        console.log('LCP:', metrics.lcp, 'ms');
        console.log('FID:', metrics.fid, 'ms');
        console.log('CLS:', metrics.cls);
        console.log('TTFB:', metrics.ttfb, 'ms');
        console.groupEnd();
      }
    };

    // Report after page load
    const timer = setTimeout(reportPerformance, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;
