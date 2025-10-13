// PerformanceMonitoring utility functions

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

  init(): void {
    if (this.config.enabled) {
      console.log('PerformanceMonitoring initialized');
    }
  }
}

export const performancemonitoring = new PerformanceMonitoring();
export default performancemonitoring;
