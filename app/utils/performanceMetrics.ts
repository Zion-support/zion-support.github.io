// PerformanceMetrics utility functions

export interface PerformanceMetricsConfig {
  enabled: boolean;
}

export class PerformanceMetrics {
  private config: PerformanceMetricsConfig;

  constructor(config: Partial<PerformanceMetricsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('PerformanceMetrics initialized');
    }
  }
}

export const performancemetrics = new PerformanceMetrics();
export default performancemetrics;
