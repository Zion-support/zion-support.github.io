import { useEffect, useRef, useState, useCallback } from 'react';

interface UseEnhancedPerformanceOptions {
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

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = { /* empty */ }) => {
  // Component name for performance tracking
  const componentName = options.component || 'Unknown';
  
  // Performance metrics state
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });
  
  // Refs for tracking
  const startTimeRef = useRef<number>(0);
  const renderStartRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);
  
  // Track component load time
  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current += 1;
    
    // Log component performance tracking
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
    
    // Call the functions
    measureLoadTime();
    measureRenderTime();
  }, [options.trackPerformance]);
  
  // Track memory usage
  useEffect(() => {
    if (options.trackPerformance && 'memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    }
  }, [options.trackPerformance]);
  
  // Track network latency
  useEffect(() => {
    if (options.trackPerformance) {
      const startTime = performance.now();
      
      fetch('/api/ping')
        .then(() => {
          const latency = performance.now() - startTime;
          setMetrics(prev => ({ ...prev, networkLatency: latency }));
        })
        .catch(() => {
          // Ignore network errors
        });
    }
  }, [options.trackPerformance]);
  
  // Track errors
  useEffect(() => {
    if (options.trackErrors) {
      const handleError = (error: ErrorEvent) => {
        console.error(`Error in ${componentName}:`, error);
      };
      
      const handleUnhandledRejection = (event: { reason: unknown }) => {
        console.error(`Unhandled promise rejection in ${componentName}:`, event.reason);
      };
      
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);
      
      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, [options.trackErrors, componentName]);
  
  // Track analytics
  useEffect(() => {
    if (options.trackAnalytics) {
      // Track component mount
      // console.log(`Component ${componentName} mounted`);
      
      return () => {
        // Track component unmount
        // console.log(`Component ${componentName} unmounted`);
      };
    }
  }, [options.trackAnalytics, componentName]);
  
  // Performance optimization callback
  const optimizePerformance = useCallback(() => {
    if (options.trackPerformance) {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg'
      ];
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }
  }, [options.trackPerformance]);
  
  return {
    metrics,
    optimizePerformance
  };
};