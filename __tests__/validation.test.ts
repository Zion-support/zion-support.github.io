/**
 * Comprehensive tests for validation utilities
 */

import { describe, it, expect, beforeEach } from '@jest/globals';

import {
  validateEmail,
  validatePhone,
  validateUrl,
  validateRequired,
  validatePassword,
  validateLength,
  validateDate,
  sanitizeHtml,
  validateFields,
  validateAsync,
} from '../app/utils/validators';

describe('Email Validation', () => {
  test('validates correct email addresses', () => {
    expect(validateEmail('test@example.com').isValid).toBe(true);
    expect(validateEmail('user.name+tag@example.co.uk').isValid).toBe(true);
    expect(validateEmail('test123@test-domain.com').isValid).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(validateEmail('').isValid).toBe(false);
    expect(validateEmail('invalid').isValid).toBe(false);
    expect(validateEmail('@example.com').isValid).toBe(false);
    expect(validateEmail('test@').isValid).toBe(false);
  });

  test('rejects email addresses that are too long', () => {
    const longEmail = 'a'.repeat(255) + '@example.com';
    expect(validateEmail(longEmail).isValid).toBe(false);
  });
});

describe('Phone Validation', () => {
  test('validates correct phone numbers', () => {
    expect(validatePhone('+1234567890').isValid).toBe(true);
    expect(validatePhone('1234567890').isValid).toBe(true);
    expect(validatePhone('+1 (234) 567-8900').isValid).toBe(true);
  });

  test('rejects invalid phone numbers', () => {
    expect(validatePhone('').isValid).toBe(false);
    expect(validatePhone('123').isValid).toBe(false);
    expect(validatePhone('abc').isValid).toBe(false);
  });
});

describe('URL Validation', () => {
  test('validates correct URLs', () => {
    expect(validateUrl('https://example.com').isValid).toBe(true);
    expect(validateUrl('http://test.com').isValid).toBe(true);
    expect(validateUrl('https://subdomain.example.com/path').isValid).toBe(true);
  });

  test('rejects invalid URLs', () => {
    expect(validateUrl('').isValid).toBe(false);
    expect(validateUrl('not a url').isValid).toBe(false);
    expect(validateUrl('ftp://example.com').isValid).toBe(false);
  });
});

describe('Required Field Validation', () => {
  test('validates non-empty strings', () => {
    expect(validateRequired('hello').isValid).toBe(true);
    expect(validateRequired('test').isValid).toBe(true);
  });

  test('rejects empty strings', () => {
    expect(validateRequired('').isValid).toBe(false);
    expect(validateRequired('   ').isValid).toBe(false);
  });

  test('provides custom field names in error messages', () => {
    const result = validateRequired('', 'Username');
    expect(result.errors[0]).toContain('Username');
  });
});

describe('String Length Validation', () => {
  test('validates strings within length limits', () => {
    expect(validateLength('hello', 3, 10).isValid).toBe(true);
    expect(validateLength('test', 1, 5).isValid).toBe(true);
  });

  test('rejects strings that are too short', () => {
    expect(validateLength('hi', 3, 10).isValid).toBe(false);
  });

  test('rejects strings that are too long', () => {
    expect(validateLength('this is too long', 3, 10).isValid).toBe(false);
  });

  test('provides custom field names in error messages', () => {
    const result = validateLength('hi', 3, 10, 'Username');
    expect(result.errors[0]).toContain('Username');
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(validatePassword('StrongPass123!').isValid).toBe(true);
    expect(validatePassword('MySecure123@').isValid).toBe(true);
  });

  test('rejects weak passwords', () => {
    expect(validatePassword('weak').isValid).toBe(false);
    expect(validatePassword('12345678').isValid).toBe(false);
    expect(validatePassword('password').isValid).toBe(false);
  });

  test('rejects passwords that are too short', () => {
    expect(validatePassword('Ab1!').isValid).toBe(false);
  });

  test('rejects passwords that are too long', () => {
    const longPassword = 'A'.repeat(130) + '1!';
    expect(validatePassword(longPassword).isValid).toBe(false);
  });
});

describe('Date Validation', () => {
  test('validates correct date formats', () => {
    expect(validateDate('2025-01-01').isValid).toBe(true);
    expect(validateDate('2025-12-31').isValid).toBe(true);
  });

  test('rejects invalid date formats', () => {
    expect(validateDate('').isValid).toBe(false);
    expect(validateDate('01/01/2025').isValid).toBe(false);
    expect(validateDate('2025-13-01').isValid).toBe(false);
    expect(validateDate('2025-02-30').isValid).toBe(false);
    expect(validateDate('invalid').isValid).toBe(false);
  });
});

describe('HTML Sanitization', () => {
  test('sanitizes HTML special characters', () => {
    expect(sanitizeHtml('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
    );
  });

  test('handles empty and non-string inputs', () => {
    expect(sanitizeHtml('')).toBe('');
  });
});

describe('Multiple Field Validation', () => {
  test('validates multiple fields successfully', () => {
    const fields = {
      email: validateEmail('test@example.com'),
      password: validatePassword('StrongPass123!'),
      name: validateRequired('John Doe')
    };

    const result = validateFields(fields);
    expect(result.isValid).toBe(true);
  });

  test('fails when any field is invalid', () => {
    const fields = {
      email: validateEmail('invalid-email'),
      password: validatePassword('weak'),
      name: validateRequired('')
    };

    const result = validateFields(fields);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('Async Validation', () => {
  test('handles async validation successfully', async () => {
    const asyncValidator = async (value: string) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(validateEmail(value));
        }, 10);
      });
    };

    const result = await validateAsync(asyncValidator, 'test@example.com');
    expect(result.isValid).toBe(true);
  });

  test('handles async validation errors', async () => {
    const asyncValidator = async (value: string) => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Validation failed'));
        }, 10);
      });
    };

    const result = await validateAsync(asyncValidator, 'test@example.com');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Validation failed');
  });
});