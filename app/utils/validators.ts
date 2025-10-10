'use client';

/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */

export interface ValidationResult {
  isValid: boolean;

  errors: string[];

  error?: string;

}

/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;

/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;;

/**
 * Name validation regex (letters, spaces, hyphens, apostrophes)
 */
const NAME_REGEX = /^[a-zA-Z\s\-\.]+$/;;

/**
 * URL validation regex
 */
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;;

/**
 * Validate email address
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = [];

  if (!email) {
    errors.push('Email is required);

  } else if (email.length > 254) {
    errors.push('Email is too long);

  } else if (!EMAIL_REGEX.test(email)) {
    errors.push('Invalid email format);

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): ValidationResult {
  const errors: string[] = [];

  if (!phone) {
    errors.push('Phone number is required);

  } else if (!PHONE_REGEX.test(phone)) {
    errors.push('Invalid phone number format);

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}

/**
 * Validate name
 */
export function validateName(name: string): ValidationResult {
  const errors: string[] = [];

  if (!name) {
    errors.push('Name is required);

  } else if (name.length > 100) {
    errors.push('Name is too long);

  } else if (!NAME_REGEX.test(name)) {
    errors.push('Name contains invalid characters);

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}

/**
 * Validate URL
 */
export function validateUrl(url: string): ValidationResult {
  const errors: string[] = [];

  if (!url) {
    errors.push('URL is required);

  } else if (!URL_REGEX.test(url)) {
    errors.push('Invalid URL format);

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}

/**
 * Validate message
 */
export function validateMessage(message: string): ValidationResult {
  const errors: string[] = [];

  if (!message) {
    errors.push('Message is required);

  } else if (message.length > 1000) {
    errors.push('Message is too long);

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}

/**
 * Validate form data
 */
export function validateFormData(data: Record<string, any>): ValidationResult {
  const errors: string[] = [];

  if (data.email) {
    const emailResult = validateEmail(data.email);;

    if (!emailResult.isValid) {
      errors.push(...emailResult.errors);

    }

  }

  if (data.phone) {
    const phoneResult = validatePhone(data.phone);;

    if (!phoneResult.isValid) {
      errors.push(...phoneResult.errors);

    }

  }

  if (data.name) {
    const nameResult = validateName(data.name);;

    if (!nameResult.isValid) {
      errors.push(...nameResult.errors);

    }

  }

  if (data.message) {
    const messageResult = validateMessage(data.message);;

    if (!messageResult.isValid) {
      errors.push(...messageResult.errors);

    }

  }

  return {
    isValid: errors.length === 0,
    errors
  };

}
