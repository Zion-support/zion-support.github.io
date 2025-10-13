// monitoring utility functions

export interface MonitoringConfig {
  enabled: boolean;
}

export class Monitoring {
  private config: MonitoringConfig;

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const monitoring = new Monitoring();
