<<<<<<< HEAD
<<<<<<< HEAD
// performanceUtils utility functions

export interface performanceUtilsConfig {
  enabled: boolean;
}

export class performanceUtils {
  private config: performanceUtilsConfig;

  constructor(config: Partial<performanceUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// performanceUtils utility
export const performanceUtils = {
  // Utility implementation,
    init: () => {
    console.log('performanceUtils initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('performanceUtils initialized');
    }
  }
}

export const performanceutils = new performanceUtils();
export default performanceutils;
=======
// performanceUtils
export const performanceUtils = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
