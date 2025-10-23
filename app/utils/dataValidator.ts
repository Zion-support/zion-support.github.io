// Data validation utility
export interface DataValidationRule {
  required?: boolean
  type?: 'string' | 'number' | 'boolean' | 'array' | 'object'
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: RegExp
  custom?: (value: any) => boolean | string
}

export interface DataValidationResult {
  isValid: boolean
  errors: string[]
}

export class DataValidator {
  private rules: Record<string, DataValidationRule[]> = {}

  addRule(field: string, rule: DataValidationRule): void {
    if (!this.rules[field]) {
      this.rules[field] = []
    }
    this.rules[field].push(rule)
  }

  validate(data: Record<string, any>): DataValidationResult {
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

  private validateField(field: string, value: any, rule: DataValidationRule): string | null {
    // Required validation
    if (rule.required && (value === undefined || value === null || value === '')) {
      return `${field} is required`
    }

    if (value === undefined || value === null || value === '') {
      return null // Skip other validations if value is empty and not required
    }

    // Type validation
    if (rule.type) {
      const actualType = Array.isArray(value) ? 'array' : typeof value
      if (actualType !== rule.type) {
        return `${field} must be of type ${rule.type}`
      }
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

    // Number range validation
    if (typeof value === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        return `${field} must be at least ${rule.min}`
      }
      if (rule.max !== undefined && value > rule.max) {
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
}

export default DataValidator