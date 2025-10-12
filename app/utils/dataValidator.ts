// Utility file: dataValidator

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

export class DataValidator {
  validate(data: Record<string, unknown>, rules: Record<string, ValidationRule>): ValidationResult {
    const errors: string[] = [];

    for (const [field, rule] of Object.entries(rules)) {
      const value = data[field];

      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} is required`);
        continue;
      }

      if (value === undefined || value === null) {
        continue;
      }

      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters long`);
      }

      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors.push(`${field} must be no more than ${rule.maxLength} characters long`);
      }

      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors.push(`${field} format is invalid`);
      }

      if (rule.custom && !rule.custom(value)) {
        errors.push(`${field} validation failed`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const dataValidator = new DataValidator();