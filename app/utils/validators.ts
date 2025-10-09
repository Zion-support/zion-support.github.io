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
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

/**
 * URL validation regex pattern
 */
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

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
  return PHONE_REGEX.test(phone.replace(/[\s\-\(\)]/g, ''));
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
 * Validate if string is not empty
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim().length > 0;
}

/**
 * Alias for isNotEmpty for backward compatibility
 */
export function isRequired(value: string | null | undefined): boolean {
  return isNotEmpty(value);
}

/**
 * Validate string length
 */
export function isValidLength(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

/**
 * Validate if value is a number
 */
export function isValidNumber(value: string): boolean {
  return !isNaN(Number(value)) && isFinite(Number(value));
}

/**
 * Validate if value is a positive number
 */
export function isValidPositiveNumber(value: string): boolean {
  const num = Number(value);
  return !isNaN(num) && isFinite(num) && num > 0;
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validate if string contains only letters and spaces
 */
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

/**
 * Validate if string is a valid date
 */
export function isValidDate(dateString: string): boolean {
  if (!dateString) return false;
  
  // Check for common date formats
  const dateFormats = [
    /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
    /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
    /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY
  ];
  
  const isValidFormat = dateFormats.some(format => format.test(dateString));
  if (!isValidFormat) return false;
  
  const date = new Date(dateString);
  if (!(date instanceof Date) || isNaN(date.getTime())) return false;
  
  // Check if the parsed date matches the input string (prevents invalid dates like 2025-13-01)
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();
  
  // Reconstruct the date string to check if it matches input
  const reconstructed = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const inputNormalized = dateString.replace(/[\/\-]/g, '-');
  
  // Check if the reconstructed date matches the input
  if (!inputNormalized.includes(reconstructed) && !reconstructed.includes(inputNormalized)) {
    return false;
  }
  
  // Check if the date is reasonable (not in the far future or past)
  const now = new Date();
  const currentYear = now.getFullYear();
  
  return year >= 1900 && year <= currentYear + 100;
}

/**
 * Validate if string is a valid US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
}

/**
 * Validate email with detailed result
 */
export function validateEmail(email: string): ValidationResult {
  if (!isNotEmpty(email)) {
    return { isValid: false, errors: ['Email is required'] };
  }
  if (email.length > 254) {
    return { isValid: false, errors: ['Email address is too long'] };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, errors: ['Please enter a valid email address'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate phone with detailed result
 */
export function validatePhone(phone: string): ValidationResult {
  if (!isNotEmpty(phone)) {
    return { isValid: false, errors: ['Phone number is required'] };
  }
  if (!isValidPhone(phone)) {
    return { isValid: false, errors: ['Please enter a valid phone number'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate URL with detailed result
 */
export function validateUrl(url: string): ValidationResult {
  if (!isNotEmpty(url)) {
    return { isValid: false, errors: ['URL is required'] };
  }
  if (!isValidUrl(url)) {
    return { isValid: false, errors: ['Please enter a valid URL'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Alias for validateUrl for backward compatibility
 */
export function validateURL(url: string): ValidationResult {
  return validateUrl(url);
}

/**
 * Validate string length with detailed result
 */
export function validateLength(
  value: string,
  min: number,
  max: number,
  fieldName: string = 'Field'
): ValidationResult {
  if (!isNotEmpty(value)) {
    const error = `${fieldName} is required`;
    return { isValid: false, errors: [error], error };
  }
  if (value.length < min) {
    const error = `${fieldName} must be at least ${min} characters`;
    return { isValid: false, errors: [error], error };
  }
  if (value.length > max) {
    const error = `${fieldName} must be no more than ${max} characters`;
    return { isValid: false, errors: [error], error };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate password with detailed result
 */
export function validatePassword(password: string): ValidationResult {
  if (!isNotEmpty(password)) {
    return { isValid: false, errors: ['Password is required'] };
  }
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'] };
  }
  if (password.length > 128) {
    return { isValid: false, errors: ['Password must be no more than 128 characters'] };
  }
  if (!isValidPassword(password)) {
    return { isValid: false, errors: ['Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate name with detailed result
 */
export function validateName(name: string, fieldName: string = 'Name'): ValidationResult {
  if (!isNotEmpty(name)) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  if (!isValidName(name)) {
    return { isValid: false, errors: [`${fieldName} can only contain letters and spaces`] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate required field
 */
export function validateRequired(value: string | null | undefined, fieldName: string = 'Field'): ValidationResult {
  if (!isNotEmpty(value)) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate number with detailed result
 */
export function validateNumber(value: string, fieldName: string = 'Number'): ValidationResult {
  if (!isNotEmpty(value)) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  if (!isValidNumber(value)) {
    return { isValid: false, errors: [`${fieldName} must be a valid number`] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate positive number with detailed result
 */
export function validatePositiveNumber(value: string, fieldName: string = 'Number'): ValidationResult {
  if (!isNotEmpty(value)) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  if (!isValidPositiveNumber(value)) {
    return { isValid: false, errors: [`${fieldName} must be a positive number`] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate date with detailed result
 */
export function validateDate(dateString: string, fieldName: string = 'Date'): ValidationResult {
  if (!isNotEmpty(dateString)) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  if (!isValidDate(dateString)) {
    return { isValid: false, errors: [`${fieldName} must be a valid date`] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate ZIP code with detailed result
 */
export function validateZipCode(zipCode: string): ValidationResult {
  if (!isNotEmpty(zipCode)) {
    return { isValid: false, errors: ['ZIP code is required'] };
  }
  if (!isValidZipCode(zipCode)) {
    return { isValid: false, errors: ['Please enter a valid ZIP code'] };
  }
  return { isValid: true, errors: [] };
}

/**
 * Validate multiple fields and return combined result
 */
export function validateFields(validations: ValidationResult[]): ValidationResult {
  const allErrors = validations.flatMap(v => v.errors);
  const isValid = validations.every(v => v.isValid);
  
  return {
    isValid,
    errors: allErrors,
    error: allErrors.length > 0 ? allErrors[0] : undefined
  };
}

/**
 * Validate async
 */
export async function validateAsync(
  validator: (value: unknown) => Promise<ValidationResult>,
  value: unknown
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Validation failed';
    return { isValid: false, errors: [errorMessage], error: errorMessage };
  }
}

/**
 * Sanitize HTML input
 */
export function sanitizeHTML(input: string | null | undefined): string {
  if (!input) return '';
  
  return input
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
export function sanitizeInput(input: string | null | undefined): string {
  return sanitizeHTML(input);
}

/**
 * Validate credit card using Luhn algorithm
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!isNotEmpty(cardNumber)) {
    return { isValid: false, errors: ['Credit card number is required'] };
  }
  
  // Remove spaces and non-digits
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, errors: ['Credit card number must be between 13 and 19 digits'] };
  }
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  if (sum % 10 !== 0) {
    return { isValid: false, errors: ['Invalid credit card number'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate JSON string
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!isNotEmpty(jsonString)) {
    return { isValid: false, errors: ['JSON string is required'] };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true, errors: [] };
  } catch (error) {
    return { isValid: false, errors: ['Invalid JSON format'] };
  }
}

/**
 * Validate composite (multiple validators)
 */
export function validateComposite(
  value: string,
  validators: Array<(val: string) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true, errors: [] };
}