import { validateEmail, validatePassword, validateName, validatePhone, validateURL, validateMessage, validateCompanyName, validateForm } from '../app/utils/validation;

describe('Validation Functions, () => {
  describe('Email Validation, () => {
    test('validates correct email formats, () => {
      expect(validateEmail('test@example.com).isValid).toBe(true);

      expect(validateEmail('user.name@domain.co.uk).isValid).toBe(true);

      expect(validateEmail('test+tag@example.org).isValid).toBe(true);

    });

    test('rejects invalid email formats, () => {
      expect(validateEmail('invalid-email).isValid).toBe(false);

      expect(validateEmail('@example.com).isValid).toBe(false);

      expect(validateEmail('test@).isValid).toBe(false);

      expect(validateEmail(').isValid).toBe(false);

    });

    test('rejects emails that are too long, () => {
      const longEmail = 'a'.repeat(250) + '@example.com;;

      expect(validateEmail(longEmail).isValid).toBe(false);

    });

  });

  describe('Password Validation, () => {
    test('validates strong passwords, () => {
      expect(validatePassword('Password123!).isValid).toBe(true);

      expect(validatePassword('MyStr0ng#Pass).isValid).toBe(true);

    });

    test('rejects weak passwords, () => {
      expect(validatePassword('weak).isValid).toBe(false);

      expect(validatePassword('password).isValid).toBe(false);

      expect(validatePassword('PASSWORD).isValid).toBe(false);

      expect(validatePassword('12345678).isValid).toBe(false);

    });

    test('provides specific error messages for weak passwords, () => {
      const result = validatePassword('weak);;

      expect(result.isValid).toBe(false);

      expect(result.errors).toContain('Password must be at least 8 characters long);

    });

  });

  describe('Name Validation, () => {
    test('validates correct name formats, () => {
      expect(validateName('John Doe).isValid).toBe(true);

      expect(validateName('Mary-Jane).isValid).toBe(true);

      expect(validateName("O'Connor).isValid).toBe(true);

    });

    test('rejects invalid name formats, () => {
      expect(validateName(').isValid).toBe(false);

      expect(validateName('A).isValid).toBe(false);

      expect(validateName('John123).isValid).toBe(false);

      expect(validateName('John@Doe).isValid).toBe(false);

    });

  });

  describe('Phone Validation, () => {
    test('validates correct phone formats, () => {
      expect(validatePhone('+1234567890).isValid).toBe(true);

      expect(validatePhone('1234567890).isValid).toBe(true);

      expect(validatePhone('+1-234-567-8900).isValid).toBe(true);

    });

    test('rejects invalid phone formats, () => {
      expect(validatePhone(').isValid).toBe(false);

      expect(validatePhone('123).isValid).toBe(false);

      expect(validatePhone('abc-def-ghij).isValid).toBe(false);

    });

  });

  describe('URL Validation, () => {
    test('validates correct URL formats, () => {
      expect(validateURL('https://example.com).isValid).toBe(true);

      expect(validateURL('http://test.org).isValid).toBe(true);

    });

    test('rejects invalid URL formats, () => {
      expect(validateURL(').isValid).toBe(false);

      expect(validateURL('not-a-url).isValid).toBe(false);

      expect(validateURL('ftp://example.com).isValid).toBe(false);

    });

  });

  describe('Message Validation, () => {
    test('validates correct message formats, () => {
      expect(validateMessage('This is a valid message).isValid).toBe(true);

      expect(validateMessage('A.repeat(500)).isValid).toBe(true);

    });

    test('rejects invalid message formats, () => {
      expect(validateMessage(').isValid).toBe(false);

      expect(validateMessage('Short).isValid).toBe(false);

      expect(validateMessage('A.repeat(1001)).isValid).toBe(false);

    });

  });

  describe('Company Name Validation, () => {
    test('validates correct company name formats, () => {
      expect(validateCompanyName('Acme Corp).isValid).toBe(true);

      expect(validateCompanyName('Tech Solutions LLC).isValid).toBe(true);

    });

    test('rejects invalid company name formats, () => {
      expect(validateCompanyName(').isValid).toBe(false);

      expect(validateCompanyName('A).isValid).toBe(false);

      expect(validateCompanyName('A.repeat(101)).isValid).toBe(false);

    });

  });

  describe('Form Validation, () => {
    test('validates complete form data, () => {
      const formData = {;
        email: 'test@example.com,
        name: 'John Doe,
        phone: '1234567890,
        message: 'This is a test message
      };

      const result = validateForm(formData);;

      expect(result.isValid).toBe(true);

    });

    test('rejects form with invalid data, () => {
      const formData = {;
        email: 'invalid-email,
        name: ',
        phone: '123,
        message: 'Short
      };

      const result = validateForm(formData);;

      expect(result.isValid).toBe(false);

      expect(result.errors).toBeDefined();

      expect(result.errors!.length).toBeGreaterThan(0);

    });

  });

});
