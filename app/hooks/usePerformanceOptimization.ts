import { useCallback, useEffect, useState } from 'react';

interface UsePerformanceOptimizationOptions {
  enabled?: boolean;
  threshold?: number;
  enableLazyLoading?: boolean;
  enableMemoization?: boolean;
  enableVirtualization?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enableBundleAnalysis?: boolean;
}

interface OptimizationState {
  lazyLoading: boolean;
  memoization: boolean;
  virtualization: boolean;
  preloading: boolean;
  codeSplitting: boolean;
  imageOptimization: boolean;
  bundleAnalysis: boolean;
}

export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {
  const [optimizations, setOptimizations] = useState<OptimizationState>({
    lazyLoading: false,
    memoization: false,
    virtualization: false,
    preloading: false,
    codeSplitting: false,
    imageOptimization: false,
    bundleAnalysis: false,
  });
  
  const enableOptimizations = useCallback(() => {
    setOptimizations(prev => ({
      ...prev,
      lazyLoading: options.enableLazyLoading || false,
      memoization: options.enableMemoization || false,
      virtualization: options.enableVirtualization || false,
      preloading: options.enablePreloading || false,
      codeSplitting: options.enableCodeSplitting || false,
      imageOptimization: options.enableImageOptimization || false,
      bundleAnalysis: options.enableBundleAnalysis || false,
    }));
  }, [options]);

  const init = useCallback(() => {
    if (options.enabled !== false) {
      enableOptimizations();
    }
  }, [options.enabled, enableOptimizations]);

  useEffect(() => {
    if (options.enableLazyLoading) {
      enableOptimizations();
    }
  }, [options.enableLazyLoading, enableOptimizations]);

  return {
    optimizations,
    setOptimizations,
    enableOptimizations,
    init
  };
};

export default usePerformanceOptimization;