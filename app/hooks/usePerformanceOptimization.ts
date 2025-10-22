import React, { useCallback, useEffect, useRef, useState } from 'react';

interface UsePerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableMemoization?: boolean;
  enableVirtualization?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enableBundleAnalysis?: boolean;
}

interface UsePerformanceOptimizationReturn {
  isOptimized: boolean;
  optimizeComponent: (component: React.ComponentType) => React.ComponentType;
  optimizeRender: (fn: () => void) => void;
  enableOptimizations: () => void;
  disableOptimizations: () => void;
}

export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}): UsePerformanceOptimizationReturn => {
  const [isOptimized, setIsOptimized] = useState(false);
  const renderCountRef = useRef(0);

  const optimizeComponent = useCallback((component: React.ComponentType) => {
    return React.memo(component);
  }, []);

  const optimizeRender = useCallback((fn: () => void) => {
    if (isOptimized) {
      renderCountRef.current++;
      if (renderCountRef.current % 2 === 0) {
        fn();
      }
    } else {
      fn();
    }
  }, [isOptimized]);

  const enableOptimizations = useCallback(() => {
    setIsOptimized(true);
  }, []);

  const disableOptimizations = useCallback(() => {
    setIsOptimized(false);
  }, []);

  useEffect(() => {
    if (options.enableLazyLoading) {
      enableOptimizations();
    }
  }, [options.enableLazyLoading, enableOptimizations]);

  return {
    isOptimized,
    optimizeComponent,
    optimizeRender,
    enableOptimizations,
    disableOptimizations,
  };
};

export default usePerformanceOptimization;