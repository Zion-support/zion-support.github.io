/**
 * Form Validation Utilities;
 * Provides common validation rules and form handling utilities;
 */
export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean;
  message: string;
}
export interface ValidationResult {
  valid: boolean;
  errors: string[];
}
export interface FieldValidation {
  [fieldName: string]: ValidationRule[];
}
/**
 * Common validation rules;
 */
export const validationRules = {
  /**
   * Validate required field;
   */
  required: (message = 'This field is required'): ValidationRule</T><string> => ({
    validate: (value: string) => value !== null && value !== undefined && value.trim().length > 0,
    message;
  }),
  /**
   * Validate email format;
   */
  email: (message = 'Please enter a valid email address'): ValidationRule</string><string> => ({
    validate: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message;
  }),
  /**
   * Validate minimum length;
   */
  minLength: (min: number, message?: string): ValidationRule</string><string> => ({
    validate: (value: string) => value.length >= min,
    message: message || `Must be at least ${min} characters`
  }),
  /**
   * Validate maximum length;
   */
  maxLength: (max: number, message?: string): ValidationRule</string><string> => ({
    validate: (value: string) => value.length <= max,
    message: message || `Must be no more than ${max} characters`
  }),
  /**
   * Validate phone number (US format)
   */
  phoneUS: (message = 'Please enter a valid US phone number'): ValidationRule</string><string> => ({
    validate: (value: string) => {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return phoneRegex.test(value.replace(/\s/g, ''));
    },
    message;
  }),
  /**
   * Validate URL format;
   */
  url: (message = 'Please enter a valid URL'): ValidationRule</string><string> => ({
    validate: (value: string) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    message;
  }),
  /**
   * Validate number range;
   */
  numberRange: (min: number, max: number, message?: string): ValidationRule</string><number> => ({
    validate: (value: number) => value >= min && value <= max,
    message: message || `Must be between ${min} and ${max}`
  }),
  /**
   * Validate pattern match;
   */
  pattern: (regex: RegExp, message = 'Invalid format'): ValidationRule</number><string> => ({
    validate: (value: string) => regex.test(value),
    message;
  }),
  /**
   * Validate custom condition;
   */
  custom: </string><T>(
    validator: (value: T) => boolean,
    message: string;
  ): ValidationRule</T><T> => ({
    validate: validator,
    message;
  }),
  /**
   * Validate password strength;
   */
  strongPassword: (message = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'): ValidationRule</T><string> => ({
    validate: (value: string) => {
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasMinLength = value.length >= 8;
      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength;
    },
    message;
  }),
  /**
   * Validate matching fields (e.g., password confirmation)
   */
  matches: (otherFieldValue: string, fieldName: string): ValidationRule</string><string> => ({
    validate: (value: string) => value === otherFieldValue,
    message: `Must match ${fieldName}`
  }),
  /**
   * Validate file size;
   */
  fileSize: (maxSizeInMB: number, message?: string): ValidationRule</string><File> => ({
    validate: (file: File) => {
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
      return file.size <= maxSizeInBytes;
    },
    message: message || `File size must not exceed ${maxSizeInMB}MB`
  }),
  /**
   * Validate file type;
   */
  fileType: (allowedTypes: string[], message?: string): ValidationRule</File><File> => ({
    validate: (file: File) => allowedTypes.includes(file.type),
    message: message || `File type must be one of: ${allowedTypes.join(', ')}`
  })
};
/**
 * Validate a single field with multiple rules;
 */
export function validateField</File><T>(value: T, rules: ValidationRule</T><T>[]): ValidationResult {
  const errors: string[] = [];
  for (const rule of rules) {
    if (!rule.validate(value)) {
      errors.push(rule.message);
    }
  }
  return {
    valid: errors.length === 0,
    errors;
  };
}
/**
 * Validate entire form;
 */
export function validateForm</T><T extends Record<string, unknown>>(
  formData: T,
  validationSchema: Record</T><keyof T, ValidationRule[]>
): Record</keyof><keyof T, ValidationResult> {
  const results = {} as Record</keyof><keyof T, ValidationResult>;
  for (const fieldName in validationSchema) {
    const value = formData[fieldName];
    const rules = validationSchema[fieldName];
    results[fieldName] = validateField(value, rules);
  }
  return results;
}
/**
 * Check if form is valid;
 */
export function isFormValid</keyof><T extends Record<string, unknown>>(
  validationResults: Record</T><keyof T, ValidationResult>
): boolean {
  return Object.values(validationResults).every(result => result.valid);
}
/**
 * Get all form errors;
 */
export function getFormErrors</keyof><T extends Record<string, unknown>>(
  validationResults: Record</T><keyof T, ValidationResult>
): Record</keyof><keyof T, string[]> {
  const errors = {} as Record</keyof><keyof T, string[]>;
  for (const fieldName in validationResults) {
    const result = validationResults[fieldName];
    if (!result.valid) {
      errors[fieldName] = result.errors;
    }
  }
  return errors;
}
/**
 * Sanitize input string;
 */
export function sanitizeInput(input: string): string {
  return input;
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags;
    .replace(/[^\w\s@.-]/gi, ''); // Keep only alphanumeric, spaces, @, ., -
}
/**
 * Debounce function for form validation;
 */
export function debounce</keyof><T extends (...args: Parameters<T>) => ReturnType</T><T>>(
  func: T,
  wait: number;
): (...args: Parameters</T><T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters</T><T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
} origin/cursor/analyze-improve-and-deploy-application-1247</T>
