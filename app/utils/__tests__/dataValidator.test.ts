import { describe, it, expect } from '@jest/globals';
import {
  validateEmail,
  validateURL,
  validatePhoneNumber,
  validateStringLength,
  validateNumberRange,
  validateCreditCard,
  validateDate,
  validateDateRange,
  sanitizeHTML,
  createCustomValidator,
  validateForm,
  ValidationRules,
} from '../dataValidator';

describe('dataValidator', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@example.co.uk')).toBe(true);
      expect(validateEmail('test@subdomain.example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('invalid@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
    });
  });

  describe('validateURL', () => {
    it('should validate correct URLs', () => {
      expect(validateURL('https://example.com')).toBe(true);
      expect(validateURL('http://example.com/path')).toBe(true);
      expect(validateURL('https://subdomain.example.com/path?query=value')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(validateURL('not-a-url')).toBe(false);
      expect(validateURL('ftp://example.com')).toBe(false);
      expect(validateURL('example.com')).toBe(false);
    });
  });

  describe('validatePhoneNumber', () => {
    it('should validate US phone numbers', () => {
      expect(validatePhoneNumber('(555) 123-4567')).toBe(true);
      expect(validatePhoneNumber('555-123-4567')).toBe(true);
      expect(validatePhoneNumber('5551234567')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhoneNumber('123')).toBe(false);
      expect(validatePhoneNumber('abc-def-ghij')).toBe(false);
    });
  });

  describe('validateStringLength', () => {
    it('should validate string length', () => {
      expect(validateStringLength('test', 1, 10)).toBe(true);
      expect(validateStringLength('hello', 5, 5)).toBe(true);
    });

    it('should reject strings outside length range', () => {
      expect(validateStringLength('test', 5, 10)).toBe(false);
      expect(validateStringLength('verylongstring', 1, 5)).toBe(false);
    });
  });

  describe('validateNumberRange', () => {
    it('should validate numbers in range', () => {
      expect(validateNumberRange(5, 1, 10)).toBe(true);
      expect(validateNumberRange(1, 1, 10)).toBe(true);
      expect(validateNumberRange(10, 1, 10)).toBe(true);
    });

    it('should reject numbers outside range', () => {
      expect(validateNumberRange(0, 1, 10)).toBe(false);
      expect(validateNumberRange(11, 1, 10)).toBe(false);
    });
  });

  describe('validateCreditCard', () => {
    it('should validate correct credit card numbers', () => {
      // Valid test card numbers (Luhn algorithm)
      expect(validateCreditCard('4532015112830366')).toBe(true); // Visa
      expect(validateCreditCard('5425233430109903')).toBe(true); // Mastercard
    });

    it('should reject invalid credit card numbers', () => {
      expect(validateCreditCard('1234567890123456')).toBe(false);
      expect(validateCreditCard('4532015112830367')).toBe(false); // Invalid checksum
    });
  });

  describe('validateDate', () => {
    it('should validate valid dates', () => {
      expect(validateDate('2025-10-08')).toBe(true);
      expect(validateDate(new Date())).toBe(true);
    });

    it('should reject invalid dates', () => {
      expect(validateDate('invalid-date')).toBe(false);
      expect(validateDate('2025-13-01')).toBe(false); // Invalid month
    });
  });

  describe('validateDateRange', () => {
    it('should validate dates within range', () => {
      const date = new Date('2025-10-08');
      const minDate = new Date('2025-01-01');
      const maxDate = new Date('2025-12-31');
      expect(validateDateRange(date, minDate, maxDate)).toBe(true);
    });

    it('should reject dates outside range', () => {
      const date = new Date('2024-12-31');
      const minDate = new Date('2025-01-01');
      const maxDate = new Date('2025-12-31');
      expect(validateDateRange(date, minDate, maxDate)).toBe(false);
    });
  });

  describe('sanitizeHTML', () => {
    it('should remove script tags', () => {
      const dirty = '<p>Hello</p><script>alert("xss")</script>';
      const clean = sanitizeHTML(dirty);
      expect(clean).not.toContain('<script>');
      expect(clean).toContain('Hello');
    });

    it('should remove event handlers', () => {
      const dirty = '<div onclick="alert(\'xss\')">Click me</div>';
      const clean = sanitizeHTML(dirty);
      expect(clean).not.toContain('onclick');
      expect(clean).toContain('Click me');
    });

    it('should preserve safe HTML', () => {
      const safe = '<p><strong>Bold</strong> and <em>italic</em> text</p>';
      const clean = sanitizeHTML(safe);
      expect(clean).toContain('<strong>');
      expect(clean).toContain('<em>');
    });
  });

  describe('createCustomValidator', () => {
    it('should create custom validators', () => {
      const isEven = createCustomValidator(
        (value: number) => value % 2 === 0,
        'Value must be even'
      );

      const result1 = isEven(4);
      expect(result1.isValid).toBe(true);

      const result2 = isEven(3);
      expect(result2.isValid).toBe(false);
      expect(result2.errors).toContain('Value must be even');
    });
  });

  describe('validateForm', () => {
    it('should validate form data with rules', () => {
      const formData = {
        email: 'test@example.com',
        age: 25,
        username: 'johndoe',
      };

      const rules: ValidationRules = {
        email: [
          { type: 'email', message: 'Invalid email' },
          { type: 'required', message: 'Email is required' },
        ],
        age: [
          { type: 'required', message: 'Age is required' },
          { type: 'number', min: 18, max: 100, message: 'Age must be between 18 and 100' },
        ],
        username: [
          { type: 'required', message: 'Username is required' },
          { type: 'string', minLength: 3, maxLength: 20, message: 'Username must be 3-20 characters' },
        ],
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it('should return errors for invalid form data', () => {
      const formData = {
        email: 'invalid-email',
        age: 15,
        username: 'ab',
      };

      const rules: ValidationRules = {
        email: [{ type: 'email', message: 'Invalid email' }],
        age: [{ type: 'number', min: 18, max: 100, message: 'Age must be between 18 and 100' }],
        username: [{ type: 'string', minLength: 3, maxLength: 20, message: 'Username must be 3-20 characters' }],
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
      expect(result.errors.age).toBeDefined();
      expect(result.errors.username).toBeDefined();
    });
  });
});
