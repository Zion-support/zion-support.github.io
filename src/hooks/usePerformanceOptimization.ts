import { useEffect, useCallback, useRef } from 'react';
import { AdvancedPerformanceMonitor } from '../utils/advancedPerformanceMonitor';
import { performanceEnhancer } from '../utils/performanceEnhancements';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  errorCount: number;
}

interface UsePerformanceOptimizationReturn {
  getPerformanceMetrics: () => PerformanceMetrics;
  optimizePerformance: () => Promise<void>;
  clearMetrics: () => void;
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const monitor = useRef<AdvancedPerformanceMonitor | null>(null);
  const metrics = useRef<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    errorCount: 0
  });

  const getPerformanceMetrics = useCallback((): PerformanceMetrics => {
    return { ...metrics.current };
  }, []);

  const optimizePerformance = useCallback(async (): Promise<void> => {
    try {
      // Initialize performance monitor if not already done
      if (!monitor.current) {
        monitor.current = new AdvancedPerformanceMonitor();
        await monitor.current.initialize();
      }

      // Run performance optimizations
      await performanceEnhancer.optimizeImages();
      await performanceEnhancer.optimizeCSS();
      await performanceEnhancer.optimizeJavaScript();
      await performanceEnhancer.optimizeFonts();
      await performanceEnhancer.optimizeNetwork();

      // Update metrics
      if (monitor.current) {
        const currentMetrics = await monitor.current.getMetrics();
        metrics.current = {
          loadTime: currentMetrics.loadTime || 0,
          renderTime: currentMetrics.renderTime || 0,
          memoryUsage: currentMetrics.memoryUsage || 0,
          errorCount: currentMetrics.errorCount || 0
        };
      }
    } catch (error) {
      console.error('Performance optimization failed:', error);
      metrics.current.errorCount++;
    }
  }, []);

  const clearMetrics = useCallback((): void => {
    metrics.current = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      errorCount: 0
    };
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    const initializeMonitoring = async () => {
      try {
        monitor.current = new AdvancedPerformanceMonitor();
        await monitor.current.initialize();
        await monitor.current.startMonitoring();
      } catch (error) {
        console.error('Failed to initialize performance monitoring:', error);
      }
    };

    initializeMonitoring();

    return () => {
      if (monitor.current) {
        monitor.current.stopMonitoring();
      }
    };
  }, []);

  // Update metrics periodically
  useEffect(() => {
    const updateMetrics = async () => {
      if (monitor.current) {
        try {
          const currentMetrics = await monitor.current.getMetrics();
          metrics.current = {
            loadTime: currentMetrics.loadTime || 0,
            renderTime: currentMetrics.renderTime || 0,
            memoryUsage: currentMetrics.memoryUsage || 0,
            errorCount: currentMetrics.errorCount || 0
          };
        } catch (error) {
          console.error('Failed to update metrics:', error);
        }
      }
    };

    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return {
    getPerformanceMetrics,
    optimizePerformance,
    clearMetrics
  };
};