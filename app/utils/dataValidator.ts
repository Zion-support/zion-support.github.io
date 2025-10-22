/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */

export interface ValidationRule<T = unknown> {
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: RegExp
  custom?: (value: T) => boolean | string
  message?: string
}

export interface FieldRule {
  [key: string]: ValidationRule
}

export type ValidationRules = Record<string, ValidationRule>

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string[]>
  data?: any
}

export class DataValidator {
  private rules: ValidationRules

  constructor(rules: ValidationRules = {}) {
    this.rules = rules
  }

  validate(data: Record<string, any>): ValidationResult {
    const errors: Record<string, string[]> = {}
    let isValid = true

    for (const [field, rule] of Object.entries(this.rules)) {
      const value = data[field]
      const fieldErrors: string[] = []

      // Required validation
      if (rule.required && (value === undefined || value === null || value === '')) {
        fieldErrors.push(rule.message || `${field} is required`)
        isValid = false
      }

      // Skip other validations if value is empty and not required
      if (!rule.required && (value === undefined || value === null || value === '')) {
        continue
      }

      // Type-specific validations
      if (value !== undefined && value !== null && value !== '') {
        // String validations
        if (typeof value === 'string') {
          if (rule.minLength && value.length < rule.minLength) {
            fieldErrors.push(rule.message || `${field} must be at least ${rule.minLength} characters`)
            isValid = false
          }

          if (rule.maxLength && value.length > rule.maxLength) {
            fieldErrors.push(rule.message || `${field} must be no more than ${rule.maxLength} characters`)
            isValid = false
          }

          if (rule.pattern && !rule.pattern.test(value)) {
            fieldErrors.push(rule.message || `${field} format is invalid`)
            isValid = false
          }
        }

        // Number validations
        if (typeof value === 'number') {
          if (rule.min !== undefined && value < rule.min) {
            fieldErrors.push(rule.message || `${field} must be at least ${rule.min}`)
            isValid = false
          }

          if (rule.max !== undefined && value > rule.max) {
            fieldErrors.push(rule.message || `${field} must be no more than ${rule.max}`)
            isValid = false
          }
        }

        // Custom validation
        if (rule.custom) {
          const customResult = rule.custom(value)
          if (customResult !== true) {
            fieldErrors.push(typeof customResult === 'string' ? customResult : rule.message || `${field} is invalid`)
            isValid = false
          }
        }
      }

      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors
      }
    }

    return {
      isValid,
      errors,
      data: isValid ? data : undefined
    }
  }

  addRule(field: string, rule: ValidationRule): void {
    this.rules[field] = rule
  }

  removeRule(field: string): void {
    delete this.rules[field]
  }

  getRules(): ValidationRules {
    return { ...this.rules }
  }

  clearRules(): void {
    this.rules = {}
  }
}

// Common validation rules
export const commonRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  },
  phone: {
    pattern: /^\+?[\d\s\-\(\)]+$/,
    message: 'Please enter a valid phone number'
  },
  url: {
    pattern: /^https?:\/\/.+/,
    message: 'Please enter a valid URL'
  },
  required: {
    required: true,
    message: 'This field is required'
  }
}

// Utility functions
export const validateEmail = (email: string): boolean => {
  return commonRules.email.pattern!.test(email)
}

export const validatePassword = (password: string): boolean => {
  return commonRules.password.pattern!.test(password)
}

export const validatePhone = (phone: string): boolean => {
  return commonRules.phone.pattern!.test(phone)
}

export const validateURL = (url: string): boolean => {
  return commonRules.url.pattern!.test(url)
}

// Default validator instance
export const validator = new DataValidator()