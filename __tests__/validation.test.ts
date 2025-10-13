import { validateEmail, validatePassword, sanitizeHTML } from '../src/utils/validators';

describe('Email Validation', () => {
  test('validates correct email addresses', () => {
    expect(validateEmail('test@example.com').isValid).toBe(true);
    expect(validateEmail('user.name@domain.co.uk').isValid).toBe(true);
    expect(validateEmail('admin@company.org').isValid).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(validateEmail('invalid-email').isValid).toBe(false);
    expect(validateEmail('@domain.com').isValid).toBe(false);
    expect(validateEmail('user@').isValid).toBe(false);
    expect(validateEmail('').isValid).toBe(false);
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    const strongPassword = 'MyStr0ng!Pass';
    expect(validatePassword(strongPassword).isValid).toBe(true);
  });

  test('rejects weak passwords', () => {
    const weakPassword = '123';
    expect(validatePassword(weakPassword).isValid).toBe(false);
  });

  test('rejects passwords that are too long', () => {
    const longPassword = 'a'.repeat(129);
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
