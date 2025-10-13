// formValidation utility functions

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
      console.log('formValidation initialized');
    }
  }
}

export const formValidation = new FormValidation();
export default formValidation;