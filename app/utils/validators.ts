<<<<<<< HEAD
<<<<<<< HEAD
// validators utility functions

export interface validatorsConfig {
  enabled: boolean;
}

export class validators {
  private config: validatorsConfig;

  constructor(config: Partial<validatorsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
=======

// validators utility
export const validators = {
  // Utility implementation,
    init: () => {
    console.log('validators initialized');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  }

  init(): void {
    if (this.config.enabled) {
      console.log('validators initialized');
    }
  }
}

export const validatorsInstance = new validators();
export default validatorsInstance;
=======
// validators
export const validators = () => {
  // Utility function implementation
  return null;
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
