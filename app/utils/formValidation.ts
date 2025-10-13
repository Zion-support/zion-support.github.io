// formValidation utility functions

export interface formValidationConfig {
  enabled: boolean;
}

export class formValidation {
  private config: formValidationConfig;

  constructor(config: Partial<formValidationConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('formValidation initialized');
    }
  }
}

export const formvalidation = new formValidation();
export default formvalidation;
