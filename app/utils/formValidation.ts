// Form validation utilities
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => ValidationResult;
}

export interface FormData {
  [key: string]: unknown;
}

export interface ValidationErrors {
  [key: string]: string;
}

/**
 * Common validation rules
 */
export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^[+]?[1-9][\d]{0,15}$/,
    error: 'Please enter a valid phone number'
  },
  url: {
    pattern: /^https?:\/\/.+/,
    error: 'Please enter a valid URL'
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    error: 'Password must be at least 8 characters with uppercase, lowercase, number and special character'
  }
};

/**
 * Validate a single field
 */
export function validateField(value: unknown, rules: FieldValidation, fieldName: string): ValidationResult {
  // Required validation
  if (rules.required && (value === null || value === undefined || value === '')) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Skip other validations if value is empty and not required
  if (!rules.required && (value === null || value === undefined || value === '')) {
    return { isValid: true };
  }

  const stringValue = String(value);

  // Min length validation
  if (rules.minLength && stringValue.length < rules.minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${rules.minLength} characters long` };
  }

  // Max length validation
  if (rules.maxLength && stringValue.length > rules.maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${rules.maxLength} characters long` };
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.test(stringValue)) {
    return { isValid: false, error: validationRules[fieldName as keyof typeof validationRules]?.error || `${fieldName} format is invalid` };
  }

  // Custom validation
  if (rules.custom) {
    return rules.custom(value);
  }

  return { isValid: true };
}

/**
 * Validate entire form
 */
export function validateForm(data: FormData, validationSchema: Record<string, FieldValidation>): ValidationErrors {
  const errors: ValidationErrors = {};

  for (const [fieldName, rules] of Object.entries(validationSchema)) {
    const result = validateField(data[fieldName], rules, fieldName);
    if (!result.isValid) {
      errors[fieldName] = result.error || 'Invalid value';
    }
  }

  return errors;
}

/**
 * Check if form is valid
 */
export function isFormValid(errors: ValidationErrors): boolean {
  return Object.keys(errors).length === 0;
}

/**
 * Get first error message
 */
export function getFirstError(errors: ValidationErrors): string | null {
  const firstErrorKey = Object.keys(errors)[0];
  return firstErrorKey ? errors[firstErrorKey] : null;
}

/**
 * Clear specific field error
 */
export function clearFieldError(errors: ValidationErrors, fieldName: string): ValidationErrors {
  const newErrors = { ...errors };
  delete newErrors[fieldName];
  return newErrors;
}

/**
 * Common form validation schemas
 */
export const commonSchemas = {
  contact: {
    name: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, pattern: validationRules.email.pattern },
    phone: { required: false, pattern: validationRules.phone.pattern },
    message: { required: true, minLength: 10, maxLength: 1000 }
  },
  login: {
    email: { required: true, pattern: validationRules.email.pattern },
    password: { required: true, minLength: 6 }
  },
  registration: {
    name: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, pattern: validationRules.email.pattern },
    password: { required: true, ...validationRules.password },
    confirmPassword: { required: true, custom: (value, formData) => {
      if (value !== formData?.password) {
        return { isValid: false, error: 'Passwords do not match' };
      }
      return { isValid: true };
    }}
  }
};