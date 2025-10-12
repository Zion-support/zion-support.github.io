// Utility file: validators

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class Validators {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  validateURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  validateRequired(value: unknown): boolean {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  }

  validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  validatePattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  validateField(value: unknown, rules: ValidationRule, fieldName: string): string | null {
    if (rules.required && !this.validateRequired(value)) {
      return `${fieldName} is required`;
    }

    if (typeof value === 'string') {
      if (rules.minLength && !this.validateMinLength(value, rules.minLength)) {
        return `${fieldName} must be at least ${rules.minLength} characters long`;
      }

      if (rules.maxLength && !this.validateMaxLength(value, rules.maxLength)) {
        return `${fieldName} must be no more than ${rules.maxLength} characters long`;
      }

      if (rules.pattern && !this.validatePattern(value, rules.pattern)) {
        return `${fieldName} format is invalid`;
      }
    }

    if (rules.custom && !rules.custom(value)) {
      return `${fieldName} validation failed`;
    }

    return null;
  }

  validateForm(data: Record<string, unknown>, rules: Record<string, ValidationRule>): ValidationResult {
    const errors: string[] = [];

    for (const [fieldName, fieldRules] of Object.entries(rules)) {
      const value = data[fieldName];
      const error = this.validateField(value, fieldRules, fieldName);
      if (error) {
        errors.push(error);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const validators = new Validators();