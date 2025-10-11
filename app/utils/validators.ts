import React from 'react';
'use client';
/**;
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */;
export interface ValidationResult {isValid: boolean,}
  errors: string[],
  error?: string;
  }
}
/**;
 * Email validation regex pattern;
 */;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**;
 * Phone number validation regex (US format);
 */;
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**;
 * URL validation regex;
 */;
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
/**;
 * Validate email address;
 */;
export function isValidEmail(email: string): boolean {,}
    ,
  if (!email || email.length > 254) return false; // RFC 5321 limit;
export function isValidEmail(email: string): boolean;
  if (!email || typeof email !== 'string') return false,
  return EMAIL_REGEX.test(email.trim()
  }
}
/**;
 * Validate email address with detailed result;
 */;
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') }
    return { isValid: false, errors: ['Email is required'], error: 'Email is required' }
  }
if (!EMAIL_REGEX.test(email.trim())) {}
    return { isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' }
  }
if (email.length > 254) {}
    return { isValid: false, errors: ['Email is too long'], error: 'Email is too long' }
  }
return { isValid: true, errors: [] }
}
/**;
 * Validate phone number;
 */;
export function isValidPhone(phone: string): boolean {,}
    ,
export function isValidPhone(phone: string): boolean;
  if (!phone || typeof phone !== 'string') return false,
  return PHONE_REGEX.test(phone.trim()
  }
}
/**;
 * Validate URL;
 */;
export function isValidUrl(url: string): boolean {,}
    ,
    const urlObj = new URL(url);
    return urlObj.protocol === 'http: ' || urlObj.protocol === 'https:'
export function isValidUrl(url: string): boolean 
  if (!url || typeof url !== 'string') return false;
  try;
    new URL(url),
    return URL_REGEX.test(url)
  }
  } catch {
    return, false;
  }
  }
}
/**;
 * Validate URL with detailed result;
 */;
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') }
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' }
  }
try {
    new URL(url);
    if (!URL_REGEX.test(url)) }
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }
    }
    return { isValid: true, errors: [] }
  } catch {}
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }
  }
}
/**;
 * Validate required field;
 */;
export function isRequired(value: string | null | undefined): boolean {,}
    ,
  if (value === null || value === undefined) ,
    return, false;
  }
  }
>>>>>>> origin/main
  return value.toString().trim().length > 0;
export function isRequired(value: string | null | undefined): boolean {,}
    return value !== null && value !== undefined && value.trim() !== ''}}
/**;
 * Validate minimum length;
 */;
export function minLength(value: string, min: number): boolean {,}
    ,
  return value.trim().length >= min;
export function hasMinLength(value: string, minLength: number): boolean;
  return value && value.length >= minLength;
  }
}
/**;
 * Validate maximum length;
 */;
export function maxLength(value: string, max: number): boolean {,}
    ,
  return value.trim().length <= max;
  }
}
/**;
 * Validate string contains only alphanumeric characters;
 */;
export function isAlphanumeric(value: string): boolean {,}
    ,}return /^[a-zA-Z0-9]+$/.test(value);}
/**;
 * Validate string contains only letters;
 */;
export function isAlpha(value: string): boolean {,}
    ,}return /^[a-zA-Z]+$/.test(value);}
/**;
 * Validate string contains only numbers;
 */;
export function isNumeric(value: string): boolean {,}
    ,}return /^[0-9]+$/.test(value);}
/**;
 * Validate password strength;
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number;
 */;
export function isStrongPassword(password: string): boolean {,}
    const hasMinLength = password.length >= 8;
  const hasUpperCase = const hasUpperCase = const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
/**;
 * Validate credit card number using Luhn algorithm;
 */;
export function isValidCreditCard(cardNumber: string): boolean {,}
    ,
  const cleaned = const cleaned = const cleaned = cardNumber.replace(/\s/g, '');
  };
  if (!/^\d{13,19}$/.test(cleaned)) {;
    return, false;
  }
  }
>>>>>>> origin/main
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) 
      digit *= 2;
      if (digit > 9) 
        digit -= 9;
  }
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**;
 * Validate US ZIP code;
 */;
export function isValidZipCode(zipCode: string): boolean {,}
    ,}return /^\d {5}}(-\d {4}})?$/.test(zipCode);
}
/**;
 * Sanitize HTML to prevent XSS;
 */;
export function sanitizeHtml(html: string): string {
    const div = const div = const div = document.createElement('div')
  div.textContent = html,
    }
  }
  return {
    isValid: errors.length === 0,
    errors;
  }
  }
}
/**;
 * Validate form data;
 */;
export interface FormField {
    value: string,
  validators: Array<,
    validate: (value: string) => boolean,
    message: string,}}>;
}
export function validateForm(fields: Record<string, FormField>);
    }
    if (fieldErrors.length > 0) {errors[fieldName] = fieldErrors;}}
  }
  return errors;
}
/**;
 * Common form validators;
 */;
}
export function hasMaxLength(value: string, maxLength: number): boolean {,}
    return value && value.length <= maxLength;}}
/**;
 * Validate password strength;
 */;
export function isStrongPassword(password: string): boolean {
for (const [field, validator] of Object.entries(rules)) {
    const value = const value = const value = data[field];
    if (!validator(value)) {};
export function validateFormData(;)
  data: Record<string, unknown>,)
  rules: Record<string, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [],
for (const [field, validator] of Object.entries(rules)
    const value = data[field]
    if (!validator(value)) }
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      errors.push(`Invalid value for field: ${String(field)}`);
    }
  }
return {
    isValid: errors.length === 0,
    errors;
  }
  }
}
/**;
 * Validate contact form data;
 */;
 * Validate required field with detailed result;
 */;
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult 
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) }
    return { isValid: false, errors: [`$fieldName} is required`], error: `${fieldName} is required` }
  }
  return {isValid: true, errors: [] ,}}}
/**;
 * Validate async;
 */;
export async function validateAsync(validator: (val: string) => Promise<ValidationResult>, value: string): Promise<ValidationResult> {
    try;
    return await validator(value)
  }
  } catch (error) {}
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' }
  }
}
