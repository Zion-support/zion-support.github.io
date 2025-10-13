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

  init(): void {
    if (this.config.enabled) {
      console.log('analyticsTracker initialized');
    }
  }
}

export const analyticsTracker = new AnalyticsTracker();
export default analyticsTracker;
