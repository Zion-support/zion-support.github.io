import { useEffect, useState, useRef } from 'react';

// Simple web vitals reporter
const reportWebVitals = (metric: { name: string; value: number; delta: number }) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric);
  }
  // In production, you might want to send this to an analytics service
};

// Hook for monitoring Core Web Vitals
export const useWebVitals = () => {
  useEffect(() => {
    // Import web-vitals dynamically
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onFCP(reportWebVitals);
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
    });
  }, []);
};

// Hook for intersection observer
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      options
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);
  
  return [ref, isIntersecting, hasIntersected] as const;
};

// Hook for measuring component render time
export const useRenderTime = (componentName: string) => {
  const renderStart = useRef<number>(0);
  
  useEffect(() => {
    renderStart.current = performance.now();
  });
  
  useEffect(() => {
    const renderTime = performance.now() - renderStart.current;
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }
  });
};

// Hook for lazy loading with performance tracking
export const useLazyLoad = (threshold: number = 0.1) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold
  });
  
  useEffect(() => {
    if (isIntersecting && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isIntersecting, shouldLoad]);
  
  return [ref, shouldLoad] as const;
};