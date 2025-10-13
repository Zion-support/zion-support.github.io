// DataValidator utility functions

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

  init(): void {
    if (this.config.enabled) {
      console.log('DataValidator initialized');
    }
  }
}

export const datavalidator = new DataValidator();
export default datavalidator;
