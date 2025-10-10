// Environment validator utility

export interface EnvValidationRule {
  type: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'json' | 'array' | 'object';
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  enum?: any[];
  custom?: (value: string) => boolean | string;
}

export interface EnvValidationSchema {
  [key: string]: EnvValidationRule;
}

export interface EnvValidationResult {
  valid: boolean;
  errors: EnvValidationError[];
  warnings: EnvValidationWarning[];
}

export interface EnvValidationError {
  key: string;
  message: string;
  value?: string;
  rule?: string;
}

export interface EnvValidationWarning {
  key: string;
  message: string;
  value?: string;
  suggestion?: string;
}

export class EnvValidator {
  private schema: EnvValidationSchema;
  private prefix: string;

  constructor(schema: EnvValidationSchema, prefix: string = 'REACT_APP_') {
    this.schema = schema;
    this.prefix = prefix;
  }

  /**
   * Validate environment variables
   */
  validate(env: Record<string, string | undefined> = process.env): EnvValidationResult {
    const errors: EnvValidationError[] = [];
    const warnings: EnvValidationWarning[] = [];

    for (const [key, rule] of Object.entries(this.schema)) {
      const envKey = `${this.prefix}${key}`;
      const value = env[envKey];

      // Check required
      if (rule.required && (value === undefined || value === '')) {
        errors.push({
          key,
          message: `Required environment variable ${envKey} is not set`,
          rule: 'required'
        });
        continue;
      }

      // Skip validation if value is not provided and not required
      if (value === undefined || value === '') {
        continue;
      }

      // Type validation
      const typeError = this.validateType(key, value, rule.type);
      if (typeError) {
        errors.push(typeError);
        continue;
      }

      // String validations
      if (rule.type === 'string') {
        const stringError = this.validateString(key, value, rule);
        if (stringError) {
          errors.push(stringError);
        }
      }

      // Number validations
      if (rule.type === 'number') {
        const numberError = this.validateNumber(key, value, rule);
        if (numberError) {
          errors.push(numberError);
        }
      }

      // Array validations
      if (rule.type === 'array') {
        const arrayError = this.validateArray(key, value, rule);
        if (arrayError) {
          errors.push(arrayError);
        }
      }

      // Object validations
      if (rule.type === 'object') {
        const objectError = this.validateObject(key, value, rule);
        if (objectError) {
          errors.push(objectError);
        }
      }

      // Enum validation
      if (rule.enum && !rule.enum.includes(value)) {
        errors.push({
          key,
          message: `${envKey} must be one of: ${rule.enum.join(', ')}`,
          value,
          rule: 'enum'
        });
      }

      // Custom validation
      if (rule.custom) {
        const result = rule.custom(value);
        if (result !== true) {
          errors.push({
            key,
            message: typeof result === 'string' ? result : `${envKey} is invalid`,
            value,
            rule: 'custom'
          });
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate type
   */
  private validateType(key: string, value: string, type: string): EnvValidationError | null {
    switch (type) {
      case 'string':
        return null; // All values are strings in env
      case 'number':
        if (isNaN(Number(value))) {
          return {
            key,
            message: `${this.prefix}${key} must be a number`,
            value,
            rule: 'type'
          };
        }
        return null;
      case 'boolean':
        if (!['true', 'false', '1', '0', 'yes', 'no', 'on', 'off'].includes(value.toLowerCase())) {
          return {
            key,
            message: `${this.prefix}${key} must be a boolean (true/false, 1/0, yes/no, on/off)`,
            value,
            rule: 'type'
          };
        }
        return null;
      case 'url':
        try {
          new URL(value);
          return null;
        } catch {
          return {
            key,
            message: `${this.prefix}${key} must be a valid URL`,
            value,
            rule: 'type'
          };
        }
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return {
            key,
            message: `${this.prefix}${key} must be a valid email`,
            value,
            rule: 'type'
          };
        }
        return null;
      case 'json':
        try {
          JSON.parse(value);
          return null;
        } catch {
          return {
            key,
            message: `${this.prefix}${key} must be valid JSON`,
            value,
            rule: 'type'
          };
        }
      case 'array':
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed)) {
            return {
              key,
              message: `${this.prefix}${key} must be a valid JSON array`,
              value,
              rule: 'type'
            };
          }
          return null;
        } catch {
          return {
            key,
            message: `${this.prefix}${key} must be valid JSON array`,
            value,
            rule: 'type'
          };
        }
      case 'object':
        try {
          const parsed = JSON.parse(value);
          if (typeof parsed !== 'object' || Array.isArray(parsed)) {
            return {
              key,
              message: `${this.prefix}${key} must be a valid JSON object`,
              value,
              rule: 'type'
            };
          }
          return null;
        } catch {
          return {
            key,
            message: `${this.prefix}${key} must be valid JSON object`,
            value,
            rule: 'type'
          };
        }
      default:
        return null;
    }
  }

  /**
   * Validate string
   */
  private validateString(key: string, value: string, rule: EnvValidationRule): EnvValidationError | null {
    if (rule.min !== undefined && value.length < rule.min) {
      return {
        key,
        message: `${this.prefix}${key} must be at least ${rule.min} characters long`,
        value,
        rule: 'min'
      };
    }

    if (rule.max !== undefined && value.length > rule.max) {
      return {
        key,
        message: `${this.prefix}${key} must be at most ${rule.max} characters long`,
        value,
        rule: 'max'
      };
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return {
        key,
        message: `${this.prefix}${key} format is invalid`,
        value,
        rule: 'pattern'
      };
    }

    return null;
  }

  /**
   * Validate number
   */
  private validateNumber(key: string, value: string, rule: EnvValidationRule): EnvValidationError | null {
    const num = Number(value);

    if (rule.min !== undefined && num < rule.min) {
      return {
        key,
        message: `${this.prefix}${key} must be at least ${rule.min}`,
        value,
        rule: 'min'
      };
    }

    if (rule.max !== undefined && num > rule.max) {
      return {
        key,
        message: `${this.prefix}${key} must be at most ${rule.max}`,
        value,
        rule: 'max'
      };
    }

    return null;
  }

  /**
   * Validate array
   */
  private validateArray(key: string, value: string, rule: EnvValidationRule): EnvValidationError | null {
    try {
      const array = JSON.parse(value);
      
      if (rule.min !== undefined && array.length < rule.min) {
        return {
          key,
          message: `${this.prefix}${key} must have at least ${rule.min} items`,
          value,
          rule: 'min'
        };
      }

      if (rule.max !== undefined && array.length > rule.max) {
        return {
          key,
          message: `${this.prefix}${key} must have at most ${rule.max} items`,
          value,
          rule: 'max'
        };
      }

      return null;
    } catch {
      return {
        key,
        message: `${this.prefix}${key} must be valid JSON array`,
        value,
        rule: 'type'
      };
    }
  }

  /**
   * Validate object
   */
  private validateObject(key: string, value: string, rule: EnvValidationRule): EnvValidationError | null {
    try {
      const obj = JSON.parse(value);
      
      if (rule.min !== undefined && Object.keys(obj).length < rule.min) {
        return {
          key,
          message: `${this.prefix}${key} must have at least ${rule.min} properties`,
          value,
          rule: 'min'
        };
      }

      if (rule.max !== undefined && Object.keys(obj).length > rule.max) {
        return {
          key,
          message: `${this.prefix}${key} must have at most ${rule.max} properties`,
          value,
          rule: 'max'
        };
      }

      return null;
    } catch {
      return {
        key,
        message: `${this.prefix}${key} must be valid JSON object`,
        value,
        rule: 'type'
      };
    }
  }

  /**
   * Get validation summary
   */
  getSummary(result: EnvValidationResult): {
    totalKeys: number;
    validKeys: number;
    invalidKeys: number;
    errorCount: number;
    warningCount: number;
  } {
    const totalKeys = Object.keys(this.schema).length;
    const invalidKeys = new Set(result.errors.map(e => e.key)).size;
    const validKeys = totalKeys - invalidKeys;

    return {
      totalKeys,
      validKeys,
      invalidKeys,
      errorCount: result.errors.length,
      warningCount: result.warnings.length
    };
  }
}

export default EnvValidator;