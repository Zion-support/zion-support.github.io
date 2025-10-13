// performanceMetrics utility functions

export interface performanceMetricsConfig {
  enabled: boolean;
}

export class performanceMetrics {
  private config: performanceMetricsConfig;

  constructor(config: Partial<performanceMetricsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('performanceMetrics initialized');
    }
  }
}

export const performancemetrics = new performanceMetrics();
export default performancemetrics;