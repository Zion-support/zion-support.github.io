// Form validation utility

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  email?: boolean;
  url?: boolean;
  custom?: (value: any) => boolean | string;
  message?: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export class FormValidation {
  private schema: ValidationSchema;

  constructor(schema: ValidationSchema) {
    this.schema = schema;
  }

  /**
   * Validate form data
   */
  validate(data: Record<string, any>): ValidationResult {
    const errors: ValidationError[] = [];

    for (const [field, rule] of Object.entries(this.schema)) {
      const value = data[field];
      const error = this.validateField(field, value, rule);
      
      if (error) {
        errors.push(error);
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate a single field
   */
  validateField(field: string, value: any, rule: ValidationRule): ValidationError | null {
    // Check required
    if (rule.required && (value === undefined || value === null || value === '')) {
      return {
        field,
        message: rule.message || `${field} is required`
      };
    }

    // Skip validation if value is not provided and not required
    if (value === undefined || value === null || value === '') {
      return null;
    }

    // String validations
    if (typeof value === 'string') {
      if (rule.minLength !== undefined && value.length < rule.minLength) {
        return {
          field,
          message: rule.message || `${field} must be at least ${rule.minLength} characters long`
        };
      }

      if (rule.maxLength !== undefined && value.length > rule.maxLength) {
        return {
          field,
          message: rule.message || `${field} must be at most ${rule.maxLength} characters long`
        };
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        return {
          field,
          message: rule.message || `${field} format is invalid`
        };
      }

      if (rule.email && !this.isValidEmail(value)) {
        return {
          field,
          message: rule.message || `${field} must be a valid email address`
        };
      }

      if (rule.url && !this.isValidUrl(value)) {
        return {
          field,
          message: rule.message || `${field} must be a valid URL`
        };
      }
    }

    // Number validations
    if (typeof value === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        return {
          field,
          message: rule.message || `${field} must be at least ${rule.min}`
        };
      }

      if (rule.max !== undefined && value > rule.max) {
        return {
          field,
          message: rule.message || `${field} must be at most ${rule.max}`
        };
      }
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value);
      if (result !== true) {
        return {
          field,
          message: typeof result === 'string' ? result : rule.message || `${field} is invalid`
        };
      }
    }

    return null;
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate URL format
   */
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get validation rules for a field
   */
  getFieldRules(field: string): ValidationRule | null {
    return this.schema[field] || null;
  }

  /**
   * Add validation rule for a field
   */
  addFieldRule(field: string, rule: ValidationRule): void {
    this.schema[field] = rule;
  }

  /**
   * Remove validation rule for a field
   */
  removeFieldRule(field: string): void {
    delete this.schema[field];
  }

  /**
   * Get all validation rules
   */
  getAllRules(): ValidationSchema {
    return { ...this.schema };
  }

  /**
   * Clear all validation rules
   */
  clearRules(): void {
    this.schema = {};
  }
}

export default FormValidation;