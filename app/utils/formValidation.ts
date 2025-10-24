<<<<<<< HEAD
<<<<<<< HEAD
// Formvalidation utility functions
export function formvalidation() {
  // Implementation here
  return null;
=======
'use client'
/**
 * Form Validation Utilities;
 * Provides common validation rules and form handling utilities;
 */
<<<<<<< HEAD
export interface ValidationRule<T = unknown> {
  validate: (value: T,) => boolean;
  message: string;}
}
export interface ValidationResult {
  valid: boolean,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
export interface ValidationRule<T = unknown> {}
  validate: (value: T,) => boolean
  message: string;}
}
export interface ValidationResult {}
<<<<<<< HEAD
  valid: boolean;
=======
  valid: boolean
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  errors: string[];}
}
export interface FieldValidation {}
  [fieldName: string]: ValidationRule[];}
<<<<<<< HEAD
export interface ValidationRule<T = unknown> {/* TODO: Fix JSX expression */,}
=======
export interface ValidationRule<T = unknown> {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
export interface ValidationResult {/* TODO: Fix JSX expression */,}
}
<<<<<<< HEAD
export interface FieldValidation {/* TODO: Fix JSX expression */,}
=======
export interface FieldValidation {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Common validation rules;
 */
<<<<<<< HEAD
export const validationRules = {}
  /**
   * Validate required field;
   */
  required: (message = 'This field is required'): ValidationRule<string> => ({,
    validate: (value: string,) => value !== null && value !== undefined && value.trim().length > 0;
  required: (message = 'This field is required'): ValidationRule<string> => ({,}
    validate: (value: string,) => value !== null && value !== undefined && value.trim().length > 0,
    message}
export const validationRules = {/* TODO: Fix JSX expression */,}
=======
  required: (message = 'This field is required'): ValidationRule<string> => ({}
    validate: (value: string) => value !== null && value !== undefined && value.trim().length > 0,
    message}
export const validationRules = {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate email format;
   */
<<<<<<< HEAD
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({,
    validate: (value: string,) => {,
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({,}
    validate: (value: string,) => {,}
=======
  email: (message = 'Please enter a valid email address'): ValidationRule<string> => ({}
    validate: (value: string) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value);}
    },
    message;
  emai,
  l: (message = 'Please enter a valid email address'): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}
    },
    message;)
  }),
  /**
   * Validate minimum length;
   */
<<<<<<< HEAD
  minLength: (min: number, message?: string): ValidationRule<string> => ({}
    validate: (value: string,) => value.length >= min,}
    message: message || `Must be at least ${min,} characters;
  minLengt,
  h: (mi)
  n: number, message?: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}
  e: message || `Must be at least ${min,} characters`)
=======
  minLengt,
  h: (mi)
  n: number, message?: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */}
  e: message || `Must be at least ${min} characters`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate maximum length;
   */
<<<<<<< HEAD
  maxLength: (max: number, message?: string): ValidationRule<string> => ({}
    validate: (value: string,) => value.length <= max,`}
    message: message || `Must be no more than ${max,} characters;
  maxLengt,
  h: (ma)
  x: number, message?: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`
  e: message || `Must be no more than ${max,} characters`)
=======
  maxLengt,
  h: (ma)
  x: number, message?: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: message || `Must be no more than ${max} characters`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate phone number (US format)
   */
<<<<<<< HEAD
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({,
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({,}
    validate: (value: string,) => {,}
=======
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({}
    validate: (value: string) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      return phoneRegex.test(value.replace(/\s/g, ''))
  phoneU,
  S: (message = 'Please enter a valid US phone number'): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return phoneRegex.test(value.replace(/\s/g, ''));
    },
    message;
  }),
  /**
   * Validate URL format;
   */
<<<<<<< HEAD
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({,
    validate: (value: string,) => {,
      try {,
        new URL(value),
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({,}
    validate: (value: string,) => {,}
=======
  url: (message = 'Please enter a valid URL'): ValidationRule<string> => ({}
    validate: (value: string) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      try {}
        new URL(value)
        return true;}
      } catch {}
        return false;}
      }
    },
    message;
  ur,
  l: (message = 'Please enter a valid URL'): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}
      } catch {/* TODO: Fix JSX expression */,}
      }
    },
    message;)
  }),
  /**
   * Validate number range;
   */
<<<<<<< HEAD
  numberRange: (min: number, max: number, message?: string): ValidationRule<number> => ({}
    validate: (value: number,) => value >= min && value <= max,`}
    message: message || `Must be between ${min,} and ${max}
  numberRang,
  e: (mi,
  n: number, ma)
  x: number, message?: string): ValidationRule<number> => ({/* TODO: Fix JSX expression */,}`
  e: message || `Must be between ${min,} and ${max}`)
=======
  numberRang,
  e: (mi,
  n: number, ma)
  x: number, message?: string): ValidationRule<number> => ({/* TODO: Fix JSX expression */}`
  e: message || `Must be between ${min} and ${max}`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate pattern match;
   */
<<<<<<< HEAD
  pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule<string> => ({}
    validate: (value: string,) => regex.test(value),
    message}
  patter,
  n: (rege)
  x: RegExp, message = 'Invalid format'): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
=======
  patter,
  n: (rege)
  x: RegExp, message = 'Invalid format'): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate custom condition;
   */
<<<<<<< HEAD
  custom: <T>(validator: (value: T,) => boolean, message: string,): ValidationRule<T> => ({,
    validate: validator,
  custom: <T>(validator: (value: T,) => boolean, message: string,): ValidationRule<T> => ({,}
=======
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    validate: validator,
    message}
  custo,
  m: <T>(validato,
  r: (valu)
<<<<<<< HEAD
  e: T,) => boolean, messag,
  e: string,): ValidationRule<T> => ({/* TODO: Fix JSX expression */,})
=======
  e: T) => boolean, messag,
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate password strength;
   */
<<<<<<< HEAD
  strongPassword: (,
    message = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
  ): ValidationRule<string> => ({
    validate: (value: string,) => {,
      const hasUpperCase = /[A-Z]/.test(value),
      const hasLowerCase = /[a-z]/.test(value)): ValidationRule<string> => ({}
    validate: (value: string,) => {,}
=======
  ): ValidationRule<string> => ({}
    validate: (value: string) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value);}
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
  strongPasswor,
  d: (message = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character')
  ): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasMinLength = value.length >= 8;
      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength;
    },
    message;
  }),
  /**
   * Validate matching fields (e.g., password confirmation)
   */
<<<<<<< HEAD
  matches: (otherFieldValue: string, fieldName: string,): ValidationRule<string> => ({,
  matches: (otherFieldValue: string, fieldName: string,): ValidationRule<string> => ({,}
    validate: (value: string,) => value === otherFieldValue,`}
    message: `Must match ${fieldName,}
  matche,
  s: (otherFieldValu,
  e: string, fieldNam)
  e: string,): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`
  e: `Must match ${fieldName,}`)
=======
  matches: (otherFieldValue: string, fieldName: string): ValidationRule<string> => ({}
    validate: (value: string) => value === otherFieldValue,`}
    message: `Must match ${fieldName}
  matche,
  s: (otherFieldValu,
  e: string, fieldNam)
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must match ${fieldName}`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate file size;
   */
<<<<<<< HEAD
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule<File> => ({
    validate: (file: File,) => {,
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule<File> => ({}
    validate: (file: File,) => {,}
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024
      return file.size <= maxSizeInBytes;}
    },
<<<<<<< HEAD
    message: message || `File size must not exceed ${maxSizeInMB,}MB;
  fileSiz,
  e: (maxSizeInM)
  B: number, message?: string): ValidationRule<File> => ({/* TODO: Fix JSX expression */,}
    },
    messag,`
  e: message || `File size must not exceed ${maxSizeInMB,}MB`)
=======
    message: message || `File size must not exceed ${maxSizeInMB}MB;
  fileSiz,
  e: (maxSizeInM)
  B: number, message?: string): ValidationRule<File> => ({/* TODO: Fix JSX expression */}
    },
    messag,`
  e: message || `File size must not exceed ${maxSizeInMB}MB`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  /**
   * Validate file type;
   */
<<<<<<< HEAD
  fileType: (allowedTypes: string[], message?: string): ValidationRule<File> => ({}
    validate: (file: File,) => allowedTypes.includes(file.type),`}
    message: message || `File type must be one of: ${allowedTypes.join(', ')}
  fileTyp,
  e: (allowedType)
  s: string[], message?: string): ValidationRule<File> => ({/* TODO: Fix JSX expression */,})`
=======
  fileTyp,
  e: (allowedType)
  s: string[], message?: string): ValidationRule<File> => ({/* TODO: Fix JSX expression */})`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  of: ${allowedTypes.join(', ')}`
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
export function validateField<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {,}
=======
export function validateField<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  const errors: string[] = []
  for (const rule of rules) {}
    if (!rule.validate(value)) {}
      errors.push(rule.message);}
    }
  }
  return {}
    valid: errors.length === 0,
    errors}
  }
export function validateField<T>(valu,
  e: T, rule)
<<<<<<< HEAD
  s: ValidationRule<T>[]): ValidationResult {/* TODO: Fix JSX expression */,}
=======
  s: ValidationRule<T>[]): ValidationResult {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }
  return {/* TODO: Fix JSX expression */,}
  };
}
/**
 * Validate entire form;
 */
<<<<<<< HEAD
export function validateForm<T extends Record<string, unknown>>(
  formData: T,
  validationSchema: Record<keyof T, ValidationRule[]>
): Record<keyof T, ValidationResult> {}
  const results = {} as Record<keyof T, ValidationResult>
  for (const fieldName in validationSchema) {}
    const value = formData[fieldName]
    const rules = validationSchema[fieldName]
    results[fieldName] = validateField(value, rules);}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
export function validateForm<T extends Record<string, unknown>>(formDat,
  a: T,
  validationSchem,
  a: Record<keyof T, ValidationRule[]></keyof>)
): Record<keyof T, ValidationResult> {/* TODO: Fix JSX expression */,}
  const results = {} as Record<keyof T, ValidationResult>;
<<<<<<< HEAD
  for (const fieldName in validationSchema) {/* TODO: Fix JSX expression */,}
=======
  for (const fieldName in validationSchema) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  return results;
}
/**
 * Check if form is valid;
 */
<<<<<<< HEAD
export function isFormValid<T extends Record<string, unknown>>(
  validationResults: Record<keyof T, ValidationResult>
): boolean {}
  return Object.values(validationResults).every(result => result.valid);}
export function isFormValid<T extends Record<string, unknown>>(validationResult,
  s: Record<keyof T, ValidationResult></keyof>)
): boolean {/* TODO: Fix JSX expression */,}
=======
export function isFormValid<T extends Record<string, unknown>>(validationResult,
  s: Record<keyof T, ValidationResult></keyof>)
): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Get all form errors;
 */
<<<<<<< HEAD
export function getFormErrors<T extends Record<string, unknown>>(
  validationResults: Record<keyof T, ValidationResult>
): Record<keyof T, string[]> {}
  const errors = {} as Record<keyof T, string[]>
  for (const fieldName in validationResults) {}
    const result = validationResults[fieldName]
    if (!result.valid) {}
      errors[fieldName] = result.errors;}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
export function getFormErrors<T extends Record<string, unknown>>(validationResult,
  s: Record<keyof T, ValidationResult></keyof>)
): Record<keyof T, string[]> {/* TODO: Fix JSX expression */,}
  const errors = {} as Record<keyof T, string[]>;
<<<<<<< HEAD
  for (const fieldName in validationResults) {/* TODO: Fix JSX expression */,}
=======
  for (const fieldName in validationResults) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }
  return errors;
}
/**
 * Sanitize input string;
 */
<<<<<<< HEAD
export function sanitizeInput(input: string,): string {,
  return input;
    .trim(),
    .replace(/[<>]/g, '') // Remove potential HTML tags;
export function sanitizeInput(input: string,): string {,}
=======
export function sanitizeInput(input: string): string {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/[^\w\s@.-]/gi, ''); // Keep only alphanumeric, spaces, @, ., -}
export function sanitizeInput(inpu)
<<<<<<< HEAD
  t: string,): string {/* TODO: Fix JSX expression */,}
=======
  t: string): string {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Debounce function for form validation;
 */
<<<<<<< HEAD
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {,
    const later = useCallback((...args) => {,
      timeout = null;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {,}
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {,}
    const later = useCallback((...args) => {}
      timeout = null
      func(...args);}
    }
    if (timeout) {}
      clearTimeout(timeout);}
    }
    timeout = setTimeout(later, wait)
  }
}
export function debounce<T extends (...arg)
  s: Parameters<T>) => ReturnType<T>>(fun,
  c: T,
  wai,
  t: number;)
): (...arg)
<<<<<<< HEAD
  s: Parameters<T>) => void {/* TODO: Fix JSX expression */,}
=======
  s: Parameters<T>) => void {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    };
    if (timeout) {/* TODO: Fix JSX expression */,}
    }
    timeout = setTimeout(later, wait);
  };
}
"`
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
// Utility file: formValidation

export interface FormField {
  name: string;
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: string) => string | null;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export class FormValidator {
  validateField(field: FormField): string | null {
    const { name, value, required, minLength, maxLength, pattern, customValidator } = field;

    if (required && (!value || value.trim() === '')) {
      return `${name} is required`;
    }

    if (value && minLength && value.length < minLength) {
      return `${name} must be at least ${minLength} characters long`;
    }

    if (value && maxLength && value.length > maxLength) {
      return `${name} must be no more than ${maxLength} characters long`;
    }

    if (value && pattern && !pattern.test(value)) {
      return `${name} format is invalid`;
    }

    if (value && customValidator) {
      return customValidator(value);
    }

    return null;
  }

  validateForm(fields: FormField[]): FormValidationResult {
    const errors: Record<string, string> = {};
    let isValid = true;

    fields.forEach(field => {
      const error = this.validateField(field);
      if (error) {
        errors[field.name] = error;
        isValid = false;
      }
    });

    return { isValid, errors };
  }
}

export const formValidator = new FormValidator();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
