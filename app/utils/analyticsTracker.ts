// AnalyticsTracker utility functions

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
      console.log('AnalyticsTracker initialized');
    }
  }
}

export const analyticstracker = new AnalyticsTracker();
export default analyticstracker;
