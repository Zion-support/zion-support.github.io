<<<<<<< HEAD
import { useEffect, useCallback, useRef, useState } from "react";
=======
import { useEffect, useCallback, useRef } from "react";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

export interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
  enablePrefetching?: boolean;
  enableCompression?: boolean;
  enableMinification?: boolean;
  enableTreeShaking?: boolean;
  enableBundleAnalysis?: boolean;
  enablePerformanceMonitoring?: boolean;
}

<<<<<<< HEAD
export function usePerformanceOptimization(
  options: PerformanceOptimizationOptions = {},
) {
=======
export const usePerformanceOptimization = (
  options: PerformanceOptimizationOptions = {},
) => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  const {
    enableLazyLoading = true,
    enableImageOptimization = true,
<<<<<<< HEAD
    enableCodeSplitting: _enableCodeSplitting = true,
    enableCaching = true,
    enablePrefetching = true,
    enableCompression: _enableCompression = true,
    enableMinification: _enableMinification = true,
    enableTreeShaking: _enableTreeShaking = true,
    enableBundleAnalysis: _enableBundleAnalysis = false,
    enablePerformanceMonitoring = true,
=======
    enableBundleAnalysis = false,
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  } = options;

  // Suppress unused variable warnings for destructured options
  void _enableCodeSplitting;
  void _enableCompression;
  void _enableMinification;
  void _enableTreeShaking;
  void _enableBundleAnalysis;

<<<<<<< HEAD
  const [isOptimized, setIsOptimized] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>({});
  const _optimizationRef = useRef<any>({});

  useEffect(() => {
    if (enablePerformanceMonitoring) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        setPerformanceMetrics((prev: any) => ({
          ...prev,
          entries: [...(prev.entries || []), ...entries],
        }));
=======
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || "";
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
      });

      observer.observe({ entryTypes: ["measure", "navigation", "resource"] });

      return () => observer.disconnect();
    }
    return undefined;
  }, [enablePerformanceMonitoring]);

<<<<<<< HEAD
=======
    const criticalResources = [
      "/app/styles/futuristic.css",
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".css") ? "style" : "font";
      if (resource.includes("fonts.googleapis.com")) {
        link.crossOrigin = "anonymous";
      }

      // Add error handling
      link.onerror = () => {
        // Silently handle preload errors
      };

      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Optimize images
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
<<<<<<< HEAD
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src;
        img.classList.add("lazy-loaded");
=======
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute("loading")) {
        img.loading = "lazy";
      }

      // Add proper alt text if missing
      if (!img.alt) {
        img.alt = "Image";
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute("decoding")) {
        img.decoding = "async";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
      }
    });
  }, [enableImageOptimization]);

<<<<<<< HEAD
  const optimizeLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const lazyElements = document.querySelectorAll("[data-lazy]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add("lazy-loaded");
          observer.unobserve(element);
        }
      });
    });
=======
  // Monitor performance metrics
  const monitorPerformance = useCallback(() => {
    if (typeof window === "undefined" || !("performance" in window)) return;

    // Monitor Core Web Vitals
    import("web-vitals")
      .then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric) => {
          metricsRef.current.cls = metric.value;
          if (process.env.NODE_ENV === "development") {
            // CLS metric logging can be implemented here
          }
        });

        onFCP((metric) => {
          metricsRef.current.fcp = metric.value;
          if (process.env.NODE_ENV === "development") {
            // FCP metric logging can be implemented here
          }
        });

        onLCP((metric) => {
          metricsRef.current.lcp = metric.value;
          if (process.env.NODE_ENV === "development") {
            // LCP metric logging can be implemented here
          }
        });

        onTTFB((metric) => {
          metricsRef.current.ttfb = metric.value;
          if (process.env.NODE_ENV === "development") {
            // TTFB metric logging can be implemented here
          }
        });

        onINP((metric) => {
          metricsRef.current.inp = metric.value;
          if (process.env.NODE_ENV === "development") {
            // INP metric logging can be implemented here
          }
        });
      })
      .catch(() => {
        // Silently fail if web-vitals is not available
      });
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

    lazyElements.forEach((el) => observer.observe(el));
  }, [enableLazyLoading]);

<<<<<<< HEAD
  const enableCachingStrategy = useCallback(() => {
    if (!enableCaching) return;

    // Service worker registration for caching
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, [enableCaching]);

  const prefetchResources = useCallback(() => {
    if (!enablePrefetching) return;

    const links = document.querySelectorAll("a[href]");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("/")) {
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
=======
    observerRef.current = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "navigation") {
          // const navEntry = entry as PerformanceNavigationTiming;
          if (process.env.NODE_ENV === "development") {
            // Navigation timing analysis can be added here
          }
        }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
      }
    });
  }, [enablePrefetching]);

<<<<<<< HEAD
  const runOptimizations = useCallback(() => {
    optimizeImages();
    optimizeLazyLoading();
    enableCachingStrategy();
    prefetchResources();

    setIsOptimized(true);
    console.log("Performance optimizations applied");
  }, [
    optimizeImages,
    optimizeLazyLoading,
    enableCachingStrategy,
    prefetchResources,
  ]);

  const getOptimizationStatus = useCallback(() => {
    return {
      isOptimized,
      options,
      metrics: performanceMetrics,
      timestamp: Date.now(),
=======
    observerRef.current.observe({ entryTypes: ["navigation"] });
  }, []);

  // Bundle analysis
  const analyzeBundle = useCallback(() => {
    if (!enableBundleAnalysis || process.env.NODE_ENV !== "development") return;

    // const scripts = Array.from(document.querySelectorAll('script[src]'));
    // const totalSize = scripts.reduce((total, script) => {
    //   const src = script.getAttribute('src');
    //   if (src && src.includes('assets/')) {
    //     // This is a rough estimation - in reality you'd need to fetch the actual file size
    //     return total + 100; // Placeholder
    //   }
    //   return total;
    // }, 0);
  }, [enableBundleAnalysis]);

  // Initialize optimizations
  useEffect(() => {
    // Run optimizations after DOM is ready
    const runOptimizations = () => {
      lazyLoadImages();
      preloadCriticalResources();
      optimizeImages();
      monitorPerformance();
      analyzeBundle();
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    };
  }, [isOptimized, options, performanceMetrics]);

<<<<<<< HEAD
  return {
    runOptimizations,
    getOptimizationStatus,
    isOptimized,
    performanceMetrics,
  };
}
=======
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", runOptimizations);
    } else {
      runOptimizations();
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    lazyLoadImages,
    preloadCriticalResources,
    optimizeImages,
    monitorPerformance,
    analyzeBundle,
  ]);

  // Return current metrics and utility functions
  return {
    metrics: metricsRef.current,
    getMetrics: () => metricsRef.current,
    clearMetrics: () => {
      metricsRef.current = {};
    },
  };
};
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
