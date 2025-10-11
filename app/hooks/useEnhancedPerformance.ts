import { useRef, useEffect } from 'react';

interface UseEnhancedPerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}

export function useEnhancedPerformance(options: UseEnhancedPerformanceOptions = {}) {
  const {
    component = 'Unknown',
    trackErrors = true,
    trackPerformance = true,
    trackAnalytics = true,
  } = options;

  const renderCountRef = useRef<number>(0);
  const mountTimeRef = useRef<number>(0);

  useEffect(() => {
    renderCountRef.current = 0;
    mountTimeRef.current = performance.now();

    // Track component mount
    if (trackAnalytics) {
      console.log('Component mounted:', component);
    }

    return () => {
      // Track component unmount duration
      if (trackPerformance) {
        const duration = performance.now() - mountTimeRef.current;
        console.log('Component unmounted:', component, 'Duration:', duration);
      }
    };
  }, [component, trackPerformance, trackAnalytics]);

  return {
    renderCount: renderCountRef.current,
    trackError: (error: Error) => {
      if (trackErrors) {
        console.error('Component error:', component, error);
      }
    },
  };
}