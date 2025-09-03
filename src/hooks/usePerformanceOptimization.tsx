: src/hooks/usePerformanceOptimization.tsx interface PerformanceMetrics {
  loadTime: number;
   renderTime: number;
   memoryUsage: number;
   fps: number} interface UsePerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
   enableIntersectionObserver?: boolean;
   enableMemoryManagement?: boolean;
   enableFPSMonitoring?: boolean;
   : src/hooks/usePerformanceOptimization.tsx threshold?: number}  export threshold?: number} export const { enableLazyLoading = true, enableIntersectionObserver = true, enableMemoryManagement = true, enableFPSMonitoring = true, : src/hooks/usePerformanceOptimization.tsx threshold = 0.1} = options  threshold = 0.1} = options const metricsRef: useRef<PerformanceMetrics>({ loadTime: 0, renderTime: 0, memoryUsage: 0, fps: 0})
