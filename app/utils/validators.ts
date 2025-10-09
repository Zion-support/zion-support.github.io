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
  return EMAIL_REGEX.test(email);
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone);
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return URL_REGEX.test(url);
  } catch {
    return false;
  }
}

/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== '';
}

/**
 * Validate minimum length
 */
export function hasMinLength(value: string, min: number): boolean {
  return value.length >= min;
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, max: number): boolean {
  return value.length <= max;
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

/**
 * Validate password (alias for isStrongPassword)
 */
export function isValidPassword(password: string): boolean {
  return isStrongPassword(password);
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
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
 * Validate date string
 */
export function isValidDate(dateString: string): boolean {
  // Check for ISO date format (YYYY-MM-DD)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDateRegex.test(dateString)) {
    return false;
  }
  
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime()) && date.toISOString().split('T')[0] === dateString;
}

/**
 * Validate age (must be between min and max)
 */
export function isValidAge(birthDate: string, minAge: number = 0, maxAge: number = 150): boolean {
  if (!isValidDate(birthDate)) return false;
  
  const today = new Date();
  const birth = new Date(birthDate);
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1 >= minAge && age - 1 <= maxAge;
  }
  
  return age >= minAge && age <= maxAge;
}

/**
 * Sanitize HTML content
 */
export function sanitizeHTML(html: string | null | undefined): string {
  if (html === null || html === undefined) {
    return '';
  }
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize input (alias for sanitizeHTML)
 */
export function sanitizeInput(input: string): string {
  return sanitizeHTML(input);
}

/**
 * Validate email with result object
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, errors: ['Email is required'] };
  }
  if (email.length > 254) {
    return { isValid: false, errors: ['Email is too long'] };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, errors: ['Invalid email format'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate URL with result object
 */
export function validateURL(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, errors: ['URL is required'] };
  }
  if (!isValidUrl(url)) {
    return { isValid: false, errors: ['Invalid URL format'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate length with result object
 */
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {
  if (value.length < min) {
    return { isValid: false, errors: [`${fieldName} must be at least ${min} characters long`], error: `${fieldName} must be at least ${min} characters long` };
  }
  if (value.length > max) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${max} characters long`], error: `${fieldName} must be no more than ${max} characters long` };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate password with result object
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, errors: ['Password is required'] };
  }
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters long'] };
  }
  if (password.length > 128) {
    return { isValid: false, errors: ['Password must be no more than 128 characters long'] };
  }
  if (!isStrongPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate date with result object
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, errors: ['Date is required'] };
  }
  if (!isValidDate(dateString)) {
    return { isValid: false, errors: ['Invalid date format'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate credit card with result object
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber) {
    return { isValid: false, errors: ['Credit card number is required'] };
  }
  if (!isValidCreditCard(cardNumber)) {
    return { isValid: false, errors: ['Invalid credit card number'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate JSON with result object
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString) {
    return { isValid: false, errors: ['JSON string is required'] };
  }
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };
  } catch {
    return { isValid: false, errors: ['Invalid JSON format'] };
  }
}

/**
 * Validate composite with multiple validators
 */
export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate required field with result object
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate async
 */
export async function validateAsync(validator: (val: string) => Promise<ValidationResult>, value: string): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Validation failed';
    return { isValid: false, errors: [errorMessage], error: errorMessage };
  }
}

/**
 * Validate form data against rules
 */
export function validateForm(
  data: Record<string, unknown>,
  rules: Record<string, Array<(value: unknown) => boolean>>
): ValidationResult {
  const errors: string[] = [];
  
  for (const [key, validators] of Object.entries(rules)) {
    const value = data[key];
    
    for (const validator of validators) {
      if (!validator(value)) {
        errors.push(`Validation failed for field: ${String(key)}`);
        break;
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Common validation rules
 */
export const validationRules = {
  required: (value: unknown) => isRequired(value as string),
  email: (value: unknown) => isValidEmail(value as string),
  phone: (value: unknown) => isValidPhone(value as string),
  url: (value: unknown) => isValidUrl(value as string),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => 
    (value: unknown) => hasMinLength(value as string, min),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => 
    (value: unknown) => hasMaxLength(value as string, max),
  strongPassword: (value: unknown) => isStrongPassword(value as string),
  creditCard: (value: unknown) => isValidCreditCard(value as string),
  date: (value: unknown) => isValidDate(value as string),
  age: (minAge: number, maxAge: number) => 
    (value: unknown) => isValidAge(value as string, minAge, maxAge)
};

/**
 * Validate contact form data
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): ValidationResult {
  const rules = {
    name: [validationRules.required, validationRules.minLength(2)],
    email: [validationRules.required, validationRules.email],
    phone: [validationRules.phone],
    message: [validationRules.required, validationRules.minLength(10)]
  };
  
  return validateForm(data, rules);
}

/**
 * Validate newsletter subscription
 */
export function validateNewsletterForm(data: {
  email: string;
  name?: string;
}): ValidationResult {
  const rules = {
    email: [validationRules.required, validationRules.email],
    name: [validationRules.minLength(2)]
  };
  
  return validateForm(data, rules);
}