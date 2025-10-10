import { describe, it, expect } from '@jest/globals';

describe('validators', () => {
  it('should validate email addresses', () => {
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user@domain.org')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('should validate required fields', () => {
    const isRequired = (value: string) => {
      return Boolean(value && value.trim().length > 0);
    };
    
    expect(isRequired('test')).toBe(true);
    expect(isRequired('  test  ')).toBe(true);
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
  });

  it('should validate phone numbers', () => {
    const isValidPhone = (phone: string) => {
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    };
    
    expect(isValidPhone('+1234567890')).toBe(true);
    expect(isValidPhone('123-456-7890')).toBe(true);
    expect(isValidPhone('(123) 456-7890')).toBe(true);
    expect(isValidPhone('invalid')).toBe(false);
    expect(isValidPhone('123')).toBe(false);
  });
});