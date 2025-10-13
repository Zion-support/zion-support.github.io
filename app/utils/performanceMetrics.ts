// performanceMetrics utility functions

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
      console.log('performanceMetrics initialized');
    }
  }
}

export const performanceMetrics = new PerformanceMetrics();
export default performanceMetrics;
