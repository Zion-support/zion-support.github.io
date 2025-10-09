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
 * Email validation regex pattern;
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**
 * URL validation regex;
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
/**
 * Validate email address;
 */
export function isValidEmail(emai,)
  l: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate phone number;
 */
export function isValidPhone(phon,)
  e: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate URL;
 */
export function isValidUrl(ur,)
  l: string): boolean {/* TODO: Fix JSX expression */}
  } catch {/* TODO: Fix JSX expression */}
  }
}
/**
 * Validate required field;
 */
export function isRequired(valu,)
  e: string | null | undefined): boolean {/* TODO: Fix JSX expression */}
  }
  return value.toString().trim().length > 0;
}
/**
 * Validate minimum length;
 */
export function minLength(valu,
  e: string, mi,)
  n: number): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate maximum length;
 */
export function maxLength(valu,
  e: string, ma,)
  x: number): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate string contains only alphanumeric characters;
 */
export function isAlphanumeric(valu,)
  e: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate string contains only letters;
 */
export function isAlpha(valu,)
  e: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate string contains only numbers;
 */
export function isNumeric(valu,)
  e: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate password strength;
 * Requirement,
  s: at least 8 characters, 1 uppercase, 1 lowercase, 1 number;
 */
export function isStrongPassword(passwor,)
  d: string): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(passwor,)
  d: string): number {/* TODO: Fix JSX expression */}
}
/**
 * Validate credit card number using Luhn algorithm;
 */
export function isValidCreditCard(cardNumbe,)
  r: string): boolean {/* TODO: Fix JSX expression */}
  if (!/^\d{13,19}$/.test(cleaned)) {/* TODO: Fix JSX expression */}
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate US ZIP code;
 */
export function isValidZipCode(zipCod,)
  e: string): boolean {/* TODO: Fix JSX expression */}
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}
/**
 * Sanitize HTML to prevent XSS;
 */
export function sanitizeHtml(htm,)
  l: string): string {/* TODO: Fix JSX expression */}
}
/**
 * Validate object against schema;
 */
export function validateObject<T extends Record<string, unknown>>(ob,
  j: T,
  schem,
  a: Record<keyof T, (valu,)
  e: unknown) => boolean>
): ValidationResult {/* TODO: Fix JSX expression */}
  field: ${String(key)}`);
    }
  }
  return {/* TODO: Fix JSX expression */}
  };
}
/**
 * Validate form data;
 */
export interface FormField {/* TODO: Fix JSX expression */}
  }>;
}
export function validateForm(field,
  s: Record<string, FormField></string>)
): Record<string, string[]> {/* TODO: Fix JSX expression */}
  errors: Record<string, string[]> = {};
  for (const fieldName in fields) {/* TODO: Fix JSX expression */}
      }
    }
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */}
    }
  }
  return errors;
}
/**
 * Common form validators;
 */
export const validators = {/* TODO: Fix JSX expression */}
  }),
  emai,
  l: (message = 'Please enter a valid email address') => ({/* TODO: Fix JSX expression */})
  }),
  phon,
  e: (message = 'Please enter a valid phone number') => ({/* TODO: Fix JSX expression */})
  }),
  minLengt,
  h: (mi,)`
  n: number, message = `Minimum length is ${min} characters`) => ({/* TODO: Fix JSX expression */})
  }),
  maxLengt,
  h: (ma,)`
  x: number, message = `Maximum length is ${max} characters`) => ({/* TODO: Fix JSX expression */})
  }),
  passwor,
  d: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({/* TODO: Fix JSX expression */})
  })
};

/**
 * Validate password strength;
 */
export function isValidPassword(passwor,)
  d: string): boolean {/* TODO: Fix JSX expression */}
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

/**
 * Sanitize user input;
 */
export function sanitizeInput(inpu,)
  t: string | null | undefined, maxLength?: number): string | null {/* TODO: Fix JSX expression */}
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
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Validate URL with detailed result;
 */
export function validateURL(ur,)
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'URL is required' };
  }
  if (!isValidUrl(url)) {/* TODO: Fix JSX expression */}
  r: 'Invalid URL format' };
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Validate string length with detailed result;
 */
export function validateLength(valu,
  e: string, mi,
  n: number, ma,
  x: number, fieldNam,)
  e: string = 'Field'): ValidationResult {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  }
  if (value.length < min) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} must be at least ${min} characters` };
  }
  if (value.length > max) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} must be no more than ${max} characters` };
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Validate password with detailed result;
 */
export function validatePassword(passwor,)
  d: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Password is required' };
  }
  if (password.length < 8) {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters' };
  }
  if (password.length > 128) {/* TODO: Fix JSX expression */}
  r: 'Password must be no more than 128 characters' };
  }
  if (!isValidPassword(password)) {/* TODO: Fix JSX expression */}
  r: 'Password must contain uppercase, lowercase, number, and special character' };
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Sanitize HTML with detailed result;
 */
export function sanitizeHTML(htm,)
  l: string): string {/* TODO: Fix JSX expression */}
}

/**
 * Validate date with detailed result;
 */
export function validateDate(dateStrin,)
  g: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Date is required' };
  }
  
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {/* TODO: Fix JSX expression */}
  r: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {/* TODO: Fix JSX expression */}
  r: 'Invalid date format' };
  }
  
  // Check if the date is actually valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {/* TODO: Fix JSX expression */}
  r: 'Invalid date' };
  }
  
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Validate credit card with detailed result;
 */
export function validateCreditCard(cardNumbe,)
  r: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Credit card number is required' };
  }
  
  // Remove all non-digit characters for validation;
  const cleanedNumber = cardNumber.replace(/\D/g, '');
  
  if (!isValidCreditCard(cleanedNumber)) {/* TODO: Fix JSX expression */}
  r: 'Invalid credit card number' };
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Validate JSON with detailed result;
 */
export function validateJSON(jsonStrin,)
  g: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'JSON is required' };
  }
  try {/* TODO: Fix JSX expression */}
  d: true };
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' };
  }
}

/**
 * Validate required field with detailed result;
 */
export function validateRequired(valu,
  e: unknown, fieldNam,)
  e: string = 'Field'): ValidationResult {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  }
  if (typeof value === 'string' && value.trim().length === 0) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Composite validation;
 */
export function validateComposite(valu,
  e: unknown, validator,
  s: Array<(va,)
  l: unknown) => ValidationResult>): ValidationResult {/* TODO: Fix JSX expression */}
    }
  }
  return {/* TODO: Fix JSX expression */}
  d: true };
}

/**
 * Async validation;
 */
export async function validateAsync(validato,
  r: (va,)
  l: unknown) => Promise<ValidationResult>,
  valu,
  e: unknown;
): Promise<ValidationResult> {/* TODO: Fix JSX expression */}
  } catch (error) {/* TODO: Fix JSX expression */}
  r: error instanceof Error ? error.message : 'Validation failed' };
  }
}"`
