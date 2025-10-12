// Utility file: formValidation

export interface FormField {
  name: string;
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: string) => string | null;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export class FormValidator {
  validateField(field: FormField): string | null {
    const { name, value, required, minLength, maxLength, pattern, customValidator } = field;

    if (required && (!value || value.trim() === '')) {
      return `${name} is required`;
    }

    if (value && minLength && value.length < minLength) {
      return `${name} must be at least ${minLength} characters long`;
    }

    if (value && maxLength && value.length > maxLength) {
      return `${name} must be no more than ${maxLength} characters long`;
    }

    if (value && pattern && !pattern.test(value)) {
      return `${name} format is invalid`;
    }

    if (value && customValidator) {
      return customValidator(value);
    }

    return null;
  }

  validateForm(fields: FormField[]): FormValidationResult {
    const errors: Record<string, string> = {};
    let isValid = true;

    fields.forEach(field => {
      const error = this.validateField(field);
      if (error) {
        errors[field.name] = error;
        isValid = false;
      }
    });

    return { isValid, errors };
  }
}

export const formValidator = new FormValidator();