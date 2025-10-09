'use client';
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */
import { errorTracking, ErrorCategory, ErrorSeverity } from './errorTracking';
export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean;
  message: string;
}
export interface FieldRule {
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom';
  message: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  custom?: (value: unknown) => boolean;
}
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string[]>;
}
export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public errors: string[]
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}
/**
 * Validate email address
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  if (!email) return { isValid: false, error: 'Email is required' };
  if (email.length > 254) return { isValid: false, error: 'Email is too long' };
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {
    isValid,
    error: isValid ? undefined : 'Invalid email format'
  };
}
/**
 * Validate URL
 */
export function validateURL(url: string, requireProtocol: boolean = true): { isValid: boolean; error?: string } {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    // If protocol is not required, add http:// prefix for validation
    const urlToValidate = requireProtocol ? url : `http://${url}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ? 
      (parsed.protocol === 'http:' || parsed.protocol === 'https:') : 
      true;
    return {
      isValid,
      error: isValid ? undefined : 'Invalid URL format or protocol'
    };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}
/**
 * Validate phone number (US format)
 */
export function validatePhoneNumber(phone: string): { isValid: boolean; error?: string } {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // More flexible phone regex that handles various formats
  const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4,6}$/;
  const isValid = phoneRegex.test(phone);
  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number format'
  };
}
/**
 * Validate string length
 */
export function validateStringLength(value: string, min: number, max?: number): boolean {
  if (max !== undefined) {
    return value.length >= min && value.length <= max;
  }
  return value.length >= min;
}
/**
 * Validate number range
 */
export function validateNumberRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
/**
 * Validate credit card number (basic Luhn algorithm)
 */
export function validateCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate date
 */
export function validateDate(value: unknown): boolean {
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (typeof value === 'string') {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  return false;
}
/**
 * Validate date range
 */
export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {
  if (!validateDate(date)) return false;
  const time = date.getTime();
  if (min && time < min.getTime()) return false;
  if (max && time > max.getTime()) return false;
  return true;
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: string): string {
  // Remove script tags
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  clean = clean.replace(/on\w+="[^"]*"/gi, '');
  clean = clean.replace(/on\w+='[^']*'/gi, '');
  return clean;
}
/**
 * Create custom validator
 */
export function createCustomValidator<T>(
  validator: (value: T) => boolean,
  message: string
): (value: T) => { isValid: boolean; errors: string[] } {
  return (value: T) => {
    const isValid = validator(value);
    return {
      isValid,
      errors: isValid ? [] : [message]
    };
  };
}
/**
 * Validate a single field against a rule
 */
function validateFieldRule(value: unknown, rule: FieldRule): boolean {
  switch (rule.type) {
    case 'required':
      if (value === null || value === undefined) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    case 'email':
      return typeof value === 'string' && validateEmail(value);
    case 'url':
      return typeof value === 'string' && validateURL(value);
    case 'number':
      if (typeof value !== 'number') return false;
      if (rule.min !== undefined && value < rule.min) return false;
      if (rule.max !== undefined && value > rule.max) return false;
      return true;
    case 'string':
      if (typeof value !== 'string') return false;
      if (rule.minLength !== undefined && value.length < rule.minLength) return false;
      if (rule.maxLength !== undefined && value.length > rule.maxLength) return false;
      return true;
    case 'custom':
      return rule.custom ? rule.custom(value) : true;
    default:
      return true;
  }
}
/**
 * Validate form data
 */
export function validateForm<T extends Record<string, unknown>>(
  data: T,
  rules: ValidationRules
): ValidationResult {
  const errors: Record<string, string[]> = {};
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field] || [];
    const fieldErrors: string[] = [];
    for (const rule of fieldRules) {
      if (!validateFieldRule(value, rule)) {
        fieldErrors.push(rule.message);
      }
    }
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
      // Track validation errors
      errorTracking.trackError(
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
          category: ErrorCategory.Validation,
          severity: ErrorSeverity.Low,
          context: {
            field,
            errors: fieldErrors
          }
        }
      );
    }
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
/**
 * Validation rules builder
 */
export const ValidationRulesBuilder = {
  required: <T>(): ValidationRule<T> => ({
    validate: (value: T) => {
      if (value === null || value === undefined) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    },
    message: 'This field is required'
  }),
  email: (): ValidationRule<string> => ({
    validate: (value: string) => validateEmail(value),
    message: 'Please enter a valid email address'
  }),
  url: (): ValidationRule<string> => ({
    validate: (value: string) => validateURL(value),
    message: 'Please enter a valid URL'
  }),
  minLength: (min: number): ValidationRule<string> => ({
    validate: (value: string) => value.length >= min,
    message: `Must be at least ${min} characters long`
  }),
  maxLength: (max: number): ValidationRule<string> => ({
    validate: (value: string) => value.length <= max,
    message: `Must be no more than ${max} characters long`
  }),
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({
    validate: (value: string) => pattern.test(value),
    message
  }),
  range: (min: number, max: number): ValidationRule<number> => ({
    validate: (value: number) => validateNumberRange(value, min, max),
    message: `Must be between ${min} and ${max}`
  }),
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({
    validate: validator,
    message
  })
};
// Legacy class-based API for backward compatibility
class DataValidator {
  private static instance: DataValidator;
  private constructor() {}
  static getInstance(): DataValidator {
    if (!DataValidator.instance) {
      DataValidator.instance = new DataValidator();
    }
    return DataValidator.instance;
  }
  isEmail = validateEmail;
  isURL = validateURL;
  isPhoneNumber = validatePhoneNumber;
  hasLength = validateStringLength;
  isInRange = validateNumberRange;
  isCreditCard = validateCreditCard;
  isDate = validateDate;
  isDateInRange = validateDateRange;
  sanitizeHTML = sanitizeHTML;
  isRequired(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  }
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
  matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
export default DataValidator;

// Additional validation functions for tests
export function validateLength(value: string, min: number, max?: number, fieldName: string = 'Field'): { isValid: boolean; error?: string } {
  if (max !== undefined) {
    const isValid = value.length >= min && value.length <= max;
    return {
      isValid,
      error: isValid ? undefined : `${fieldName} must be between ${min} and ${max} characters`
    };
  }
  const isValid = value.length >= min;
  return {
    isValid,
    error: isValid ? undefined : `${fieldName} must be at least ${min} characters`
  };
}

export function validateRequired(value: unknown, fieldName: string = 'Field'): { isValid: boolean; error?: string } {
  if (value === null || value === undefined) return { isValid: false, error: `${fieldName} is required` };
  if (typeof value === 'string' && value.trim() === '') return { isValid: false, error: `${fieldName} is required` };
  // Note: Empty arrays are considered valid for required fields (they exist, just empty)
  return { isValid: true };
}

export function validateNumberRange(value: number, min: number, max: number): { isValid: boolean; error?: string } {
  if (typeof value !== 'number' || isNaN(value)) {
    return { isValid: false, error: 'Value must be a valid number' };
  }
  const isValid = value >= min && value <= max;
  return {
    isValid,
    error: isValid ? undefined : `Value must be between ${min} and ${max}`
  };
}

export function validatePassword(password: string): { isValid: boolean; error?: string } {
  if (!password) return { isValid: false, error: 'Password is required' };
  if (password.length < 8) return { isValid: false, error: 'Password must be at least 8 characters' };
  if (password.length > 128) return { isValid: false, error: 'Password must be less than 128 characters' };
  if (!/[A-Z]/.test(password)) return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  if (!/[a-z]/.test(password)) return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  if (!/\d/.test(password)) return { isValid: false, error: 'Password must contain at least one number' };
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return { isValid: false, error: 'Password must contain at least one special character' };
  return { isValid: true };
}

export function sanitizeHTML(html: string): string {
  if (!html || typeof html !== 'string') return '';
  
  // First escape HTML entities
  let clean = html.replace(/&/g, '&amp;');
  clean = clean.replace(/</g, '&lt;');
  clean = clean.replace(/>/g, '&gt;');
  clean = clean.replace(/"/g, '&quot;');
  clean = clean.replace(/'/g, '&#x27;');
  clean = clean.replace(/\//g, '&#x2F;');
  
  return clean;
}

export function sanitizeInput(input: string, maxLength: number = 1000): string | null {
  if (!input || typeof input !== 'string') return null;
  if (input.trim() === '') return null;
  
  // Remove null bytes and control characters
  let clean = input.replace(/\x00/g, '').replace(/[\x01-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Trim and limit length
  clean = clean.trim();
  if (clean.length > maxLength) {
    clean = clean.substring(0, maxLength);
  }
  
  return clean || null;
}

export function validateDate(dateString: string): { isValid: boolean; error?: string } {
  if (!dateString) return { isValid: false, error: 'Date is required' };
  
  // Check format first
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' };
  }
  
  const date = new Date(dateString);
  const isValid = !isNaN(date.getTime());
  
  // Additional check for invalid dates like 2025-02-30
  if (isValid) {
    const [year, month, day] = dateString.split('-').map(Number);
    const actualDate = new Date(year, month - 1, day);
    const isRealDate = actualDate.getFullYear() === year && 
                      actualDate.getMonth() === month - 1 && 
                      actualDate.getDate() === day;
    return {
      isValid: isRealDate,
      error: isRealDate ? undefined : 'Invalid date'
    };
  }
  
  return {
    isValid: false,
    error: 'Invalid date'
  };
}

export function validateCreditCard(cardNumber: string): { isValid: boolean; error?: string } {
  if (!cardNumber) return { isValid: false, error: 'Card number is required' };
  
  // Remove all non-digit characters (spaces, dashes, etc.)
  const cleaned = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleaned)) return { isValid: false, error: 'Card number must contain only digits' };
  if (cleaned.length < 13 || cleaned.length > 19) return { isValid: false, error: 'Card number must be between 13 and 19 digits' };
  
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  
  const isValid = sum % 10 === 0;
  return {
    isValid,
    error: isValid ? undefined : 'Invalid card number'
  };
}

export function validateJSON(jsonString: string): { isValid: boolean; error?: string } {
  if (!jsonString) return { isValid: false, error: 'JSON string is required' };
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

export function validateComposite(value: string, validators: Array<(val: string) => { isValid: boolean; error?: string }>): { isValid: boolean; error?: string } {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
}

export async function validateAsync(validator: (value: string) => Promise<{ isValid: boolean; error?: string }>, value: string): Promise<{ isValid: boolean; error?: string }> {
  try {
    return await validator(value);
  } catch (error) {
    return { isValid: false, error: 'Validation failed' };
  }
}
