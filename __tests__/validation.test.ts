import { validateEmail, validatePassword, validatePhone, validateURL, sanitizeHTML, validateDate, validateCreditCard } from '../app/utils/validators';

describe('Email Validation', () => {
  test('validates correct email formats', () => {
    expect(validateEmail('test@example.com').isValid).toBe(true);
    expect(validateEmail('user.name+tag@domain.co.uk').isValid).toBe(true);
    expect(validateEmail('user@subdomain.example.com').isValid).toBe(true);
  })
  test('rejects invalid email formats', () => {
    expect(validateEmail('').isValid).toBe(false);
    expect(validateEmail('invalid-email').isValid).toBe(false);
    expect(validateEmail('@example.com').isValid).toBe(false);
    expect(validateEmail('user@').isValid).toBe(false);
    expect(validateEmail('user@.com').isValid).toBe(false);
  })
})
describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(validatePassword('Password123!').isValid).toBe(true);
    expect(validatePassword('MyStr0ng#Pass').isValid).toBe(true);
  })
  test('rejects weak passwords', () => {
    expect(validatePassword('').isValid).toBe(false);
    expect(validatePassword('123456').isValid).toBe(false);
    expect(validatePassword('password').isValid).toBe(false);
    expect(validatePassword('Password').isValid).toBe(false);
    expect(validatePassword('PASSWORD123').isValid).toBe(false);
  })
  test('rejects passwords that are too long', () => {
    const longPassword = 'A'.repeat(129) + 'a1!';
    expect(validatePassword(longPassword).isValid).toBe(false);
  })
})
describe('HTML Sanitization', () => {
  test('sanitizes HTML special characters', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
    );
  })
  test('handles empty and non-string inputs', () => {
    expect(sanitizeHTML('')).toBe('');
    expect(sanitizeHTML(null as unknown as string)).toBe('');
    expect(sanitizeHTML(undefined as unknown as string)).toBe('');
  })
})
describe('Date Validation', () => {
  test('validates correct date formats', () => {
    expect(validateDate('2025-10-08').isValid).toBe(true);
    expect(validateDate('2024-01-01').isValid).toBe(true);
  })
  test('rejects invalid date formats', () => {
    expect(validateDate('').isValid).toBe(false);
    expect(validateDate('10/08/2025').isValid).toBe(false);
    expect(validateDate('2025-13-01').isValid).toBe(false);
    expect(validateDate('2025-02-30').isValid).toBe(false);
    expect(validateDate('invalid').isValid).toBe(false);
  })
})
describe('Credit Card Validation', () => {
  test('validates correct card numbers (Luhn algorithm)', () => {
    // Visa test number
    expect(validateCreditCard('4532015112830366').isValid).toBe(true);
    // MasterCard test number
    expect(validateCreditCard('5555555555554444').isValid).toBe(true);
    // American Express test number
    expect(validateCreditCard('378282246310005').isValid).toBe(true);
  })
  test('rejects invalid card numbers', () => {
    expect(validateCreditCard('').isValid).toBe(false);
    expect(validateCreditCard('1234567890123456').isValid).toBe(false);
    expect(validateCreditCard('invalid').isValid).toBe(false);
    expect(validateCreditCard('4532015112830367').isValid).toBe(false);
  })
})
describe('Phone Validation', () => {
  test('validates correct phone formats', () => {
    expect(validatePhone('+1-555-123-4567').isValid).toBe(true);
    expect(validatePhone('(555) 123-4567').isValid).toBe(true);
    expect(validatePhone('555.123.4567').isValid).toBe(true);
  })
  test('rejects invalid phone formats', () => {
    expect(validatePhone('').isValid).toBe(false);
    expect(validatePhone('123').isValid).toBe(false);
    expect(validatePhone('invalid').isValid).toBe(false);
  })
})
describe('URL Validation', () => {
  test('validates correct URL formats', () => {
    expect(validateURL('https://example.com').isValid).toBe(true);
    expect(validateURL('http://subdomain.example.com/path').isValid).toBe(true);
    expect(validateURL('https://example.com:8080/path?query=value').isValid).toBe(true);
  })
  test('rejects invalid URL formats', () => {
    expect(validateURL('').isValid).toBe(false);
    expect(validateURL('not-a-url').isValid).toBe(false);
    expect(validateURL('ftp://example.com').isValid).toBe(false);
  })
})