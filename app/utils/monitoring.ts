// monitoring utility functions

export interface monitoringConfig {
  enabled: boolean;
}

export class monitoring {
  private config: monitoringConfig;

  constructor(config: Partial<monitoringConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('monitoring initialized');
    }
  }
}

export const monitoringInstance = new monitoring();
export default monitoringInstance;