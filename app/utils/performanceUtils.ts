// performanceUtils utility functions

export interface PerformanceUtilsConfig {
  enabled: boolean;
}

export class PerformanceUtils {
  private config: PerformanceUtilsConfig;

  constructor(config: Partial<PerformanceUtilsConfig> = {}) {
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

export const performanceUtils = new PerformanceUtils();
export default performanceUtils;