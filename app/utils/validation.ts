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
    error: isValid ? undefined : 'Invalid email format',
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
      error: isValid ? undefined : 'Invalid URL format',
    };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

/**
 * Phone number validation
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || phone.trim() === '') {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  const isValid = phoneRegex.test(cleaned);
  
  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number format',
  };
}

/**
 * Password validation with strength requirements
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  
  if (password.length > 128) {
    return { isValid: false, error: 'Password is too long' };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const errors: string[] = [];
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors[0] : undefined,
    errors: errors.length > 0 ? errors : undefined,
  };
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
  
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  // Check if the date is valid (not just a valid date string)
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
  
  const cleaned = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, error: 'Credit card number must contain only digits' };
  }
  
  // Check length
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, error: 'Invalid credit card number length' };
  }
  
  // Luhn algorithm
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
  
  const isValid = sum % 10 === 0;
  return {
    isValid,
    error: isValid ? undefined : 'Invalid credit card number',
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
 * Generic validation function
 */
export function validateField(
  value: unknown,
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: unknown) => ValidationResult;
  }
): ValidationResult {
  // Required validation
  if (rules.required) {
    const requiredResult = validateRequired(value);
    if (!requiredResult.isValid) {
      return requiredResult;
    }
  }
  
  // Length validation for strings
  if (typeof value === 'string') {
    if (rules.minLength && value.length < rules.minLength) {
      return { isValid: false, error: `Minimum length is ${rules.minLength}` };
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
      return { isValid: false, error: `Maximum length is ${rules.maxLength}` };
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      return { isValid: false, error: 'Invalid format' };
    }
  }
  
  // Custom validation
  if (rules.custom) {
    return rules.custom(value);
  }
  
  return { isValid: true };
}

/**
 * Form validation
 */
export function validateForm(data: Record<string, unknown>, rules: Record<string, any>): ValidationResult {
  const errors: string[] = [];
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const result = validateField(data[field], fieldRules);
    if (!result.isValid && result.error) {
      errors.push(`${field}: ${result.error}`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

/**
 * Async validation functions
 */
export async function validateEmailAsync(email: string): Promise<ValidationResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(validateEmail(email));
    }, 100);
  });
}

export async function validateUsernameAsync(username: string): Promise<ValidationResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate async validation (e.g., checking database)
      const isValid = username.length >= 3 && username.length <= 20;
      resolve({
        isValid,
        error: isValid ? undefined : 'Username must be 3-20 characters long',
      });
    }, 100);
  });
}

export default {
  validateEmail,
  validateURL,
  validatePhone,
  validatePassword,
  validateRequired,
  validateDate,
  validateCreditCard,
  validateJSON,
  validateField,
  validateForm,
  validateEmailAsync,
  validateUsernameAsync,
};
