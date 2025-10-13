import { useState, useEffect, useCallback, useMemo } from "react";

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableMemoization: boolean;
  enableVirtualization: boolean;
  maxBundleSize: number;
}

interface OptimizationMetrics {
  bundleSize: number;
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  optimizationScore: number;
}

interface UsePerformanceOptimizationReturn {
  config: OptimizationConfig;
  metrics: OptimizationMetrics;
  isOptimized: boolean;
  updateConfig: (newConfig: Partial<OptimizationConfig>) => void;
  optimize: () => void;
  reset: () => void;
  getOptimizationSuggestions: () => string[];
}

const defaultConfig: OptimizationConfig = {
  enableLazyLoading: true,
  enableImageOptimization: true,
  enableCodeSplitting: true,
  enableMemoization: true,
  enableVirtualization: false,
  maxBundleSize: 500000, // 500KB
};

export const usePerformanceOptimization =
  (): UsePerformanceOptimizationReturn => {
    const [config, setConfig] = useState<OptimizationConfig>(defaultConfig);
    const [isOptimized, setIsOptimized] = useState(false);
    const [metrics, setMetrics] = useState<OptimizationMetrics>({
      bundleSize: 0,
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      optimizationScore: 0,
    });

    const measureMetrics = useCallback(() => {
      if (typeof window === "undefined") return;

      const startTime = performance.now();

      // Measure bundle size (simplified)
      const bundleSize =
        document.querySelectorAll("script[src]").length * 50000; // Rough estimate

      // Measure load time
      const loadTime = performance.timing?.loadEventEnd
        ? performance.timing.loadEventEnd - performance.timing.navigationStart
        : 0;

      // Measure memory usage
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      const renderTime = performance.now() - startTime;

      // Calculate optimization score
      let score = 100;
      if (bundleSize > config.maxBundleSize) score -= 30;
      if (loadTime > 3000) score -= 25;
      if (renderTime > 100) score -= 20;
      if (memoryUsage > 50 * 1024 * 1024) score -= 25; // 50MB

      setMetrics({
        bundleSize,
        loadTime,
        renderTime,
        memoryUsage,
        optimizationScore: Math.max(0, score),
      });
    }, [config.maxBundleSize]);

    const updateConfig = useCallback(
      (newConfig: Partial<OptimizationConfig>) => {
        setConfig((prev) => ({ ...prev, ...newConfig }));
      },
      [],
    );

    const optimize = useCallback(() => {
      // Apply optimizations based on config
      if (config.enableLazyLoading) {
        // Enable lazy loading for images
        const images = document.querySelectorAll("img[data-src]");
        images.forEach((img) => {
          const imageElement = img as HTMLImageElement;
          if (imageElement.dataset.src) {
            imageElement.src = imageElement.dataset.src;
          }
        });
      }

      if (config.enableImageOptimization) {
        // Optimize images
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          const imageElement = img as HTMLImageElement;
          if (!imageElement.loading) {
            imageElement.loading = "lazy";
          }
        });
      }

      // Trigger garbage collection if available
      if ((window as any).gc) {
        (window as any).gc();
      }

      setIsOptimized(true);
      measureMetrics();
    }, [config, measureMetrics]);

    const reset = useCallback(() => {
      setConfig(defaultConfig);
      setIsOptimized(false);
      setMetrics({
        bundleSize: 0,
        loadTime: 0,
        renderTime: 0,
        memoryUsage: 0,
        optimizationScore: 0,
      });
    }, []);

    const getOptimizationSuggestions = useCallback((): string[] => {
      const suggestions: string[] = [];

      if (metrics.bundleSize > config.maxBundleSize) {
        suggestions.push("Consider code splitting to reduce bundle size");
      }

      if (metrics.loadTime > 3000) {
        suggestions.push("Enable lazy loading and optimize critical resources");
      }

      if (metrics.renderTime > 100) {
        suggestions.push("Enable memoization and optimize component rendering");
      }

      if (metrics.memoryUsage > 50 * 1024 * 1024) {
        suggestions.push("Implement virtualization for large lists");
      }

      if (metrics.optimizationScore < 70) {
        suggestions.push(
          "Review and implement additional performance optimizations",
        );
      }

      return suggestions;
    }, [metrics, config]);

    useEffect(() => {
      measureMetrics();

      const interval = setInterval(measureMetrics, 5000);
      return () => clearInterval(interval);
    }, [measureMetrics]);

    const memoizedConfig = useMemo(() => config, [config]);

    return {
      config: memoizedConfig,
      metrics,
      isOptimized,
      updateConfig,
      optimize,
      reset,
      getOptimizationSuggestions,
    };
  };
