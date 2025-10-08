/**
 * Comprehensive tests for validation utilities
 */

import {
  validateEmail,
  validatePhone,
  validateURL,
  validateLength,
  validateRequired,
  validateNumberRange,
  validatePassword,
  sanitizeHTML,
  sanitizeInput,
  validateDate,
  validateCreditCard,
  validateJSON,
  validateComposite,
  validateAsync,
} from '../src/utils/validation';

describe('Email Validation', () => {
  test('validates correct email addresses', () => {
    expect(validateEmail('test@example.com').isValid).toBe(true);
    expect(validateEmail('user.name+tag@example.co.uk').isValid).toBe(true);
    expect(validateEmail('test123@test-domain.com').isValid).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(validateEmail('').isValid).toBe(false);
    expect(validateEmail('invalid').isValid).toBe(false);
    expect(validateEmail('@example.com').isValid).toBe(false);
    expect(validateEmail('test@').isValid).toBe(false);
    expect(validateEmail('test@example').isValid).toBe(false);
  });

  test('rejects email addresses that are too long', () => {
    const longEmail = 'a'.repeat(255) + '@example.com';
    expect(validateEmail(longEmail).isValid).toBe(false);
  });
});

describe('Phone Validation', () => {
  test('validates correct phone numbers', () => {
    expect(validatePhone('1234567890').isValid).toBe(true);
    expect(validatePhone('123-456-7890').isValid).toBe(true);
    expect(validatePhone('(123) 456-7890').isValid).toBe(true);
    expect(validatePhone('+1 123 456 7890').isValid).toBe(true);
  });

  test('rejects invalid phone numbers', () => {
    expect(validatePhone('').isValid).toBe(false);
    expect(validatePhone('123').isValid).toBe(false);
    expect(validatePhone('abc').isValid).toBe(false);
    expect(validatePhone('12345678901234567890').isValid).toBe(false);
  });
});

describe('URL Validation', () => {
  test('validates correct URLs with protocol', () => {
    expect(validateURL('https://example.com').isValid).toBe(true);
    expect(validateURL('http://example.com').isValid).toBe(true);
    expect(validateURL('https://sub.example.com/path?query=1').isValid).toBe(true);
  });

  test('rejects URLs with invalid protocols', () => {
    expect(validateURL('ftp://example.com').isValid).toBe(false);
    expect(validateURL('file:///path/to/file').isValid).toBe(false);
  });

  test('validates URLs without protocol when not required', () => {
    expect(validateURL('example.com', false).isValid).toBe(true);
    expect(validateURL('sub.example.com', false).isValid).toBe(true);
  });

  test('rejects invalid URL formats', () => {
    expect(validateURL('').isValid).toBe(false);
    expect(validateURL('not a url').isValid).toBe(false);
  });
});

describe('String Length Validation', () => {
  test('validates strings within length bounds', () => {
    expect(validateLength('hello', 3, 10).isValid).toBe(true);
    expect(validateLength('test', 4, 4).isValid).toBe(true);
  });

  test('rejects strings outside length bounds', () => {
    expect(validateLength('hi', 3, 10).isValid).toBe(false);
    expect(validateLength('this is too long', 3, 10).isValid).toBe(false);
  });

  test('provides custom field names in error messages', () => {
    const result = validateLength('hi', 3, 10, 'Username');
    expect(result.error).toContain('Username');
  });
});

describe('Required Field Validation', () => {
  test('accepts valid values', () => {
    expect(validateRequired('test').isValid).toBe(true);
    expect(validateRequired(0).isValid).toBe(true);
    expect(validateRequired(false).isValid).toBe(true);
    expect(validateRequired([]).isValid).toBe(true);
  });

  test('rejects empty values', () => {
    expect(validateRequired('').isValid).toBe(false);
    expect(validateRequired('   ').isValid).toBe(false);
    expect(validateRequired(null).isValid).toBe(false);
    expect(validateRequired(undefined).isValid).toBe(false);
  });
});

describe('Number Range Validation', () => {
  test('validates numbers within range', () => {
    expect(validateNumberRange(5, 1, 10).isValid).toBe(true);
    expect(validateNumberRange(1, 1, 10).isValid).toBe(true);
    expect(validateNumberRange(10, 1, 10).isValid).toBe(true);
  });

  test('rejects numbers outside range', () => {
    expect(validateNumberRange(0, 1, 10).isValid).toBe(false);
    expect(validateNumberRange(11, 1, 10).isValid).toBe(false);
  });

  test('rejects non-numbers', () => {
    expect(validateNumberRange(NaN, 1, 10).isValid).toBe(false);
    expect(validateNumberRange('5' as any, 1, 10).isValid).toBe(false);
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(validatePassword('Test123!@#').isValid).toBe(true);
    expect(validatePassword('SecureP@ssw0rd').isValid).toBe(true);
  });

  test('rejects weak passwords', () => {
    expect(validatePassword('short').isValid).toBe(false);
    expect(validatePassword('').isValid).toBe(false);
    expect(validatePassword('alllowercase123!').isValid).toBe(false);
    expect(validatePassword('ALLUPPERCASE123!').isValid).toBe(false);
    expect(validatePassword('NoNumbers!').isValid).toBe(false);
    expect(validatePassword('NoSpecialChar123').isValid).toBe(false);
  });

  test('rejects passwords that are too long', () => {
    const longPassword = 'A'.repeat(129) + 'a1!';
    expect(validatePassword(longPassword).isValid).toBe(false);
  });
});

describe('HTML Sanitization', () => {
  test('sanitizes HTML special characters', () => {
    expect(sanitizeHTML('<script>alert("xss")</script>'))
      .toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
    
    expect(sanitizeHTML('Test & <strong>bold</strong>'))
      .toBe('Test &amp; &lt;strong&gt;bold&lt;&#x2F;strong&gt;');
  });

  test('handles empty and non-string inputs', () => {
    expect(sanitizeHTML('')).toBe('');
    expect(sanitizeHTML(null as any)).toBe('');
    expect(sanitizeHTML(undefined as any)).toBe('');
  });
});

describe('Input Sanitization', () => {
  test('sanitizes and trims user input', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
    expect(sanitizeInput('test\x00input')).toBe('testinput');
  });

  test('enforces maximum length', () => {
    const longInput = 'a'.repeat(2000);
    const result = sanitizeInput(longInput, 100);
    expect(result?.length).toBe(100);
  });

  test('returns null for invalid input', () => {
    expect(sanitizeInput('')).toBe(null);
    expect(sanitizeInput(null as any)).toBe(null);
    expect(sanitizeInput('   ')).toBe(null);
  });
});

describe('Date Validation', () => {
  test('validates correct date formats', () => {
    expect(validateDate('2025-10-08').isValid).toBe(true);
    expect(validateDate('2024-01-01').isValid).toBe(true);
  });

  test('rejects invalid date formats', () => {
    expect(validateDate('').isValid).toBe(false);
    expect(validateDate('10/08/2025').isValid).toBe(false);
    expect(validateDate('2025-13-01').isValid).toBe(false);
    expect(validateDate('2025-02-30').isValid).toBe(false);
    expect(validateDate('invalid').isValid).toBe(false);
  });
});

describe('Credit Card Validation', () => {
  test('validates correct card numbers (Luhn algorithm)', () => {
    // Visa test number
    expect(validateCreditCard('4532015112830366').isValid).toBe(true);
    // MasterCard test number
    expect(validateCreditCard('5425233430109903').isValid).toBe(true);
    // Formatted card number
    expect(validateCreditCard('4532-0151-1283-0366').isValid).toBe(true);
  });

  test('rejects invalid card numbers', () => {
    expect(validateCreditCard('').isValid).toBe(false);
    expect(validateCreditCard('1234567890123456').isValid).toBe(false);
    expect(validateCreditCard('123').isValid).toBe(false);
  });
});

describe('JSON Validation', () => {
  test('validates correct JSON strings', () => {
    expect(validateJSON('{}').isValid).toBe(true);
    expect(validateJSON('[]').isValid).toBe(true);
    expect(validateJSON('{"key":"value"}').isValid).toBe(true);
    expect(validateJSON('[1,2,3]').isValid).toBe(true);
  });

  test('rejects invalid JSON strings', () => {
    expect(validateJSON('').isValid).toBe(false);
    expect(validateJSON('{invalid}').isValid).toBe(false);
    expect(validateJSON('undefined').isValid).toBe(false);
  });
});

describe('Composite Validation', () => {
  test('combines multiple validators successfully', () => {
    const validators = [
      (val: unknown) => validateRequired(val, 'Test'),
      (val: unknown) => validateLength(val as string, 5, 20, 'Test'),
    ];

    expect(validateComposite('hello world', validators).isValid).toBe(true);
  });

  test('fails on first invalid validator', () => {
    const validators = [
      (val: unknown) => validateRequired(val, 'Test'),
      (val: unknown) => validateLength(val as string, 10, 20, 'Test'),
    ];

    const result = validateComposite('short', validators);
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('at least 10');
  });
});

describe('Async Validation', () => {
  test('handles successful async validation', async () => {
    const asyncValidator = async (val: unknown) => {
      return new Promise<any>((resolve) => {
        setTimeout(() => resolve({ isValid: true }), 10);
      });
    };

    const result = await validateAsync(asyncValidator, 'test');
    expect(result.isValid).toBe(true);
  });

  test('handles async validation errors', async () => {
    const asyncValidator = async (val: unknown) => {
      throw new Error('Validation failed');
    };

    const result = await validateAsync(asyncValidator, 'test');
    expect(result.isValid).toBe(false);
    expect(result.error).toContain('Validation failed');
  });
});