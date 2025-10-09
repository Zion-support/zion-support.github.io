/**
 * Comprehensive validation utilities for forms and data
 * Provides all validation functions expected by tests
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  errors?: string[];
}

/**
 * Email validation with length check
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.trim());
  
  return {
    isValid,
    error: isValid ? undefined : 'Invalid email format'
  };
}

/**
 * URL validation
 */
export function validateURL(url: string): ValidationResult {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    const urlObj = new URL(url);
    const isValid = urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    return {
      isValid,
      error: isValid ? undefined : 'Invalid URL format'
    };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

/**
 * String length validation
 */
export function validateLength(
  value: string, 
  min: number, 
  max: number, 
  fieldName: string = 'Field'
): ValidationResult {
  if (value.length < min) {
    return { 
      isValid: false, 
      error: `${fieldName} must be at least ${min} characters long` 
    };
  }
  
  if (value.length > max) {
    return { 
      isValid: false, 
      error: `${fieldName} must be no more than ${max} characters long` 
    };
  }
  
  return { isValid: true };
}

/**
 * Password validation
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  
  if (password.length > 128) {
    return { isValid: false, error: 'Password is too long' };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasUpperCase) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  }
  
  if (!hasLowerCase) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  }
  
  if (!hasNumbers) {
    return { isValid: false, error: 'Password must contain at least one number' };
  }
  
  if (!hasSpecialChar) {
    return { isValid: false, error: 'Password must contain at least one special character' };
  }
  
  return { isValid: true };
}

/**
 * Required field validation
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (Array.isArray(value) && value.length === 0) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
}

/**
 * Date validation
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || dateString.trim() === '') {
    return { isValid: false, error: 'Date is required' };
  }
  
  // Check for YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  // Check if the date is valid (e.g., not 2025-13-01)
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  return { isValid: true };
}

/**
 * Credit card validation using Luhn algorithm
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || cardNumber.trim() === '') {
    return { isValid: false, error: 'Credit card number is required' };
  }
  
  const cleaned = cardNumber.replace(/[\s-]/g, '');
  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, error: 'Credit card number must contain only digits' };
  }
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, error: 'Credit card number must be between 13 and 19 digits' };
  }
  
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
  
  const isValid = sum % 10 === 0;
  return {
    isValid,
    error: isValid ? undefined : 'Invalid credit card number'
  };
}

/**
 * JSON validation
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString || jsonString.trim() === '') {
    return { isValid: false, error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

/**
 * HTML sanitization
 */
export function sanitizeHTML(html: string): string {
  if (!html) return '';
  
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
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
  return { isValid: true };
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
      error: error instanceof Error ? error.message : 'Validation failed'
    };
  }
}

// Re-export existing functions for compatibility
export { 
  isValidEmail, 
  isValidPhone, 
  isValidUrl, 
  isRequired, 
  isValidPassword, 
  sanitizeInput 
} from './validators';