import { useEffect, useCallback } from "react";
"use client";

// Performance metrics interface for future use
// interface PerformanceMetrics {
//   lcp?: number;
//   fid?: number;
//   cls?: number;
//   fcp?: number;
//   ttfb?: number;
// }

export default function EnhancedPerformanceOptimizer() {
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      { href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { href: "/images/hero-bg.webp", as: "image" },
      { href: "/images/logo.webp", as: "image" },
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });

    logger.info("Critical resources preloaded");
  }, []);

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
              img.src = src;
              img.classList.remove("lazy");
              img.classList.add("loaded");
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    images.forEach((img) => imageObserver.observe(img));
    logger.info(`Optimizing ${images.length} images`);
  }, []);

  const optimizeFonts = useCallback(() => {
    // Preload critical fonts
    const fontPreloads = [
      { href: "/fonts/inter-var.woff2", type: "font/woff2" },
    ];

    fontPreloads.forEach((font) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = font.href;
      link.as = "font";
      link.type = font.type;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Add font-display: swap to existing font faces
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
  }, []);

  const deferNonCriticalScripts = useCallback(() => {
    const scripts = document.querySelectorAll("script[data-defer]");
    scripts.forEach((script) => {
      const newScript = document.createElement("script");
      newScript.src = script.getAttribute("src") || "";
      newScript.async = true;
      newScript.defer = true;
      script.parentNode?.replaceChild(newScript, script);
    });
  }, []);

  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS((metric: any) => {
        logger.info("CLS:", metric.value);
      });
      onINP((metric: any) => {
        logger.info("INP:", metric.value);
      });
      onFCP((metric: any) => {
        logger.info("FCP:", metric.value);
      });
      onLCP((metric: any) => {
        logger.info("LCP:", metric.value);
      });
      onTTFB((metric: any) => {
        logger.info("TTFB:", metric.value);
      });
    }).catch((error) => {
      logger.error("Failed to load web-vitals:", error);
    });

    // Monitor resource loading
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            logger.info("Navigation timing:", {
//               domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
//               totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
            });
          }
        });
      });
      observer.observe({ entryTypes: ["navigation", "resource"] });
    }
  }, []);

  const optimizeBundleLoading = useCallback(() => {
    // Preload next likely pages
    const nextPages = ["/about", "/services", "/contact"];
    nextPages.forEach((page) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = page;
      document.head.appendChild(link);
    });
  }, []);

  const setupServiceWorker = useCallback(() => {
    if ("serviceWorker" in navigator) {
//       navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          logger.info("Service Worker registered:", registration);
        })
        .catch((error) => {
          logger.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        preloadCriticalResources();
        optimizeImages();
        optimizeFonts();
        deferNonCriticalScripts();
        setupPerformanceMonitoring();
        optimizeBundleLoading();
        setupServiceWorker();
      });
    } else {
      preloadCriticalResources();
      optimizeImages();
      optimizeFonts();
      deferNonCriticalScripts();
      setupPerformanceMonitoring();
      optimizeBundleLoading();
      setupServiceWorker();
    }

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, [
//     preloadCriticalResources,
//     optimizeImages,
//     optimizeFonts,
//     deferNonCriticalScripts,
    setupPerformanceMonitoring,
//     optimizeBundleLoading,
//     setupServiceWorker,
  ]);

  return null;
}