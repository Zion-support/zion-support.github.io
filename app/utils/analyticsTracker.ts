// analyticsTracker utility functions

export interface analyticsTrackerConfig {
  enabled: boolean;
}

export class analyticsTracker {
  private config: analyticsTrackerConfig;

  constructor(config: Partial<analyticsTrackerConfig> = {}) {
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

export const analyticstracker = new analyticsTracker();
export default analyticstracker;