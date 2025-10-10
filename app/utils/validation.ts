/**;
 * Comprehensive validation utilities for forms and data;
 * Provides all validation functions expected by tests;
 */;
export interface ValidationResult {
    isValid: boolean,
  error?: string;
  errors?: string[],
  }
export interface ValidationResult {/* TODO: Fix JSX expression */}
}
/**;
 * Email validation with length check;
 */;
export function validateEmail(email: string): ValidationResult {
    ,
  if (!email || email.length > 254) {,
  }
    return { isValid: false, error: 'Email is too long' }
export function validateEmail(emai);
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.trim());
return {
    isValid,;
    error: isValid ? undefined : 'Invalid email format',
  }
  return {/* TODO: Fix JSX expression */}
  }
}
/**;
 * URL validation;
 */;
export function validateURL(url: string): ValidationResult {
    ,
  if (!url || url.trim() === '') {,
  }
    return { isValid: false, error: 'URL is required' }
  }
try {
    const urlObj = new URL(url);
    const isValid = urlObj.protocol === 'http: ' || urlObj.protocol === 'https:',
    return {,;
      isValid;
      error: isValid ? undefined : 'Invalid URL format',
export function validateURL(ur)
  }
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'URL is required' }
  }
try {/* TODO: Fix JSX expression */}
    }
  } catch {/* TODO: Fix JSX expression */}
  r: 'Invalid URL format' }
  }
}
/**;
 * String length validation;
 */;
export function validateLength(value: string;);
  min: number)
  max: number)
  fieldName: string = 'Field',
): ValidationResult {
    if (value.length < min) {,;
    return {,;
      isValid: false,
  }
      error: `${fieldName} must be at least ${min} characters long`;
    }
  }
if (value.<<<length>max</length></length>) {
    return {
      isValid: false,
  }
      error: `${fieldName} must be no more than ${max} characters long`;
    }
  }
return { isValid: true }
export function validateLength(valu,;
  e: string,
  mi,;
  n: number,
  ma,;
  x: number,
  fieldNam,;
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */}
  r: `${fieldName} must be at least ${min} characters long`;
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */}`;
  r: `${fieldName} must be no more than ${max} characters long`;
    }
  }
return {/* TODO: Fix JSX expression */}
  d: true }
}
/**;
 * Password validation;
 */;
export function validatePassword(password: string): ValidationResult {
    ,
  if (!password || password.length < 8) {,
  }
    return { isValid: false, error: 'Password must be at least 8 characters long' }
  }
if (password.length > 128) {}
    return { isValid: false, error: 'Password is too long' }
export function validatePassword(passwor);
  d: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters long' }
  }
if (password.length > 128) {/* TODO: Fix JSX expression */}
  r: 'Password is too long' }
  }
const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<> 19) {}
    return { isValid: false, error: 'Credit card number must be between 13 and 19 digits' }
if (cleaned.length < 13 || cleaned.length > 19) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must be between 13 and 19 digits' }
  }
let sum = 0;
  let isEven = false;
for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9
  }
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
      }
    }
    sum += digit;
    isEven = !isEven;
  }
const isValid = sum % 10 === 0;
  return {
    isValid,;
    error: isValid ? undefined : 'Invalid credit card number',
  }
  return {/* TODO: Fix JSX expression */}
  }
}
/**;
 * JSON validation;
 */;
export function validateJSON(jsonString: string): ValidationResult {
    ,
  if (!jsonString || jsonString.trim() === '') {,
  }
    return { isValid: false, error: 'JSON string is required' }
  }
try {
    JSON.parse(jsonString)
  }
    return { isValid: true }
  } catch {}
    return { isValid: false, error: 'Invalid JSON format' }
export function validateJSON(jsonStrin);
  g: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' }
  }
try {/* TODO: Fix JSX expression */}
  d: true }
  } catch {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' }
  }
}
/**;
 * HTML sanitization;
 */;
export function sanitizeHTML(html: string): string {
    if (!html) return '',
,;
  return html;
    .replace(/&/g, '&amp;');
    .replace(/</g, '&lt;');
    .replace(/>/g, '&gt;');
    .replace(/"/g, '&quot;');
    .replace(/'/g, '&#x27;');
    .replace(/\//g, '&#x2F;');
export function sanitizeHTML(htm)
  }
  l: string): string {/* TODO: Fix JSX expression */}
}
/**;
 * Composite validation;
 */;
export function validateComposite(value: unknown)
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
    for (const validator of validators) {
    const result = validator(value),
    if (!result.isValid) {,;
      return result;
export function validateComposite(valu,;
  e: unknown,
  validator,;
  s: Array<(va),
  l: unknown) => ValidationResult>
  }
): ValidationResult {/* TODO: Fix JSX expression */}
    }
  }
  return {/* TODO: Fix JSX expression */}
  d: true }
}
/**;
 * Async validation;
 */;
export async function validateAsync(;
  validator: (val: unknown) => Promise<ValidationResult>
  value: unknown,
): Promise<ValidationResult> {
    ,;
  try {,;
    return await validator(value)
  }
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed',
export async function validateAsync(validato,;
  r: (va),
  l: unknown) => Promise<ValidationResult>,
  valu,;
  e: unknown,
  }
): Promise<ValidationResult> {/* TODO: Fix JSX expression */}
  } catch (error) {/* TODO: Fix JSX expression */}
    }
  }
}
// Re-export existing functions for compatibility;
export {
    isValidEmail,;
  isValidPhone,;
  isValidUrl,;
  isRequired,;
  isValidPassword,;
  sanitizeInput
  }
} from './validators';
export {/* TODO: Fix JSX expression */}
} from './validators';"`;