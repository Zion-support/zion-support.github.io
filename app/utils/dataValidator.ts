// Data validator utility

export interface ValidationRule {
  type: 'string' | 'number' | 'boolean' | 'array' | 'object' | 'email' | 'url' | 'date';
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  enum?: any[];
  custom?: (value: any) => boolean | string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule | ValidationSchema;
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

export class DataValidator {
  private schema: ValidationSchema;

  constructor(schema: ValidationSchema) {
    this.schema = schema;
  }

  /**
   * Validate data against schema
   */
  validate(data: any, path: string = ''): ValidationResult {
    const errors: ValidationError[] = [];
    
    this.validateObject(data, this.schema, path, errors);
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate a single field
   */
  validateField(field: string, value: any): ValidationResult {
    const rule = this.getFieldRule(field);
    if (!rule) {
      return { valid: true, errors: [] };
    }

    const errors: ValidationError[] = [];
    this.validateValue(field, value, rule, errors);
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate object recursively
   */
  private validateObject(data: any, schema: ValidationSchema, path: string, errors: ValidationError[]): void {
    if (typeof data !== 'object' || data === null) {
      return;
    }

    for (const [key, rule] of Object.entries(schema)) {
      const fieldPath = path ? `${path}.${key}` : key;
      const value = data[key];

      if (this.isValidationRule(rule)) {
        this.validateValue(fieldPath, value, rule, errors);
      } else {
        // Nested object validation
        if (value && typeof value === 'object') {
          this.validateObject(value, rule as ValidationSchema, fieldPath, errors);
        }
      }
    }
  }

  /**
   * Validate a single value
   */
  private validateValue(field: string, value: any, rule: ValidationRule, errors: ValidationError[]): void {
    // Check required
    if (rule.required && (value === undefined || value === null)) {
      errors.push({
        field,
        message: `${field} is required`,
        value
      });
      return;
    }

    // Skip validation if value is not provided and not required
    if (value === undefined || value === null) {
      return;
    }

    // Type validation
    if (!this.validateType(value, rule.type)) {
      errors.push({
        field,
        message: `${field} must be of type ${rule.type}`,
        value
      });
      return;
    }

    // String validations
    if (rule.type === 'string' && typeof value === 'string') {
      if (rule.min !== undefined && value.length < rule.min) {
        errors.push({
          field,
          message: `${field} must be at least ${rule.min} characters long`,
          value
        });
      }
      
      if (rule.max !== undefined && value.length > rule.max) {
        errors.push({
          field,
          message: `${field} must be at most ${rule.max} characters long`,
          value
        });
      }
      
      if (rule.pattern && !rule.pattern.test(value)) {
        errors.push({
          field,
          message: `${field} format is invalid`,
          value
        });
      }
    }

    // Number validations
    if (rule.type === 'number' && typeof value === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        errors.push({
          field,
          message: `${field} must be at least ${rule.min}`,
          value
        });
      }
      
      if (rule.max !== undefined && value > rule.max) {
        errors.push({
          field,
          message: `${field} must be at most ${rule.max}`,
          value
        });
      }
    }

    // Array validations
    if (rule.type === 'array' && Array.isArray(value)) {
      if (rule.min !== undefined && value.length < rule.min) {
        errors.push({
          field,
          message: `${field} must have at least ${rule.min} items`,
          value
        });
      }
      
      if (rule.max !== undefined && value.length > rule.max) {
        errors.push({
          field,
          message: `${field} must have at most ${rule.max} items`,
          value
        });
      }
    }

    // Enum validation
    if (rule.enum && !rule.enum.includes(value)) {
      errors.push({
        field,
        message: `${field} must be one of: ${rule.enum.join(', ')}`,
        value
      });
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value);
      if (result !== true) {
        errors.push({
          field,
          message: typeof result === 'string' ? result : `${field} is invalid`,
          value
        });
      }
    }
  }

  /**
   * Validate type
   */
  private validateType(value: any, type: string): boolean {
    switch (type) {
      case 'string':
        return typeof value === 'string';
      case 'number':
        return typeof value === 'number' && !isNaN(value);
      case 'boolean':
        return typeof value === 'boolean';
      case 'array':
        return Array.isArray(value);
      case 'object':
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      case 'email':
        return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'url':
        return typeof value === 'string' && /^https?:\/\/.+/.test(value);
      case 'date':
        return value instanceof Date || !isNaN(Date.parse(value));
      default:
        return true;
    }
  }

  /**
   * Get field rule from schema
   */
  private getFieldRule(field: string): ValidationRule | null {
    const keys = field.split('.');
    let current = this.schema;
    
    for (const key of keys) {
      if (current[key] && typeof current[key] === 'object') {
        current = current[key] as ValidationSchema;
      } else {
        return null;
      }
    }
    
    return this.isValidationRule(current) ? current : null;
  }

  /**
   * Check if object is a validation rule
   */
  private isValidationRule(obj: any): obj is ValidationRule {
    return obj && typeof obj === 'object' && 'type' in obj;
  }
}

export default DataValidator;