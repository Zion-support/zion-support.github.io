// dataValidator utility functions

export interface DataValidatorConfig {
  enabled: boolean;
}

export class DataValidator {
  private config: DataValidatorConfig;

  constructor(config: Partial<DataValidatorConfig> = {}) {
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

export const dataValidator = new DataValidator();
export default dataValidator;