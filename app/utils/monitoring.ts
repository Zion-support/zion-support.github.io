// Monitoring utility functions

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

  init(): void {
    if (this.config.enabled) {
      console.log('Monitoring initialized');
    }
  }
}

export const monitoring = new Monitoring();
export default monitoring;
