import { validateEmail, validatePassword, sanitizeHTML } from '../src/utils/validation';

describe('Email Validation', () => {
  test('validates correct email formats', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    expect(validateEmail('test+tag@example.org')).toBe(true);
  });

  test('rejects invalid email formats', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(validatePassword('StrongPass123!').isValid).toBe(true);
    expect(validatePassword('MySecure1@').isValid).toBe(true);
    expect(validatePassword('ComplexP@ssw0rd').isValid).toBe(true);
  });

  test('rejects weak passwords', () => {
    expect(validatePassword('weak').isValid).toBe(false);
    expect(validatePassword('12345678').isValid).toBe(false);
    expect(validatePassword('password').isValid).toBe(false);
    expect(validatePassword('PASSWORD').isValid).toBe(false);
    expect(validatePassword('Pass123').isValid).toBe(false);
  });

  test('rejects passwords that are too short', () => {
    expect(validatePassword('Ab1!').isValid).toBe(false);
    expect(validatePassword('Short1!').isValid).toBe(false);
  });

  test('rejects passwords that are too long', () => {
    const longPassword = 'A'.repeat(129) + 'a1!';
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
    expect(sanitizeHTML(null as unknown as string)).toBe('');
    expect(sanitizeHTML(undefined as unknown as string)).toBe('');
  });

  test('preserves safe HTML', () => {
    expect(sanitizeHTML('<p>Safe content</p>')).toBe('<p>Safe content</p>');
    expect(sanitizeHTML('<strong>Bold text</strong>')).toBe('<strong>Bold text</strong>');
  });
});