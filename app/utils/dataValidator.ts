// Data validation utilities
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  return { isValid: true };
}

export function validatePhone(phone: string): ValidationResult {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  const cleanedPhone = phone.replace(/[\s\-()]/g, '');
  
  if (!phoneRegex.test(cleanedPhone)) {
    return { isValid: false, error: 'Invalid phone number format' };
  }
  
  return { isValid: true };
}

export function validateURL(url: string, requireProtocol: boolean = true): ValidationResult {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    const urlToValidate = requireProtocol ? url : `http://${url}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ? 
      (parsed.protocol === 'http:' || parsed.protocol === 'https:') : 
      true;
    
    if (!isValid) {
      return { isValid: false, error: 'URL must use http or https protocol' };
    }
    
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

export function validateRequired(value: unknown, fieldName: string): ValidationResult {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
}

export function validateMinLength(value: string, minLength: number, fieldName: string): ValidationResult {
  if (value.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters long` };
  }
  
  return { isValid: true };
}

export function validateMaxLength(value: string, maxLength: number, fieldName: string): ValidationResult {
  if (value.length > maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${maxLength} characters long` };
  }
  
  return { isValid: true };
}

export function validateNumeric(value: string | number, fieldName: string): ValidationResult {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numValue)) {
    return { isValid: false, error: `${fieldName} must be a valid number` };
  }
  
  return { isValid: true };
}

export function validateRange(value: number, min: number, max: number, fieldName: string): ValidationResult {
  if (value < min || value > max) {
    return { isValid: false, error: `${fieldName} must be between ${min} and ${max}` };
  }
  
  return { isValid: true };
}

export function validatePattern(value: string, pattern: RegExp, fieldName: string, errorMessage?: string): ValidationResult {
  if (!pattern.test(value)) {
    return { isValid: false, error: errorMessage || `${fieldName} format is invalid` };
  }
  
  return { isValid: true };
}

// Composite validation function
export function validateFormData(data: Record<string, unknown>, rules: Record<string, ValidationRule[]>): Record<string, string> {
  const errors: Record<string, string> = {};
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field];
    
    for (const rule of fieldRules) {
      const result = rule.validator(value, rule.params);
      if (!result.isValid) {
        errors[field] = result.error || 'Invalid value';
        break;
      }
    }
  }
  
  return errors;
}

export interface ValidationRule {
  validator: (value: unknown, params?: unknown) => ValidationResult;
  params?: unknown;
}