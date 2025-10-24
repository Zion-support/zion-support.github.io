// UseEnhancedPerformance utilities
export interface UseEnhancedPerformanceConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUseEnhancedPerformanceConfig: UseEnhancedPerformanceConfig = {
  enabled: true,
  options: {}
};
