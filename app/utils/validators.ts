// Validation utility
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

export class Validator {
  private rules: Record<string, ValidationRule[]> = {}

  addRule(field: string, rule: ValidationRule): void {
    if (!this.rules[field]) {
      this.rules[field] = []
    }
    this.rules[field].push(rule)
  }

  validate(data: Record<string, any>): ValidationResult {
    const errors: string[] = []

    for (const [field, value] of Object.entries(data)) {
      const fieldRules = this.rules[field] || []
      
      for (const rule of fieldRules) {
        const error = this.validateField(field, value, rule)
        if (error) {
          errors.push(error)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  private validateField(field: string, value: any, rule: ValidationRule): string | null {
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
}

export default Validator