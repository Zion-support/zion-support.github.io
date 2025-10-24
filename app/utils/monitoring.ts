// monitoring - Placeholder file
export interface monitoringConfig {
  enabled: boolean;
  options?: Record<string, unknown>;
}

export const defaultmonitoringConfig: monitoringConfig = {
  enabled: true,
  options: {}
};
