"use client";
import { useEffect, useCallback, useRef, useState } from "react";

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

export function usePerformanceOptimization(
  options: PerformanceOptimizationOptions = {},
) {
  const {
    enableLazyLoading = true,
    enableImageOptimization = true,
    enableCodeSplitting: _enableCodeSplitting = true,
    enableCaching = true,
    enablePrefetching = true,
    enableCompression: _enableCompression = true,
    enableMinification: _enableMinification = true,
    enableTreeShaking: _enableTreeShaking = true,
    enableBundleAnalysis: _enableBundleAnalysis = false,
    enablePerformanceMonitoring = true,
  } = options;

  // Suppress unused variable warnings for destructured options
  void _enableCodeSplitting;
  void _enableCompression;
  void _enableMinification;
  void _enableTreeShaking;
  void _enableBundleAnalysis;

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
      });

      observer.observe({ entryTypes: ["measure", "navigation", "resource"] });

      return () => observer.disconnect();
    }
    return undefined;
  }, [enablePerformanceMonitoring]);

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src;
        if (img.classList) {
          img.classList.add("lazy-loaded");
        }
      }
    });
  }, [enableImageOptimization]);

  const optimizeLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const lazyElements = document.querySelectorAll("[data-lazy]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          if (element.classList) {
            element.classList.add("lazy-loaded");
          }
          observer.unobserve(element);
        }
      });
    });

    lazyElements.forEach((el) => observer.observe(el));
  }, [enableLazyLoading]);

  const enableCachingStrategy = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

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
    if (!enablePrefetching || typeof window === 'undefined') return;

    const links = document.querySelectorAll("a[href]");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("/")) {
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    });
  }, [enablePrefetching]);

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
    };
  }, [isOptimized, options, performanceMetrics]);

  return {
    runOptimizations,
    getOptimizationStatus,
    isOptimized,
    performanceMetrics,
  };
}
