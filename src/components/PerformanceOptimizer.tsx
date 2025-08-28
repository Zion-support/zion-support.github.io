import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
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
          console.log('LCP:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
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
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const criticalFonts = [
      '/fonts/inter-var.woff2',
      '/fonts/inter-var.woff2'
    ];

    criticalFonts.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  const addResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  const optimizeCSS = useCallback(() => {
    // Remove unused CSS classes
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || sheet.rules);
        rules.forEach((rule) => {
          if (rule instanceof CSSStyleRule) {
            const selector = rule.selectorText;
            if (selector && selector.includes('hover:') || selector.includes('focus:')) {
              // These are pseudo-classes that should be kept
              return;
            }
          }
        });
      } catch (e) {
        // CORS error, skip external stylesheets
      }
    });
  }, []);

  const addIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Lazy load images
            if (target.tagName === 'IMG') {
              const img = target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
            
            // Add animation classes
            if (target.dataset.animate) {
              target.classList.add('animate-in');
              observer.unobserve(target);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      // Observe elements with data-animate attribute
      document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el);
      });

      // Observe images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach((img) => {
        observer.observe(img);
      });
    }
  }, []);

  const addServiceWorker = useCallback(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  const addWebVitals = useCallback(() => {
    // Web Vitals measurement
    const sendToAnalytics = (metric: any) => {
      // Send to analytics service
      console.log('Web Vital:', metric);
    };

    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            sendToAnalytics({
              name: 'TTFB',
              value: navEntry.responseStart - navEntry.requestStart,
              id: 'ttfb'
            });
          }
        });
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();
    
    // Add performance optimizations
    optimizeImages();
    optimizeFonts();
    addResourceHints();
    optimizeCSS();
    addIntersectionObserver();
    addServiceWorker();
    addWebVitals();

    // Performance monitoring on route changes
    const handleRouteChange = () => {
      setTimeout(() => {
        optimizeImages();
        addIntersectionObserver();
      }, 100);
    };

    // Listen for route changes (if using React Router)
    window.addEventListener('popstate', handleRouteChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [
    measurePerformance,
    optimizeImages,
    optimizeFonts,
    addResourceHints,
    optimizeCSS,
    addIntersectionObserver,
    addServiceWorker,
    addWebVitals
  ]);

  // Add performance monitoring for user interactions
  useEffect(() => {
    const measureInteraction = (event: Event) => {
      const start = performance.now();
      
      const measureEnd = () => {
        const duration = performance.now() - start;
        if (duration > 100) { // Log slow interactions
          console.warn('Slow interaction detected:', {
            type: event.type,
            duration: `${duration.toFixed(2)}ms`,
            target: (event.target as HTMLElement)?.tagName
          });
        }
      };

      // Measure after a short delay to capture the full interaction
      setTimeout(measureEnd, 100);
    };

    // Monitor various user interactions
    const events = ['click', 'input', 'scroll', 'resize'];
    events.forEach(eventType => {
      document.addEventListener(eventType, measureInteraction, { passive: true });
    });

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, measureInteraction);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
