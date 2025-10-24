// UsePerformanceMonitoringEnhanced utilities
export interface UsePerformanceMonitoringEnhancedConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUsePerformanceMonitoringEnhancedConfig: UsePerformanceMonitoringEnhancedConfig = {
  enabled: true,
  options: {}
};
