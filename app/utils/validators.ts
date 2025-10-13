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

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

export const validators = new Validators();
export default validators;