// Form validation utility
export interface FormValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
  url?: boolean
  number?: boolean
  min?: number
  max?: number
  custom?: (value: any) => boolean | string
}

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string[]>
  fieldErrors: Record<string, string[]>
}

export class FormValidator {
  private rules: Record<string, FormValidationRule[]> = {}

  addRule(field: string, rule: FormValidationRule): void {
    if (!this.rules[field]) {
      this.rules[field] = []
    }
    this.rules[field].push(rule)
  }

  validate(data: Record<string, any>): FormValidationResult {
    const errors: Record<string, string[]> = {}
    const fieldErrors: Record<string, string[]> = {}

    for (const [field, value] of Object.entries(data)) {
      const fieldRules = this.rules[field] || []
      const fieldErrorList: string[] = []
      
      for (const rule of fieldRules) {
        const error = this.validateField(field, value, rule)
        if (error) {
          fieldErrorList.push(error)
        }
      }

      if (fieldErrorList.length > 0) {
        errors[field] = fieldErrorList
        fieldErrors[field] = fieldErrorList
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      fieldErrors
    }
  }

  private validateField(field: string, value: any, rule: FormValidationRule): string | null {
    // Required validation
    if (rule.required && (value === undefined || value === null || value === '')) {
      return `${field} is required`
    }

    if (value === undefined || value === null || value === '') {
      return null // Skip other validations if value is empty and not required
    }

    // String length validation
    if (typeof value === 'string') {
      if (rule.minLength && value.length < rule.minLength) {
        return `${field} must be at least ${rule.minLength} characters long`
      }
      if (rule.maxLength && value.length > rule.maxLength) {
        return `${field} must be no more than ${rule.maxLength} characters long`
      }
    }

    // Email validation
    if (rule.email && typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return `${field} must be a valid email address`
      }
    }

    // URL validation
    if (rule.url && typeof value === 'string') {
      try {
        new URL(value)
      } catch {
        return `${field} must be a valid URL`
      }
    }

    // Number validation
    if (rule.number) {
      const numValue = Number(value)
      if (isNaN(numValue)) {
        return `${field} must be a valid number`
      }
      
      if (rule.min !== undefined && numValue < rule.min) {
        return `${field} must be at least ${rule.min}`
      }
      if (rule.max !== undefined && numValue > rule.max) {
        return `${field} must be no more than ${rule.max}`
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
      return `${field} format is invalid`
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value)
      if (result !== true) {
        return typeof result === 'string' ? result : `${field} is invalid`
      }
    }

    return null
  }

  validateField(field: string, value: any): string[] {
    const fieldRules = this.rules[field] || []
    const errors: string[] = []
    
    for (const rule of fieldRules) {
      const error = this.validateField(field, value, rule)
      if (error) {
        errors.push(error)
      }
    }

    return errors
  }

  clearRules(): void {
    this.rules = {}
  }

  getRules(field?: string): Record<string, FormValidationRule[]> | FormValidationRule[] {
    if (field) {
      return this.rules[field] || []
    }
    return { ...this.rules }
  }
}

export default FormValidator
