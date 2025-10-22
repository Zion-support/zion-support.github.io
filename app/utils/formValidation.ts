/**
 * Form Validation Utilities
 * Provides common validation rules and form handling utilities
 */

export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean
  message: string
}

export interface ValidationResult {
  valid: boolean
  errors: Record<string, string[]>
}

export interface FormField {
  name: string
  value: any
  rules: ValidationRule[]
  touched: boolean
  error: string | null
}

export class FormValidator {
  private fields: Map<string, FormField> = new Map()

  addField(name: string, initialValue: any = '', rules: ValidationRule[] = []): void {
    this.fields.set(name, {
      name,
      value: initialValue,
      rules,
      touched: false,
      error: null
    })
  }

  updateField(name: string, value: any): void {
    const field = this.fields.get(name)
    if (field) {
      field.value = value
      field.touched = true
      field.error = this.validateField(field)
    }
  }

  validateField(field: FormField): string | null {
    for (const rule of field.rules) {
      if (!rule.validate(field.value)) {
        return rule.message
      }
    }
    return null
  }

  validateForm(): ValidationResult {
    const errors: Record<string, string[]> = {}
    let valid = true

    for (const field of this.fields.values()) {
      const error = this.validateField(field)
      if (error) {
        errors[field.name] = [error]
        valid = false
      }
    }

    return { valid, errors }
  }

  getField(name: string): FormField | undefined {
    return this.fields.get(name)
  }

  getFieldValue(name: string): any {
    return this.fields.get(name)?.value
  }

  setFieldValue(name: string, value: any): void {
    this.updateField(name, value)
  }

  getFormData(): Record<string, any> {
    const data: Record<string, any> = {}
    for (const field of this.fields.values()) {
      data[field.name] = field.value
    }
    return data
  }

  resetForm(): void {
    for (const field of this.fields.values()) {
      field.value = ''
      field.touched = false
      field.error = null
    }
  }

  clearErrors(): void {
    for (const field of this.fields.values()) {
      field.error = null
    }
  }
}

// Common validation rules
export const validationRules = {
  required: (message: string = 'This field is required'): ValidationRule => ({
    validate: (value: any) => value !== null && value !== undefined && value !== '',
    message
  }),

  email: (message: string = 'Please enter a valid email address'): ValidationRule => ({
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message
  }),

  minLength: (min: number, message?: string): ValidationRule => ({
    validate: (value: string) => typeof value === 'string' && value.length >= min,
    message: message || `Must be at least ${min} characters`
  }),

  maxLength: (max: number, message?: string): ValidationRule => ({
    validate: (value: string) => typeof value === 'string' && value.length <= max,
    message: message || `Must be no more than ${max} characters`
  }),

  min: (min: number, message?: string): ValidationRule => ({
    validate: (value: number) => typeof value === 'number' && value >= min,
    message: message || `Must be at least ${min}`
  }),

  max: (max: number, message?: string): ValidationRule => ({
    validate: (value: number) => typeof value === 'number' && value <= max,
    message: message || `Must be no more than ${max}`
  }),

  pattern: (pattern: RegExp, message: string): ValidationRule => ({
    validate: (value: string) => pattern.test(value),
    message
  }),

  phone: (message: string = 'Please enter a valid phone number'): ValidationRule => ({
    validate: (value: string) => /^\+?[\d\s\-\(\)]+$/.test(value),
    message
  }),

  url: (message: string = 'Please enter a valid URL'): ValidationRule => ({
    validate: (value: string) => /^https?:\/\/.+/.test(value),
    message
  }),

  password: (message: string = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'): ValidationRule => ({
    validate: (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value),
    message
  }),

  confirmPassword: (password: string, message: string = 'Passwords do not match'): ValidationRule => ({
    validate: (value: string) => value === password,
    message
  }),

  custom: (validator: (value: any) => boolean, message: string): ValidationRule => ({
    validate: validator,
    message
  })
}

// Utility functions
export const createFormValidator = (fields: Record<string, { initialValue?: any; rules?: ValidationRule[] }>): FormValidator => {
  const validator = new FormValidator()
  
  for (const [name, config] of Object.entries(fields)) {
    validator.addField(name, config.initialValue || '', config.rules || [])
  }
  
  return validator
}

export const validateFormData = (data: Record<string, any>, rules: Record<string, ValidationRule[]>): ValidationResult => {
  const errors: Record<string, string[]> = {}
  let valid = true

  for (const [fieldName, fieldRules] of Object.entries(rules)) {
    const value = data[fieldName]
    const fieldErrors: string[] = []

    for (const rule of fieldRules) {
      if (!rule.validate(value)) {
        fieldErrors.push(rule.message)
        valid = false
      }
    }

    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors
    }
  }

  return { valid, errors }
}