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
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return URL_REGEX.test(url);
  } catch {
    return false;
  }
}

/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' };
  }
  
  try {
    new URL(url);
    if (!URL_REGEX.test(url)) {
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };
    }
    return { isValid: true, errors: [] };
  } catch {
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };
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
export function hasMinLength(value: string, minLength: number): boolean {
  return value && value.length >= minLength;
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value && value.length <= maxLength;
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
  if (!password || password.length < 8) return false;
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

/**
 * Validate password with detailed result
 */
export function isValidPassword(password: string): boolean {
  return isStrongPassword(password);
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
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' };
  }
  
  if (!isStrongPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate name (letters, spaces, hyphens, apostrophes)
 */
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name.trim()) && name.trim().length >= 2;
}

/**
 * Validate company name
 */
export function isValidCompanyName(company: string): boolean {
  if (!company || typeof company !== 'string') return false;
  return company.trim().length >= 2;
}

/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
  return message.trim().length >= 10 && message.trim().length <= 1000;
}

/**
 * Validate age (must be between 18 and 120)
 */
export function isValidAge(age: number): boolean {
  return Number.isInteger(age) && age >= 18 && age <= 120;
}

/**
 * Validate positive number
 */
export function isPositiveNumber(num: number): boolean {
  return Number.isFinite(num) && num > 0;
}

/**
 * Validate non-negative number
 */
export function isNonNegativeNumber(num: number): boolean {
  return Number.isFinite(num) && num >= 0;
}

/**
 * Validate date (must be in the past for birth dates, future for events)
 */
export function isValidDate(date: string): boolean {
  if (!date) return false;
  // Check for ISO date format (YYYY-MM-DD)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDateRegex.test(date)) return false;
  
  const dateObj = new Date(date);
  return !isNaN(dateObj.getTime()) && dateObj.toISOString().split('T')[0] === date;
}

/**
 * Validate past date
 */
export function isPastDate(date: string): boolean {
  if (!isValidDate(date)) return false;
  return new Date(date) < new Date();
}

/**
 * Validate future date
 */
export function isFutureDate(date: string): boolean {
  if (!isValidDate(date)) return false;
  return new Date(date) > new Date();
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  
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
 * Validate ZIP code (US format)
 */
export function isValidZipCode(zipCode: string): boolean {
  if (!zipCode || typeof zipCode !== 'string') return false;
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode.trim());
}

/**
 * Validate state (US states)
 */
export function isValidState(state: string): boolean {
  if (!state || typeof state !== 'string') return false;
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];
  return states.includes(state.toUpperCase());
}

/**
 * Validate form data with multiple fields
 */
export function validateFormData(
  data: Record<string, unknown>,
  rules: Record<string, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [];
  
  for (const [field, validator] of Object.entries(rules)) {
    const value = data[field];
    if (!validator(value)) {
      errors.push(`Invalid value for field: ${String(field)}`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}): ValidationResult {
  const errors: string[] = [];
  
  if (!isValidName(data.name || '')) {
    errors.push('Please enter a valid name');
  }
  
  if (!isValidEmail(data.email || '')) {
    errors.push('Please enter a valid email address');
  }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  if (data.company && !isValidCompanyName(data.company)) {
    errors.push('Please enter a valid company name');
  }
  
  if (!isValidMessage(data.message || '')) {
    errors.push('Please enter a message (10-1000 characters)');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Sanitize HTML input
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate string length with detailed result
 */
export function validateLength(value: string, minLength: number, maxLength: number, fieldName: string = 'Field'): ValidationResult {
  if (!value || typeof value !== 'string') {
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };
  }
  
  if (value.length < minLength) {
    return { isValid: false, errors: [`${fieldName} must be at least ${minLength} characters`], error: `${fieldName} must be at least ${minLength} characters` };
  }
  
  if (value.length > maxLength) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${maxLength} characters`], error: `${fieldName} must be no more than ${maxLength} characters` };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Sanitize HTML input (alias for sanitizeHtml)
 */
export function sanitizeHTML(input: string): string {
  return sanitizeHtml(input);
}

/**
 * Sanitize input (alias for sanitizeString)
 */
export function sanitizeInput(input: string): string {
  return sanitizeString(input);
}

/**
 * Validate date with detailed result
 */
export function validateDate(date: string): ValidationResult {
  if (!date || typeof date !== 'string') {
    return { isValid: false, errors: ['Date is required'], error: 'Date is required' };
  }
  
  if (!isValidDate(date)) {
    return { isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate credit card with detailed result
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, errors: ['Card number is required'], error: 'Card number is required' };
  }
  
  if (!isValidCreditCard(cardNumber)) {
    return { isValid: false, errors: ['Invalid card number'], error: 'Invalid card number' };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate JSON with detailed result
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, errors: ['JSON string is required'], error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };
  } catch {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' };
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
 * Validate required field with detailed result
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
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' };
  }
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
 * Async validation with proper error handling
 */
export async function validateAsync(
  validator: (value: string) => Promise<ValidationResult>,
  value: string
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return { 
      isValid: false, 
      errors: ['Validation failed'], 
      error: error instanceof Error ? error.message : 'Validation failed' 
    };
  }
}
