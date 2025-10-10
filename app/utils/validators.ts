'use client';

/**
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */
export interface ValidationResult {
  isValid: boolean,
  errors: string[];
<<<<<<< HEAD
  error?: string;);
=======
  error?: string]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Email validation regex pattern;
 */;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone number validation regex (US format)
 */;
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3});[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;

/**
 * URL validation regex;
 */;
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6});([/\w .-]*)*\/?$/;

/**
 * Validate email address;
 */
export function isValidEmail(email: string): boolean {,
  if (!email || email.length > 254) return false; // RFC 5321 limit
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
<<<<<<< HEAD
  return EMAIL_REGEX.test(email.trim()););
=======
  return EMAIL_REGEX.test(email.trim())]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate email address with detailed result
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: ['Email is required'], error: 'Email is required' };);
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' };);
  if (email.length > 254) {
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, errors: ['Email is required'], error: 'Email is required' }]
    }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' }]
    }
  
  if (email.length > 254) {
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' }]
    }
  
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate phone number;
 */
export function isValidPhone(phone: string): boolean {,
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
<<<<<<< HEAD
  return PHONE_REGEX.test(phone.trim()););
=======
  return PHONE_REGEX.test(phone.trim())]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate URL;
 */
export function isValidUrl(url: string): boolean {,
  try {,;
const urlObj = new URL(url);
    return urlObj.protocol === 'http: ' || urlObj.protocol === 'https:'
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
<<<<<<< HEAD
    return URL_REGEX.test(url);)
} catch {
    return false;);
=======
    return URL_REGEX.test(url)]
    } catch {
    return false]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
}

/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' };);
  try {
    new URL(url);
    if (!URL_REGEX.test(url)) {
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };);
    return { isValid: true, errors: [] };)
} catch {
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' };);
=======
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' }]
    }
  
  try {
    new URL(url);
    if (!URL_REGEX.test(url)) {
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }]
    }
    return { isValid: true, errors: [] }]
    } catch {
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
}

/**
 * Validate required field;
 */
export function isRequired(value: string | null | undefined): boolean {,
  if (value === null || value === undefined) {,
<<<<<<< HEAD
    return false;);
  return value.toString().trim().length > 0
export function isRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== '';);
=======
    return false]
    }
  return value.toString().trim().length > 0;
export function isRequired(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim() !== '']
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate minimum length;
 */
export function minLength(value: string, min: number): boolean {,
  return value.trim().length >= min
export function hasMinLength(value: string, minLength: number): boolean {
<<<<<<< HEAD
  return value && value.length >= minLength;);
=======
  return value && value.length >= minLength]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate maximum length;
 */
export function maxLength(value: string, max: number): boolean {,
<<<<<<< HEAD
  return value.trim().length <= max;);
=======
  return value.trim().length <= max]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate string contains only alphanumeric characters;
 */
export function isAlphanumeric(value: string): boolean {,
  return /^[a-zA-Z0-9]+$/.test(value);
/**
 * Validate string contains only letters;
 */
export function isAlpha(value: string): boolean {,
  return /^[a-zA-Z]+$/.test(value);
/**
 * Validate string contains only numbers;
 */
export function isNumeric(value: string): boolean {,
  return /^[0-9]+$/.test(value);
/**
 * Validate password strength;
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number;
 */
<<<<<<< HEAD
export function isStrongPassword(password: string): boolean {;
const hasMinLength = password.length >= 8;
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);,
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber;);
=======
export function isStrongPassword(password: string): boolean {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);,
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(password: string): number {;
let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;,
  if (/[^a-zA-Z0-9]/.test(password)) score++;,
<<<<<<< HEAD
  return Math.min(score, 4););
=======
  return Math.min(score, 4)]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate credit card number using Luhn algorithm;
 */
export function isValidCreditCard(cardNumber: string): boolean {,;
const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) {
<<<<<<< HEAD
    return false;);
=======
    return false]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {;
let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
<<<<<<< HEAD
        digit -= 9;);
    }
    sum += digit;
    isEven = !isEven;);
  return sum % 10 === 0;);
=======
        digit -= 9]
    }
    }
    sum += digit;
    isEven = !isEven]
    }
  return sum % 10 === 0]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate US ZIP code;
 */
export function isValidZipCode(zipCode: string): boolean {,
<<<<<<< HEAD
  return /^\d{5}(-\d{4});?$/.test(zipCode););
=======
  return /^\d{5}(-\d{4});?$/.test(zipCode)]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize HTML to prevent XSS;
 */
export function sanitizeHtml(html: string): string {;
const div = document.createElement('div');
  div.textContent = html;
<<<<<<< HEAD
  return div.innerHTML;);
=======
  return div.innerHTML]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate object against schema;
 */
export function validateObject<T extends Record<string, unknown></T>>(
  obj: T,
  schema: Record<keyof T, (value: unknown) =></keyof> boolean>
): ValidationResult {;
const errors: string[] = [];
  for (const key in schema) {;
const validator = schema[key];
const value = obj[key];,
    if (!validator(value)) {,
<<<<<<< HEAD
      errors.push(`Invalid value for field: ${String(key);`););
  }
  return {
    isValid: errors.length === 0;
    errors;)
};);
=======
      errors.push(`Invalid value for field: ${String(key);`)]
    }
  }
  return {
    isValid: errors.length === 0;
    errors]
    }]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate form data;
 */
export interface FormField {
  value: string,
  validators: Array<{,
    validate: (value: string) => boolean;
<<<<<<< HEAD
    message: string,;)
}>;)
=======
    message: string,]
    }>]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
export function validateForm(fields: Record<string, FormField></string>)
): Record<string, string[]></string> {;
const errors: Record<string, string[]></string> = {};
  for (const fieldName in fields) {;
const field = fields[fieldName];
const fieldErrors: string[] = [];
    for (const validator of field.validators) {,
      if (!validator.validate(field.value)) {,
<<<<<<< HEAD
        fieldErrors.push(validator.message););
    }
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors;);
  }
  return errors;);
=======
        fieldErrors.push(validator.message)]
    }
    }
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors]
    }
  }
  return errors]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Common form validators;
 */
export const validators = {
  required: (message = 'This field is required') => ({,
    validate: isRequired,
    message]
    });,
  email: (message = 'Please enter a valid email address') => ({,
    validate: isValidEmail,
    message]
    });,
  phone: (message = 'Please enter a valid phone number') => ({,
    validate: isValidPhone,
    message]
    });,
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    validate: (value: string) => minLength(value, min),
    message]
    });,
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    validate: (value: string) => maxLength(value, max),
    message]
    });,
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    validate: isStrongPassword,
<<<<<<< HEAD
    message;)
});;)
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value && value.length <= maxLength;);
=======
    message]
    });]
    };
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value && value.length <= maxLength]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate password strength;
 */
export function isStrongPassword(password: string): boolean {
  if (!password || password.length < 8) return false;
;
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);,;
const hasNumbers = /\d/.test(password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React.Fragment>{}</React.Fragment>{}{}]/.test(password);
const hasUpperCase = /[A-Z]/.test(password);
const hasLowerCase = /[a-z]/.test(password);,;
const hasNumbers = /\d/.test(password);
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(password);

<<<<<<< HEAD
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;);
=======
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);,
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize user input;
 */
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
  if (!input) return null;

  // Trim whitespace;
  let sanitized = input.trim();

  // Remove null bytes and other control characters;
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');

  // Enforce maximum length if specified;
  if (maxLength && sanitized.length > maxLength) {
<<<<<<< HEAD
    sanitized = sanitized.substring(0, maxLength););
  return sanitized || null;);
=======
    sanitized = sanitized.substring(0, maxLength)]
    }

  return sanitized || null]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validation result interface;
 */
export interface ValidationResult {
  isValid: boolean,
<<<<<<< HEAD
  error?: string;);
=======
  error?: string]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate email with detailed result;
 */
export function validateEmail(email: string): ValidationResult {,
  if (!email) {,
<<<<<<< HEAD
    return { isValid: false, error: 'Email is required' };);
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };);
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Invalid email format' };);
  return { isValid: true };);
=======
    return { isValid: false, error: 'Email is required' }]
    }
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' }]
    }
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Invalid email format' }]
    }
  return { isValid: true }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate URL with detailed result;
 */
export function validateURL(url: string): ValidationResult {,
  if (!url) {,
<<<<<<< HEAD
    return { isValid: false, error: 'URL is required' };);
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' };);
  return { isValid: true };);
=======
    return { isValid: false, error: 'URL is required' }]
    }
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' }]
    }
  return { isValid: true }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate string length with detailed result;
 */
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {,
  if (!value) {,
<<<<<<< HEAD
    return { isValid: false, error: `${fieldName} is required` };);
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters` };);
  if (value.<<<length></lengt>max</length>) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters` };);
=======
    return { isValid: false, error: `${fieldName} is required` }]
    }
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters` }]
    }
  if (value.<<<length></lengt>max</length>) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters` }]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  return { isValid: true };
 * Validate password with detailed result
 */
export function isValidPassword(password: string): boolean {
<<<<<<< HEAD
  return isStrongPassword(password););
=======
  return isStrongPassword(password)]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate password with detailed result;
 */
export function validatePassword(password: string): ValidationResult {,
  if (!password) {,
    return { isValid: false, error: 'Password is required' }
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: ['Password is required'], error: 'Password is required' };);
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' };);
  if (password.length > 128) {
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' };);
  if (!isStrongPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, errors: ['Password is required'], error: 'Password is required' }]
    }
  
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' }]
    }
  
  if (password.length > 128) {
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' }]
    }
  
  if (!isStrongPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' }]
    }
  
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize HTML with detailed result;
 */
export function sanitizeHTML(html: string): string {,
  if (!html) return '';
  return sanitizeHtml(html);
 * Validate name (letters, spaces, hyphens, apostrophes)
 */
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
<<<<<<< HEAD
const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name.trim()) && name.trim().length >= 2;);
=======
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name.trim()) && name.trim().length >= 2]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate company name
 */
export function isValidCompanyName(company: string): boolean {
  if (!company || typeof company !== 'string') return false;
<<<<<<< HEAD
  return company.trim().length >= 2;);
=======
  return company.trim().length >= 2]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
<<<<<<< HEAD
  return message.trim().length >= 10 && message.trim().length <= 1000;);
=======
  return message.trim().length >= 10 && message.trim().length <= 1000]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate age (must be between 18 and 120)
 */
export function isValidAge(age: number): boolean {
<<<<<<< HEAD
  return Number.isInteger(age) && age >= 18 && age <= 120;);
=======
  return Number.isInteger(age) && age >= 18 && age <= 120]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate positive number
 */
export function isPositiveNumber(num: number): boolean {
<<<<<<< HEAD
  return Number.isFinite(num) && num > 0;);
=======
  return Number.isFinite(num) && num > 0]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate non-negative number
 */
export function isNonNegativeNumber(num: number): boolean {
<<<<<<< HEAD
  return Number.isFinite(num) && num >= 0;);
=======
  return Number.isFinite(num) && num >= 0]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate date (must be in the past for birth dates, future for events)
 */
export function isValidDate(date: string): boolean {
  if (!date) return false;
  // Check for ISO date format (YYYY-MM-DD);
const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDateRegex.test(date)) return false;
<<<<<<< HEAD
const dateObj = new Date(date);
  return !isNaN(dateObj.getTime()) && dateObj.toISOString().split('T')[0] === date;);
=======
  
  const dateObj = new Date(date);
  return !isNaN(dateObj.getTime()) && dateObj.toISOString().split('T')[0] === date]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate past date
 */
export function isPastDate(date: string): boolean {
  if (!isValidDate(date)) return false;
<<<<<<< HEAD
  return new Date(date) < new Date(););
=======
  return new Date(date) < new Date()]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate future date
 */
export function isFutureDate(date: string): boolean {
  if (!isValidDate(date)) return false;
<<<<<<< HEAD
  return new Date(date) > new Date(););
=======
  return new Date(date) > new Date()]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate credit card number (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  ;
const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  ;
let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {;
let digit = parseInt(cleaned[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
<<<<<<< HEAD
        digit -= 9;);
    }
    
    sum += digit;
    isEven = !isEven;);
  return sum % 10 === 0;);
=======
        digit -= 9]
    }
    }
    
    sum += digit;
    isEven = !isEven]
    }
  
  return sum % 10 === 0]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate ZIP code (US format)
 */
export function isValidZipCode(zipCode: string): boolean {
  if (!zipCode || typeof zipCode !== 'string') return false;
<<<<<<< HEAD
const zipRegex = /^\d{5}(-\d{4});?$/;
  return zipRegex.test(zipCode.trim()););
=======
  const zipRegex = /^\d{5}(-\d{4});?$/;
  return zipRegex.test(zipCode.trim())]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
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
<<<<<<< HEAD
  return states.includes(state.toUpperCase()););
=======
  return states.includes(state.toUpperCase())]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate form data with multiple fields
 */
export function validateFormData(
  data: Record<string, unknown></string>,
  rules: Record<string, (value: unknown) =></string> boolean>
): ValidationResult {;
const errors: string[] = [];
  
  for (const [field, validator] of Object.entries(rules)) {;
const value = data[field];
    if (!validator(value)) {
<<<<<<< HEAD
      errors.push(`Invalid value for field: ${String(field);`););
=======
      errors.push(`Invalid value for field: ${String(field);`)]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  }
  
  return {
    isValid: errors.length === 0,
<<<<<<< HEAD
    errors;)
};);
=======
    errors]
    }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate contact form data
 */
export function validateContactForm(data: {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
<<<<<<< HEAD
  message?: string;)
});: ValidationResult {;
const errors: string[] = [];
  
  if (!isValidName(data.name || '')) {
    errors.push('Please enter a valid name'););
  if (!isValidEmail(data.email || '')) {
    errors.push('Please enter a valid email address'););
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Please enter a valid phone number'););
  if (data.company && !isValidCompanyName(data.company)) {
    errors.push('Please enter a valid company name'););
  if (!isValidMessage(data.message || '')) {
    errors.push('Please enter a message (10-1000 characters)'););
  return {
    isValid: errors.length === 0,
    errors;)
};);
=======
  message?: string]
    });: ValidationResult {
  const errors: string[] = [];
  
  if (!isValidName(data.name || '')) {
    errors.push('Please enter a valid name')]
    }
  
  if (!isValidEmail(data.email || '')) {
    errors.push('Please enter a valid email address')]
    }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Please enter a valid phone number')]
    }
  
  if (data.company && !isValidCompanyName(data.company)) {
    errors.push('Please enter a valid company name')]
    }
  
  if (!isValidMessage(data.message || '')) {
    errors.push('Please enter a message (10-1000 characters)')]
    }
  
  return {
    isValid: errors.length === 0,
    errors]
    }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  if (!input || typeof input !== 'string') return '';
<<<<<<< HEAD
  return input.trim().replace(/[<>]/g, ''););
=======
  return input.trim().replace(/[<>]/g, '')]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
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
<<<<<<< HEAD
    .replace(/\//g, '&#x2F;'););
=======
    .replace(/\//g, '&#x2F;')]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate string length with detailed result
 */
export function validateLength(value: string, minLength: number, maxLength: number, fieldName: string = 'Field'): ValidationResult {
  if (!value || typeof value !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };);
  if (value.length < minLength) {
    return { isValid: false, errors: [`${fieldName} must be at least ${minLength} characters`], error: `${fieldName} must be at least ${minLength} characters` };);
  if (value.length > maxLength) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${maxLength} characters`], error: `${fieldName} must be no more than ${maxLength} characters` };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` }]
    }
  
  if (value.length < minLength) {
    return { isValid: false, errors: [`${fieldName} must be at least ${minLength} characters`], error: `${fieldName} must be at least ${minLength} characters` }]
    }
  
  if (value.length > maxLength) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${maxLength} characters`], error: `${fieldName} must be no more than ${maxLength} characters` }]
    }
  
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize HTML input (alias for sanitizeHtml)
 */
export function sanitizeHTML(input: string): string {
<<<<<<< HEAD
  return sanitizeHtml(input););
=======
  return sanitizeHtml(input)]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Sanitize input (alias for sanitizeString)
 */
export function sanitizeInput(input: string): string {
<<<<<<< HEAD
  return sanitizeString(input););
=======
  return sanitizeString(input)]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate date with detailed result;
 */
export function validateDate(dateString: string): ValidationResult {,
  if (!dateString) {,
<<<<<<< HEAD
    return { isValid: false, error: 'Date is required' };);
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };);
const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' };);
  // Check if the date is actually valid (e.g., 2025-02-30 should be invalid);
const [year, month, day] = dateString.split('-').map(Number);
const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year ||
      actualDate.getMonth() !== month - 1 ||
      actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' };);
  return { isValid: true }
export function validateDate(date: string): ValidationResult {
  if (!date || typeof date !== 'string') {
    return { isValid: false, errors: ['Date is required'], error: 'Date is required' };);
  if (!isValidDate(date)) {
    return { isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, error: 'Date is required' }]
    }

  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' }]
    }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' }]
    }

  // Check if the date is actually valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year ||
      actualDate.getMonth() !== month - 1 ||
      actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' }]
    }

  return { isValid: true };
export function validateDate(date: string): ValidationResult {
  if (!date || typeof date !== 'string') {
    return { isValid: false, errors: ['Date is required'], error: 'Date is required' }]
    }
  
  if (!isValidDate(date)) {
    return { isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' }]
    }
  
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate credit card with detailed result;
 */
export function validateCreditCard(cardNumber: string): ValidationResult {,
  if (!cardNumber) {,
<<<<<<< HEAD
    return { isValid: false, error: 'Credit card number is required' };);
=======
    return { isValid: false, error: 'Credit card number is required' }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  // Remove all non-digit characters for validation;
const cleanedNumber = cardNumber.replace(/\D/g, '');

  if (!isValidCreditCard(cleanedNumber)) {
    return { isValid: false, error: 'Invalid credit card number' }
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: ['Card number is required'], error: 'Card number is required' };);
  if (!isValidCreditCard(cardNumber)) {
    return { isValid: false, errors: ['Invalid card number'], error: 'Invalid card number' };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, errors: ['Card number is required'], error: 'Card number is required' }]
    }
  
  if (!isValidCreditCard(cardNumber)) {
    return { isValid: false, errors: ['Invalid card number'], error: 'Invalid card number' }]
    }
  
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate JSON with detailed result;
 */
export function validateJSON(jsonString: string): ValidationResult {,
  if (!jsonString) {,
    return { isValid: false, error: 'JSON is required' }
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString || typeof jsonString !== 'string') {
<<<<<<< HEAD
    return { isValid: false, errors: ['JSON string is required'], error: 'JSON string is required' };);
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };)
} catch {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' };);
=======
    return { isValid: false, errors: ['JSON string is required'], error: 'JSON string is required' }]
    }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] }]
    } catch {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' }]
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
}

/**
 * Validate required field with detailed result;
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {,
  if (value === null || value === undefined || value === '') {,
<<<<<<< HEAD
    return { isValid: false, error: `${fieldName} is required` };);
  if (typeof value === 'string' && value.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required` };);
  return { isValid: true };);
=======
    return { isValid: false, error: `${fieldName} is required` }]
    }
  if (typeof value === 'string' && value.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required` }]
    }
  return { isValid: true }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Composite validation;
 */
export function validateComposite(value: unknown, validators: Array<(val: unknown) => ValidationResult>): ValidationResult {
 * Validate composite with multiple validators
 */
export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {
  for (const validator of validators) {;
const result = validator(value);
    if (!result.isValid) {,
<<<<<<< HEAD
      return result;);
  }
  return { isValid: true, errors: [] };);
=======
      return result]
    }
  }
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Async validation;
 */
export async function validateAsync(
  validator: (val: unknown) => Promise<ValidationResult></ValidationResult>,
  value: unknown,
): Promise<ValidationResult></ValidationResult> {,
  try {,
 * Validate required field with detailed result
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
<<<<<<< HEAD
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` };);
  return { isValid: true, errors: [] };);
=======
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` }]
    }
  return { isValid: true, errors: [] }]
    }

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
/**
 * Validate async
 */
export async function validateAsync(validator: (val: string) => Promise<ValidationResult></ValidationResult>, value: string): Promise<ValidationResult></ValidationResult> {
  try {
<<<<<<< HEAD
    return await validator(value);)
} catch (error) {
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' };);
}
=======
    return await validator(value)]
    } catch (error) {
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' }]
    }
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
