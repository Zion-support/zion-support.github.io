<<<<<<< HEAD
// Validators utility
export function Validators() {
  // Implementation coming soon
  return null;
}
=======
// validators utility functions

export interface ValidatorsConfig {
  enabled: boolean;
}

export class Validators {
  private config: ValidatorsConfig;

  constructor(config: Partial<ValidatorsConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('validators initialized');
    }
  }
}

export const validators = new Validators();
export default validators;
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
