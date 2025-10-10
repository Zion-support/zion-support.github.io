'use client',

/**
 * Validation Utilities,
 * Provides common validation functions for forms and data,
 */
export interface ValidationResult {
  isValid: boolean,
  errors: string[],
  error?: string,
}

/**
 * Email validation regex pattern,
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/,

/**
 * URL validation regex,
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,

/**
 * Validate email address,
 */
  return EMAIL_REGEX.test(email.trim()),
}

/**
 * Validate email address with detailed result
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, errors: ['Email is required'], error: 'Email is required' },
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' },
  }
  
  if (email.length > 254) {
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' },
  }
  
  return { isValid: true, errors: [] },
}

/**
 * Validate phone number,
 */
  return PHONE_REGEX.test(phone.trim()),
}

/**
 * Validate URL,
 */
  } catch {
    return false,
  }
}

/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' },
  }
  
  try {
    new URL(url),
    if (!URL_REGEX.test(url)) {
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' },
    }
    return { isValid: true, errors: [] },
  } catch {
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' },
  }
}

/**
 * Validate required field,
 */
}

/**
 * Validate minimum length,
 */
}

/**
 * Validate maximum length,
 */

/**
 * Validate password strength,
 */
export function isStrongPassword(password: string): boolean {
  if (!password || password.length < 8) return false,

const hasUpperCase = /[A-Z]/.test(password),
const hasLowerCase = /[a-z]/.test(password);,
const hasNumbers = /\d/.test(password),
const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(password),

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar,
}

/**
}

/**
 * Validate password with detailed result,
 */
  }
  
  if (password.length < 8) {
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' },
  }
  
  if (password.length > 128) {
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' },
  }
  
  if (!isStrongPassword(password)) {
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' },
  }
  
  return { isValid: true, errors: [] },
}

/**
}

/**
 * Validate date with detailed result,
 */
}

/**
 * Validate credit card with detailed result,
 */
  }
  
  return { isValid: true, errors: [] },
}

/**
 * Validate JSON with detailed result,
 */
  }
  
  try {
    JSON.parse(jsonString),
    return { isValid: true, errors: [] },
  } catch {
    return { isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' },
  }
}

/**
  for (const validator of validators) {
    const result = validator(value),
    if (!result.isValid) {
      return result,
    }
  }
  return { isValid: true, errors: [] },
}

/**
    return await validator(value),
  } catch (error) {
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' },
  }
}