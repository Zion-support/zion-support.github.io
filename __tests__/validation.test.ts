/**
 * Comprehensive tests for validation utilities
 */

import {
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isRequired,
  isValidPassword,
  sanitizeInput,
  minLength,
  maxLength,
  isAlphanumeric,
  isAlpha,
  isNumeric,
  isStrongPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidZipCode,
  sanitizeHtml,
  validateObject,
  validateForm,
} from '../app/utils/validators';

describe('Email Validation', () => {
  test('validates correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    expect(isValidEmail('test123@test-domain.com')).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
  });

  test('rejects email addresses that are too long', () => {
    const longEmail = 'a'.repeat(255) + '@example.com';
    expect(isValidEmail(longEmail)).toBe(false);
  });
});

describe('Phone Validation', () => {
  test('validates correct phone numbers', () => {
    expect(isValidPhone('1234567890')).toBe(true);
    expect(isValidPhone('123-456-7890')).toBe(true);
    expect(isValidPhone('(123) 456-7890')).toBe(true);
    expect(isValidPhone('+1 123 456 7890')).toBe(true);
  });

  test('rejects invalid phone numbers', () => {
    expect(isValidPhone('')).toBe(false);
    expect(isValidPhone('123')).toBe(false);
    expect(isValidPhone('abc')).toBe(false);
    expect(isValidPhone('12345678901234567890')).toBe(false);
  });
});

describe('URL Validation', () => {
  test('validates correct URLs with protocol', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://sub.example.com/path?query=1')).toBe(true);
  });

  test('validates URLs without protocol', () => {
    expect(isValidUrl('example.com')).toBe(true);
    expect(isValidUrl('sub.example.com')).toBe(true);
  });

  test('rejects invalid URL formats', () => {
    expect(isValidUrl('')).toBe(false);
    expect(isValidUrl('not a url')).toBe(false);
  });
});

describe('String Length Validation', () => {
  test('validates strings within length bounds', () => {
    expect(minLength('hello', 3)).toBe(true);
    expect(maxLength('test', 10)).toBe(true);
  });

  test('rejects strings outside length bounds', () => {
    expect(minLength('hi', 3)).toBe(false);
    expect(maxLength('this is too long', 10)).toBe(false);
  });
});

describe('Required Field Validation', () => {
  test('accepts valid values', () => {
    expect(isRequired('test')).toBe(true);
    expect(isRequired('0')).toBe(true);
    expect(isRequired('false')).toBe(true);
  });

  test('rejects empty values', () => {
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
    expect(isRequired(null)).toBe(false);
    expect(isRequired(undefined)).toBe(false);
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(isValidPassword('Test123!@#')).toBe(true);
    expect(isValidPassword('SecureP@ssw0rd')).toBe(true);
  });

  test('rejects weak passwords', () => {
    expect(isValidPassword('short')).toBe(false);
    expect(isValidPassword('')).toBe(false);
    expect(isValidPassword('alllowercase123!')).toBe(false);
    expect(isValidPassword('ALLUPPERCASE123!')).toBe(false);
    expect(isValidPassword('NoNumbers!')).toBe(false);
    expect(isValidPassword('NoSpecialChar123')).toBe(false);
  });

  test('accepts long passwords that meet requirements', () => {
    const longPassword = 'A'.repeat(129) + 'a1!';
    expect(isValidPassword(longPassword)).toBe(true);
  });
});

describe('HTML Sanitization', () => {
  test('sanitizes HTML special characters', () => {
    expect(sanitizeHtml('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert("xss")&lt;/script&gt;'
    );

    expect(sanitizeHtml('Test & <strong>bold</strong>')).toBe(
      'Test &amp; &lt;strong&gt;bold&lt;/strong&gt;'
    );
  });

  test('handles empty and non-string inputs', () => {
    expect(sanitizeHtml('')).toBe('');
    expect(sanitizeHtml(null as any)).toBe('');
    expect(sanitizeHtml(undefined as any)).toBe('');
  });
});

describe('Input Sanitization', () => {
  test('sanitizes and trims user input', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
    expect(sanitizeInput('test\x00input')).toBe('testinput');
  });

  test('enforces maximum length', () => {
    const longInput = 'a'.repeat(2000);
    const result = sanitizeInput(longInput, 100);
    expect(result?.length).toBe(100);
  });

  test('returns null for invalid input', () => {
    expect(sanitizeInput('')).toBe(null);
    expect(sanitizeInput(null as any)).toBe(null);
    expect(sanitizeInput('   ')).toBe(null);
  });
});

describe('Credit Card Validation', () => {
  test('validates correct card numbers (Luhn algorithm)', () => {
    // Visa test number
    expect(isValidCreditCard('4532015112830366')).toBe(true);
    // MasterCard test number
    expect(isValidCreditCard('5555555555554444')).toBe(true);
    // Formatted card number
    expect(isValidCreditCard('4532-0151-1283-0366')).toBe(false);
  });

  test('rejects invalid card numbers', () => {
    expect(isValidCreditCard('')).toBe(false);
    expect(isValidCreditCard('1234567890123456')).toBe(false);
    expect(isValidCreditCard('123')).toBe(false);
  });
});

describe('Form Validation', () => {
  test('validates form data correctly', () => {
    const formFields = {
      email: {
        value: 'test@example.com',
        validators: [
          { validate: isValidEmail, message: 'Invalid email' }
        ]
      },
      password: {
        value: 'Test123!',
        validators: [
          { validate: isValidPassword, message: 'Invalid password' }
        ]
      },
      name: {
        value: 'John Doe',
        validators: [
          { validate: (val: string) => val.length > 0, message: 'Name is required' }
        ]
      }
    };

    const result = validateForm(formFields);
    expect(Object.keys(result)).toHaveLength(0);
  });
});
