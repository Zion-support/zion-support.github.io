// Monitoring utilities
export interface MonitoringConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultMonitoringConfig: MonitoringConfig = {
  enabled: true,
  options: {}
};
