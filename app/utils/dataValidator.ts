  return {
    isValid,
    error: isValid ? undefined : 'Invalid email format',
  l: string, requireProtoco);
  l: boolean = true): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'URL is required' ,}
  }
try {// If protocol is not required, add http: // prefix for validation;,}}const urlToValidate = requireProtocol ? url : `http: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ?;
      (parsed.protocol === 'http: ' || parsed.protocol === 'https:') :,
export function validateEmail(emai)
  }
  l: string): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'Email is required' }
  if (email.length > 254) return {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email)
  return {/* TODO: Fix JSX expression */}
  }
}
/**
 * Validate URL
 */
export function validateURL()
  l: string, requireProtoco)
  l: boolean = true): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'URL is required' }
  }
try {
    // If protocol is not required, add http: // prefix for validation
  }
    const urlToValidate = requireProtocol ? url : `http://${url}`
    const parsed = new URL(urlToValidate)
    const isValid = requireProtocol ?
      (parsed.protocol === 'http: ' || parsed.protocol === 'https:') :
      true,
      isValid;
      error: isValid ? undefined : 'Invalid URL format or protocol',}try {/* TODO: Fix JSX expression */,}}p: //${url,}`;
    const parsed = new URL(urlToValidate);
    const isValid = requireProtocol ?;
  p: ' || parsed.protocol === 'http)
  s:') :
      true,
  return {
    isValid,
    error: isValid ? undefined : 'Invalid phone number format',
  e: string, mi);
  n: number, max?: number): boolean {/* TODO: Fix JSX expression */,}}}
  return value.length >= min;
}
/**;
 * Validate number range;
 */;
export function validateNumberRange(value: number, min: number, max: number): boolean {,}
    ,
  return value >= min && value <= max;
  n: number, ma)
  }
  x: number): boolean {/* TODO: Fix JSX expression */}
}
/**;
 * Validate credit card number (basic Luhn algorithm);
 */;
export function validateCreditCard(cardNumber: string): boolean {,}
/**
 * Validate credit card number (basic Luhn algorithm)
 */
export function validateCreditCard(cardNumber: string): boolean {
    ,
  const cleaned = cardNumber.replace(/\s/g, '')
  if (!/^\d+$/.test(cleaned)) return false
  if (cleaned.length < 13 || cleaned.length > 19) return false
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10)
    if (isEven) {
  }
  return sum % 10 === 0
}
    const isValid = validator(value),
      isValid;
      isValid
      errors: isValid ? [] : [message],
export function createCustomValidator</T><T>(validato,
  r: (valu),
  e: T) => boolean,
  messag,
  e: string,
  e: unknown, rul)
  }
  e: FieldRule): boolean {/* TODO: Fix JSX expression */}
  }
}
): ValidationResult {
    ,
  }
  const errors: Record</T><string, string[]> = {}
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field] || []
    const fieldErrors: string[] = [],
    for (const rule of fieldRules) {,
      if (!validateFieldRule(value, rule)) {
        fieldErrors.push(rule.message)}}
    }
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
    category: ErrorCategory.Validation
          severity: ErrorSeverity.Low,
          context: {,
            field
            errors: fieldErrors,
export function validateForm</string><T extends Record<string, unknown>>(dat,
  a: T,
        });
    }
  }
  return {isValid: Object.keys(errors).length === 0,}
    errors;}return {/* TODO: Fix JSX expression */,}}}
}
export const ValidationRulesBuilder = {/* TODO: Fix JSX expression */},
    message: 'This field is required'}),
  email: (): ValidationRule</string><string> => ({
    ,
    validate: (value: string) =&gt; validateEmail(value),
  }
    message: 'Please enter a valid email address'}),
  url: (): ValidationRule</string><string> => ({
    ,
    validate: (value: string) =&gt; validateURL(value),
  }
    message: 'Please enter a valid URL'}),
  minLength: (min: number): ValidationRule</string><string> => ({
    ,
    validate: (value: string) =&gt; value.length &gt;= min
  }
    message: `Must be at least ${min} characters long`
  }),
  maxLength: (max: number): ValidationRule</string><string> => ({
    ,
    validate: (value: string) =&gt; value.length <= max
  }
    message: `Must be no more than ${max} characters long`
  }),
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ()
    validate: (value: string) => pattern.test(value),
    message
  }
  }),
  range: (min: number, max: number): ValidationRule</string><number> => ({
    ,
    validate: (value: number) =&gt; validateNumberRange(value, min, max),
  }
    message: `Must be between ${min} and ${max}`
  }),
  custom: </number><T>(validator: (value: T) => boolean, message: string): ValidationRule</T><T> => ({
    ,
    validate: validator,
    message;}});
}
class DataValidator {
    private static instance: DataValidator,
    messag,
  e: 'This field is required'
  }
  }),
  emai,
  l: (): ValidationRule</T><string> => ({/* TODO: Fix JSX expression */});
  }),
  ur,
  l: (): ValidationRule</string><string> => ({/* TODO: Fix JSX expression */});
  }),
  minLengt,
  h: (mi),
  n: number): ValidationRule</string><string> => ({/* TODO: Fix JSX expression */}`
  }),
  emai,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */});
  }),
  ur,
  l: (): ValidationRule<string> => ({/* TODO: Fix JSX expression */});
  }),
  minLengt,
  h: (mi),
  n: number): ValidationRule<string> => ()
  e: `Must be at least ${min} characters long`)
  }),
  maxLengt,
  h: (ma),
  x: number): ValidationRule</string><string> => ({/* TODO: Fix JSX expression */}`
  e: `Must be no more than ${max} characters long`)
  }),
  patter,
  n: ()
  n: RegExp, messag)
  e: string): ValidationRule</string><string> => ({/* TODO: Fix JSX expression */});
  }),
  rang,
  e: (mi,
  n: number, ma)
  x: number): ValidationRule</string><number> => ({/* TODO: Fix JSX expression */}`
  e: `Must be between ${min} and ${max}`)
  }),
  custo,
  m: </number><T>(validato,
  r: (valu),
  e: T) => boolean, messag,
  e: string): ValidationRule</T><T> => ({/* TODO: Fix JSX expression */});
  });
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
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */});
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
  e: string): ValidationRule<T> => ({/* TODO: Fix JSX expression */});
  });
}
  e: string, patter)
  }
  n: RegExp): boolean {/* TODO: Fix JSX expression */}
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
export default DataValidator;
// Additional validation functions for tests;
    if (max !== undefined) {
    const isValid = value.length >= min && value.length <= max
    return {
      isValid,
  }
  n: number, max?: number, fieldNam);
  e: string = 'Field'): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}`;
  r: isValid ? undefined : `${fieldName,}must be between ${min}and ${max}characters`;
    }
  }
  const isValid = value.length >= min;
  return {/* TODO: Fix JSX expression */,}}`;
  r: isValid ? undefined : `${fieldName,}must be at least ${min}characters`;
  }
}
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  if (typeof value === 'string' && value.trim() === '') return {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  // Not,
  e: Empty arrays are considered valid for required fields (they exist, just empty);
  return {/* TODO: Fix JSX expression */,}}d: true ,}
}
  n: number, ma);
  x: number): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'Value must be a valid number' ,}
  }
  const isValid = value >= min && value <= max;
  return {/* TODO: Fix JSX expression */,}}`;
  r: isValid ? undefined : `Value must be between ${min,}and ${max}`;
  }
}
export function validatePassword(passwor);
  d: string): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'Password is required' ,}
  if (password.length < 8) return {/* TODO: Fix JSX expression */,}}r: 'Password must be at least 8 characters' ,}
  if (password.length > 128) return {/* TODO: Fix JSX expression */,}}r: 'Password must be less than 128 characters' ,}
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one uppercase letter' ,}
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one lowercase letter' ,}
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */,}}r: 'Password must contain at least one number' ,}
  if (!/[!@#$%^&*(),.?":{}|<>{]/.test(password)) return {/* TODO: Fix JSX expression */,</>}}r: 'Password must contain at least one special character' ,}
  return {/* TODO: Fix JSX expression */,}}d: true ,}
  e: Empty arrays are considered valid for required fields (they exist, just empty)
  return {/* TODO: Fix JSX expression */}
  d: true }
}
export function validateNumberRange()
  n: number, ma)
  x: number): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'Value must be a valid number' }
  }
  const isValid = value >= min && value <= max
  return {/* TODO: Fix JSX expression */}`
  r: isValid ? undefined : `Value must be between ${min} and ${max}`
  }
}
export function validatePassword(passwor)
  d: string): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'Password is required' }
  if (password.length < 8) return {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters' }
  if (password.length > 128) return {/* TODO: Fix JSX expression */}
  r: 'Password must be less than 128 characters' }
  if (!/[A-Z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one uppercase letter' }
  if (!/[a-z]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one lowercase letter' }
  if (!/\d/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one number' }
  if (!/[!@#$%^&*(),.?":{}|<>{]/.test(password)) return {/* TODO: Fix JSX expression */}
  r: 'Password must contain at least one special character' }
  return {/* TODO: Fix JSX expression */}
  d: true }
}
export function sanitizeHTML(html: string): string {,}
    if (!html || typeof html !== 'string') return '',
  clean = clean.replace(/</g, '&lt;');
  clean = clean.replace(/>/g, '&gt;');
  clean = clean.replace(/"/g, '&quot;');
  clean = clean.replace(/'/g, '&#x27;');
  clean = clean.replace(/\//g, '&#x2 F;');
return clean;
  let clean = html.replace(/&/g, '&amp;');}</>clean = clean.replace(/</g, '&lt;')
  clean = clean.replace(/>/g, '&gt;')
  clean = clean.replace(/"/g, '&quot;')
  clean = clean.replace(/'/g, '&#x27;')
  clean = clean.replace(/\//g, '&#x2 F;')
return clean
}
export function sanitizeInput(input: string, maxLength: number = 1000): string | null {,}
    if (!input || typeof input !== 'string') return null;
  if (input.trim() === '') return null,
,
  // Remove null bytes and control characters
  let clean = input.replace(/\x00/g, '').replace(/[\x01-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
// Trim and limit length
  clean = clean.trim()
  if (clean.<<<length>maxLength</length></length>) {
export function sanitizeHTML(htm)
  }
  l: string): string {/* TODO: Fix JSX expression */}
}
  t: string, maxLengt);
  h: number = 1000): string | null {/* TODO: Fix JSX expression */,}}}
return clean || null;
}
export function validateDate(dateString: string): {isValid: boolean, error?: string}{}
  if (!dateString) return {isValid: false, error: 'Date is required' ,}}// Check format first;
  if(!dateString.match(/^\d {4)}}-\d {2}}-\d {2}}$/)) {}return {isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' ,}}export function validateDate(dateStrin);
  g: string): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}r: 'Date is required' ,}
// Check format first;
  if(!dateString.match(/^\d {4)}}-\d {2}}-\d {2}}$/)) {/* TODO: Fix JSX expression */,}r: 'Invalid date format. Use YYYY-MM-DD' ,}
  }
const date = new Date(dateString);
  const isValid = !isNaN(date.getTime());
// Additional check for invalid dates like 2025-02-30;
  if (isValid) {const [year, month, day] = dateString.split('-').map(Number);
    const actualDate = new Date(year, month - 1, day);
    const isRealDate = actualDate.getFullYear() === year &&;
                      actualDate.getMonth() === month - 1 &&;
                      actualDate.getDate() === day;
    return {isValid: isRealDate,}}error: isRealDate ? undefined : 'Invalid date',}
export function sanitizeInput()
  t: string, maxLengt)
  h: number = 1000): string | null {/* TODO: Fix JSX expression */}
  }
return clean || null
}
export function validateDate(dateString: string): { isValid: boolean, error?: string }, {}
  if (!dateString) return { isValid: false, error: 'Date is required' }
// Check format first
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {}
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' }
export function validateDate(dateStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'Date is required' }
// Check format first
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {/* TODO: Fix JSX expression */}
  r: 'Invalid date format. Use YYYY-MM-DD' }
  }
const date = new Date(dateString)
  const isValid = !isNaN(date.getTime())
// Additional check for invalid dates like 2025-02-30
  if (isValid) {
    const [year, month, day] = dateString.split('-').map(Number)
    const actualDate = new Date(year, month - 1, day)
    const isRealDate = actualDate.getFullYear() === year &&
                      actualDate.getMonth() === month - 1 &&
                      actualDate.getDate() === day
    return {
      isValid: isRealDate,
  }
return {isValid: false,}}error: 'Invalid date',}
}
  }
return {/* TODO: Fix JSX expression */,}}}
}
  s: Array<(va),
  l: string) => {/* TODO: Fix JSX expression */,}d: boolean, error?: string }>): {/* TODO: Fix JSX expression */,}d: boolean, error?: string } {/* TODO: Fix JSX expression */,}}
export function validateCreditCard(cardNumbe)
  r: string): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'Card number is required' }
// Remove all non-digit characters (spaces, dashes, etc.)
  const cleaned = cardNumber.replace(/\D/g, '')
  if (!/^\d+$/.test(cleaned)) return {/* TODO: Fix JSX expression */}
  r: 'Card number must contain only digits' }
  if (cleaned.length < 13 || cleaned.length > 19) return {/* TODO: Fix JSX expression */}
  r: 'Card number must be between 13 and 19 digits' }
let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
    }
    sum += digit
    isEven = !isEven
  }
const isValid = sum % 10 === 0
  return {
    isValid,
  }
    error: isValid ? undefined : 'Invalid card number'}
}
export function validateJSON(jsonString: string): { isValid: boolean, error?: string }, {}
  if (!jsonString) return { isValid: false, error: 'JSON string is required' }
try {
    JSON.parse(jsonString)
  }
    return { isValid: true }
  } catch (error) {}
    return { isValid: false, error: 'Invalid JSON format' }
  return {/* TODO: Fix JSX expression */}
  }
}
export function validateJSON(jsonStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' }
try {/* TODO: Fix JSX expression */}
  d: true }
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' }
  }
}
export function validateComposite()
  s: Array<(va),
  l: string) => {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }>): {/* TODO: Fix JSX expression */}
  d: boolean, error?: string }, {/* TODO: Fix JSX expression */}
    }
  }
  return {/* TODO: Fix JSX expression */,}}d: true ,}
}
  r: (valu),
  e: string) => Promise<{/* TODO: Fix JSX expression */}
  d: boolean, error?: string }>, valu,
  e: string): Promise<{/* TODO: Fix JSX expression */}
  d: boolean, error?: string }> {/* TODO: Fix JSX expression */}
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Validation failed' }
  }
}
"`