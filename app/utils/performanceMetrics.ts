<<<<<<< HEAD
<<<<<<< HEAD
// performanceMetrics utility functions

export interface performanceMetricsConfig {
  enabled: boolean;
}

export class performanceMetrics {
  private config: performanceMetricsConfig;

  constructor(config: Partial<performanceMetricsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// performanceMetrics utility
export const performanceMetrics = {
  // Utility implementation,
    init: () => {
    console.log('performanceMetrics initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('performanceMetrics initialized');
    }
  }
}

export const performancemetrics = new performanceMetrics();
export default performancemetrics;
=======
// performanceMetrics
export const performanceMetrics = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
