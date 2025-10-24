// UsePerformanceMonitor utilities
export interface UsePerformanceMonitorConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultUsePerformanceMonitorConfig: UsePerformanceMonitorConfig = {
  enabled: true,
  options: {}
};
