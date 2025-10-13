// performanceEnhancer utility functions

export interface PerformanceEnhancerConfig {
  enabled: boolean;
}

export class PerformanceEnhancer {
  private config: PerformanceEnhancerConfig;

  constructor(config: Partial<PerformanceEnhancerConfig> = {}) {
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

export const performanceEnhancer = new PerformanceEnhancer();
export default performanceEnhancer;