'use client'
/**
 * Form Validation Utilities
 * Provides common validation rules and form handling utilities
 */
export interface ValidationRule<T = unknown> {</T></<<<T>validate</T>: (value: T) => boolean
  message: string;}
}
export interface ValidationResult {
  valid: boolean
  errors: string[];}
}
export interface FieldValidation {
  [fieldName: string]: ValidationRule[];}
}
/**
 * Common validation rules
 */
export const validationRules = {
  /**
   * Validate required field
   */
  required: (message = 'This field is required'): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => value !== null && value !== undefined && value.trim().length > 0,
    message}
  }),
  /**
   * Validate email format
   */
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value);}
    },
    message
  }),
  /**
   * Validate minimum length
   */
  minLength: (min: number, message?: string): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => value.length >= min,}
    message: message || `Must be at least ${min} characters
  }),
  /**
   * Validate maximum length
   */
  maxLength: (max: number, message?: string): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => value.length <= max,`}
    message: message || `Must be no more than ${max} characters
  }),
  /**
   * Validate phone number (US format)
   */
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => {}
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      return phoneRegex.test(value.replace(/\s/g, ''))
    },
    message
  }),
  /**
   * Validate URL format
   */
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => {
      try {
        new URL(value)
        return true;}
      } catch {
        return false;}
      }
    },
    message
  }),
  /**
   * Validate number range
   */
  numberRange: (min: number, max: number, message?: string): ValidationRule<number> => ({</number></<<<number>validate</number></number>: (value: number) => value >= min && value <= max,`}
    message: message || `Must be between ${min} and ${max}
  }),
  /**
   * Validate pattern match
   */
  pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => regex.test(value),
    message}
  }),
  /**
   * Validate custom condition
   */
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule</T><T> => ({</T></<<<T>validate</T>: validator,
    message}
  }),
  /**
   * Validate password strength
   */
  strongPassword: (
    message = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  ): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => {
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value);}
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(value)
      const hasMinLength = value.length >= 8
      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength
    },
    message
  }),
  /**
   * Validate matching fields (e.g., password confirmation)
   */
  matches: (otherFieldValue: string, fieldName: string): ValidationRule<string> => ({</string></<<<string>validate</string></string>: (value: string) => value === otherFieldValue,`}
    message: `Must match ${fieldName}
  }),
  /**
   * Validate file size
   */
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule<File> => ({</File></<<<File>validate</File></File>: (file: File) => {
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024
      return file.size <= maxSizeInBytes;}
    },
    message: message || `File size must not exceed ${maxSizeInMB}MB
  }),
  /**
   * Validate file type
   */
  fileType: (allowedTypes: string[], message?: string): ValidationRule<File> => ({</File></<<<File>validate</File></File>: (file: File) => allowedTypes.includes(file.type),`}
    message: message || `File type must be one of: ${allowedTypes.join(', ')}
  })
}
/**
 * Validate a single field with multiple rules
 */
export function validateField<T>(value: T, rules: ValidationRule</T><T>[]): ValidationResult {</T></<<<T>const</T></<<T>errors</T>: string[] = []
  for (const rule of rules) {
    if (!rule.validate(value)) {
      errors.push(rule.message);}
    }
  }
  return {
    valid: errors.length === 0,
    errors}
  }
}
/**
 * Validate entire form
 */
export function validateForm<T extends Record<string, unknown>>(</T></<<<T>formData</T>: T,
  validationSchema: Record<keyof T, ValidationRule[]></keyo>
): Record<keyof T, ValidationResult> {}</keyof></<<<keyof>const</keyof></<<keyof>results</keyof> = {} as Record<keyof T, ValidationResult></keyof></<<<keyof>for</keyof></keyof> (const fieldName in validationSchema) {
    const value = formData[fieldName]
    const rules = validationSchema[fieldName]
    results[fieldName] = validateField(value, rules);}
  }
  return results
}
/**
 * Check if form is valid
 */
export function isFormValid<T extends Record<string, unknown>>(</T></<<<T>validationResults</T>: Record<keyof T, ValidationResult></keyo>
): boolean {
  return Object.values(validationResults).every(result => result.valid);}
}
/**
 * Get all form errors
 */
export function getFormErrors<T extends Record<string, unknown>>(</T></<<<T>validationResults</T>: Record<keyof T, ValidationResult></keyo>
): Record<keyof T, string[]> {}</keyof></<<<keyof>const</keyof></<<keyof>errors</keyof> = {} as Record<keyof T, string[]></keyof></<<<keyof>for</keyof></keyof> (const fieldName in validationResults) {
    const result = validationResults[fieldName]
    if (!result.valid) {
      errors[fieldName] = result.errors;}
    }
  }
  return errors
}
/**
 * Sanitize input string
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>{}</>{}{}]/g, '') // Remove potential HTML tags
    .replace(/[^\w\s@.-]/gi, ''); // Keep only alphanumeric, spaces, @, ., -}
}
/**
 * Debounce function for form validation
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType</T><T>>(</T></<<<T>func</T>: T,
  wait: number
): (...args: Parameters<T>) => void {</T></<<<T>let</T></<<T>timeout</T>: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {</T></<<<T>const</T></<<T>later</T> = useCallback((...args) => {
      timeout = null
      func(...args);}
    }
    if (timeout) {
      clearTimeout(timeout);}
    }
    timeout = setTimeout(later, wait)
  }
}