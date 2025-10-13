// Validators utility functions

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
      console.log('Validators initialized');
    }
  }
}

export const validators = new Validators();
export default validators;
