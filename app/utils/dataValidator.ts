// dataValidator utility functions

export interface dataValidatorConfig {
  enabled: boolean;
}

export class dataValidator {
  private config: dataValidatorConfig;

  constructor(config: Partial<dataValidatorConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('dataValidator initialized');
    }
  }
}

export const datavalidator = new dataValidator();
export default datavalidator;
