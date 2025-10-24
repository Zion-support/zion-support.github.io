// UsePerformanceMonitoring utilities
export interface UsePerformanceMonitoringConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUsePerformanceMonitoringConfig: UsePerformanceMonitoringConfig = {
  enabled: true,
  options: {}
};
