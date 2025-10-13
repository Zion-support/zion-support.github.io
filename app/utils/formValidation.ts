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

export const formValidation = new FormValidation();
export default formValidation;