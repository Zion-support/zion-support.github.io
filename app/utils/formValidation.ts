'use client'
/**
 * Form Validation Utilities;
 * Provides common validation rules and form handling utilities;
 */
<<<<<<< HEAD
export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean;
  message: string;}
}
export interface ValidationResult {
  valid: boolean;
=======
export interface ValidationRule<T = unknown> {}
  validate: (value: T) => boolean
  message: string;}
}
export interface ValidationResult {}
  valid: boolean
>>>>>>> origin/merge-error-fixes
  errors: string[];}
}
export interface FieldValidation {}
  [fieldName: string]: ValidationRule[];}
}
/**
 * Common validation rules;
 */
export const validationRules = {}
  /**
   * Validate required field;
   */
<<<<<<< HEAD
  required: (message = 'This field is required'): ValidationRule<string> => ({,
    validate: (value: string) => value !== null && value !== undefined && value.trim().length > 0;
=======
  required: (message = 'This field is required'): ValidationRule<string> => ({}
    validate: (value: string) => value !== null && value !== undefined && value.trim().length > 0,
>>>>>>> origin/merge-error-fixes
    message}
  }),
  /**
   * Validate email format;
   */
<<<<<<< HEAD
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({,
    validate: (value: string) => {,
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
=======
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({}
    validate: (value: string) => {}
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
>>>>>>> origin/merge-error-fixes
      return emailRegex.test(value);}
    },
    message;
  }),
  /**
   * Validate minimum length;
   */
  minLength: (min: number, message?: string): ValidationRule<string> => ({}
    validate: (value: string) => value.length >= min,}
    message: message || `Must be at least ${min} characters;
  }),
  /**
   * Validate maximum length;
   */
  maxLength: (max: number, message?: string): ValidationRule<string> => ({}
    validate: (value: string) => value.length <= max,`}
    message: message || `Must be no more than ${max} characters;
  }),
  /**
   * Validate phone number (US format)
   */
<<<<<<< HEAD
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({,
=======
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({}
>>>>>>> origin/merge-error-fixes
    validate: (value: string) => {}
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      return phoneRegex.test(value.replace(/\s/g, ''))
    },
    message;
  }),
  /**
   * Validate URL format;
   */
<<<<<<< HEAD
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({,
    validate: (value: string) => {,
      try {,
        new URL(value),
=======
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({}
    validate: (value: string) => {}
      try {}
        new URL(value)
>>>>>>> origin/merge-error-fixes
        return true;}
      } catch {}
        return false;}
      }
    },
    message;
  }),
  /**
   * Validate number range;
   */
  numberRange: (min: number, max: number, message?: string): ValidationRule<number> => ({}
    validate: (value: number) => value >= min && value <= max,`}
    message: message || `Must be between ${min} and ${max}
  }),
  /**
   * Validate pattern match;
   */
  pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule<string> => ({}
    validate: (value: string) => regex.test(value),
    message}
  }),
  /**
   * Validate custom condition;
   */
<<<<<<< HEAD
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({,
    validate: validator;
=======
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({}
    validate: validator,
>>>>>>> origin/merge-error-fixes
    message}
  }),
  /**
   * Validate password strength;
   */
  strongPassword: (,
    message = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
<<<<<<< HEAD
  ): ValidationRule<string> => ({
    validate: (value: string) => {,
      const hasUpperCase = /[A-Z]/.test(value),
      const hasLowerCase = /[a-z]/.test(value),
=======
  ): ValidationRule<string> => ({}
    validate: (value: string) => {}
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
>>>>>>> origin/merge-error-fixes
      const hasNumber = /[0-9]/.test(value);}
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
      const hasMinLength = value.length >= 8;
      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength;
    },
    message;
  }),
  /**
   * Validate matching fields (e.g., password confirmation)
   */
<<<<<<< HEAD
  matches: (otherFieldValue: string, fieldName: string): ValidationRule<string> => ({,
=======
  matches: (otherFieldValue: string, fieldName: string): ValidationRule<string> => ({}
>>>>>>> origin/merge-error-fixes
    validate: (value: string) => value === otherFieldValue,`}
    message: `Must match ${fieldName}
  }),
  /**
   * Validate file size;
   */
<<<<<<< HEAD
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule<File> => ({
    validate: (file: File) => {,
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
=======
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule<File> => ({}
    validate: (file: File) => {}
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024
>>>>>>> origin/merge-error-fixes
      return file.size <= maxSizeInBytes;}
    },
    message: message || `File size must not exceed ${maxSizeInMB}MB;
  }),
  /**
   * Validate file type;
   */
  fileType: (allowedTypes: string[], message?: string): ValidationRule<File> => ({}
    validate: (file: File) => allowedTypes.includes(file.type),`}
    message: message || `File type must be one of: ${allowedTypes.join(', ')}
  })
}
/**
 * Validate a single field with multiple rules;
 */
<<<<<<< HEAD
export function validateField<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {,
  const errors: string[] = [],
  for (const rule of rules) {,
    if (!rule.validate(value)) {,
      errors.push(rule.message);}
    }
  }
  return {
    valid: errors.length === 0;
=======
export function validateField<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {}
  const errors: string[] = []
  for (const rule of rules) {}
    if (!rule.validate(value)) {}
      errors.push(rule.message);}
    }
  }
  return {}
    valid: errors.length === 0,
>>>>>>> origin/merge-error-fixes
    errors}
  }
}
/**
 * Validate entire form;
 */
export function validateForm<T extends Record<string, unknown>>(
  formData: T;
  validationSchema: Record<keyof T, ValidationRule[]>
): Record<keyof T, ValidationResult> {}
  const results = {} as Record<keyof T, ValidationResult>
  for (const fieldName in validationSchema) {}
    const value = formData[fieldName]
    const rules = validationSchema[fieldName]
    results[fieldName] = validateField(value, rules);}
  }
  return results;
}
/**
 * Check if form is valid;
 */
export function isFormValid<T extends Record<string, unknown>>(
  validationResults: Record<keyof T, ValidationResult>
): boolean {}
  return Object.values(validationResults).every(result => result.valid);}
}
/**
 * Get all form errors;
 */
export function getFormErrors<T extends Record<string, unknown>>(
  validationResults: Record<keyof T, ValidationResult>
): Record<keyof T, string[]> {}
  const errors = {} as Record<keyof T, string[]>
  for (const fieldName in validationResults) {}
    const result = validationResults[fieldName]
    if (!result.valid) {}
      errors[fieldName] = result.errors;}
    }
  }
  return errors;
}
/**
 * Sanitize input string;
 */
<<<<<<< HEAD
export function sanitizeInput(input: string): string {,
  return input;
    .trim(),
    .replace(/[<>]/g, '') // Remove potential HTML tags;
=======
export function sanitizeInput(input: string): string {}
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
>>>>>>> origin/merge-error-fixes
    .replace(/[^\w\s@.-]/gi, ''); // Keep only alphanumeric, spaces, @, ., -}
}
/**
 * Debounce function for form validation;
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
<<<<<<< HEAD
  func: T;
  wait: number;
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {,
    const later = useCallback((...args) => {,
      timeout = null;
=======
  func: T,
  wait: number
): (...args: Parameters<T>) => void {}
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {}
    const later = useCallback((...args) => {}
      timeout = null
>>>>>>> origin/merge-error-fixes
      func(...args);}
    }
    if (timeout) {}
      clearTimeout(timeout);}
    }
    timeout = setTimeout(later, wait)
  }
}