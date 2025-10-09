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
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

/**
 * URL validation regex
 */
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

/**
 * Validate email address
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, errors: ['Email is required'] };
  }
  
  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, errors: ['Invalid email format'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, errors: ['Phone number is required'] };
  }
  
  if (!PHONE_REGEX.test(phone)) {
    return { isValid: false, errors: ['Invalid phone number format'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate URL
 */
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, errors: ['URL is required'] };
  }
  
  if (!URL_REGEX.test(url)) {
    return { isValid: false, errors: ['Invalid URL format'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate required field
 */
export function validateRequired(value: string, fieldName: string = 'Field'): ValidationResult {
  if (!value || value.trim() === '') {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate minimum length
 */
export function validateMinLength(value: string, minLength: number, fieldName: string = 'Field'): ValidationResult {
  if (!value) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  
  if (value.length < minLength) {
    return { isValid: false, errors: [`${fieldName} must be at least ${minLength} characters long`] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value: string, maxLength: number, fieldName: string = 'Field'): ValidationResult {
  if (!value) {
    return { isValid: true, errors: [] };
  }
  
  if (value.length > maxLength) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${maxLength} characters long`] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  
  if (!password) {
    return { isValid: false, errors: ['Password is required'] };
  }
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return { isValid: errors.length === 0, errors };
}

/**
 * Validate form data
 */
export function validateForm(formData: Record<string, string>, rules: Record<string, (value: string) => ValidationResult>): ValidationResult {
  const errors: string[] = [];
  let isValid = true;
  
  for (const [field, validator] of Object.entries(rules)) {
    const result = validator(formData[field] || '');
    if (!result.isValid) {
      isValid = false;
      errors.push(...result.errors);
    }
  }
  
  return { isValid, errors };
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