import React from 'react';
/**;
 * Comprehensive validation utilities for forms and data;
 * Provides all validation functions expected by tests;
 */;
export interface ValidationResult {isValid: boolean,}
  error?: string;
  errors?: string[],}export interface ValidationResult {/* TODO: Fix JSX expression */,}}}
/**;
 * Email validation with length check;
 */;
export function validateEmail(email: string): ValidationResult {,}
    ,
  if (!email || email.length > 254) ,
  }
    return { isValid: false, error: 'Email is too long' }
export function validateEmail(emai);
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.trim());
return {isValid,;}
    error: isValid ? undefined : 'Invalid email format',}return {/* TODO: Fix JSX expression */,}}}

}
/**;
 * URL validation;
 */;
export function validateURL(url: string): ValidationResult {,}
    ,
  if (!url || url.trim() === '') ,
  }
    return { isValid: false, error: 'URL is required' }
  }
try {
    const urlObj = new URL(url);
    const isValid = const isValid = const isValid = urlObj.protocol === 'http: ' || urlObj.protocol === 'https:',;
    return {,;

    }
  }
if (value.<<<length>max</length></length>) {
    return;
      isValid: false,
  }
      error: `${fieldName} must be no more than ${max} characters long`;
    }
  }
return {isValid: true ,}}export function validateLength(valu,;)

  e: string,
  mi,
  n: number,
  ma,
  x: number,)
  fieldNam,)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */,}}r: `${fieldName,}must be at least ${min}characters long`;
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */,}`;
  r: `${fieldName,}must be no more than ${max}characters long`;
    }
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
/**;
 * Password validation;
 */;
export function validatePassword(password: string): ValidationResult {,}
    ,
  if (!password || password.length < 8) ,
  }
if (password.length > 128) {/* TODO: Fix JSX expression */,}r: 'Password is too long' ,}
  }
const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{]/.test(password);
if (!hasUpperCase) }
    return { isValid: false, error: 'Password must contain at least one uppercase letter' }
  }
if (!hasLowerCase) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one lowercase letter' ,}
  }
if (!hasNumbers) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one number' ,}
  }
if (!hasSpecialChar) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one special character' ,}
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
/**;
 * Required field validation;
 */;
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {,}
    ,
  if (value === null || value === undefined) ,
  }
    return { isValid: false, error: `$fieldName} is required` }
  }
if (typeof value === 'string' && value.trim() === '') {}
    return { isValid: false, error: `$fieldName} is required` }
  }
return {isValid: true ,}}export function validateRequired(valu,;)

}
/**;
 * JSON validation;
 */;
export function validateJSON(jsonString: string): ValidationResult {,}
    ,
  if (!jsonString || jsonString.trim() === '') ,
  }
try {/* TODO: Fix JSX expression */,}}d: true ,}
  } catch {/* TODO: Fix JSX expression */,}}r: 'Invalid JSON format' ,}
  }
}
/**;
 * HTML sanitization;
 */;
export function sanitizeHTML(html: string): string {,}
    if (!html) return '',
,
  return html;
    .replace(/&/g, '&amp;');
    .replace(/</g, '&lt;');
    .replace(/>/g, '&gt;');
    .replace(/"/g, '&quot;');
    .replace(/'/g, '&#x27;');
    .replace(/\//g, '&#x2F;');
export function sanitizeHTML(htm)}l: string): string {/* TODO: Fix JSX expression */,}}}
/**;
 * Composite validation;
 */;
export function validateComposite(value: unknown),
      validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
    for (const validator of validators) {
    const result = const result = const result = validator(value),;
    if (!result.isValid) {,;
      return result;
export function validateComposite()

