// PerformanceUtils utilities
export interface PerformanceUtilsConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultPerformanceUtilsConfig: PerformanceUtilsConfig = {
  enabled: true,
  options: {}
};
