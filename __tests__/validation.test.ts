import { describe, it, expect } from '@jest/globals';

describe('validation', () => {
  it('should validate email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test('test@example.com')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
  });

  it('should validate required fields', () => {
    const validateRequired = (value: string) => Boolean(value && value.trim().length > 0);
    expect(validateRequired('test')).toBe(true);
    expect(validateRequired('')).toBe(false);
    expect(validateRequired('   ')).toBe(false);
  });

  it('should validate phone number format', () => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    expect(phoneRegex.test('+1234567890')).toBe(true);
    expect(phoneRegex.test('123-456-7890')).toBe(true);
    expect(phoneRegex.test('invalid')).toBe(false);
  });
});