import { useEffect } from 'react';''interface PerformanceOptimizerProps {;

  children: React.ReactNode;
}export const PerformanceOptimizer: React.FC < PerformanceOptimizerProps> = ({ children }) => {;
  useEffect ( () => {;
    // Preload critical resources;
const preloadCriticalResources = () => {;
      const criticalFonts = [;
        'https: //fonts.googleapis.com / css2?family = Orbitron:wght@400;600 & display = swap''      ];'criticalFonts.forEach (font => {;
        const link = document.createElement ('link') ;'        link.rel = 'preload';'        link.as = 'style';'        link.href = font;'        document.head.appendChild (link) ;}) ;
    };
;
    // Optimize images;
const optimizeImages = () => {;
      const images = document.querySelectorAll ('img') ;'      images.forEach (img => {'        if (!img.loading) {;
          img.loading = 'lazy';'        }'        if (!img.decoding) {;
          img.decoding = 'async';'        }'      }) ;};// Initialize optimizations;
    preloadCriticalResources () ;
    optimizeImages () ;
;
    // Set up intersection observer for lazy loading;
const observer = new IntersectionObserver (; (entries) => {;
        entries.forEach (entry => {;
          if (entry.isIntersecting) {;
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
      entries.forEach((entry: any) => {
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
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.gpteng.co'
    ];

    domains.forEach(domain => {
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
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }, []) ;
;return <>{children}</>;
};
