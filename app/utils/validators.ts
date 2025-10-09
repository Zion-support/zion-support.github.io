'use client';
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**
 * URL validation regex
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false; // RFC 5321 limit
  return EMAIL_REGEX.test(email.trim());
}
/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim());
}
/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return URL_REGEX.test(url.trim());
  }
}
/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  return value.toString().trim().length > 0;
}
/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}
/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}
/**
 * Validate string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}
/**
 * Validate string contains only letters
 */
export function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
/**
 * Validate string contains only numbers
 */
export function isNumeric(value: string): boolean {
  return /^[0-9]+$/.test(value);
}
/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber;
}
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return Math.min(score, 4);
}
/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) {
    return false;
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}
/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, unknown>>(
  obj: T,
  schema: Record<keyof T, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [];
  for (const key in schema) {
    const validator = schema[key];
    const value = obj[key];
    if (!validator(value)) {
      errors.push(`Invalid value for field: ${String(key)}`);
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
/**
 * Validate form data
 */
export interface FormField {
  value: string;
  validators: Array<{
    validate: (value: string) => boolean;
    message: string;
  }>;
}
export function validateForm(
  fields: Record<string, FormField>
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};
  for (const fieldName in fields) {
    const field = fields[fieldName];
    const fieldErrors: string[] = [];
    for (const validator of field.validators) {
      if (!validator.validate(field.value)) {
        fieldErrors.push(validator.message);
      }
    }
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors;
    }
  }
  return errors;
}
/**
 * Common form validators
 */
export const validators = {
  required: (message = 'This field is required') => ({
    validate: isRequired,
    message
  }),
  email: (message = 'Please enter a valid email address') => ({
    validate: isValidEmail,
    message
  }),
  phone: (message = 'Please enter a valid phone number') => ({
    validate: isValidPhone,
    message
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    validate: (value: string) => minLength(value, min),
    message
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    validate: (value: string) => maxLength(value, max),
    message
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    validate: isStrongPassword,
    message
  })
};

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  if (!password || password.length < 8) return false;
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
  if (!input) return null;
  
  // Trim whitespace
  let sanitized = input.trim();
  
  // Remove null bytes and other control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Enforce maximum length if specified
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized || null;
}

// Additional validation functions for comprehensive testing
export function validateEmail(email: string): ValidationResult {
  const isValid = isValidEmail(email);
  return {
    isValid,
    errors: isValid ? [] : ['Invalid email format']
  };
}

export function validateURL(url: string): ValidationResult {
  const isValid = isValidUrl(url);
  return {
    isValid,
    errors: isValid ? [] : ['Invalid URL format']
  };
}

export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {
  const errors: string[] = [];
  
  if (value.length < min) {
    errors.push(`${fieldName} must be at least ${min} characters long`);
  }
  
  if (value.length > max) {
    errors.push(`${fieldName} must be no more than ${max} characters long`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (password.length > 128) {
    errors.push('Password must be no more than 128 characters long');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function sanitizeHTML(html: string): string {
  return sanitizeHtml(html);
}

export function validateDate(dateString: string): ValidationResult {
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return {
      isValid: false,
      errors: ['Invalid date format. Use YYYY-MM-DD']
    };
  }
  
  const date = new Date(dateString);
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(5, 7));
  const day = parseInt(dateString.substring(8, 10));
  
  // Check if the date is valid
  const isValid = !isNaN(date.getTime()) && 
                 date.getFullYear() === year &&
                 date.getMonth() === month - 1 &&
                 date.getDate() === day;
  
  return {
    isValid,
    errors: isValid ? [] : ['Invalid date format. Use YYYY-MM-DD']
  };
}

export function validateCreditCard(cardNumber: string): ValidationResult {
  // Remove spaces and dashes for validation
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');
  const isValid = isValidCreditCard(cleanNumber);
  return {
    isValid,
    errors: isValid ? [] : ['Invalid credit card number']
  };
}

export function validateJSON(jsonString: string): ValidationResult {
  try {
    JSON.parse(jsonString);
    return {
      isValid: true,
      errors: []
    };
  } catch {
    return {
      isValid: false,
      errors: ['Invalid JSON format']
    };
  }
}

export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  
  return {
    isValid: true,
    errors: []
  };
}

export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  const isValid = value !== null && value !== undefined && value !== '';
  return {
    isValid,
    errors: isValid ? [] : [`${fieldName} is required`]
  };
}

export async function validateAsync(
  validator: (value: string) => Promise<ValidationResult>,
  value: string
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return {
      isValid: false,
      errors: [error instanceof Error ? error.message : 'Validation failed']
    };
  }
}