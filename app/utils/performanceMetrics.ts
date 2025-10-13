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

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const performanceMetrics = new PerformanceMetrics();
