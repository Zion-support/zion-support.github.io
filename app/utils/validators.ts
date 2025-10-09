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
  if (!email) {
    return { isValid: false, errors: ['Email is required'] };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
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
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    return { isValid: false, errors: ['Invalid phone number format'] };
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
 * Validate password strength
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, errors: ['Password is required'] };
  }
  
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'] };
  }
  
  if (password.length > 128) {
    return { isValid: false, errors: ['Password must be no more than 128 characters'] };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
    return { 
      isValid: false, 
      errors: ['Password must contain uppercase, lowercase, number, and special character'] 
    };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate date format
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, errors: ['Date is required'] };
  }
  
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, errors: ['Date must be in YYYY-MM-DD format'] };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, errors: ['Invalid date'] };
  }
  
  return { isValid: true, errors: [] };
}

/**
 * Validate multiple fields
 */
export function validateFields(fields: Record<string, ValidationResult>): ValidationResult {
  const allErrors: string[] = [];
  let allValid = true;
  
  for (const [fieldName, result] of Object.entries(fields)) {
    if (!result.isValid) {
      allValid = false;
      allErrors.push(...result.errors);
    }
  }
  
  return {
    isValid: allValid,
    errors: allErrors
  };
}

/**
 * Sanitize HTML content
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Validate async
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