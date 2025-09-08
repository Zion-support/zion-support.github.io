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

  return <>{children}</>;
};
