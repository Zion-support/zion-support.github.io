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
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate password strength
 */
export function isValidPassword(password: string): boolean {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}

/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
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
 * Validate date string
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Sanitize HTML content
 */
export function sanitizeHTML(html: string): string {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

/**
 * Validate required field
 */
export function validateRequired(value: string, fieldName: string = 'Field'): ValidationResult {
  if (!value || value.trim().length === 0) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  return { isValid: true };
}

/**
 * Validate email with detailed result
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, errors: ['Email is required'] };
  }
  if (!isValidEmail(email)) {
    return { isValid: false, errors: ['Please enter a valid email address'] };
  }
  return { isValid: true };
}

/**
 * Validate phone with detailed result
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, errors: ['Phone number is required'] };
  }
  if (!isValidPhone(phone)) {
    return { isValid: false, errors: ['Please enter a valid phone number'] };
  }
  return { isValid: true };
}

/**
 * Validate URL with detailed result
 */
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, errors: ['URL is required'] };
  }
  if (!isValidUrl(url)) {
    return { isValid: false, errors: ['Please enter a valid URL'] };
  }
  return { isValid: true };
}

/**
 * Validate password with detailed result
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
  if (!isValidPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'] };
  }
  return { isValid: true };
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
  if (!value) {
    return { isValid: false, errors: [`${fieldName} is required`] };
  }
  if (value.length < min) {
    return { isValid: false, errors: [`${fieldName} must be at least ${min} characters`] };
  }
  if (value.length > max) {
    return { isValid: false, errors: [`${fieldName} must be no more than ${max} characters`] };
  }
  return { isValid: true };
}

/**
 * Validate date with detailed result
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, errors: ['Date is required'] };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, errors: ['Date must be in YYYY-MM-DD format'] };
  }
  if (!isValidDate(dateString)) {
    return { isValid: false, errors: ['Please enter a valid date'] };
  }
  
  const date = new Date(dateString);
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {
    return { isValid: false, errors: ['Please enter a valid date'] };
  }
  
  return { isValid: true };
}

/**
 * Validate credit card with detailed result
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber) {
    return { isValid: false, errors: ['Credit card number is required'] };
  }
  const cleanedNumber = cardNumber.replace(/\D/g, '');
  if (!isValidCreditCard(cleanedNumber)) {
    return { isValid: false, errors: ['Please enter a valid credit card number'] };
  }
  return { isValid: true };
}

/**
 * Validate multiple fields
 */
export function validateFields(validators: Array<(value: string) => ValidationResult>): ValidationResult {
  const allErrors: string[] = [];
  let allValid = true;
  
  for (const validator of validators) {
    const result = validator('');
    if (!result.isValid) {
      allValid = false;
      allErrors.push(...result.errors);
    }
  }
  
  return { isValid: allValid, errors: allErrors };
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
 * Combine validation results
 */
export function combineValidationResults(results: ValidationResult[]): ValidationResult {
  const allErrors: string[] = [];
  let allValid = true;
  
  for (const result of results) {
    if (!result.isValid) {
      allValid = false;
      allErrors.push(...result.errors);
    }
  }
  
  return { isValid: allValid, errors: allErrors };
}