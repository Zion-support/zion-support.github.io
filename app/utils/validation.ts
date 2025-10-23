// Comprehensive validation utilities
export interface ValidationResult {
  isValid: boolean
  errors?: string[]
  error?: string
}

export interface ValidationRule {
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

export class ValidationUtils {
  static validateEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(email)
    
    return {
      isValid,
      error: isValid ? undefined : 'Invalid email format'
    }
  }

  static validateUrl(url: string): ValidationResult {
    try {
      new URL(url)
      return { isValid: true }
    } catch {
      return {
        isValid: false,
        error: 'Invalid URL format'
      }
    }
  }

  static validateRequired(value: any): ValidationResult {
    const isValid = value !== undefined && value !== null && value !== ''
    
    return {
      isValid,
      error: isValid ? undefined : 'This field is required'
    }
  }

  static validateMinLength(value: string, minLength: number): ValidationResult {
    const isValid = value.length >= minLength
    
    return {
      isValid,
      error: isValid ? undefined : `Must be at least ${minLength} characters long`
    }
  }

  static validateMaxLength(value: string, maxLength: number): ValidationResult {
    const isValid = value.length <= maxLength
    
    return {
      isValid,
      error: isValid ? undefined : `Must be no more than ${maxLength} characters long`
    }
  }

  static validatePattern(value: string, pattern: RegExp): ValidationResult {
    const isValid = pattern.test(value)
    
    return {
      isValid,
      error: isValid ? undefined : 'Invalid format'
    }
  }

  static validateNumber(value: any, min?: number, max?: number): ValidationResult {
    const numValue = Number(value)
    
    if (isNaN(numValue)) {
      return {
        isValid: false,
        error: 'Must be a valid number'
      }
    }

    if (min !== undefined && numValue < min) {
      return {
        isValid: false,
        error: `Must be at least ${min}`
      }
    }

    if (max !== undefined && numValue > max) {
      return {
        isValid: false,
        error: `Must be no more than ${max}`
      }
    }

    return { isValid: true }
  }

  static validateField(value: any, rules: ValidationRule[]): ValidationResult {
    const errors: string[] = []

    for (const rule of rules) {
      const result = this.validateRule(value, rule)
      if (!result.isValid && result.error) {
        errors.push(result.error)
      }
    }

    return {
      isValid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined
    }
  }

  private static validateRule(value: any, rule: ValidationRule): ValidationResult {
    // Required validation
    if (rule.required) {
      const requiredResult = this.validateRequired(value)
      if (!requiredResult.isValid) {
        return requiredResult
      }
    }

    // Skip other validations if value is empty and not required
    if (value === undefined || value === null || value === '') {
      return { isValid: true }
    }

    // String length validation
    if (typeof value === 'string') {
      if (rule.minLength) {
        const minLengthResult = this.validateMinLength(value, rule.minLength)
        if (!minLengthResult.isValid) {
          return minLengthResult
        }
      }

      if (rule.maxLength) {
        const maxLengthResult = this.validateMaxLength(value, rule.maxLength)
        if (!maxLengthResult.isValid) {
          return maxLengthResult
        }
      }
    }

    // Email validation
    if (rule.email && typeof value === 'string') {
      const emailResult = this.validateEmail(value)
      if (!emailResult.isValid) {
        return emailResult
      }
    }

    // URL validation
    if (rule.url && typeof value === 'string') {
      const urlResult = this.validateUrl(value)
      if (!urlResult.isValid) {
        return urlResult
      }
    }

    // Number validation
    if (rule.number) {
      const numberResult = this.validateNumber(value, rule.min, rule.max)
      if (!numberResult.isValid) {
        return numberResult
      }
    }

    // Pattern validation
    if (rule.pattern && typeof value === 'string') {
      const patternResult = this.validatePattern(value, rule.pattern)
      if (!patternResult.isValid) {
        return patternResult
      }
    }

    // Custom validation
    if (rule.custom) {
      const result = rule.custom(value)
      if (result !== true) {
        return {
          isValid: false,
          error: typeof result === 'string' ? result : 'Invalid value'
        }
      }
    }

    return { isValid: true }
  }
}

export default ValidationUtils