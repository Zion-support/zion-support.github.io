// performanceMonitoring utility functions

export interface PerformanceMonitoringConfig {
  enabled: boolean;
}

export class PerformanceMonitoring {
  private config: PerformanceMonitoringConfig;

  constructor(config: Partial<PerformanceMonitoringConfig> = {}) {
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
export const performanceMonitoring = new PerformanceMonitoring();
