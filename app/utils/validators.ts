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
  if (!email || typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Validate email address with detailed result
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, errors: ['Email is required'], error: 'Email is required' };
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' };
  }
  
  if (email.length > 254) {
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  return PHONE_REGEX.test(phone.trim());
}

/**
 * Validate phone number with detailed result
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, errors: ['Phone number is required'], error: 'Phone number is required' };
  }
  
  if (!PHONE_REGEX.test(phone.trim())) {
    return { isValid: false, errors: ['Invalid phone number format'], error: 'Invalid phone number format' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return URL_REGEX.test(url);
  }
}

/**
 * Validate URL with detailed result
 */
export function validateUrl(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' };
  }
  
  if (!isValidUrl(url)) {
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  if (!password || typeof password !== 'string') return false;
  
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

/**
 * Validate password with detailed result
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return { isValid: false, errors: ['Password is required'], error: 'Password is required' };
  }
  
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors, error: errors[0] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate required field
 */
export function isValidRequired(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string' && value.trim().length === 0) return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
}

/**
 * Validate required field with detailed result
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  if (!isValidRequired(value)) {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate string length
 */
export function isValidLength(value: string, min: number, max: number): boolean {
  if (!value || typeof value !== 'string') return false;
  return value.length >= min && value.length <= max;
}

/**
 * Validate string length with detailed result
 */
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {
  if (!value || typeof value !== 'string') {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  
  if (value.length < min) {
    return { isValid: false, errors: [`${fieldName} must be at least ${min} characters`], error: `${fieldName} must be at least ${min} characters` };
  }
  
  if (value.length > max) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${max} characters`], error: `${fieldName} must be no more than ${max} characters` };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  
  // Remove all non-digit characters
  const cleaned = cardNumber.replace(/\D/g, '');
  
  // Check if it's a valid length (13-19 digits)
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  
  // Luhn algorithm
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
 * Validate credit card with detailed result
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, errors: ['Credit card number is required'], error: 'Credit card number is required' };
  }
  
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, errors: ['Credit card number must be 13-19 digits'], error: 'Credit card number must be 13-19 digits' };
  }
  
  if (!isValidCreditCard(cleaned)) {
    return { isValid: false, errors: ['Invalid credit card number'], error: 'Invalid credit card number' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate date string (YYYY-MM-DD format)
 */
export function isValidDate(dateString: string): boolean {
  if (!dateString || typeof dateString !== 'string') return false;
  
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return false;
  
  // Check if the date is actually valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  
  return actualDate.getFullYear() === year && 
         actualDate.getMonth() === month - 1 && 
         actualDate.getDate() === day;
}

/**
 * Validate date with detailed result
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || typeof dateString !== 'string') {
    return { isValid: false, errors: ['Date is required'], error: 'Date is required' };
  }
  
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, errors: ['Date must be in YYYY-MM-DD format'], error: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' };
  }
  
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {
    return { isValid: false, errors: ['Invalid date'], error: 'Invalid date' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate JSON string
 */
export function isValidJson(jsonString: string): boolean {
  if (!jsonString || typeof jsonString !== 'string') return false;
  
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate JSON with detailed result
 */
export function validateJson(jsonString: string): ValidationResult {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, errors: ['JSON is required'], error: 'JSON is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };
  } catch (error) {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' };
  }
}

/**
 * Sanitize HTML string (basic implementation)
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';
  
  // Basic HTML sanitization - remove script tags and dangerous attributes
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
}

/**
 * Composite validation - run multiple validators
 */
export function validateComposite(value: unknown, validators: Array<(val: unknown) => ValidationResult>): ValidationResult {
  const allErrors: string[] = [];
  
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      allErrors.push(...result.errors);
    }
  }
  
  if (allErrors.length > 0) {
    return { isValid: false, errors: allErrors, error: allErrors[0] };
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
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' };
  }
}