// dataValidator utility functions

export interface DataValidatorConfig {
  enabled: boolean;
}

export class DataValidator {
  private config: DataValidatorConfig;

  constructor(config: Partial<DataValidatorConfig> = {}) {
    this.config = {
      enabled: true,
      ...config
    };
  }

  // Utility methods can be added here
  public isEnabled(): boolean {
    return this.config.enabled;
  }
export const dataValidator = new DataValidator();
export default dataValidator;
  return {isValid,;}
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    isValid,
    error: isValid ? undefined : 'Invalid email format',;';
export function validateURL(ur,;)
  l: string, requireProtoco);
  l: boolean = true): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'URL is required' ,}'
  }
try {// If protocol is not required, add http: // prefix for validation;,}}const urlToValidate = requireProtocol ? url : `http: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ?;
      (parsed.protocol === 'http: ' || parsed.protocol === 'https:') :,'
      true,
      isValid;
      error: isValid ? undefined : 'Invalid URL format or protocol',}try {/* TODO: Fix JSX expression */,}}p: //${url,}`;';
const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ?;
      (parsed.protocol === 'htt,;'
  p: ' || parsed.protocol === 'http),'
  s: ') :,'
  p: ' || parsed.protocol === 'http)'
  s:') :'
      true,
  return {isValid,;}
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    isValid,
    error: isValid ? undefined : 'Invalid phone number format',;';
export function validateStringLength(valu,;)
  e: string, mi);
  n: number, max?: number): boolean {/* TODO: Fix JSX expression */,}}
  return value.length >= min;
}
/**;
 * Validate number range;
 */;
export function validateNumberRange(value: number, min: number, max: number): boolean {,}
    ,
  return value >= min && value <= max;
export function validateNumberRange(valu,;)
  e: number, mi,;
  n: number, ma)}x: number): boolean {/* TODO: Fix JSX expression */,}}
  n: number, ma)
  }
  x: number): boolean {/* TODO: Fix JSX expression */}
/**;
 * Validate credit card number (basic Luhn algorithm);
 */;
export function validateCreditCard(cardNumber: string): boolean {,}
    ,;
const cleaned = cardNumber.replace(/\s/g, '')'
  if (!/^\d+$/.test(cleaned)) return false
  if (cleaned.length < 13 || cleaned.length > 19) return false;
let sum = 0;
let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {;
let digit = parseInt(cleaned[i], 10)
    if (isEven) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      digit *= 2;
      if (digit > 9) digit -= 9;
export function validateCreditCard(cardNumbe)}r: string): boolean {/* TODO: Fix JSX expression */,}}
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0
}
/**;
 * Validate date;
 */;
export function validateDate(value: unknown): boolean {,}
    ,
  if (value instanceof Date) {,
    return !isNaN(value.getTime());
export function validateDate(valu)}e: unknown): boolean {/* TODO: Fix JSX expression */,}}
  if (typeof value === 'string') {/* TODO: Fix JSX expression */,}}'
  return false;
}
/**;
 * Validate date range;
 */;
export function validateDateRange(dat);
  e: Date, min?: Date, max?: Date): boolean {/* TODO: Fix JSX expression */,}}
/**;
 * Sanitize HTML to prevent XSS;
 */;
export function sanitizeHTML(html: string): string {,}
    ,
  // Remove script tags;
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');'
  // Remove event handlers;
  clean = clean.replace(/on\w+="[^"/gi, '');'"
  clean = clean.replace(/on\w+='[^']*'/gi, ');''
  return clean;
export function sanitizeHTML(htm)}l: string): string {/* TODO: Fix JSX expression */,}}
/**;
 * Create custom validator;
 */;
export function createCustomValidator<T>(;
  validator: (value: T) => boolean,
  message: string,
): (value: T) => {isValid: boolean, errors: string[] ,}{
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (value: T) => {,;
const isValid = validator(value),
      isValid;
      errors: isValid ? [] : [message],;
export function createCustomValidator</T>;
<T>(validato,
  r: (valu),
  e: T) => boolean,
  messag,
  e: string,
function validateFieldRule(valu,;)
  e: unknown, rul)}e: FieldRule): boolean {/* TODO: Fix JSX expression */,}}
  e: unknown, rul)
  }
  e: FieldRule): boolean {/* TODO: Fix JSX expression */}
}
): ValidationResult {,}}const errors: Record<string, string[]> = {}for (const field in rules) {const value = data[field];
const fieldRules = rules[field] || []
): ValidationResult {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
  }
  const errors: Record</T>
<string, string[]> = {}
  for (const field in rules) {;
const value = data[field];
    const fieldRules = rules[field] || [];
    const fieldErrors: string[] = [],
    for (const rule of fieldRules) {,
      if (!validateFieldRule(value, rule)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        fieldErrors.push(rule.message)}
    }
      errorTracking.trackError()}new ValidationError(`Validation failed for ${field)}`, field, fieldErrors),;
        {category: ErrorCategory.Validation;,
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
    category: ErrorCategory.Validation
          severity: ErrorSeverity.Low,
          context: {,
            field
            errors: fieldErrors,;
export function validateForm</string>;
<T extends Record<string, unknown>>(dat,
  a: T,
  rule,;
  s: ValidationRules,)}): ValidationResult {/* TODO: Fix JSX expression */,}}errors: Record<string, string[]> = {}for (const field in rules) {/* TODO: Fix JSX expression */,}
    }
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */,}`;
        new ValidationError(`Validation failed for ${field)}`, field, fieldErrors),;
        {/* TODO: Fix JSX expression */,}
        } )
    }
  return {isValid: Object.keys(errors).length === 0,}
    errors;}return {/* TODO: Fix JSX expression */,}}
}
export const ValidationRulesBuilder = {/* TODO: Fix JSX expression */,},
    message: 'This field is required',}),;'
  email: (): ValidationRule<string> => ({,
    ,
    validate: (value: string) => validateEmail(value),}message: 'Please enter a valid email address',}),;'
  url: (): ValidationRule<string> => ({,
    ,
    validate: (value: string) => validateURL(value),}message: 'Please enter a valid URL',}),;'
  minLength: (min: number): ValidationRule<string> => ({,
    ,
    validate: (value: string) => value.length >= min;,}message: `Must be at least ${min,}characters long`;
  }),;
  maxLength: (max: number): ValidationRule<string> => ({,
    ,
    validate: (value: string) => value.length <= max;,}message: `Must be no more than ${max,}characters long`;
  }),;
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({,
    ,
    validate: (value: string) => pattern.test(value),
    message;}}),;
  range: (min: number, max: number): ValidationRule<number> => ({,
    ,
    validate: (value: number) => validateNumberRange(value, min, max),}message: `Must be between ${min,}and ${max}`;
  }),;
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({,;
export const ValidationRulesBuilder = {/* TODO: Fix JSX expression */},
    message: 'This field is required'}),'
  email: (): ValidationRule</string>
<string> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: (value: string) => validateEmail(value),
  }
    message: 'Please enter a valid email address'}),'
  url: (): ValidationRule</string>
<string> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: (value: string) => validateURL(value),
  }
    message: 'Please enter a valid URL'}),'
  minLength: (min: number): ValidationRule</string>
<string> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: (value: string) => value.length >= min
  }
    message: `Must be at least ${min} characters long`
  }),
  maxLength: (max: number): ValidationRule</string>
<string> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: (value: string) => value.length <= max
  }
    message: `Must be no more than ${max} characters long`
  }),
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ()
    validate: (value: string) => pattern.test(value),
    message
  }
  }),
  range: (min: number, max: number): ValidationRule</string>
<number> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: (value: number) => validateNumberRange(value, min, max),
  }
    message: `Must be between ${min} and ${max}`
  }),
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ,
    validate: validator,
    message;}})
}
class DataValidator {private static instance: DataValidator,}
    messag,;
  e: 'This field is required',}}),;'
  emai,;
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),;
  ur,;
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),;
  minLengt,;
  h: (mi),
  n: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`;
  e: `Must be at least ${min,}characters long`);
  }),;
  maxLengt,;
  h: (ma),
  x: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */,}`;
  e: `Must be no more than ${max,}characters long`);
  }),;
  patter,;
  n: (patter,
  n: RegExp, messag);
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */,})
  }),;
  rang,;
  e: (mi,
  n: number, ma);
  x: number): ValidationRule<number> => ({/* TODO: Fix JSX expression */,}`;
  e: `Must be between ${min,}and ${max}`);
  }),;
  custo,;
  m: <T>(validato,
  r: (valu),
  e: T) => boolean, messag,;
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */,})
class DataValidator {
  // TODO: Add properties
}
  // TODO: Add properties
}
    private static instance: DataValidator,
    messag,
  e: 'This field is required''
  }
  }),
  emai,
  l: (): ValidationRule</T>
<string> => ({/* TODO: Fix JSX expression */})
  }),
  ur,
  l: (): ValidationRule</string>
<string> => ({/* TODO: Fix JSX expression */})
  }),
  minLengt,
  h: (mi),
  n: number): ValidationRule</string>
<string> => ({/* TODO: Fix JSX expression */}`
  }),
  emai,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
  }),
  ur,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
  }),
  minLengt,
  h: (mi),
  n: number): ValidationRule<string> => ()
  e: `Must be at least ${min} characters long`)
  }),
  maxLengt,
  h: (ma),
  x: number): ValidationRule</string>
<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be no more than ${max} characters long`)
  }),
  patter,
  n: ()
  n: RegExp, messag)
  e: string): ValidationRule</string>
<string> => ({/* TODO: Fix JSX expression */})
  }),
  rang,
  e: (mi,
  n: number, ma)
  x: number): ValidationRule</string>
<number> => ({/* TODO: Fix JSX expression */}`
  e: `Must be between ${min} and ${max}`)
  }),
  custo,
  m: </number>
<T>(validato,
  r: (valu),
  e: T) => boolean, messag,
  e: string): ValidationRule</T>
<T> => ({/* TODO: Fix JSX expression */})
  })
}
// Legacy class-based API for backward compatibility
  h: (mi)
  n: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be at least ${min} characters long`)
  }),
  maxLengt,
  h: (ma)
  x: number): ValidationRule<string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be no more than ${max} characters long`)
  }),
  patter,
  n: (patter,
  n: RegExp, messag)
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */})
  }),
  rang,
  e: (mi,
  n: number, ma)
  x: number): ValidationRule<number> => ({/* TODO: Fix JSX expression */}`
  e: `Must be between ${min} and ${max}`)
  }),
  custo,
  m: <T>(validato,
  r: (valu)
  e: T) => boolean, messag,
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */})
  })
}
  matchesPattern(valu,;)
  e: string, patter)}n: RegExp): boolean {/* TODO: Fix JSX expression */,}}
  e: string, patter)
  }
  n: RegExp): boolean {/* TODO: Fix JSX expression */}
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
export default DataValidator;
// Additional validation functions for tests;
export function validateLength(value: string, min: number, max?: number, fieldName: string = 'Field'): {isValid: boolean, error?: string}{'
    if (max !== undefined) {const isValid = value.length >= min && value.length <= max;
    return {isValid,}}error: isValid ? undefined : `${fieldName,}must be between ${min}and ${max}characters`;
export function validateLength(valu,;)
  e: string, mi,;
    if (max !== undefined) {;
const isValid = value.length >= min && value.length <= max
    return {
  // TODO: Add properties
}
  // TODO: Add properties
}
      isValid,
  }
      error: isValid ? undefined : `${fieldName} must be between ${min} and ${max} characters`;
export function validateLength(valu,
  e: string, mi,
  n: number, max?: number, fieldNam);
  e: string = 'Field'): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}`;'
  r: isValid ? undefined : `${fieldName,}must be between ${min}and ${max}characters`;
    }
  const isValid = value.length >= min;
  return {/* TODO: Fix JSX expression */,}}`;
  r: isValid ? undefined : `${fieldName,}must be at least ${min}characters`;
  }
export function validateRequired(valu,;)
  e: unknown, fieldNam);
  e: string = 'Field'): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}`;'
  r: `${fieldName,}is required` }
  if (typeof value === 'string' && value.trim() === ') return {/* TODO: Fix JSX expression */,}}`;''
  r: `${fieldName,}is required` }
  // Not,;
  e: string = 'Field'): {/* TODO: Fix JSX expression */}'
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  if (typeof value === 'string' && value.trim() === ') return {/* TODO: Fix JSX expression */}`''
  r: `${fieldName} is required` }
  // Not,
  e: Empty arrays are considered valid for required fields (they exist, just empty);
  return {/* TODO: Fix JSX expression */,}}d: true ,}
export function validateNumberRange(valu,;)
  e: number, mi,;
  n: number, ma);
  x: number): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'Value must be a valid number' ,}'
  }
  const isValid = value >= min && value <= max;
  return {/* TODO: Fix JSX expression */,}}`;
  r: isValid ? undefined : `Value must be between ${min,}and ${max}`;
  }
export function validatePassword(passwor);
  d: string): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'Password is required' ,}'
  if (password.length < 8) return {/* TODO: Fix JSX expression */,}}r: 'Password must be at least 8 characters' ,}'
  if (password.length > 128) return {/* TODO: Fix JSX expression */,}}r: 'Password must be less than 128 characters' ,}'
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one uppercase letter' ,}'
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one lowercase letter' ,}'
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one number' ,}'
  if (!/[!@#$%^&*(),.?"
  return {/* TODO: Fix JSX expression */,}}d: true ,}
export function sanitizeHTML(html: string): string {,}
    if (!html || typeof html !== 'string') return ',;'';
let clean = html.replace(/&/g, '&amp;');}</>'
  clean = clean.replace(/</g, '&lt;');'
  clean = clean.replace(/>/g, '&gt;');'
  clean = clean.replace(/"/g, '&quot;');'"`

// Export default instance
export const dataValidator = new DataValidator();
