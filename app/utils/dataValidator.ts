/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */

import { errorTracking, ErrorCategory, ErrorSeverity } from './errorTracking';

export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public errors: string[]
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DataValidator {
  private static instance: DataValidator;

  private constructor() {}

  static getInstance(): DataValidator {
    if (!DataValidator.instance) {
      DataValidator.instance = new DataValidator();
    }
    return DataValidator.instance;
  }

  /**
   * Validate email address
   */
  isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate URL
   */
  isURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validate phone number (US format)
   */
  isPhoneNumber(phone: string): boolean {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Validate string length
   */
  hasLength(value: string, min: number, max?: number): boolean {
    if (value.length < min) return false;
    if (max && value.length > max) return false;
    return true;
  }

  /**
   * Validate required field
   */
  isRequired(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  }

  /**
   * Validate number range
   */
  isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  /**
   * Validate array
   */
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  /**
   * Validate object
   */
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  /**
   * Validate string pattern
   */
  matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  /**
   * Validate credit card number (basic Luhn algorithm)
   */
  isCreditCard(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\s/g, '');
    
    if (!/^\d+$/.test(cleaned)) return false;
    if (cleaned.length < 13 || cleaned.length > 19) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i], 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }

  /**
   * Validate date
   */
  isDate(value: unknown): boolean {
    if (value instanceof Date) {
      return !isNaN(value.getTime());
    }
    
    if (typeof value === 'string') {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }

    return false;
  }

  /**
   * Validate date range
   */
  isDateInRange(date: Date, min?: Date, max?: Date): boolean {
    if (!this.isDate(date)) return false;
    
    const time = date.getTime();
    
    if (min && time < min.getTime()) return false;
    if (max && time > max.getTime()) return false;

    return true;
  }

  /**
   * Sanitize HTML to prevent XSS
   */
  sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  /**
   * Validate against custom rules
   */
  validate<T>(
    value: T,
    rules: ValidationRule<T>[],
    fieldName?: string
  ): ValidationResult {
    const errors: string[] = [];

    for (const rule of rules) {
      if (!rule.validate(value)) {
        errors.push(rule.message);
      }
    }

    const valid = errors.length === 0;

    // Track validation errors
    if (!valid && fieldName) {
      errorTracking.trackError(
        new ValidationError(
          `Validation failed for ${fieldName}`,
          fieldName,
          errors
        ),
        {
          category: ErrorCategory.VALIDATION,
          severity: ErrorSeverity.LOW,
          context: {
            field: fieldName,
            errors,
          },
        }
      );
    }

    return { valid, errors };
  }

  /**
   * Validate form data
   */
  validateForm<T extends Record<string, unknown>>(
    data: T,
    schema: Record<keyof T, ValidationRule<T[keyof T]>[]>
  ): Record<keyof T, ValidationResult> {
    const results = {} as Record<keyof T, ValidationResult>;

    for (const field in schema) {
      const value = data[field];
      const rules = schema[field];
      results[field] = this.validate(value, rules, String(field));
    }

    return results;
  }

  /**
   * Check if form validation results are all valid
   */
  isFormValid<T extends Record<string, unknown>>(
    results: Record<keyof T, ValidationResult>
  ): boolean {
    return Object.values(results).every((result) => result.valid);
  }

  /**
   * Create common validation rules
   */
  rules = {
    required: <T>(): ValidationRule<T> => ({
      validate: (value: T) => this.isRequired(value),
      message: 'This field is required',
    }),

    email: (): ValidationRule<string> => ({
      validate: (value: string) => this.isEmail(value),
      message: 'Please enter a valid email address',
    }),

    url: (): ValidationRule<string> => ({
      validate: (value: string) => this.isURL(value),
      message: 'Please enter a valid URL',
    }),

    minLength: (min: number): ValidationRule<string> => ({
      validate: (value: string) => this.hasLength(value, min),
      message: `Must be at least ${min} characters long`,
    }),

    maxLength: (max: number): ValidationRule<string> => ({
      validate: (value: string) => !value || value.length <= max,
      message: `Must be no more than ${max} characters long`,
    }),

    pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({
      validate: (value: string) => this.matchesPattern(value, pattern),
      message,
    }),

    range: (min: number, max: number): ValidationRule<number> => ({
      validate: (value: number) => this.isInRange(value, min, max),
      message: `Must be between ${min} and ${max}`,
    }),

    custom: <T>(
      validator: (value: T) => boolean,
      message: string
    ): ValidationRule<T> => ({
      validate: validator,
      message,
    }),
  };
}

export const dataValidator = DataValidator.getInstance();
export default DataValidator;
