'use client';
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  error?: string;
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
  if (!email || email.length > 254) {
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' };
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' };
  }
  return { isValid: true, errors: [] };
}

export function validateURL(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' };
  }
  try {
    new URL(url);
    return { isValid: true, errors: [] };
  } catch {
    if (!URL_REGEX.test(url.trim())) {
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };
    }
    return { isValid: true, errors: [] };
  }
}

export function validateLength(value: string, min: number, max: number, fieldName = 'Field'): ValidationResult {
  if (value.length < min) {
    return { isValid: false, errors: [`${fieldName} must be at least ${min} characters`], error: `${fieldName} must be at least ${min} characters` };
  }
  if (value.length > max) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${max} characters`], error: `${fieldName} must be no more than ${max} characters` };
  }
  return { isValid: true, errors: [] };
}

export function validatePassword(password: string): ValidationResult {
  if (!password || password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' };
  }
  if (password.length > 128) {
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' };
  }
  return { isValid: true, errors: [] };
}

export function sanitizeHTML(html: string | null | undefined): string {
  if (!html) return '';
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, errors: ['Date is required'], error: 'Date is required' };
  }
  
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, errors: ['Date must be in YYYY-MM-DD format'], error: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' };
  }
  
  // Check if the date is valid (e.g., 2025-02-30 should be invalid)
  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(5, 7));
  const day = parseInt(dateString.substring(8, 10));
  
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return { isValid: false, errors: ['Invalid date'], error: 'Invalid date' };
  }
  
  return { isValid: true, errors: [] };
}

export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber) {
    return { isValid: false, errors: ['Card number is required'], error: 'Card number is required' };
  }
  
  // Remove spaces and dashes for validation
  const cleaned = cardNumber.replace(/[\s-]/g, '');
  
  if (!isValidCreditCard(cleaned)) {
    return { isValid: false, errors: ['Invalid card number'], error: 'Invalid card number' };
  }
  return { isValid: true, errors: [] };
}

export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString) {
    return { isValid: false, errors: ['JSON is required'], error: 'JSON is required' };
  }
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };
  } catch {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' };
  }
}

export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true, errors: [] };
}

export async function validateAsync(validator: (value: string) => Promise<ValidationResult>, value: string): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return { 
      isValid: false, 
      errors: [error instanceof Error ? error.message : 'Validation failed'], 
      error: error instanceof Error ? error.message : 'Validation failed' 
    };
  }
}

export function validateRequired(value: unknown, fieldName = 'Field'): ValidationResult {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  return { isValid: true, errors: [] };
}