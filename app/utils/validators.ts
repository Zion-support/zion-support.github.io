'use client'

// Validators utility functions
export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export class Validators {
  private rules: Record<string, ValidationRule> = {}

  addRule(field: string, rule: ValidationRule): void {
    this.rules[field] = rule
  }

  validate(data: Record<string, any>): ValidationResult {
    const errors: string[] = []

    for (const [field, value] of Object.entries(data)) {
      const rule = this.rules[field]
      if (!rule) continue

      // Required validation
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} is required`)
        continue
      }

      // Skip other validations if value is empty and not required
      if (!rule.required && (value === undefined || value === null || value === '')) {
        continue
      }

      // String length validation
      if (typeof value === 'string') {
        if (rule.minLength && value.length < rule.minLength) {
          errors.push(`${field} must be at least ${rule.minLength} characters`)
        }
        if (rule.maxLength && value.length > rule.maxLength) {
          errors.push(`${field} must be no more than ${rule.maxLength} characters`)
        }
      }

      // Pattern validation
      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors.push(`${field} format is invalid`)
      }

      // Custom validation
      if (rule.custom) {
        const result = rule.custom(value)
        if (result !== true) {
          errors.push(typeof result === 'string' ? result : `${field} is invalid`)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  clearRules(): void {
    this.rules = {}
  }
}

// Common validation rules
export const commonRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    pattern: /^\+?[\d\s\-()]+$/
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
  },
  url: {
    pattern: /^https?:\/\/.+\..+/
  }
}

// Create default instance
export const validators = new Validators()

export default validators
