/**
 * Comprehensive tests for validation utilities
 */

import {
  validateEmail,
  validateURL,
  validateLength,
  validatePassword,
  sanitizeHTML,
  validateDate,
  validateCreditCard,
  validateJSON,
  validateComposite,
  validateAsync,
} from '../src/utils/validators';

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

describe('URL Validation', () => {
  test('validates correct URL formats', () => {
    expect(validateURL('https://example.com').isValid).toBe(true);
    expect(validateURL('http://test.org').isValid).toBe(true);
    expect(validateURL('https://subdomain.example.com/path').isValid).toBe(true);
  });

  test('rejects invalid URL formats', () => {
    expect(validateURL('').isValid).toBe(false);
    expect(validateURL('not a url').isValid).toBe(false);
  });
});

describe('String Length Validation', () => {
  test('validates strings within length bounds', () => {
    expect(validateLength('hello', 3, 10).isValid).toBe(true);
    expect(validateLength('test', 4, 4).isValid).toBe(true);
  });

  test('rejects strings outside length bounds', () => {
    expect(validateLength('hi', 3, 10).isValid).toBe(false);
    expect(validateLength('this is too long', 3, 10).isValid).toBe(false);
  });

  test('provides custom field names in error messages', () => {
    const result = validateLength('hi', 3, 10, 'Username');
    expect(result.error).toContain('Username');
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(validatePassword('StrongPass123!').isValid).toBe(true);
    expect(validatePassword('MySecure1@').isValid).toBe(true);
  });

  test('rejects weak passwords', () => {
    expect(validatePassword('short').isValid).toBe(false);
    expect(validatePassword('').isValid).toBe(false);
    expect(validatePassword('alllowercase123!').isValid).toBe(false);
    expect(validatePassword('ALLUPPERCASE123!').isValid).toBe(false);
  });

  test('rejects passwords that are too long', () => {
    const longPassword = 'A'.repeat(129) + 'a1!';
    expect(validatePassword(longPassword).isValid).toBe(false);
  });
});

describe('HTML Sanitization', () => {
  test('sanitizes HTML special characters', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
    );
  });

  test('handles empty and non-string inputs', () => {
    expect(sanitizeHTML('')).toBe('');
    expect(sanitizeHTML(null as any)).toBe('');
    expect(sanitizeHTML(undefined as any)).toBe('');
  });
});

describe('Date Validation', () => {
  test('validates correct date formats', () => {
    expect(validateDate('2025-10-08').isValid).toBe(true);
    expect(validateDate('2024-01-01').isValid).toBe(true);
  });

  test('rejects invalid date formats', () => {
    expect(validateDate('').isValid).toBe(false);
    expect(validateDate('10/08/2025').isValid).toBe(false);
    expect(validateDate('2025-13-01').isValid).toBe(false);
    expect(validateDate('2025-02-30').isValid).toBe(false);
  });
});

describe('Credit Card Validation', () => {
  test('validates correct card numbers (Luhn algorithm)', () => {
    // Visa test number
    expect(validateCreditCard('4532015112830366').isValid).toBe(true);
    // MasterCard test number
    expect(validateCreditCard('5425233430109903').isValid).toBe(true);
    // Formatted card number
    expect(validateCreditCard('4532 0151 1283 0366').isValid).toBe(true);
  });

  test('rejects invalid card numbers', () => {
    expect(validateCreditCard('').isValid).toBe(false);
    expect(validateCreditCard('1234567890123456').isValid).toBe(false);
    expect(validateCreditCard('123').isValid).toBe(false);
  });
});

describe('JSON Validation', () => {
  test('validates correct JSON strings', () => {
    expect(validateJSON('{}').isValid).toBe(true);
    expect(validateJSON('[]').isValid).toBe(true);
    expect(validateJSON('{"key":"value"}').isValid).toBe(true);
    expect(validateJSON('[1,2,3]').isValid).toBe(true);
  });

  test('rejects invalid JSON strings', () => {
    expect(validateJSON('').isValid).toBe(false);
    expect(validateJSON('{invalid}').isValid).toBe(false);
    expect(validateJSON('undefined').isValid).toBe(false);
  });
});

describe('Composite Validation', () => {
  test('combines multiple validators successfully', () => {
    const validators = [
      (val: string) => validateLength(val, 5, 20),
      (val: string) => validateLength(val, 1, 100),
    ];

    expect(validateComposite('hello world', validators).isValid).toBe(true);
  });

  test('fails on first invalid validator', () => {
    const validators = [
      (val: string) => validateLength(val, 10, 20),
      (val: string) => validateLength(val, 1, 100),
    ];

    const result = validateComposite('short', validators);
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('at least 10');
  });
});

describe('Async Validation', () => {
  test('handles successful async validation', async () => {
    const asyncValidator = async (value: string) => {
      return { isValid: true };
    };

    const result = await validateAsync(asyncValidator, 'test');
    expect(result.isValid).toBe(true);
  });

  test('handles async validation errors', async () => {
    const asyncValidator = async (value: string) => {
      return { isValid: false, error: 'Validation failed' };
    };

    const result = await validateAsync(asyncValidator, 'test');
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('Validation failed');
  });
});