import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {


  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;


}

export const PerformanceOptimizer: React.FC = (): JSX.Element => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName === 'IMG' && target.dataset.src) {
              target.src = target.dataset.src;
              target.classList.remove('lazy');
              observerRef.current?.unobserve(target);
            }

            // Lazy load background images
            if (target.dataset.bgSrc) {
              target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
              target.classList.remove('lazy-bg');
              observerRef.current?.unobserve(target);
            }

            // Lazy load components
            if (target.dataset.component) {
              target.classList.add('loaded');
              observerRef.current?.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );
  }, []);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (typeof PerformanceObserver === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          performanceDataRef.current.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        performanceDataRef.current.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        performanceDataRef.current.fid = entry.processingStart - entry.startTime;
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any)   => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      performanceDataRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      performanceDataRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
    }
  }, []);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https: any//fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.gpteng.co'
    ];

    domains.forEach(domain   => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for critical resources
    const dnsPrefetchDomains = [
      '//ziontechgroup.com',
      '//api.ziontechgroup.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Image optimization
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.classList.add('lazy');
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s';
      
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    });
  }, []);

  // Debounced scroll handler for performance
  const debouncedScrollHandler = useCallback(
    debounce(() => {
      // Handle scroll-based optimizations
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Optimize animations based on scroll position
      const animatedElements = document.querySelectorAll('[data-animate-on-scroll]');
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate-in');
        }
      });
    }, 16), // ~60fps
    []
  );

  // Debounce utility function
  function debounce<T extends (...args: any[])   => any>(
    func: anyT,
    wait: number
  ): (...args: Parameters<T>)   => void {
    let timeout: anyNodeJS.Timeout;
    return (...args: Parameters<T>)   => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: any', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

  // Initialize performance optimizations
  useEffect(()   => {
    setupIntersectionObserver();
    measurePerformance();
    optimizeResourceHints();
    optimizeImages();
    registerServiceWorker();

    // Add scroll event listener
    window.addEventListener('scroll', debouncedScrollHandler, { passive: anytrue });

    // Cleanup
    return ()   => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, [setupIntersectionObserver, measurePerformance, optimizeResourceHints, optimizeImages, registerServiceWorker, debouncedScrollHandler]);

  // Add CSS for lazy loading
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .lazy {
        opacity: any0;
        transition: opacity 0.3s;
      }
      
      .lazy.loaded {
        opacity: 1;
      }
      
      .lazy-bg {
        background-image: none !important;
      }
      
      .lazy-bg.loaded {
        background-image: inherit !important;
      }
      
      [data-animate-on-scroll] {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      [data-animate-on-scroll].animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Performance-focused animations */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    return ()   => {
      document.head.removeChild(style);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceOptimizer;
