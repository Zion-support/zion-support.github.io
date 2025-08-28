import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  enabled?: boolean;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enabled = true 
}) => {
  const metrics = useMemo<PerformanceMetrics>(() => ({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  }), []);

  const optimizeImages = useCallback(() => {
    if (!enabled) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding optimization
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add fetch priority for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.fetchPriority = 'high';
      }
    });
  }, [enabled]);

  const optimizeFonts = useCallback(() => {
    if (!enabled) return;

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('crossorigin', 'anonymous');
    });
  }, [enabled]);

  const optimizeCSS = useCallback(() => {
    if (!enabled) return;

    // Remove unused CSS
    const styleSheets = Array.from(document.styleSheets);
    styleSheets.forEach((sheet) => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          // Mark critical CSS
          Array.from(rules).forEach((rule: any) => {
            if (rule.selectorText && rule.selectorText.includes(':hover')) {
              rule.media = 'hover';
            }
          });
        }
      } catch (e) {
        // Cross-origin stylesheets will throw errors
      }
    });
  }, [enabled]);

  const optimizeJavaScript = useCallback(() => {
    if (!enabled) return;

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script:not([data-critical])');
    scripts.forEach((script) => {
      if (!script.async && !script.defer) {
        script.defer = true;
      }
    });
  }, [enabled]);

  const setupIntersectionObserver = useCallback(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Load background images when they come into view
            if (target.dataset.backgroundImage) {
              target.style.backgroundImage = `url(${target.dataset.backgroundImage})`;
              target.removeAttribute('data-background-image');
            }
            
            // Load iframe content when they come into view
            if (target.tagName === 'IFRAME' && target.dataset.src) {
              target.src = target.dataset.src;
              target.removeAttribute('data-src');
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observe elements that can benefit from lazy loading
    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach((el) => observer.observe(el));

    return observer;
  }, [enabled]);

  const setupResourceHints = useCallback(() => {
    if (!enabled) return;

    // Add DNS prefetch for external domains
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    const domains = new Set<string>();
    
    externalLinks.forEach((link) => {
      try {
        const url = new URL(link.getAttribute('href') || '');
        if (url.hostname !== window.location.hostname) {
          domains.add(url.hostname);
        }
      } catch (e) {
        // Invalid URL
      }
    });

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }, [enabled]);

  const monitorPerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          metrics.lcp = entry.startTime;
        } else if (entry.entryType === 'first-input') {
          metrics.fid = entry.processingStart - entry.startTime;
        } else if (entry.entryType === 'layout-shift') {
          metrics.cls += (entry as any).value;
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor First Contentful Paint
    const paintObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
        }
      });
    });

    paintObserver.observe({ entryTypes: ['paint'] });

    return () => {
      observer.disconnect();
      paintObserver.disconnect();
    };
  }, [enabled, metrics]);

  useEffect(() => {
    if (!enabled) return;

    // Run optimizations after DOM is ready
    const optimize = () => {
      optimizeImages();
      optimizeFonts();
      optimizeCSS();
      optimizeJavaScript();
      setupResourceHints();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimize);
    } else {
      optimize();
    }

    // Setup intersection observer
    const observer = setupIntersectionObserver();
    
    // Setup performance monitoring
    const cleanup = monitorPerformance();

    return () => {
      if (observer) observer.disconnect();
      if (cleanup) cleanup();
    };
  }, [
    enabled,
    optimizeImages,
    optimizeFonts,
    optimizeCSS,
    optimizeJavaScript,
    setupIntersectionObserver,
    setupResourceHints,
    monitorPerformance
  ]);

  // Don't render anything - this is a utility component
  return null;
};
