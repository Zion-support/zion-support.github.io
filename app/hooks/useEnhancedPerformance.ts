import { useEffect, useRef } from 'react';

interface UseEnhancedPerformanceOptions {
  trackAnalytics?: boolean;
  componentName?: string;
}

export function useEnhancedPerformance(options: UseEnhancedPerformanceOptions = {}) {
  const { trackAnalytics = false, componentName = 'Component' } = options;
  const renderCountRef = useRef<number>(0);

  useEffect(() => {
    renderCountRef.current += 1;
    
    if (trackAnalytics) {
      // Track component mount
      console.log(`${componentName} mounted`);
    }
  }, [trackAnalytics, componentName]);

  return {
    renderCount: renderCountRef.current,
  };
}