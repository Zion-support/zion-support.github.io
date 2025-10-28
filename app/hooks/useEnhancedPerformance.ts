import { useEffect, useRef, useState } from 'react';

interface PerformanceOptions {
  component?: string;
  trackErrors?: boolean;
  trackPerformance?: boolean;
  trackAnalytics?: boolean;
}

export function useEnhancedPerformance(options: PerformanceOptions = {}) {
  const { component: _component = 'unknown' } = options;
  const [metrics, setMetrics] = useState({});
  const startTime = useRef(Date.now());

  useEffect(() => {
    const endTime = Date.now();
    const loadTime = endTime - startTime.current;
    
    setMetrics({
      loadTime,
      component: _component,
      timestamp: new Date().toISOString()
    });
  }, [_component]);

  return {
    metrics,
    component: _component
  };
}
