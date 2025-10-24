'use client';
/**
 * Data Validation Utility;
 * Provides comprehensive data validation with type safety;
 */
export interface ValidationRule<T = unknown> {/* TODO: Fix JSX expression */,}
}
export interface FieldRule {/* TODO: Fix JSX expression */,}
}
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {/* TODO: Fix JSX expression */,}
}
export class ValidationError extends Error {/* TODO: Fix JSX expression */}
  }
}
/**
 * Validate email address;
 */
export function validateEmail(emai)
  l: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Email is required' };
  if (email.length > 254) return {/* TODO: Fix JSX expression */}
  r: 'Email is too long' };
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {/* TODO: Fix JSX expression */}
  };
}
/**
 * Validate URL;
 */
export function validateURL(ur,
  l: string, requireProtoco)
  l: boolean = true): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'URL is required' };
  }
  
  try {/* TODO: Fix JSX expression */,}
  p: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ? 
      (parsed.protocol === 'htt,
  p:' || parsed.protocol === 'http)
  s:') : 
      true;
    return {/* TODO: Fix JSX expression */}
    };
  } catch {/* TODO: Fix JSX expression */,}
  r: 'Invalid URL format' ,};
  }
}
/**
 * Validate phone number (US format)
 */
export function validatePhoneNumber(phon)
  e: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Phone number is required' };
  }
  
  // More flexible phone regex that handles various formats;
  const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4,6}$/;
  const isValid = phoneRegex.test(phone);
  return {/* TODO: Fix JSX expression */}
  };
}
/**
 * Validate string length;
 */
export function validateStringLength(valu,
  e: string, mi)
  n: number, max?: number): boolean {/* TODO: Fix JSX expression */}
  }
  return value.length >= min;
}
/**
 * Validate number range;
 */
export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
  x: number): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Validate credit card number (basic Luhn algorithm)
 */
export function validateCreditCard(cardNumbe)
  r: string): boolean {/* TODO: Fix JSX expression */}
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate date;
 */
export function validateDate(valu)
  e: unknown): boolean {/* TODO: Fix JSX expression */}
  }
  if (typeof value === 'string') {/* TODO: Fix JSX expression */,}
  }
  return false;
}
/**
 * Validate date range;
 */
export function validateDateRange(dat)
  e: Date, min?: Date, max?: Date): boolean {/* TODO: Fix JSX expression */}
}
/**
 * Sanitize HTML to prevent XSS;
 */
export function sanitizeHTML(htm)
  l: string): string {/* TODO: Fix JSX expression */}
}
/**
 * Create custom validator;
 */
export function createCustomValidator<T>(validato,
  r: (valu)
  e: T) => boolean,
  messag,
  e: string;
): (valu)
  e: T) => {/* TODO: Fix JSX expression */}
  s: string[] } {/* TODO: Fix JSX expression */}
    };
  };
}
/**
 * Validate a single field against a rule;
 */
function validateFieldRule(valu,
  e: unknown, rul)
  e: FieldRule): boolean {/* TODO: Fix JSX expression */}
  }
}
/**
 * Validate form data;
 */
export function validateForm<T extends Record<string, unknown>>(dat,
  a: T,
  rule,
  s: ValidationRules;)
): ValidationResult {/* TODO: Fix JSX expression */,}
  errors: Record<string, string[]> = {};
  for (const field in rules) {/* TODO: Fix JSX expression */,}
      }
    }
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */,}`
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {/* TODO: Fix JSX expression */}
          }
        }
      );
    }
  }
  return {/* TODO: Fix JSX expression */}
  };
}
/**
 * Validation rules builder;
 */
export const ValidationRulesBuilder = {/* TODO: Fix JSX expression */,}
    },
    messag,
  e: 'This field is required',
  }),
  emai,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),
  ur,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),
  minLengt,
  h: (mi)
  n: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be at least ${min} characters long`)
  }),
  maxLengt,
  h: (ma)
  x: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be no more than ${max} characters long`)
  }),
  patter,
  n: (patter,
  n: RegExp, messag)
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
  }),
  rang,
  e: (mi,
  n: number, ma)
  x: number): ValidationRule<number> => ({/* TODO: Fix JSX expression */}`
  e: `Must be between ${min} and ${max}`)
  }),
  custo,
  m: <T>(validato,
  r: (valu)
  e: T) => boolean, messag,
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */})
  })
};
// Legacy class-based API for backward compatibility;
class DataValidator {/* TODO: Fix JSX expression */}
  private constructor() {}
  static getInstance(): DataValidator {/* TODO: Fix JSX expression */,}
    }
    return DataValidator.instance;
  }
  isEmail = validateEmail;
  isURL = validateURL;
  isPhoneNumber = validatePhoneNumber;
  hasLength = validateStringLength;
  isInRange = validateNumberRange;
  isCreditCard = validateCreditCard;
  isDate = validateDate;
  isDateInRange = validateDateRange;
  sanitizeHTML = sanitizeHTML;
  isRequired(valu)
  e: unknown): boolean {/* TODO: Fix JSX expression */}
  }
  isArray(valu)
  e: unknown): value is unknown[] {/* TODO: Fix JSX expression */}
  }
  isObject(valu)
  e: unknown): value is Record<string, unknown> {/* TODO: Fix JSX expression */}
  }
  matchesPattern(valu,
  e: string, patter)
  n: RegExp): boolean {/* TODO: Fix JSX expression */}
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
export default DataValidator;

// Additional validation functions for tests;
export function validateLength(valu,
  e: string, mi,
  n: number, max?: number, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: isValid ? undefined : `${fieldName} must be between ${min} and ${max} characters`
    };
  }
  const isValid = value.length >= min;
  return {/* TODO: Fix JSX expression */,}`
  r: isValid ? undefined : `${fieldName,} must be at least ${min} characters`
  };
}

export function validateRequired(valu,
  e: unknown, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  if (typeof value === 'string' && value.trim() === '') return {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` };
  // Not,
  e: Empty arrays are considered valid for required fields (they exist, just empty)
  return {/* TODO: Fix JSX expression */,}
  d: true; };
}

export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
  x: number): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Value must be a valid number' };
  }
  const isValid = value >= min && value <= max;
  return {/* TODO: Fix JSX expression */,}`
  r: isValid ? undefined : `Value must be between ${min,} and ${max}`
  };
}

export function validatePassword(passwor)
  d: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Password is required' };
  if (password.length < 8) return {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters' };
  if (password.length > 128) return {/* TODO: Fix JSX expression */}
  r: 'Password must be less than 128 characters' };
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one uppercase letter' };
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one lowercase letter' };
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one number' };
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one special character' };
  return {/* TODO: Fix JSX expression */}
  d: true };
}

export function sanitizeHTML(htm)
  l: string): string {/* TODO: Fix JSX expression */}
}

export function sanitizeInput(inpu,
  t: string, maxLengt)
  h: number = 1000): string | null {/* TODO: Fix JSX expression */}
  }

  return clean || null;
}

export function validateDate(dateStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Date is required' };
  
  // Check format first;
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {/* TODO: Fix JSX expression */}
  r: 'Invalid date format. Use YYYY-MM-DD' };
  }

  const date = new Date(dateString);
  const isValid = !isNaN(date.getTime());
  
  // Additional check for invalid dates like 2025-02-30;
  if (isValid) {/* TODO: Fix JSX expression */,}
    };
  }
  
  return {/* TODO: Fix JSX expression */,}
  };
}

export function validateCreditCard(cardNumbe)
  r: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Card number is required' };
  
  // Remove all non-digit characters (spaces, dashes, etc.)
  const cleaned = cardNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleaned)) return {/* TODO: Fix JSX expression */,}
  r: 'Card number must contain only digits' ,};
  if (cleaned.length < 13 || cleaned.length > 19) return {/* TODO: Fix JSX expression */,}
  r: 'Card number must be between 13 and 19 digits' ,};
  
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */,}
    }
    sum += digit;
    isEven = !isEven;
  }

  const isValid = sum % 10 === 0;
  return {/* TODO: Fix JSX expression */}
  };
}

export function validateJSON(jsonStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' };
  
  try {/* TODO: Fix JSX expression */}
  d: true };
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' };
  }
}

export function validateComposite(valu,
  e: string, validator,
  s: Array<(va)
  l: string) => {/* TODO: Fix JSX expression */}
  d: boolean; error?: string }>): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
    }
  }
  return {/* TODO: Fix JSX expression */,}
  d: true; };
}

export async function validateAsync(validato,
  r: (valu)
  e: string) => Promise<{/* TODO: Fix JSX expression */}
  d: boolean; error?: string }>, valu,
  e: string,): Promise<{/* TODO: Fix JSX expression */,}
  d: boolean; error?: string }> {/* TODO: Fix JSX expression */,}
  } catch (error) {/* TODO: Fix JSX expression */,}
  r: 'Validation failed' ,};
  }
}
"`
// Utility file: dataValidator

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class DataValidator {
  validate(data: Record<string, unknown>, rules: Record<string, ValidationRule>): ValidationResult {
    const errors: string[] = [];

    for (const [field, rule] of Object.entries(rules)) {
      const value = data[field];

      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} is required`);
        continue;
      }

      if (value === undefined || value === null) {
        continue;
      }

      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters long`);
      }

      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors.push(`${field} must be no more than ${rule.maxLength} characters long`);
      }

      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors.push(`${field} format is invalid`);
      }

      if (rule.custom && !rule.custom(value)) {
        errors.push(`${field} validation failed`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const dataValidator = new DataValidator();
