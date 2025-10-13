import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export default usePerformanceMonitor;
