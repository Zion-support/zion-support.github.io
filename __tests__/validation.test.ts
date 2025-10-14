import { describe, it, expect, beforeEach  } from '@jest/globals';
import { isValidUrl,
  validateURL,
  validateLength,
  isValidPassword,
  validatePassword,
  sanitizeHTML,
  validateDate,
  validateCreditCard,
  validateJSON,
  validateRequired,
  validateComposite,
  asyncValidator;
 } from '../src/utils/validators';describe('validation', () =>
                {
  beforeEach(() =>
                {
    // Setup before each test
  })
  it('should pass basic test', () =>
                {
    expect(true).toBe(true)
  })
  it('should handle basic functionality', () =>
                {
    const result = 1 + 1
    expect(result).toBe(2)
  })
  test('rejects invalid URLs', () =>
                {
    expect(isValidUrl('')).toBe(false)
    expect(isValidUrl('not a url')).toBe(false)
    expect(isValidUrl('ftp://example.com')).toBe(false)
  })
  test('rejects invalid URL formats', () =>
                {
    expect(validateURL('').isValid).toBe(false)
    expect(validateURL('not a url').isValid).toBe(false)
  })
})
describe('String Length Validation', () =>
                {
  test('validates strings within length bounds', () =>
                {
    expect(validateLength('hello', 3, 10).isValid).toBe(true)
    expect(validateLength('test', 4, 4).isValid).toBe(true)
  })
  test('rejects strings outside length bounds', () =>
                {
    expect(validateLength('hi', 3, 10).isValid).toBe(false)
    expect(validateLength('this is too long', 3, 10).isValid).toBe(false)
  })
  test('provides custom field names in error messages', () =>
                {
    const result = validateLength('hi', 3, 10, 'Username')
    expect(result.error).toContain('Username')
  })
})
describe('Password Validation', () =>
                {
  test('validates strong passwords', () =>
                {
    expect(isValidPassword('StrongPass123!')).toBe(true)
    expect(isValidPassword('MySecure123@')).toBe(true)
  })
  test('rejects weak passwords', () =>
                {
    expect(validatePassword('short').isValid).toBe(false)
    expect(validatePassword('').isValid).toBe(false)
    expect(validatePassword('alllowercase123!').isValid).toBe(false)
    expect(validatePassword('ALLUPPERCASE123!').isValid).toBe(false)
    expect(validatePassword('NoNumbers!').isValid).toBe(false)
    expect(validatePassword('NoSpecialChar123').isValid).toBe(false)
  })
  test('rejects passwords that are too long', () =>
                {
    const longPassword = 'A'.repeat(129) + 'a1!'
    expect(validatePassword(longPassword).isValid).toBe(false)
  })
})
describe('HTML Sanitization', () =>
                {
  test('sanitizes HTML special characters', () =>
                {
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
    )
  })
  test('handles empty and non-string inputs', () =>
                {
    expect(sanitizeHTML('')).toBe('')
    expect(sanitizeHTML(null as unknown as string)).toBe('')
    expect(sanitizeHTML(undefined as unknown as string)).toBe('')
  })
})
describe('Date Validation', () =>
                {
  test('validates correct date formats', () =>
                {
    expect(validateDate('2025-10-08').isValid).toBe(true)
    expect(validateDate('2024-01-01').isValid).toBe(true)
  })
  test('rejects invalid date formats', () =>
                {
    expect(validateDate('').isValid).toBe(false)
    expect(validateDate('10/08/2025').isValid).toBe(false)
    expect(validateDate('2025-13-01').isValid).toBe(false)
    expect(validateDate('2025-02-30').isValid).toBe(false)
    expect(validateDate('invalid').isValid).toBe(false)
  })
})
describe('Credit Card Validation', () =>
                {
  test('validates correct card numbers (Luhn algorithm)', () =>
                {
    // Visa test number
    expect(validateCreditCard('4532015112830366').isValid).toBe(true)
    // MasterCard test number
    expect(validateCreditCard('5425233430109903').isValid).toBe(true)
    // Formatted card number
    expect(validateCreditCard('4532-0151-1283-0366').isValid).toBe(true)
  })
  test('rejects invalid card numbers', () =>
                {
    expect(validateCreditCard('').isValid).toBe(false)
    expect(validateCreditCard('1234567890123456').isValid).toBe(false)
    expect(validateCreditCard('123').isValid).toBe(false)
  })
})
describe('JSON Validation', () =>
                {
  test('validates correct JSON strings', () =>
                {
    expect(validateJSON('{}').isValid).toBe(true)
    expect(validateJSON('[]').isValid).toBe(true)
    expect(validateJSON('{"key":"value"}').isValid).toBe(true)
    expect(validateJSON('[1,2,3]').isValid).toBe(true)
  })
  test('rejects invalid JSON strings', () =>
                {
    expect(validateJSON('').isValid).toBe(false)
    expect(validateJSON('{invalid}').isValid).toBe(false)
    expect(validateJSON('undefined').isValid).toBe(false)
  })
})
describe('Composite Validation', () =>
                {
  test('combines multiple validators successfully', () =>
                {
    const validators = [
      (val: unknown) => validateRequired(val, 'Test'),
      (val: unknown) => validateLength(val as string, 5, 20, 'Test'),
    ]
    expect(validateComposite('hello world', validators).isValid).toBe(true)
  })
  test('fails on first invalid validator', () =>
                {
    const validators = [
      (val: unknown) => validateRequired(val, 'Test'),
      (val: unknown) => validateLength(val as string, 10, 20, 'Test'),
    ]
    const result = validateComposite('short', validators)
    expect(result.isValid).toBe(false)
    expect(result.error).toContain('at least 10')
  })
})
describe('Async Validation', () =>
                {
  test('handles successful async validation', async () =>
                {
    const result = await asyncValidator('test')
    expect(result).toBe('success')
  })
})