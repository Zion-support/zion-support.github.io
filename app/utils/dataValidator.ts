<<<<<<< HEAD
<<<<<<< HEAD
// Datavalidator utility functions
export function datavalidator() {
  // Implementation here
  return null;
=======
'use client';
/**
 * Data Validation Utility;
 * Provides comprehensive data validation with type safety;
 */
export interface ValidationRule<T = unknown> {/* TODO: Fix JSX expression */,}
}
export interface FieldRule {/* TODO: Fix JSX expression */,}
}
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {/* TODO: Fix JSX expression */,}
}
<<<<<<< HEAD
export class ValidationError extends Error {
  constructor(message: string,)
    public field: string,),
    public errors: string[]) {,
    super(message);
    this.name = 'ValidationError';
export class ValidationError extends Error {/* TODO: Fix JSX expression */,}
=======
export class ValidationError extends Error {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
}
/**
 * Validate email address;
 */
<<<<<<< HEAD
export function validateEmail(email: string,): { isValid: boolean; error?: string } {
  if (!email) return { isValid: false, error: 'Email is required' ,};
  if (email.length > 254) return { isValid: false, error: 'Email is too long' ,};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {
    isValid,
    error: isValid ? undefined : 'Invalid email format',
export function validateEmail(emai)
  l: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Email is required' ,};
  if (email.length > 254) return {/* TODO: Fix JSX expression */,}
  r: 'Email is too long' ,};
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {/* TODO: Fix JSX expression */,}
=======
export function validateEmail(emai)
  l: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Email is required' };
  if (email.length > 254) return {/* TODO: Fix JSX expression */}
  r: 'Email is too long' };
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  };
}
/**
 * Validate URL;
 */
export function validateURL(ur,
  l: string, requireProtoco)
<<<<<<< HEAD
  l: boolean = true): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'URL is required' ,};
  }

  try {
    // If protocol is not required, add http: // prefix for validation;
    const urlToValidate = requireProtocol ? url : `http: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ?
      (parsed.protocol === 'http: ' || parsed.protocol === 'https:') :
      true;
    return {,
      isValid;
      error: isValid ? undefined : 'Invalid URL format or protocol',
=======
  l: boolean = true): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'URL is required' };
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  
  try {/* TODO: Fix JSX expression */,}
  p: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ? 
      (parsed.protocol === 'htt,
  p:' || parsed.protocol === 'http)
  s:') : 
      true;
<<<<<<< HEAD
    return {/* TODO: Fix JSX expression */,}
=======
    return {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    };
  } catch {/* TODO: Fix JSX expression */,}
  r: 'Invalid URL format' ,};
  }
}
/**
 * Validate phone number (US format)
 */
export function validatePhoneNumber(phon)
<<<<<<< HEAD
  e: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Phone number is required' ,};
  }

  // More flexible phone regex that handles various formats;
  const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4,6}$/;
  const isValid = phoneRegex.test(phone);
  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number format',
=======
  e: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Phone number is required' };
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  
  // More flexible phone regex that handles various formats;
  const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4,6}$/;
  const isValid = phoneRegex.test(phone);
<<<<<<< HEAD
  return {/* TODO: Fix JSX expression */,}
=======
  return {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  };
}
/**
 * Validate string length;
 */
export function validateStringLength(valu,
  e: string, mi)
<<<<<<< HEAD
  n: number, max?: number): boolean {/* TODO: Fix JSX expression */,}
=======
  n: number, max?: number): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  return value.length >= min;
}
/**
 * Validate number range;
 */
<<<<<<< HEAD
export function validateNumberRange(value: number, min: number, max: number,): boolean {,
  return value >= min && value <= max;
export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
  x: number,): boolean {/* TODO: Fix JSX expression */,}
=======
export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
  x: number): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Validate credit card number (basic Luhn algorithm)
 */
<<<<<<< HEAD
export function validateCreditCard(cardNumber: string,): boolean {,
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
export function validateCreditCard(cardNumbe)
  r: string,): boolean {/* TODO: Fix JSX expression */,}
=======
export function validateCreditCard(cardNumbe)
  r: string): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate date;
 */
<<<<<<< HEAD
export function validateDate(value: unknown,): boolean {,
  if (value instanceof Date) {,
    return !isNaN(value.getTime());
export function validateDate(valu)
  e: unknown,): boolean {/* TODO: Fix JSX expression */,}
=======
export function validateDate(valu)
  e: unknown): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  if (typeof value === 'string') {/* TODO: Fix JSX expression */,}
  }
  return false;
}
/**
 * Validate date range;
 */
export function validateDateRange(dat)
<<<<<<< HEAD
  e: Date, min?: Date, max?: Date): boolean {/* TODO: Fix JSX expression */,}
=======
  e: Date, min?: Date, max?: Date): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Sanitize HTML to prevent XSS;
 */
<<<<<<< HEAD
export function sanitizeHTML(html: string,): string {,
  // Remove script tags;
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers;
  clean = clean.replace(/on\w+="[^"]*"/gi, '');
  clean = clean.replace(/on\w+='[^']*'/gi, '');
  return clean;
export function sanitizeHTML(htm)
  l: string,): string {/* TODO: Fix JSX expression */,}
=======
export function sanitizeHTML(htm)
  l: string): string {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}
/**
 * Create custom validator;
 */
<<<<<<< HEAD
export function createCustomValidator<T>(
  validator: (value: T,) => boolean;
  message: string,
): (value: T,) => { isValid: boolean; errors: string[] } {
  return (value: T,) => {
    const isValid = validator(value);
    return {,
      isValid;
      errors: isValid ? [] : [message],
export function createCustomValidator<T>(validato,
  r: (valu)
  e: T,) => boolean,
  messag,
  e: string,
): (valu)
  e: T,) => {/* TODO: Fix JSX expression */,}
  s: string[] ,} {/* TODO: Fix JSX expression */,}
=======
export function createCustomValidator<T>(validato,
  r: (valu)
  e: T) => boolean,
  messag,
  e: string;
): (valu)
  e: T) => {/* TODO: Fix JSX expression */}
  s: string[] } {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    };
  };
}
/**
 * Validate a single field against a rule;
 */
<<<<<<< HEAD
function validateFieldRule(value: unknown, rule: FieldRule,): boolean {
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
      if (rule.max !== undefined && <<<value>rule</value></value>.max) return false;
      return true;
    case 'string':
      if (typeof value !== 'string') return false;
      if (rule.minLength !== undefined && value.length < rule.minLength) return false;
      if (rule.maxLength !== undefined && value.<<<length>rule</length></length>.maxLength) return false;
      return true;
    case 'custom':
      return rule.custom ? rule.custom(value) : true;
    default:,
      return true;
function validateFieldRule(valu,
  e: unknown, rul)
  e: FieldRule,): boolean {/* TODO: Fix JSX expression */,}
=======
function validateFieldRule(valu,
  e: unknown, rul)
  e: FieldRule): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
}
/**
 * Validate form data;
 */
<<<<<<< HEAD
export function validateForm<T extends Record<string, unknown>>(
  data: T,
  rules: ValidationRules,
): ValidationResult {,
  const errors: Record<string, string[]> = {};
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field] || [];
    const fieldErrors: string[] = [];
    for (const rule of fieldRules) {,
      if (!validateFieldRule(value, rule)) {
        fieldErrors.push(rule.message);
      }
    }
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
      // Track validation errors;
      errorTracking.trackError(
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
          category: ErrorCategory.Validation;
          severity: ErrorSeverity.Low;
          context: {,
            field;
            errors: fieldErrors,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
export function validateForm<T extends Record<string, unknown>>(dat,
  a: T,
  rule,
  s: ValidationRules;)
): ValidationResult {/* TODO: Fix JSX expression */,}
  errors: Record<string, string[]> = {};
  for (const field in rules) {/* TODO: Fix JSX expression */,}
      }
    }
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */,}`
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
<<<<<<< HEAD
        {/* TODO: Fix JSX expression */,}
=======
        {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          }
        }
      );
    }
  }
<<<<<<< HEAD
  return {
    isValid: Object.keys(errors).length === 0;
    errors;
  return {/* TODO: Fix JSX expression */,}
=======
  return {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  };
}
/**
 * Validation rules builder;
 */
export const ValidationRulesBuilder = {/* TODO: Fix JSX expression */,}
    },
<<<<<<< HEAD
    message: 'This field is required',}),
  email: (): ValidationRule<string> => ({,
    validate: (value: string,) => validateEmail(value),
    message: 'Please enter a valid email address',}),
  url: (): ValidationRule<string> => ({,
    validate: (value: string,) => validateURL(value),
    message: 'Please enter a valid URL',}),
  minLength: (min: number,): ValidationRule<string> => ({,
    validate: (value: string,) => value.length >= min;
    message: `Must be at least ${min,} characters long`
  }),
  maxLength: (max: number,): ValidationRule<string> => ({,
    validate: (value: string,) => value.length <= max;
    message: `Must be no more than ${max,} characters long`
  }),
  pattern: (pattern: RegExp, message: string,): ValidationRule<string> => ({,
    validate: (value: string,) => pattern.test(value),
    message;
  }),
  range: (min: number, max: number,): ValidationRule<number> => ({,
    validate: (value: number,) => validateNumberRange(value, min, max),
    message: `Must be between ${min,} and ${max}`
  }),
  custom: <T>(validator: (value: T,) => boolean, message: string,): ValidationRule<T> => ({,
    validate: validator,
    message;
  })
};
// Legacy class-based API for backward compatibility;
class DataValidator {
  private static instance: DataValidator,
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    messag,
  e: 'This field is required',
  }),
  emai,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),
  ur,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),
  minLengt,
  h: (mi)
<<<<<<< HEAD
  n: number,): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`
  e: `Must be at least ${min,} characters long`)
  }),
  maxLengt,
  h: (ma)
  x: number,): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`
  e: `Must be no more than ${max,} characters long`)
=======
  n: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be at least ${min} characters long`)
  }),
  maxLengt,
  h: (ma)
  x: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be no more than ${max} characters long`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  patter,
  n: (patter,
  n: RegExp, messag)
<<<<<<< HEAD
  e: string,): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
=======
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  rang,
  e: (mi,
  n: number, ma)
<<<<<<< HEAD
  x: number,): ValidationRule<number> => ({/* TODO: Fix JSX expression */,}`
  e: `Must be between ${min,} and ${max}`)
=======
  x: number): ValidationRule<number> => ({/* TODO: Fix JSX expression */}`
  e: `Must be between ${min} and ${max}`)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }),
  custo,
  m: <T>(validato,
  r: (valu)
<<<<<<< HEAD
  e: T,) => boolean, messag,
  e: string,): ValidationRule<T> => ({/* TODO: Fix JSX expression */,})
  })
};
// Legacy class-based API for backward compatibility;
class DataValidator {/* TODO: Fix JSX expression */,}
=======
  e: T) => boolean, messag,
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */})
  })
};
// Legacy class-based API for backward compatibility;
class DataValidator {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  private constructor() {}
  static getInstance(): DataValidator {/* TODO: Fix JSX expression */,}
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
  isRequired(valu)
<<<<<<< HEAD
  e: unknown,): boolean {/* TODO: Fix JSX expression */,}
  }
  isArray(value: unknown,): value is unknown[] {,
    return Array.isArray(value);
  isArray(valu)
  e: unknown,): value is unknown[] {/* TODO: Fix JSX expression */,}
  }
  isObject(valu)
  e: unknown,): value is Record<string, unknown> {/* TODO: Fix JSX expression */,}
  }
  matchesPattern(value: string, pattern: RegExp,): boolean {,
    return pattern.test(value);
  matchesPattern(valu,
  e: string, patter)
  n: RegExp,): boolean {/* TODO: Fix JSX expression */,}
=======
  e: unknown): boolean {/* TODO: Fix JSX expression */}
  }
  isArray(valu)
  e: unknown): value is unknown[] {/* TODO: Fix JSX expression */}
  }
  isObject(valu)
  e: unknown): value is Record<string, unknown> {/* TODO: Fix JSX expression */}
  }
  matchesPattern(valu,
  e: string, patter)
  n: RegExp): boolean {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
export default DataValidator;

// Additional validation functions for tests;
<<<<<<< HEAD
export function validateLength(value: string, min: number, max?: number, fieldName: string = 'Field'): { isValid: boolean; error?: string } {
  if (max !== undefined) {
    const isValid = value.length >= min && value.length <= max;
    return {
      isValid,
      error: isValid ? undefined : `${fieldName,} must be between ${min} and ${max} characters`
export function validateLength(valu,
  e: string, mi,
  n: number, max?: number, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}`
  r: isValid ? undefined : `${fieldName,} must be between ${min} and ${max} characters`
=======
export function validateLength(valu,
  e: string, mi,
  n: number, max?: number, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: isValid ? undefined : `${fieldName} must be between ${min} and ${max} characters`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    };
  }
  const isValid = value.length >= min;
  return {/* TODO: Fix JSX expression */,}`
  r: isValid ? undefined : `${fieldName,} must be at least ${min} characters`
  };
}

export function validateRequired(valu,
  e: unknown, fieldNam)
<<<<<<< HEAD
  e: string = 'Field'): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}`
  r: `${fieldName,} is required` };
  if (typeof value === 'string' && value.trim() === '') return {/* TODO: Fix JSX expression */,}`
  r: `${fieldName,} is required` };
=======
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  if (typeof value === 'string' && value.trim() === '') return {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  // Not,
  e: Empty arrays are considered valid for required fields (they exist, just empty)
  return {/* TODO: Fix JSX expression */,}
  d: true; };
}

export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
<<<<<<< HEAD
  x: number,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Value must be a valid number' ,};
=======
  x: number): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Value must be a valid number' };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
  const isValid = value >= min && value <= max;
  return {/* TODO: Fix JSX expression */,}`
  r: isValid ? undefined : `Value must be between ${min,} and ${max}`
  };
}

export function validatePassword(passwor)
<<<<<<< HEAD
  d: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Password is required' ,};
  if (password.length < 8) return {/* TODO: Fix JSX expression */,}
  r: 'Password must be at least 8 characters' ,};
  if (password.length > 128) return {/* TODO: Fix JSX expression */,}
  r: 'Password must be less than 128 characters' ,};
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */,}
  r: 'Password must contain at least one uppercase letter' ,};
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */,}
  r: 'Password must contain at least one lowercase letter' ,};
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */,}
  r: 'Password must contain at least one number' ,};
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return {/* TODO: Fix JSX expression */,}
  r: 'Password must contain at least one special character' ,};
  return {/* TODO: Fix JSX expression */,}
  d: true; };
}

export function sanitizeHTML(html: string,): string {
  if (!html || typeof html !== 'string') return '';
,
  // First escape HTML entities;
  let clean = html.replace(/&/g, '&amp;');
  clean = clean.replace(/</g, '&lt;');
  clean = clean.replace(/>/g, '&gt;');
  clean = clean.replace(/"/g, '&quot;');
  clean = clean.replace(/'/g, '&#x27;');
  clean = clean.replace(/\//g, '&#x2 F;');

  return clean;
}

export function sanitizeInput(input: string, maxLength: number = 1000): string | null {
  if (!input || typeof input !== 'string') return null;
  if (input.trim() === '') return null;
,
  // Remove null bytes and control characters;
  let clean = input.replace(/\x00/g, '').replace(/[\x01-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Trim and limit length;
  clean = clean.trim();
  if (clean.<<<length>maxLength</length></length>) {
    clean = clean.substring(0, maxLength);
export function sanitizeHTML(htm)
  l: string,): string {/* TODO: Fix JSX expression */,}
=======
  d: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Password is required' };
  if (password.length < 8) return {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters' };
  if (password.length > 128) return {/* TODO: Fix JSX expression */}
  r: 'Password must be less than 128 characters' };
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one uppercase letter' };
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one lowercase letter' };
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one number' };
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one special character' };
  return {/* TODO: Fix JSX expression */}
  d: true };
}

export function sanitizeHTML(htm)
  l: string): string {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
}

export function sanitizeInput(inpu,
  t: string, maxLengt)
<<<<<<< HEAD
  h: number = 1000): string | null {/* TODO: Fix JSX expression */,}
=======
  h: number = 1000): string | null {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }

  return clean || null;
}

<<<<<<< HEAD
export function validateDate(dateString: string,): { isValid: boolean; error?: string } {
  if (!dateString) return { isValid: false, error: 'Date is required' ,};

  // Check format first;
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' ,};
export function validateDate(dateStrin)
  g: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Date is required' ,};
  
  // Check format first;
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {/* TODO: Fix JSX expression */,}
  r: 'Invalid date format. Use YYYY-MM-DD' ,};
=======
export function validateDate(dateStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Date is required' };
  
  // Check format first;
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {/* TODO: Fix JSX expression */}
  r: 'Invalid date format. Use YYYY-MM-DD' };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }

  const date = new Date(dateString);
  const isValid = !isNaN(date.getTime());
<<<<<<< HEAD

  // Additional check for invalid dates like 2025-02-30;
  if (isValid) {
    const [year, month, day] = dateString.split('-').map(Number);
    const actualDate = new Date(year, month - 1, day);
    const isRealDate = actualDate.getFullYear() === year &&
                      actualDate.getMonth() === month - 1 &&
                      actualDate.getDate() === day;
    return {
      isValid: isRealDate,
      error: isRealDate ? undefined : 'Invalid date',};
  }

  return {
    isValid: false,
    error: 'Invalid date',};
}

export function validateCreditCard(cardNumber: string,): { isValid: boolean; error?: string } {
  if (!cardNumber) return { isValid: false, error: 'Card number is required' ,};

  // Remove all non-digit characters (spaces, dashes, etc.)
  const cleaned = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleaned)) return { isValid: false, error: 'Card number must contain only digits' ,};
  if (cleaned.length < 13 || cleaned.length > 19) return { isValid: false, error: 'Card number must be between 13 and 19 digits' ,};

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  
  // Additional check for invalid dates like 2025-02-30;
  if (isValid) {/* TODO: Fix JSX expression */,}
    };
  }
  
  return {/* TODO: Fix JSX expression */,}
  };
}

export function validateCreditCard(cardNumbe)
<<<<<<< HEAD
  r: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'Card number is required' ,};
=======
  r: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Card number is required' };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  
  // Remove all non-digit characters (spaces, dashes, etc.)
  const cleaned = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleaned)) return {/* TODO: Fix JSX expression */,}
  r: 'Card number must contain only digits' ,};
  if (cleaned.length < 13 || cleaned.length > 19) return {/* TODO: Fix JSX expression */,}
  r: 'Card number must be between 13 and 19 digits' ,};
  
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */,}
    }
    sum += digit;
    isEven = !isEven;
  }

  const isValid = sum % 10 === 0;
<<<<<<< HEAD
  return {
    isValid,
    error: isValid ? undefined : 'Invalid card number',};
}

export function validateJSON(jsonString: string,): { isValid: boolean; error?: string } {
  if (!jsonString) return { isValid: false, error: 'JSON string is required' ,};

  try {
    JSON.parse(jsonString);
    return { isValid: true; };
  } catch (error) {
    return { isValid: false, error: 'Invalid JSON format' ,};
  return {/* TODO: Fix JSX expression */,}
=======
  return {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  };
}

export function validateJSON(jsonStrin)
<<<<<<< HEAD
  g: string,): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
  r: 'JSON string is required' ,};
  
  try {/* TODO: Fix JSX expression */,}
  d: true; };
  } catch (error) {/* TODO: Fix JSX expression */,}
  r: 'Invalid JSON format' ,};
=======
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' };
  
  try {/* TODO: Fix JSX expression */}
  d: true };
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  }
}

export function validateComposite(valu,
  e: string, validator,
  s: Array<(va)
<<<<<<< HEAD
  l: string,) => {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string }>): {/* TODO: Fix JSX expression */,}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */,}
=======
  l: string) => {/* TODO: Fix JSX expression */}
  d: boolean; error?: string }>): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  }
  return {/* TODO: Fix JSX expression */,}
  d: true; };
}

export async function validateAsync(validato,
  r: (valu)
<<<<<<< HEAD
  e: string,) => Promise<{/* TODO: Fix JSX expression */,}
=======
  e: string) => Promise<{/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  d: boolean; error?: string }>, valu,
  e: string,): Promise<{/* TODO: Fix JSX expression */,}
  d: boolean; error?: string }> {/* TODO: Fix JSX expression */,}
  } catch (error) {/* TODO: Fix JSX expression */,}
  r: 'Validation failed' ,};
  }
}
"`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
// Utility file: dataValidator

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class DataValidator {
  validate(data: Record<string, unknown>, rules: Record<string, ValidationRule>): ValidationResult {
    const errors: string[] = [];

    for (const [field, rule] of Object.entries(rules)) {
      const value = data[field];

      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} is required`);
        continue;
      }

      if (value === undefined || value === null) {
        continue;
      }

      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters long`);
      }

      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors.push(`${field} must be no more than ${rule.maxLength} characters long`);
      }

      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors.push(`${field} format is invalid`);
      }

      if (rule.custom && !rule.custom(value)) {
        errors.push(`${field} validation failed`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const dataValidator = new DataValidator();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
