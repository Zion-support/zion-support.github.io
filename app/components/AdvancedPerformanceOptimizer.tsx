"use client";
import { useEffect, useCallback, useRef } from "react";
import { logger } from "../../utils/logger";

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export default function AdvancedPerformanceOptimizer() {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Enhanced resource preloading
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      { href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { href: "/images/hero-bg.webp", as: "image" },
      { href: "/images/logo.webp", as: "image" },
      { href: "/manifest.json", as: "manifest" },
    ];

    criticalResources.forEach((resource) => {
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
        document.head.appendChild(link);
      }
    });

    logger.info("Critical resources preloaded");
  }, []);

  // Advanced image optimization with WebP support
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll("img[data-src]");
    
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src) {
              // Check for WebP support
              const supportsWebP = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 1;
                canvas.height = 1;
                return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
              };

              // Use WebP if supported, fallback to original
              const optimizedSrc = supportsWebP() && !src.includes('.webp') 
                ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
                : src;

              img.src = optimizedSrc;
              img.classList.remove("lazy");
              img.classList.add("loaded");
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { 
        rootMargin: "100px 0px",
        threshold: 0.01
      }
    );

    images.forEach((img) => imageObserver.observe(img));
    logger.info(`Optimizing ${images.length} images with WebP support`);
  }, []);

  // Enhanced font optimization
  const optimizeFonts = useCallback(() => {
    // Preload critical fonts with font-display: swap
    const fontPreloads = [
      { href: "/fonts/inter-var.woff2", type: "font/woff2" },
    ];

    fontPreloads.forEach((font) => {
      if (!document.querySelector(`link[href="${font.href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = font.href;
        link.as = "font";
        link.type = font.type;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Add font-display: swap to existing font faces
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
        font-weight: 100 900;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Advanced performance monitoring
  const setupAdvancedPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals with enhanced tracking
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => {
        metricsRef.current.cls = metric.value;
        logger.info("CLS:", metric.value);
        
        // Send to analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000)
          });
        }
      });

      onINP((metric) => {
        metricsRef.current.inp = metric.value;
        logger.info("INP:", metric.value);
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'INP',
            value: Math.round(metric.value)
          });
        }
      });

      onFCP((metric) => {
        metricsRef.current.fcp = metric.value;
        logger.info("FCP:", metric.value);
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FCP',
            value: Math.round(metric.value)
          });
        }
      });

      onLCP((metric) => {
        metricsRef.current.lcp = metric.value;
        logger.info("LCP:", metric.value);
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(metric.value)
          });
        }
      });

      onTTFB((metric) => {
        metricsRef.current.ttfb = metric.value;
        logger.info("TTFB:", metric.value);
        
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'TTFB',
            value: Math.round(metric.value)
          });
        }
      });
    }).catch((error) => {
      logger.error("Failed to load web-vitals:", error);
    });

    // Enhanced resource loading monitoring
    if ("PerformanceObserver" in window) {
      observerRef.current = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            const timing = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
              firstByte: navEntry.responseStart - navEntry.fetchStart,
              domInteractive: navEntry.domInteractive - navEntry.fetchStart,
            };
            
            logger.info("Navigation timing:", timing);
            
            // Track slow loading pages
            if (timing.totalTime > 3000) {
              logger.warn("Slow page load detected:", timing);
            }
          }
          
          // Monitor long tasks
          if (entry.entryType === "longtask") {
            logger.warn("Long task detected:", {
              duration: entry.duration,
              startTime: entry.startTime
            });
          }
        });
      });
      
      try {
        observerRef.current.observe({ 
          entryTypes: ["navigation", "resource", "longtask", "paint"] 
        });
      } catch (error) {
        logger.error("Performance observer setup failed:", error);
      }
    }
  }, []);

  // Intelligent prefetching based on user behavior
  const setupIntelligentPrefetching = useCallback(() => {
    let mouseX = 0;
    let mouseY = 0;
    let lastMoveTime = 0;
    
    const trackMouseMovement = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = Date.now();
    };
    
    const prefetchOnHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const href = link.href;
        
        // Only prefetch if not already prefetched
        if (!document.querySelector(`link[href="${href}"][rel="prefetch"]`)) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
          
          logger.info(`Prefetched: ${href}`);
        }
      }
    };
    
    document.addEventListener('mousemove', trackMouseMovement);
    document.addEventListener('mouseover', prefetchOnHover);
    
    return () => {
      document.removeEventListener('mousemove', trackMouseMovement);
      document.removeEventListener('mouseover', prefetchOnHover);
    };
  }, []);

  // Enhanced service worker with cache strategies
  const setupAdvancedServiceWorker = useCallback(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
          updateViaCache: "none"
        })
        .then((registration) => {
          logger.info("Service Worker registered:", registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, notify user
                  logger.info("New content available, please refresh");
                }
              });
            }
          });
        })
        .catch((error) => {
          logger.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  // Memory optimization
  const optimizeMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
        const limitMB = Math.round(memory.jsHeapSizeLimit / 1048576);
        
        const usagePercent = (usedMB / limitMB) * 100;
        
        if (usagePercent > 80) {
          logger.warn("High memory usage detected:", { 
            usedMB, 
            totalMB, 
            limitMB, 
            usagePercent: Math.round(usagePercent) 
          });
          
          // Trigger garbage collection if available
          if (window.gc) {
            window.gc();
          }
        }
      };
      
      // Check memory every 30 seconds
      const memoryInterval = setInterval(checkMemory, 30000);
      
      return () => clearInterval(memoryInterval);
    }
    
    return () => {};
  }, []);

  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        preloadCriticalResources();
        optimizeImages();
        optimizeFonts();
        setupAdvancedPerformanceMonitoring();
        setupIntelligentPrefetching();
        setupAdvancedServiceWorker();
        optimizeMemoryUsage();
      });
    } else {
      preloadCriticalResources();
      optimizeImages();
      optimizeFonts();
      setupAdvancedPerformanceMonitoring();
      setupIntelligentPrefetching();
      setupAdvancedServiceWorker();
      optimizeMemoryUsage();
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    preloadCriticalResources,
    optimizeImages,
    optimizeFonts,
    setupAdvancedPerformanceMonitoring,
    setupIntelligentPrefetching,
    setupAdvancedServiceWorker,
    optimizeMemoryUsage,
  ]);

  return null;
}