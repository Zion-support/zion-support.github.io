return {
    isValid,
    error: isValid ? undefined : 'Invalid email format',
  }
  return {/* TODO: Fix JSX expression */}
  }
}
    const isValid = urlObj.protocol === 'http: ' || urlObj.protocol === 'https:',
      isValid
      isValid
      error: isValid ? undefined : 'Invalid URL format',
export function validateURL(ur)}l: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'URL is required' ,}
  }
try {/* TODO: Fix JSX expression */,}}}
  } catch {/* TODO: Fix JSX expression */,}}r: 'Invalid URL format' ,}
  }
}
  fieldName: string = 'Field',
    }
  }
if (value.<<<length>max</length></length>) {return {isValid: false,}}error: `${fieldName,}must be no more than ${max}characters long`
      error: `${fieldName} must be at least ${min} characters long`
    }
  }
if (value.<<<length>max</length></length>) {
    return {
      isValid: false,
  }
      error: `${fieldName} must be no more than ${max} characters long`
    }
  }
  e: string,
  mi,
  n: number,
  ma,
  x: number,
  fieldNam,
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */,}}r: `${fieldName,}must be at least ${min}characters long`
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */,}`
  r: `${fieldName,}must be no more than ${max}characters long`
export function validateLength()
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */}
  r: `${fieldName} must be at least ${min} characters long`
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} must be no more than ${max} characters long`
    }
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
    ,
  if (!password || password.length < 8) {,}return {isValid: false, error: 'Password must be at least 8 characters long' ,}}}
if (password.length > 128) {}return {isValid: false, error: 'Password is too long' ,}}export function validatePassword(passwor)
  d: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'Password must be at least 8 characters long' ,}
  }
  }
if (!hasLowerCase) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one lowercase letter' ,}
  }
if (!hasNumbers) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one number' ,}
  }
if (!hasSpecialChar) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one special character' ,}
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
    ,
  if (value === null || value === undefined) {,}return {isValid: false, error: `${fieldName,}}is required` }
  }
if (typeof value === 'string' && value.trim() === '') {}return {isValid: false, error: `${fieldName,}}is required` }
  }
if (Array.isArray(value) && value.length === 0) {}return {isValid: false, error: `${fieldName,}}is required` }
  }
  e: unknown, fieldNam)
  e: string = 'Field'): ValidationResult {/* TODO: Fix JSX expression */,}}`
  r: `${fieldName,}is required` }
  }
if (typeof value === 'string' && value.trim() === '') {/* TODO: Fix JSX expression */,}`
  r: `${fieldName,}is required` }
  }
if (Array.isArray(value) && value.length === 0) {/* TODO: Fix JSX expression */,}`
  r: `${fieldName,}is required` }
export function validateRequired()
  e: unknown, fieldNam)
  e: string = 'Field'): ValidationResult {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  }
if (typeof value === 'string' && value.trim() === '') {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  }
if (Array.isArray(value) && value.length === 0) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
    if (isEven) {digit *= 2
      if (digit > 9) {
        digit -= 9}for (let i = cleaned.length - 1 i >= 0 i--) {/* TODO: Fix JSX expression */,}}
    }
    sum += digit
    isEven = !isEven
  }
  return {
    isValid,
    error: isValid ? undefined : 'Invalid credit card number',
  }
  return {/* TODO: Fix JSX expression */}
  }
}
    ,
  if (!jsonString || jsonString.trim() === '') {,}return {isValid: false, error: 'JSON string is required' ,}}}
try {JSON.parse(jsonString)}}return {isValid: true ,}}} catch {}}return {isValid: false, error: 'Invalid JSON format' ,}}export function validateJSON(jsonStrin)
  g: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'JSON string is required' ,}
  }
  e: unknown,
  validator,
    return { isValid: false, error: 'JSON string is required' }
  }
try {
    JSON.parse(jsonString)
  }
    return { isValid: true }
  } catch {}
    return { isValid: false, error: 'Invalid JSON format' }
export function validateJSON(jsonStrin)
  g: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' }
  }
try {/* TODO: Fix JSX expression */}
  d: true }
  } catch {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' }
  }
}
/**
 * HTML sanitization
 */
export function sanitizeHTML(html: string): string {
    if (!html) return '',
,
  return html
    .replace(/&/g, '&amp')
    .replace(/</g, '&lt')
    .replace(/&gt/g, '&gt')
    .replace(/"/g, '&quot')
    .replace(/'/g, '&#x27')
    .replace(/\//g, '&#x2F')
export function sanitizeHTML(htm)
  }
  l: string): string {/* TODO: Fix JSX expression */}
}
/**
 * Composite validation
 */
export function validateComposite(value: unknown)
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
    for (const validator of validators) {
    const result = validator(value),
    if (!result.isValid) {,
      return result
export function validateComposite()
  s: Array<(va),
  l: unknown) => ValidationResult>,}): ValidationResult {/* TODO: Fix JSX expression */,}}}
  }
  return {/* TODO: Fix JSX expression */,}}d: true ,}
}
    ,
  try {,
    return await validator(value)
  }

/**
 * Async validation
 */
export async function validateAsync(
  validator: (val: unknown) => Promise<ValidationResult>
  value: unknown,
): Promise<ValidationResult> {,
  try {,
    return await validator(value)}
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed',
export async function validateAsync()
  r: (va),
  l: unknown) => Promise</ValidationResult><ValidationResult>,
  valu,
  e: unknown,
  }
): Promise</ValidationResult><ValidationResult> {/* TODO: Fix JSX expression */}
export async function validateAsync(validato,
  r: (va)
  l: unknown) => Promise<ValidationResult>,
  valu,
  e: unknown,}
): Promise<ValidationResult> {/* TODO: Fix JSX expression */}
  } catch (error) {/* TODO: Fix JSX expression */}
    }
  }
}
// Re-export existing functions for compatibility
export {
    isValidEmail,
  isValidPhone,
  isValidUrl,
  isRequired,
  isValidPassword,
  sanitizeInput
  }
 } from './validators'
export {/* TODO: Fix JSX expression */}
 } from './validators'"`</ValidationResult>
  sanitizeInput}
 } from './validators'
export {/* TODO: Fix JSX expression */}
 } from './validators'"`
