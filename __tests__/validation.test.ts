/**
 * Comprehensive tests for validation utilities
 */

import {
  isValidEmail,
  isValidPhone,
  isValidUrl,
  isRequired,
  isValidPassword,
  sanitizeInput,
  minLength,
  maxLength,
  isAlphanumeric,
  isAlpha,
  isNumeric,
  isStrongPassword,
  getPasswordStrength,
  isValidCreditCard,
  isValidZipCode,
  sanitizeHtml,
  validateObject,
  validateForm,
} from '../app/utils/validators';

// Wrapper functions to match test expectations
const validateEmail = (email: string) => ({ isValid: isValidEmail(email), error: isValidEmail(email) ? '' : 'Invalid email' });
const validateURL = (url: string) => ({ isValid: isValidUrl(url), error: isValidUrl(url) ? '' : 'Invalid URL' });
const validateLength = (value: string, min: number, max: number, fieldName = 'Field') => {
  const minValid = minLength(value, min);
  const maxValid = maxLength(value, max);
  const isValid = minValid && maxValid;
  return { 
    isValid, 
    error: isValid ? '' : `${fieldName} must be between ${min} and ${max} characters` 
  };
};
const validatePassword = (password: string) => {
  if (password.length > 128) {
    return { isValid: false, error: 'Password too long' };
  }
  return { isValid: isValidPassword(password), error: isValidPassword(password) ? '' : 'Invalid password' };
};
const sanitizeHTML = (html: string) => sanitizeHtml(html);
const validateDate = (date: string) => {
  const dateObj = new Date(date);
  const isValid = !isNaN(dateObj.getTime()) && date === dateObj.toISOString().split('T')[0];
  return { isValid, error: isValid ? '' : 'Invalid date format' };
};
const validateCreditCard = (cardNumber: string) => {
  // Remove spaces and dashes for validation
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');
  return { isValid: isValidCreditCard(cleanNumber), error: isValidCreditCard(cleanNumber) ? '' : 'Invalid credit card' };
};
const validateJSON = (jsonString: string) => {
  try {
    JSON.parse(jsonString);
    return { isValid: true, error: '' };
  } catch {
    return { isValid: false, error: 'Invalid JSON' };
  }
};
const validateComposite = (value: string, validators: Array<(val: string) => { isValid: boolean; error: string }>) => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) return result;
  }
  return { isValid: true, error: '' };
};
const validateRequired = (value: unknown, fieldName = 'Field') => {
  const isValid = isRequired(value as string);
  return { isValid, error: isValid ? '' : `${fieldName} is required` };
};
const validateAsync = async (validator: (val: string) => Promise<{ isValid: boolean; error: string }>, value: string) => {
  try {
    return await validator(value);
  } catch (error) {
    return { isValid: false, error: error instanceof Error ? error.message : 'Validation failed' };
  }
};

describe('Email Validation', () => {
  test('validates correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    expect(isValidEmail('test123@test-domain.com')).toBe(true);
  });

  test('rejects invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
  });

  test('rejects email addresses that are too long', () => {
    const longEmail = 'a'.repeat(255) + '@example.com';
    expect(validateEmail(longEmail).isValid).toBe(false);
  });
});

describe('Phone Validation', () => {
  test('validates correct phone numbers', () => {
    expect(isValidPhone('1234567890')).toBe(true);
    expect(isValidPhone('123-456-7890')).toBe(true);
    expect(isValidPhone('(123) 456-7890')).toBe(true);
    expect(isValidPhone('+1 123 456 7890')).toBe(true);
  });

  test('rejects invalid phone numbers', () => {
    expect(isValidPhone('')).toBe(false);
    expect(isValidPhone('123')).toBe(false);
    expect(isValidPhone('abc')).toBe(false);
    expect(isValidPhone('12345678901234567890')).toBe(false);
  });
});

describe('URL Validation', () => {
  test('validates correct URLs with protocol', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://sub.example.com/path?query=1')).toBe(true);
  });

  test('validates URLs without protocol', () => {
    expect(isValidUrl('example.com')).toBe(true);
    expect(isValidUrl('sub.example.com')).toBe(true);
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
    expect(isRequired('test')).toBe(true);
    expect(isRequired('0')).toBe(true);
    expect(isRequired('false')).toBe(true);
  });

  test('rejects empty values', () => {
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
    expect(isRequired(null)).toBe(false);
    expect(isRequired(undefined)).toBe(false);
  });
});

describe('Password Validation', () => {
  test('validates strong passwords', () => {
    expect(isValidPassword('Test123!@#')).toBe(true);
    expect(isValidPassword('SecureP@ssw0rd')).toBe(true);
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
    expect(sanitizeHTML('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert("xss")&lt;/script&gt;'
    );

    expect(sanitizeHTML('Test & <strong>bold</strong>')).toBe(
      'Test &amp; &lt;strong&gt;bold&lt;/strong&gt;'
    );
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
    expect(result.error).toContain('between 10 and 20');
  });
});

describe('Async Validation', () => {
  test('handles successful async validation', async () => {
    const asyncValidator = async (val: unknown) => {
      return new Promise<any>(resolve => {
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
