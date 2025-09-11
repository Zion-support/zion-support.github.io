import { useEffect, useRef, useCallback, useState } from 'react';

interface PerformanceOptions {
  measureRender?: boolean;
  measureInteraction?: boolean;
  logMetrics?: boolean;
}

export const usePerformance = (componentName: string, options: PerformanceOptions = {}) => {
  const { measureRender = true, measureInteraction = true, logMetrics = false } = options;
  const renderStartTime = useRef<number>(0);
  const [metrics, setMetrics] = useState<{
    renderTime: number;
    interactionCount: number;
    lastInteractionTime: number;
  }>({
    renderTime: 0,
    interactionCount: 0,
    lastInteractionTime: 0,
  });

  // Measure render performance
  useEffect(() => {
    if (measureRender) {
      renderStartTime.current = performance.now();
      
      const measureRenderTime = () => {
        const renderTime = performance.now() - renderStartTime.current;
        setMetrics(prev => ({ ...prev, renderTime }));
        
        if (logMetrics) {
          console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
        }
      };

      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(measureRenderTime);
    }
  }, [componentName, measureRender, logMetrics]);

  // Track interactions
  const trackInteraction = useCallback((interactionType: string) => {
    if (measureInteraction) {
      setMetrics(prev => ({
        ...prev,
        interactionCount: prev.interactionCount + 1,
        lastInteractionTime: performance.now(),
      }));

      if (logMetrics) {
        console.log(`${componentName} interaction: ${interactionType}`);
      }
    }
  }, [componentName, measureInteraction, logMetrics]);

  // Debounce function for performance
  const debounce = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    const timeoutRef = useRef<NodeJS.Timeout>();
    
    return (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }, []);

  // Throttle function for performance
  const throttle = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    const lastCallRef = useRef<number>(0);
    
    return (...args: Parameters<T>) => {
      const now = performance.now();
      
      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        func(...args);
      }
    };
  }, []);

  // Memoize expensive calculations
  const useMemoizedValue = useCallback(<T>(
    factory: () => T,
    deps: React.DependencyList
  ): T => {
    return useMemo(factory, deps);
  }, []);

  return {
    metrics,
    trackInteraction,
    debounce,
    throttle,
    useMemoizedValue,
  };
};

export default usePerformance;