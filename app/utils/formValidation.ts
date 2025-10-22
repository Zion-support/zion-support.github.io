'use client'

// Form Validation utility functions
export interface FormField {
  name: string
  value: any
  rules: ValidationRule[]
}

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
}

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string[]>
}

export class FormValidator {
  private fields: FormField[] = []

  addField(field: FormField): void {
    this.fields.push(field)
  }

  validate(): FormValidationResult {
    const errors: Record<string, string[]> = {}
    let isValid = true

    for (const field of this.fields) {
      const fieldErrors: string[] = []

      for (const rule of field.rules) {
        const error = this.validateField(field.name, field.value, rule)
        if (error) {
          fieldErrors.push(error)
          isValid = false
        }
      }

      if (fieldErrors.length > 0) {
        errors[field.name] = fieldErrors
      }
    }

    return { isValid, errors }
  }

  private validateField(fieldName: string, value: any, rule: ValidationRule): string | null {
    // Required validation
    if (rule.required && (value === undefined || value === null || value === '')) {
      return `${fieldName} is required`
    }

    // Skip other validations if value is empty and not required
    if (!rule.required && (value === undefined || value === null || value === '')) {
      return null
    }

    // String length validation
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        return `${fieldName} must be at least ${rule.minLength} characters`
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        return `${fieldName} must be no more than ${rule.maxLength} characters`
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return `${fieldName} format is invalid`
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value)
      if (result !== true) {
        return typeof result === 'string' ? result : `${fieldName} is invalid`
      }
    }

    return null
  }

  clearFields(): void {
    this.fields = []
  }
}

// Common validation rules
export const formRules = {
  required: { required: true },
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
export const formValidator = new FormValidator()

export default formValidator
