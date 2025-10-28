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

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const {
    component: componentName = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = false
  } = options;

  // Performance metrics state
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });
  
  // Refs for tracking
  const _startTimeRef = useRef<number>(0);
  const _renderStartRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);
  const renderCountRef = useRef<number>(0);
  
  // Track component load time
  useEffect(() => {
    mountTimeRef.current = performance.now();
    renderCountRef.current += 1;
    
    // Log component performance tracking
    // Measure load time
    const _measureLoadTime = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
    };

    // Measure render time
    const _measureRenderTime = () => {
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - renderStart;
        setMetrics(prev => ({ ...prev, renderTime }));
      });
    };
    
    // Call the functions
    _measureLoadTime();
    _measureRenderTime();
  }, [trackPerformance]);
  
  // Track memory usage
  useEffect(() => {
    if (trackPerformance && 'memory' in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024
        }));
      }
    }
  }, [trackPerformance]);
  
  // Track network latency
  useEffect(() => {
    if (trackPerformance) {
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
  }, [trackPerformance]);
  
  // Track errors
  useEffect(() => {
    if (trackErrors) {
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
  }, [trackErrors, componentName]);
  
  // Track analytics
  useEffect(() => {
    if (trackAnalytics) {
      // Track component mount
      // console.log(`Component ${componentName} mounted`);
      
      return () => {
        // Track component unmount
        // console.log(`Component ${componentName} unmounted`);
      };
    }
  }, [trackAnalytics, componentName]);
  
  // Performance optimization callback
  const optimizePerformance = useCallback(() => {
    // Implement performance optimizations
    if (typeof window !== 'undefined') {
      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
      
      // Optimize fonts
      const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
      fontLinks.forEach(link => {
        link.setAttribute('crossorigin', 'anonymous');
      });
    }
  }, []);
  
  return {
    metrics,
    optimizePerformance,
    componentName,
    mountTime: mountTimeRef.current,
    renderCount: renderCountRef.current
  };
};