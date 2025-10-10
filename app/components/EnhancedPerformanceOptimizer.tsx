'use client';
import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableCriticalCSS = true,
  enableResourceHints = true
}) => {
  // Image optimization with WebP support and responsive images
  useEffect(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src) {
              // Check for WebP support
              const canvas = document.createElement('canvas');
              const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
              
              if (webpSupported && !src.includes('.webp')) {
                img.src = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
              } else {
                img.src = src;
              }
              
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      }, { threshold: 0.1 });

      images.forEach((img) => imageObserver.observe(img));
    };

    const timer = setTimeout(optimizeImages, 100);
    return () => clearTimeout(timer);
  }, [enableImageOptimization]);

  // Enhanced lazy loading with intersection observer
  useEffect(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('loaded');
            
            // Load background images
            const bgImage = target.dataset.bgImage;
            if (bgImage) {
              target.style.backgroundImage = `url(${bgImage})`;
            }
            
            // Load iframes
            const iframe = target.querySelector('iframe[data-src]') as HTMLIFrameElement;
            if (iframe && iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute('data-src');
            }
            
            observer.unobserve(target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  // Critical resource preloading
  useEffect(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      if (enableCriticalCSS) {
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        criticalCSS.onload = () => {
          criticalCSS.rel = 'stylesheet';
        };
        document.head.appendChild(criticalCSS);
      }

      // Preload critical fonts
      const criticalFonts = [
        '/fonts/inter-var.woff2',
        '/fonts/inter-var.woff'
      ];
      
      criticalFonts.forEach((font) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.type = font.includes('.woff2') ? 'font/woff2' : 'font/woff';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      const criticalImages = [
        '/og-image.jpg',
        '/logo192.png'
      ];
      
      criticalImages.forEach((image) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, [enablePreloading, enableCriticalCSS]);

  // Resource hints for external domains
  useEffect(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const addResourceHints = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      domains.forEach((domain) => {
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        if (domain.includes('fonts.gstatic.com')) {
          preconnect.crossOrigin = 'anonymous';
        }
        document.head.appendChild(preconnect);
      });
    };

    addResourceHints();
  }, [enableResourceHints]);

  // Enhanced code splitting with route preloading
  useEffect(() => {
    if (!enableCodeSplitting || typeof window === 'undefined') return;

    const optimizeCodeSplitting = () => {
      // Preload next likely routes on hover
      const links = document.querySelectorAll('a[href^="/"]');
      const preloadedRoutes = new Set();

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#') && !preloadedRoutes.has(href)) {
            preloadedRoutes.add(href);
            
            // Preload the route component
            const routePath = href === '/' ? '/app/page' : `/app${href}/page`;
            import(/* webpackChunkName: "route" */ `..${routePath}.tsx`).catch(() => {
              // Ignore errors for non-existent routes
            });
          }
        });
      });

      // Preload critical routes after initial load
      const criticalRoutes = ['/about', '/services', '/contact', '/pricing'];
      const preloadTimer = setTimeout(() => {
        criticalRoutes.forEach((route) => {
          if (!preloadedRoutes.has(route)) {
            preloadedRoutes.add(route);
            import(/* webpackChunkName: "route" */ `../app${route}/page.tsx`).catch(() => {});
          }
        });
      }, 2000);

      return () => clearTimeout(preloadTimer);
    };

    const timer = setTimeout(optimizeCodeSplitting, 1000);
    return () => clearTimeout(timer);
  }, [enableCodeSplitting]);

  // Performance monitoring with Core Web Vitals
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      // Measure Core Web Vitals
      const measureCLS = () => {
        let clsValue = 0;
        let clsEntries: PerformanceEntry[] = [];
        
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsEntries.push(entry);
              clsValue += (entry as any).value;
            }
          }
        });
        
        observer.observe({ entryTypes: ['layout-shift'] });
        
        return () => {
          observer.disconnect();
          return clsValue;
        };
      };

      const measureLCP = () => {
        return new Promise((resolve) => {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            resolve(lastEntry.startTime);
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        });
      };

      const measureFID = () => {
        return new Promise((resolve) => {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            resolve(firstEntry.processingStart - firstEntry.startTime);
          });
          
          observer.observe({ entryTypes: ['first-input'] });
          
          // Fallback timeout
          setTimeout(() => resolve(0), 5000);
        });
      };

      // Measure all metrics
      Promise.all([
        measureLCP(),
        measureFID(),
        new Promise((resolve) => {
          const stopCLS = measureCLS();
          setTimeout(() => resolve(stopCLS()), 5000);
        })
      ]).then(([lcp, fid, cls]) => {
        const metrics = {
          lcp: Math.round(lcp as number),
          fid: Math.round(fid as number),
          cls: Math.round(cls as number * 1000) / 1000,
          timestamp: Date.now()
        };

        // Send to analytics
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          
          gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'core_web_vitals',
            value: metrics.lcp,
            custom_map: {
              lcp: metrics.lcp,
              fid: metrics.fid,
              cls: metrics.cls
            }
          });
        }

        // Store in localStorage for debugging
        localStorage.setItem('web_vitals', JSON.stringify(metrics));
      });
    };

    // Measure performance after page load
    window.addEventListener('load', measurePerformance);
    return () => window.removeEventListener('load', measurePerformance);
  }, []);

  // Memoized children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  return <>{memoizedChildren}</>;
};

export default PerformanceOptimizer;