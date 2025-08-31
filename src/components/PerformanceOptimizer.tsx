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

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.removeAttribute('data-src');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01,
    });

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Resource hints for performance
  const addResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
    ];

    domains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for additional domains
    const dnsDomains = [
      '//cdn.jsdelivr.net',
      '//unpkg.com',
    ];

    dnsDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  }, []);

  // Critical CSS inline loading
  const loadCriticalCSS = useCallback(() => {
    const criticalCSS = document.querySelector('link[data-critical]');
    if (criticalCSS) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = criticalCSS.getAttribute('href') || '';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    }
  }, []);

  // Performance optimization suggestions
  const getOptimizationSuggestions = useCallback(() => {
    const metrics = performanceDataRef.current;
    const suggestions: string[] = [];

    if (metrics.fcp > 1800) {
      suggestions.push('First Contentful Paint is slow. Optimize critical rendering path.');
    }

    if (metrics.lcp > 2500) {
      suggestions.push('Largest Contentful Paint is slow. Optimize images and fonts.');
    }

    if (metrics.fid > 100) {
      suggestions.push('First Input Delay is high. Reduce JavaScript execution time.');
    }

    if (metrics.cls > 0.1) {
      suggestions.push('Cumulative Layout Shift is high. Ensure stable layouts.');
    }

    if (metrics.ttfb > 600) {
      suggestions.push('Time to First Byte is slow. Optimize server response time.');
    }

    return suggestions;
  }, []);

  // Apply optimizations
  const applyOptimizations = useCallback(() => {
    const suggestions = getOptimizationSuggestions();
    
    if (suggestions.length > 0) {
      console.log('Performance optimization suggestions:', suggestions);
      
      // Auto-apply some optimizations
      if (suggestions.some(s => s.includes('images'))) {
        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img.loading !== 'lazy') {
            img.loading = 'lazy';
          }
        });
      }

      if (suggestions.some(s => s.includes('JavaScript'))) {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script:not([data-critical])');
        scripts.forEach(script => {
          if (!script.defer && !script.async) {
            script.defer = true;
          }
        });
      }
    }
  }, [getOptimizationSuggestions]);

  // Initialize performance monitoring
  useEffect(() => {
    monitorPerformance();
    addResourceHints();
    loadCriticalCSS();
  }, [monitorPerformance, addResourceHints, loadCriticalCSS]);

  // Setup lazy loading
  useEffect(() => {
    setupLazyLoading();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading]);

  // Apply optimizations after metrics are collected
  useEffect(() => {
    const timer = setTimeout(() => {
      applyOptimizations();
    }, 5000); // Wait 5 seconds for metrics to be collected

    return () => clearTimeout(timer);
  }, [applyOptimizations]);

  return <>{children}</>;
};
