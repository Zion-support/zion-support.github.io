// PerformanceOptimizations utilities
export interface PerformanceOptimizationsConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultPerformanceOptimizationsConfig: PerformanceOptimizationsConfig = {
  enabled: true,
  options: {}
};
