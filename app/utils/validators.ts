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
 * Password validation regex (at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
 */
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/**
 * Credit card validation using Luhn algorithm
 */
function luhnCheck(cardNumber: string): boolean {
  let sum = 0;
  let isEven = false;
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
    
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
  return URL_REGEX.test(url.trim());
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
  return PASSWORD_REGEX.test(password);
}

/**
 * Validate password with detailed result
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return { isValid: false, errors: ['Password is required'], error: 'Password is required' };
  }
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' };
  }
  if (password.length > 128) {
    return { isValid: false, errors: ['Password must be no more than 128 characters'], error: 'Password must be no more than 128 characters' };
  }
  if (!isValidPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate credit card number
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  const cleaned = cardNumber.replace(/\D/g, '');
  return cleaned.length >= 13 && cleaned.length <= 19 && luhnCheck(cleaned);
}

/**
 * Validate credit card with detailed result
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, errors: ['Credit card number is required'], error: 'Credit card number is required' };
  }
  
  const cleanedNumber = cardNumber.replace(/\D/g, '');
  
  if (!isValidCreditCard(cleanedNumber)) {
    return { isValid: false, errors: ['Invalid credit card number'], error: 'Invalid credit card number' };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate string length
 */
export function validateLength(
  value: string,
  min: number,
  max: number,
  fieldName: string = 'Field'
): ValidationResult {
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
 * Validate date
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
 * Validate JSON
 */
export function validateJSON(jsonString: string): ValidationResult {
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
 * Validate required field
 */
export function validateRequired(
  value: unknown,
  fieldName: string = 'Field'
): ValidationResult {
  if (value === null || value === undefined) {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  if (typeof value === 'string' && value.trim().length === 0) {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  return { isValid: true, errors: [] };
}

/**
 * Composite validation
 */
export function validateComposite(
  value: unknown,
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true, errors: [] };
}

/**
 * Async validation
 */
export async function validateAsync(
  validator: (val: unknown) => Promise<ValidationResult>,
  value: unknown
): Promise<ValidationResult> {
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

/**
 * Sanitize HTML
 */
export function sanitizeHTML(html: string): string {
  if (!html || typeof html !== 'string') return '';
  
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
}