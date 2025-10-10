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
      error: isValid ? undefined : 'URL must use http or https protocol'
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
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  const isValid = phoneRegex.test(cleanPhone);

  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number format'
  };
}

/**
 * Password validation
 */
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }

  const errors: string[] = [];
  
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

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}

/**
 * Name validation
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' };
  }

  if (name.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }

  if (name.length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }

  const nameRegex = /^[a-zA-Z\s\-']+$/;
  const isValid = nameRegex.test(name.trim());

  return {
    isValid,
    error: isValid ? undefined : 'Name can only contain letters, spaces, hyphens, and apostrophes'
  };
}

/**
 * Company name validation
 */
export function validateCompanyName(companyName: string): ValidationResult {
  if (!companyName || companyName.trim() === '') {
    return { isValid: false, error: 'Company name is required' };
  }

  if (companyName.length < 2) {
    return { isValid: false, error: 'Company name must be at least 2 characters long' };
  }

  if (companyName.length > 100) {
    return { isValid: false, error: 'Company name must be less than 100 characters' };
  }

  return { isValid: true };
}

/**
 * Message validation
 */
export function validateMessage(message: string): ValidationResult {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }

  if (message.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters long' };
  }

  if (message.length > 1000) {
    return { isValid: false, error: 'Message must be less than 1000 characters' };
  }

  return { isValid: true };
}

/**
 * Form validation
 */
export function validateForm(data: Record<string, any>): ValidationResult {
  const errors: string[] = [];

  if (data.email && !validateEmail(data.email).isValid) {
    errors.push('Invalid email address');
  }

  if (data.phone && !validatePhone(data.phone).isValid) {
    errors.push('Invalid phone number');
  }

  if (data.password && !validatePassword(data.password).isValid) {
    const passwordResult = validatePassword(data.password);
    if (passwordResult.errors) {
      errors.push(...passwordResult.errors);
    }
  }

  if (data.name && !validateName(data.name).isValid) {
    errors.push('Invalid name format');
  }

  if (data.companyName && !validateCompanyName(data.companyName).isValid) {
    errors.push('Invalid company name');
  }

  if (data.message && !validateMessage(data.message).isValid) {
    errors.push('Invalid message format');
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}