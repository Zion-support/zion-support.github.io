/**
 * Tests for validation utilities
 */

import {
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isRequired,
  minLength,
  maxLength,
  isAlphanumeric,
  isNumeric,
  isStrongPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidZipCode,
  validateForm,
  validators,
} from '../../app/utils/validators';

describe('Validation Utilities', () => {
  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('user @example.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should validate correct US phone numbers', () => {
      expect(isValidPhone('(123) 456-7890')).toBe(true);
      expect(isValidPhone('123-456-7890')).toBe(true);
      expect(isValidPhone('1234567890')).toBe(true);
      expect(isValidPhone('+1 123 456 7890')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidPhone('123')).toBe(false);
      expect(isValidPhone('abc-def-ghij')).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    it('should validate correct URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
      expect(isValidUrl('http://www.example.com')).toBe(true);
      expect(isValidUrl('example.com')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false);
      expect(isValidUrl('htp://invalid')).toBe(false);
    });
  });

  describe('isRequired', () => {
    it('should return true for non-empty values', () => {
      expect(isRequired('test')).toBe(true);
      expect(isRequired('0')).toBe(true);
    });

    it('should return false for empty values', () => {
      expect(isRequired('')).toBe(false);
      expect(isRequired('   ')).toBe(false);
      expect(isRequired(null)).toBe(false);
      expect(isRequired(undefined)).toBe(false);
    });
  });

  describe('minLength', () => {
    it('should validate minimum length', () => {
      expect(minLength('test', 3)).toBe(true);
      expect(minLength('test', 4)).toBe(true);
      expect(minLength('test', 5)).toBe(false);
    });
  });

  describe('maxLength', () => {
    it('should validate maximum length', () => {
      expect(maxLength('test', 5)).toBe(true);
      expect(maxLength('test', 4)).toBe(true);
      expect(maxLength('test', 3)).toBe(false);
    });
  });

  describe('isAlphanumeric', () => {
    it('should validate alphanumeric strings', () => {
      expect(isAlphanumeric('abc123')).toBe(true);
      expect(isAlphanumeric('ABC')).toBe(true);
      expect(isAlphanumeric('123')).toBe(true);
    });

    it('should reject non-alphanumeric strings', () => {
      expect(isAlphanumeric('abc-123')).toBe(false);
      expect(isAlphanumeric('abc 123')).toBe(false);
      expect(isAlphanumeric('abc@123')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should validate numeric strings', () => {
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('0')).toBe(true);
    });

    it('should reject non-numeric strings', () => {
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric('12.3')).toBe(false);
      expect(isNumeric('12-3')).toBe(false);
    });
  });

  describe('isStrongPassword', () => {
    it('should validate strong passwords', () => {
      expect(isStrongPassword('Test1234')).toBe(true);
      expect(isStrongPassword('MyP@ssw0rd')).toBe(true);
    });

    it('should reject weak passwords', () => {
      expect(isStrongPassword('test')).toBe(false);
      expect(isStrongPassword('TEST1234')).toBe(false);
      expect(isStrongPassword('test1234')).toBe(false);
      expect(isStrongPassword('TestTest')).toBe(false);
    });
  });

  describe('getPasswordStrength', () => {
    it('should return correct strength score', () => {
      expect(getPasswordStrength('weak')).toBeLessThan(3);
      expect(getPasswordStrength('Test1234')).toBeGreaterThanOrEqual(3);
      expect(getPasswordStrength('MyP@ssw0rd123')).toBe(4);
    });
  });

  describe('isValidCreditCard', () => {
    it('should validate correct credit card numbers', () => {
      expect(isValidCreditCard('4532015112830366')).toBe(true); // Visa test number
      expect(isValidCreditCard('4532 0151 1283 0366')).toBe(true);
    });

    it('should reject invalid credit card numbers', () => {
      expect(isValidCreditCard('1234567890123456')).toBe(false);
      expect(isValidCreditCard('123')).toBe(false);
    });
  });

  describe('isValidZipCode', () => {
    it('should validate correct US ZIP codes', () => {
      expect(isValidZipCode('12345')).toBe(true);
      expect(isValidZipCode('12345-6789')).toBe(true);
    });

    it('should reject invalid ZIP codes', () => {
      expect(isValidZipCode('123')).toBe(false);
      expect(isValidZipCode('12345-67')).toBe(false);
      expect(isValidZipCode('abcde')).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('should validate form with no errors', () => {
      const formData = {
        email: {
          value: 'test@example.com',
          validators: [validators.required(), validators.email()],
        },
        password: {
          value: 'Test1234',
          validators: [validators.required(), validators.password()],
        },
      };

      const errors = validateForm(formData);
      expect(Object.keys(errors).length).toBe(0);
    });

    it('should return errors for invalid form', () => {
      const formData = {
        email: {
          value: 'invalid-email',
          validators: [validators.required(), validators.email()],
        },
        password: {
          value: 'weak',
          validators: [validators.required(), validators.password()],
        },
      };

      const errors = validateForm(formData);
      expect(errors.email).toBeDefined();
      expect(errors.password).toBeDefined();
      expect(errors.email.length).toBeGreaterThan(0);
      expect(errors.password.length).toBeGreaterThan(0);
    });
  });
});
