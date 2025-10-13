<<<<<<< HEAD
<<<<<<< HEAD
// logger utility functions

export interface loggerConfig {
  enabled: boolean;
}

export class logger {
  private config: loggerConfig;

  constructor(config: Partial<loggerConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// logger utility
export const logger = {
  // Utility implementation,
    init: () => {
    console.log('logger initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('logger initialized');
    }
  }
}

export const loggerInstance = new logger();
export default loggerInstance;
=======
// logger
export const logger = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
