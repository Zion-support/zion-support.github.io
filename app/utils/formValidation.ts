// FormValidation utility functions

export interface FormValidationConfig {
  enabled: boolean;
}

export class FormValidation {
  private config: FormValidationConfig;

  constructor(config: Partial<FormValidationConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('FormValidation initialized');
    }
  }
}

export const formvalidation = new FormValidation();
export default formvalidation;
