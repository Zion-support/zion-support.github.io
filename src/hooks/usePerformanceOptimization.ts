// UsePerformanceOptimization utilities
export interface UsePerformanceOptimizationConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUsePerformanceOptimizationConfig: UsePerformanceOptimizationConfig = {
  enabled: true,
  options: {}
};
