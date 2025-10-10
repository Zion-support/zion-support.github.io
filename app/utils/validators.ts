/**
 * Validation utilities for form inputs and data
 */

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  return phoneRegex.test(cleanPhone);
};

export const isValidUrl = (url: string): boolean => {
  try {
    // Allow URLs without protocol
    if (!url.includes('://')) {
      url = 'http://' + url;
    }
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

export const minLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const isAlphanumeric = (value: string): boolean => {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(value);
};

export const isNumeric = (value: string): boolean => {
  const numericRegex = /^\d+$/;
  return numericRegex.test(value);
};

export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

export const getPasswordStrength = (password: string): number => {
  if (isStrongPassword(password)) return 4;
  
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);
  
  const score = [hasLength, hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  
  return score;
};

export const isValidCreditCard = (cardNumber: string): boolean => {
  const cleanCard = cardNumber.replace(/\s/g, '');
  const luhnCheck = (num: string): boolean => {
    let sum = 0;
    let isEven = false;
    
    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num.charAt(i), 10);
      
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
  };
  
  return /^\d{13,19}$/.test(cleanCard) && luhnCheck(cleanCard);
};

export const isValidZipCode = (zipCode: string, country: string = 'US'): boolean => {
  const patterns: Record<string, RegExp> = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    UK: /^[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}$/,
  };
  
  const pattern = patterns[country] || patterns.US;
  return pattern.test(zipCode);
};

export interface ValidationRule {
  validator: (value: any) => boolean;
  message: string;
}

export interface FormData {
  [key: string]: any;
}

export const validateForm = (data: FormData, rules: Record<string, ValidationRule[]>): Record<string, string[]> => {
  const errors: Record<string, string[]> = {};
  
  if (!rules || typeof rules !== 'object') {
    return errors;
  }
  
  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field];
    const fieldErrors: string[] = [];
    
    if (Array.isArray(fieldRules)) {
      fieldRules.forEach(rule => {
        if (!rule.validator(data[field])) {
          fieldErrors.push(rule.message);
        }
      });
    }
    
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });
  
  return errors;
};

export const validators = {
  email: (message = 'Invalid email address') => ({
    validator: isValidEmail,
    message
  }),
  phone: (message = 'Invalid phone number') => ({
    validator: isValidPhone,
    message
  }),
  url: (message = 'Invalid URL') => ({
    validator: isValidUrl,
    message
  }),
  required: (message = 'This field is required') => ({
    validator: isRequired,
    message
  }),
  minLength: (min: number, message?: string) => ({
    validator: (value: string) => minLength(value, min),
    message: message || `Must be at least ${min} characters`
  }),
  maxLength: (max: number, message?: string) => ({
    validator: (value: string) => maxLength(value, max),
    message: message || `Must be no more than ${max} characters`
  }),
  alphanumeric: (message = 'Must contain only letters and numbers') => ({
    validator: isAlphanumeric,
    message
  }),
  numeric: (message = 'Must contain only numbers') => ({
    validator: isNumeric,
    message
  }),
  password: (message = 'Password must be strong') => ({
    validator: isStrongPassword,
    message
  }),
  creditCard: (message = 'Invalid credit card number') => ({
    validator: isValidCreditCard,
    message
  }),
  zipCode: (country: string = 'US', message?: string) => ({
    validator: (value: string) => isValidZipCode(value, country),
    message: message || `Invalid ${country} zip code`
  })
};