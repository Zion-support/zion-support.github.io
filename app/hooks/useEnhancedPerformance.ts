import { useEffect, useRef, useState, useCallback } from 'react';

interface PerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const { component = 'unknown', trackErrors = true, trackPerformance = true, trackAnalytics = false } = options;
  
  // Use the options to avoid unused variable warnings
  console.log(`Performance monitoring for component: ${component}`, {
    trackErrors,
    trackPerformance,
    trackAnalytics
  });

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });

  const [isOptimized, setIsOptimized] = useState(false);
  const renderCountRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);

  // Error tracking
  useEffect(() => {
    if (!trackErrors) return;

    const handleError = (error: ErrorEvent) => {
      console.error(`Error in ${component}:`, error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error(`Unhandled promise rejection in ${component}:`, event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [component, trackErrors]);

  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current += 1;

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };

    // Measure memory usage
    const measureMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Measure network latency
    const measureNetworkLatency = () => {
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Fallback if ping endpoint doesn't exist
          setMetrics(prev => ({ ...prev, networkLatency: 0 }));
        });
    };

    // Run measurements based on options
    if (trackPerformance) {
      measureLoadTime();
      measureRenderTime();
      measureMemoryUsage();
      measureNetworkLatency();
    }

    // Check if performance is optimized
    const checkOptimization = () => {
      const isOptimized = 
        metrics.loadTime < 1000 && // Load time under 1 second
        metrics.renderTime < 16 && // Render time under 16ms (60fps)
        metrics.memoryUsage < 100 && // Memory usage under 100MB
        metrics.networkLatency < 200; // Network latency under 200ms
      setIsOptimized(isOptimized);
    };

    // Check optimization after metrics are updated
    const timeoutId = setTimeout(checkOptimization, 1000);

    return () => clearTimeout(timeoutId);
  }, [trackPerformance, metrics.loadTime, metrics.renderTime, metrics.memoryUsage, metrics.networkLatency]);

  const optimizePerformance = useCallback(() => {
    if (typeof document === 'undefined') return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.png',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);

  // Analytics tracking
  useEffect(() => {
    if (!trackAnalytics) return;

    // Track component performance metrics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        component_name: component,
        load_time: metrics.loadTime,
        render_time: metrics.renderTime,
        memory_usage: metrics.memoryUsage,
        network_latency: metrics.networkLatency,
        is_optimized: isOptimized,
      });
    }
  }, [component, metrics, isOptimized, trackAnalytics]);

  return {
    metrics,
    isOptimized,
    optimizePerformance,
    renderCount: renderCountRef.current,
  };
};
