/**
 * Validation utilities for form validation
 */

// Email validation
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const isValidPhone = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Required field validation
export const isRequired = (value: any): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string' && value.trim() === '') return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
};

// Length validations
export const minLength = (value: string, min: number): boolean => {
  return typeof value === 'string' && value.length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
  return typeof value === 'string' && value.length <= max;
};

// Alphanumeric validation
export const isAlphanumeric = (value: string): boolean => {
  if (!value || typeof value !== 'string') return false;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(value);
};

// Numeric validation
export const isNumeric = (value: string): boolean => {
  if (!value || typeof value !== 'string') return false;
  const numericRegex = /^\d+$/;
  return numericRegex.test(value);
};

// Password strength validation
export const isStrongPassword = (password: string): boolean => {
  if (!password || typeof password !== 'string') return false;
  if (password.length < 8) return false;
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers;
};

// Password strength scoring
export const getPasswordStrength = (password: string): number => {
  if (!password || typeof password !== 'string') return 0;
  
  let score = 0;
  
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
  
  return Math.min(score, 5);
};

// Credit card validation using Luhn algorithm
export const isValidCreditCard = (cardNumber: string): boolean => {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
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

// ZIP code validation
export const isValidZipCode = (zipCode: string): boolean => {
  if (!zipCode || typeof zipCode !== 'string') return false;
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

// Validator functions for form validation
export const validators = {
  required: (message = 'This field is required') => (value: any) => 
    isRequired(value) ? null : message,
  
  email: (message = 'Please enter a valid email address') => (value: string) => 
    isValidEmail(value) ? null : message,
  
  phone: (message = 'Please enter a valid phone number') => (value: string) => 
    isValidPhone(value) ? null : message,
  
  url: (message = 'Please enter a valid URL') => (value: string) => 
    isValidUrl(value) ? null : message,
  
  minLength: (min: number, message?: string) => (value: string) => 
    minLength(value, min) ? null : (message || `Must be at least ${min} characters long`),
  
  maxLength: (max: number, message?: string) => (value: string) => 
    maxLength(value, max) ? null : (message || `Must be no more than ${max} characters long`),
  
  alphanumeric: (message = 'Must contain only letters and numbers') => (value: string) => 
    isAlphanumeric(value) ? null : message,
  
  numeric: (message = 'Must contain only numbers') => (value: string) => 
    isNumeric(value) ? null : message,
  
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and numbers') => (value: string) => 
    isStrongPassword(value) ? null : message,
  
  creditCard: (message = 'Please enter a valid credit card number') => (value: string) => 
    isValidCreditCard(value) ? null : message,
  
  zipCode: (message = 'Please enter a valid ZIP code') => (value: string) => 
    isValidZipCode(value) ? null : message,
};

// Form validation function
export const validateForm = (formData: Record<string, { value: any; validators: Array<(value: any) => string | null> }>): Record<string, string[]> => {
  const errors: Record<string, string[]> = {};
  
  for (const [fieldName, field] of Object.entries(formData)) {
    const fieldErrors: string[] = [];
    
    for (const validator of field.validators) {
      const error = validator(field.value);
      if (error) {
        fieldErrors.push(error);
      }
    }
    
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors;
    }
  }
  
  return errors;
};