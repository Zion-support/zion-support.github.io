// PerformanceUtils utility functions

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

  init(): void {
    if (this.config.enabled) {
      console.log('PerformanceUtils initialized');
    }
  }
}

export const performanceutils = new PerformanceUtils();
export default performanceutils;
