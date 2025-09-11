import { useRef, useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface UsePerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enableMemoryManagement?: boolean;
  enableFPSMonitoring?: boolean;
  threshold?: number;
}

export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {
  const {
    enableLazyLoading = true,
    enableIntersectionObserver = true,
    enableMemoryManagement = true,
    enableFPSMonitoring = true,
    threshold = 0.1
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure load time
    const measureLoadTime = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        metricsRef.current.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      }
    };

    // FPS monitoring
    let lastTime = performance.now();
    let frameCount = 0;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        metricsRef.current.fps = fps;
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (enableFPSMonitoring) {
        requestAnimationFrame(measureFPS);
      }
    };

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (enableLazyLoading) {
              // Trigger lazy loading logic here
              console.log('Element is visible, loading content...');
            }
          }
        });
      },
      { threshold }
    );

    // Memory management
    const cleanup = () => {
      if (enableMemoryManagement) {
        // Force garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    };

    // Initialize measurements
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureMemoryUsage();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureMemoryUsage();
      });
    }

    if (enableFPSMonitoring) {
      measureFPS();
    }

    // Cleanup
    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [enableLazyLoading, enableIntersectionObserver, enableMemoryManagement, enableFPSMonitoring, threshold, fps]);

  return {
    metrics: metricsRef.current,
    isVisible,
    fps,
    isGoodPerformance: fps > 30 && metricsRef.current.loadTime < 2000,
    isSlowPerformance: fps < 15 || metricsRef.current.loadTime > 5000
  };
};