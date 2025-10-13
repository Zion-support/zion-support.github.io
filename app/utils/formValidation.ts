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

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
}

// Export default instance
export const formValidation = new FormValidation();
