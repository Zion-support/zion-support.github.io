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

  init(): void {
    if (this.config.enabled) {
      console.log('performanceUtils initialized');
    }
  }
}

export const performanceUtils = new PerformanceUtils();
export default performanceUtils;
