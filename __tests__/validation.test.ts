import { validateEmail, validatePassword, validateName, validatePhone, validateURL, validateMessage, validateCompanyName, validateForm } from '../app/utils/validation';

describe('Validation Functions', () => {
  describe('Email Validation', () => {
    test('validates correct email formats', () => {
      expect(validateEmail('test@example.com').isValid).toBe(true);
      expect(validateEmail('user.name@domain.co.uk').isValid).toBe(true);
      expect(validateEmail('test+tag@example.org').isValid).toBe(true);
    });

    test('rejects invalid email formats', () => {
      expect(validateEmail('invalid-email').isValid).toBe(false);
      expect(validateEmail('@example.com').isValid).toBe(false);
      expect(validateEmail('test@').isValid).toBe(false);
      expect(validateEmail('').isValid).toBe(false);
    });
  });

  describe('Password Validation', () => {
    test('validates strong passwords', () => {
      expect(validatePassword('Password123!').isValid).toBe(true);
      expect(validatePassword('MyStr0ng#Pass').isValid).toBe(true);
    });

    test('rejects weak passwords', () => {
      expect(validatePassword('123').isValid).toBe(false);
      expect(validatePassword('password').isValid).toBe(false);
      expect(validatePassword('').isValid).toBe(false);
    });
  });

  describe('Name Validation', () => {
    test('validates proper names', () => {
      expect(validateName('John Doe').isValid).toBe(true);
      expect(validateName('Jane Smith-Jones').isValid).toBe(true);
    });

    test('rejects invalid names', () => {
      expect(validateName('').isValid).toBe(false);
      expect(validateName('123').isValid).toBe(false);
    });
  });

  describe('Phone Validation', () => {
    test('validates phone numbers', () => {
      expect(validatePhone('+1-555-123-4567').isValid).toBe(true);
      expect(validatePhone('(555) 123-4567').isValid).toBe(true);
    });

    test('rejects invalid phone numbers', () => {
      expect(validatePhone('').isValid).toBe(false);
      expect(validatePhone('abc').isValid).toBe(false);
    });
  });

  describe('URL Validation', () => {
    test('validates URLs', () => {
      expect(validateURL('https://example.com').isValid).toBe(true);
      expect(validateURL('http://test.org').isValid).toBe(true);
    });

    test('rejects invalid URLs', () => {
      expect(validateURL('').isValid).toBe(false);
      expect(validateURL('not-a-url').isValid).toBe(false);
    });
  });

  describe('Message Validation', () => {
    test('validates messages', () => {
      expect(validateMessage('Hello world').isValid).toBe(true);
      expect(validateMessage('This is a test message.').isValid).toBe(true);
    });

    test('rejects empty messages', () => {
      expect(validateMessage('').isValid).toBe(false);
    });
  });

  describe('Company Name Validation', () => {
    test('validates company names', () => {
      expect(validateCompanyName('Acme Corp').isValid).toBe(true);
      expect(validateCompanyName('Tech Solutions Inc.').isValid).toBe(true);
    });

    test('rejects invalid company names', () => {
      expect(validateCompanyName('').isValid).toBe(false);
    });
  });

  describe('Form Validation', () => {
    test('validates complete forms', () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello world'
      };
      expect(validateForm(formData).isValid).toBe(true);
    });

    test('rejects incomplete forms', () => {
      const formData = {
        name: '',
        email: 'invalid-email',
        message: ''
      };
      expect(validateForm(formData).isValid).toBe(false);
    });
  });
});