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
