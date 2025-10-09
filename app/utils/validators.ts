/**
 * Validation utilities for form inputs and data
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  error?: string;
}

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { isValid: false, errors: ['Email is required'] };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, errors: ['Invalid email format'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): ValidationResult {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  
  if (!phone) {
    return { isValid: false, errors: ['Phone number is required'] };
  }
  
  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    return { isValid: false, errors: ['Invalid phone number format'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate required field
 */
export function validateRequired(value: string, fieldName: string = 'Field'): ValidationResult {
  if (!value || value.trim().length === 0) {
    return { isValid: false, errors: [`${fieldName} is required`] };
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
  if (!value) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  
  if (value.length < min) {
    return { isValid: false, errors: [`${fieldName} must be at least ${min} characters`] };
  }
  
  if (value.length > max) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${max} characters`] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, errors: ['URL is required'] };
  }
  
  try {
    new URL(url);
    return { isValid: true, errors: [] };
  } catch {
    return { isValid: false, errors: ['Invalid URL format'] };
  }
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
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return { isValid: errors.length === 0, errors };
}

/**
 * Validate multiple fields
 */
export function validateFields(fields: Record<string, ValidationResult>): ValidationResult {
  const allErrors: string[] = [];
  let isValid = true;
  
  for (const [fieldName, result] of Object.entries(fields)) {
    if (!result.isValid) {
      isValid = false;
      allErrors.push(...result.errors.map(error => `${fieldName}: ${error}`));
    }
  }
  
  return { isValid, errors: allErrors };
}

/**
 * Async validation wrapper
 */
export async function validateAsync(
  validator: (val: string) => Promise<ValidationResult>, 
  value: string
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' };
  }
}
