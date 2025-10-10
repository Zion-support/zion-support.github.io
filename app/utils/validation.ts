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
    return { isValid: false, error: Email is too long };

  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: Invalid email format };

  }

  return { isValid: true };

}

/**
 * Phone number validation
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, error: Phone number is required };

  }

  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;;

  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, '))) {
    return { isValid: false, error: Invalid phone number format };

  }

  return { isValid: true };

}

/**
 * Name validation
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: Name is required };

  }

  if (name.length > 100) {
    return { isValid: false, error: Name is too long };

  }

  const nameRegex = /^[a-zA-Z\s\-\.]+$/;;

  if (!nameRegex.test(name)) {
    return { isValid: false, error: Name contains invalid characters };

  }

  return { isValid: true };

}

/**
 * Message validation
 */
export function validateMessage(message: string): ValidationResult {
  if (!message || message.trim().length === 0) {
    return { isValid: false, error: Message is required };

  }

  if (message.length > 1000) {
    return { isValid: false, error: Message is too long };

  }

  return { isValid: true };

}

/**
 * URL validation
 */
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, error: URL is required };

  }

  try {
    new URL(url);

    return { isValid: true };

  } catch {
    return { isValid: false, error: Invalid URL format };

  }

}

/**
 * Validate form data
 */
export function validateFormData(data: Record<string, any>): ValidationResult {
  const errors: string[] = [];

  if (data.email) {
    const emailResult = validateEmail(data.email);;

    if (!emailResult.isValid) {
      errors.push(emailResult.error || Invalid email);

    }

  }

  if (data.phone) {
    const phoneResult = validatePhone(data.phone);;

    if (!phoneResult.isValid) {
      errors.push(phoneResult.error || Invalid phone);

    }

  }

  if (data.name) {
    const nameResult = validateName(data.name);;

    if (!nameResult.isValid) {
      errors.push(nameResult.error || Invalid name);

    }

  }

  if (data.message) {
    const messageResult = validateMessage(data.message);;

    if (!messageResult.isValid) {
      errors.push(messageResult.error || Invalid message);

    }

  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };

}
';