// Useperformance utilities and types

export interface UseperformanceConfig {
  enabled: boolean;
  options: Record<string, any>;
}

export const defaultUseperformanceConfig: UseperformanceConfig = {
  enabled: true,
  options: {}
};

export function initializeUseperformance(config: UseperformanceConfig) {
  // Implementation here
  return config;
}