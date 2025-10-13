// analyticsTracker utility functions

export interface AnalyticsTrackerConfig {
  enabled: boolean;
}

export class AnalyticsTracker {
  private config: AnalyticsTrackerConfig;

  constructor(config: Partial<AnalyticsTrackerConfig> = {}) {
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

export const analyticsTracker = new AnalyticsTracker();
export default analyticsTracker;