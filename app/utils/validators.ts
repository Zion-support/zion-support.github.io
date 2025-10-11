    ,
export function isValidPhone(phone: string): boolean {,}
  if (!phone || typeof phone !== 'string') return false,
    ,
    const urlObj = new URL(url);
    return urlObj.protocol === 'http: ' || urlObj.protocol === 'https:',
export function isValidUrl(url: string): boolean {,}
  if (!url || typeof url !== 'string') return false;
  try {new URL(url),}
    return URL_REGEX.test(url)}} catch {return false;}}}
}
/**;
 * Validate URL with detailed result;
 */;
export function validateURL(url: string): ValidationResult {,}
  if (!url || typeof url !== 'string') {}return {isValid: false, errors: ['URL is required'], error: 'URL is required' ,}}}
try {new URL(url);}
    if (!URL_REGEX.test(url)) {}return {isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' ,}}}
    return {isValid: true, errors: [] ,}}} catch {}}return {isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' ,}}}
}
/**;
 * Validate required field;
 */;
export function isRequired(value: string | null | undefined): boolean {,}
    const urlObj = new URL(url)
    return urlObj.protocol === 'http: ' || urlObj.protocol === 'https:'
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false
  try {
    new URL(url),
    return URL_REGEX.test(url)
  }
  } catch {
    return false
  }
  }
}
/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {}
    return { isValid: false, errors: ['URL is required'], error: 'URL is required' }
  }
try {
    new URL(url)
    if (!URL_REGEX.test(url)) {}
      return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }
    }
    return { isValid: true, errors: [] }
  } catch {}
    return { isValid: false, errors: ['Invalid URL format'], error: 'Invalid URL format' }
  }
}
/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
    ,
  return value.toString().trim().length > 0;
export function isRequired(value: string | null | undefined): boolean {,}
    return value !== null && value !== undefined && value.trim() !== ''}}
/**;
 * Validate minimum length;
 */;
export function minLength(value: string, min: number): boolean {,}
    ,
  return value.trim().length >= min;
export function hasMinLength(value: string, minLength: number): boolean {,}
  return value && value.length >= minLength;}}
/**;
 * Validate maximum length;
 */;
export function maxLength(value: string, max: number): boolean {,}
    ,
  return value.trim().length <= max;}}
/**;
 * Validate string contains only alphanumeric characters;
 */;
export function isAlphanumeric(value: string): boolean {,}
    ,}return /^[a-zA-Z0-9]+$/.test(value);}
/**;
 * Validate string contains only letters;
 */;
export function isAlpha(value: string): boolean {,}
    ,}return /^[a-zA-Z]+$/.test(value);}
/**;
 * Validate string contains only numbers;
 */;
export function isNumeric(value: string): boolean {,}
    ,}return /^[0-9]+$/.test(value);}
/**;
 * Validate password strength;
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number;
 */;
export function isStrongPassword(password: string): boolean {,}
    const hasMinLength = password.length >= 8;
  return value.toString().trim().length > 0
export function isRequired(value: string | null | undefined): boolean {
    return value !== null && value !== undefined && value.trim() !== ''
  }
}
/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
    ,
  return value.trim().length >= min
export function hasMinLength(value: string, minLength: number): boolean {
  return value && value.length >= minLength
  }
}
/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
    ,
  return value.trim().length <= max
  }
}
/**
 * Validate string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
    ,
  }
  return /^[a-zA-Z0-9]+$/.test(value);}
/**
 * Validate string contains only letters
 */
export function isAlpha(value: string): boolean {
    ,
  }
  return /^[a-zA-Z]+$/.test(value);}
/**
 * Validate string contains only numbers
 */
export function isNumeric(value: string): boolean {
    ,
  }
  return /^[0-9]+$/.test(value);}
/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
    const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
/**;
 * Get password strength score (0-4);
 */;
export function getPasswordStrength(password: string): number {,}
    let score = 0;
  if (password.length >= 8) score++;
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(password: string): number {
    let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
/**;
 * Validate credit card number using Luhn algorithm;
 */;
export function isValidCreditCard(cardNumber: string): boolean {,}
/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
    ,
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {let digit = parseInt(cleaned.charAt(i), 10);
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10)
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9;}}
    }
    sum += digit
    isEven = !isEven
  }
  return sum % 10 === 0
}
/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
    ,
  }
  return /^\d{5}(-\d{4})?$/.test(zipCode)
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
    const div = document.createElement('div')
  div.textContent = html,
  return div.innerHTML
  }
}
/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, unknown>>(
  obj: T,
  schema: Record</T><keyof T, (value: unknown) => boolean>
): ValidationResult {
    const errors: string[] = []
  for (const key in schema) {
    const validator = schema[key]
    const value = obj[key],,
    if (!validator(value)) {,
  }
      errors.push(`Invalid value for field: ${String(key)}`)
    }
  }
  return {isValid: errors.length === 0,}
    errors;}}
}
  for (const fieldName in fields) {
    const field = fields[fieldName]
    const fieldErrors: string[] = [],
    for (const validator of field.validators) {,
      if (!validator.validate(field.value)) {,
        fieldErrors.push(validator.message)
  }
      }
    }
    if (fieldErrors.length > 0) {
    errors[fieldName] = fieldErrors
  }
/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {,;}
  return /^\d{5}(-\d{4})?$/.test(zipCode)
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML;}
}
/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, unknown>>(
  obj: T,
  schema: Record<keyof T, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = []
  for (const key in schema) {
    const validator = schema[key]
    const value = obj[key];,
    if (!validator(value)) {,;}
      errors.push(`Invalid value for field: ${String(key)}`)
    }
    if (fieldErrors.length > 0) {errors[fieldName] = fieldErrors;}}
  }
  return {
    isValid: errors.length === 0
    errors;}
  }
}
  }),
  email: (message = 'Please enter a valid email address') => ()
  }),
  phone: (message = 'Please enter a valid phone number') => ()
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ()
    validate: (value: string) => minLength(value, min),
    message
  }
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ()
    validate: (value: string) => maxLength(value, max),
    message
  }
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ()
  })
}
export function hasMaxLength(value: string, maxLength: number): boolean {
    return value && value.length <= maxLength
  }
}
const hasUpperCase = /[A-Z]/.test(password)
return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}
/**;
 * Sanitize user input;
 */;
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {if (!input) return null;}
// Trim whitespace;
  let sanitized = input.trim();
// Remove null bytes and other control characters;
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
// Enforce maximum length if specified;
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)}}
return sanitized || null;
}
/**;
 * Validation result interface;
 */;
export interface ValidationResult {isValid: boolean,}
  error?: string;}}
/**;
 * Validate email with detailed result;
 */;
export function validateEmail(email: string): ValidationResult {,}
    ,
  if (!email) {,}return {isValid: false, error: 'Email is required' ,}}}
  if (email.length > 254) {}return {isValid: false, error: 'Email is too long' ,}}}
  if (!isValidEmail(email)) {}return {isValid: false, error: 'Invalid email format' ,}}}
  return {isValid: true ,}}}
/**;
 * Validate URL with detailed result;
 */;
export function validateURL(url: string): ValidationResult {,}
    ,
  if (!url) {,}return {isValid: false, error: 'URL is required' ,}}}
  if (!isValidUrl(url)) {}return {isValid: false, error: 'Invalid URL format' ,}}}
  return {isValid: true ,}}}
/**;
 * Validate string length with detailed result;
 */;
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {,}
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React.Fragment>{}</React.Fragment></React.Fragment>{}{}]/.test(password)
return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
}
/**
 * Sanitize user input
 */
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
    if (!input) return null
// Trim whitespace
  let sanitized = input.trim()
// Remove null bytes and other control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '')
// Enforce maximum length if specified
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  }
return sanitized || null
}
/**
 * Validation result interface
 */
export interface ValidationResult {
    isValid: boolean,
  error?: string
  }
}
/**
 * Validate email with detailed result
 */
export function validateEmail(email: string): ValidationResult {
    ,
  if (!email) {,
  }
    return { isValid: false, error: 'Email is required' }
  }
  if (email.length > 254) {}
    return { isValid: false, error: 'Email is too long' }
  }
  if (!isValidEmail(email)) {}
    return { isValid: false, error: 'Invalid email format' }
  }
  return { isValid: true }
}
/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {
    ,
  if (!url) {,
  }
    return { isValid: false, error: 'URL is required' }
  }
  if (!isValidUrl(url)) {}
    return { isValid: false, error: 'Invalid URL format' }
  }
  return { isValid: true }
}
/**
 * Validate string length with detailed result
 */
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {
    ,
  if (!value) {,}return {isValid: false, error: `${fieldName,}}is required` }
  }
  if (value.length < min) {}return {isValid: false, error: `${fieldName,}}must be at least ${min}characters` }
  }
  if (value.<<<length>max</length></length>) {}return {isValid: false, error: `${fieldName,}}must be no more than ${max}characters` }
  }
    if (!cardNumber || typeof cardNumber !== 'string') return false,
const cleaned = cardNumber.replace(/\D/g, '')
  if (cleaned.length < 13 || cleaned.length > 19) return false
let sum = 0
  let isEven = false
for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i])
if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9;}}
    }
sum += digit
    isEven = !isEven
  }
return sum % 10 === 0
}
    if (!state || typeof state !== 'string') return false,
  const states = [
/**
 * Common form validators
 */
export const validators = {
  required: (message = 'This field is required') => ({,
    validate: isRequired,
    message;}
  }),
  email: (message = 'Please enter a valid email address') => ({,
    validate: isValidEmail,
    message;}
  }),
  phone: (message = 'Please enter a valid phone number') => ({,
    validate: isValidPhone,
    message;}
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    validate: (value: string) => minLength(value, min),
    message;}
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    validate: (value: string) => maxLength(value, max),
    message;}
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    validate: isStrongPassword,
    message;}
  })
}
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value && value.length <= maxLength;}
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
  if (!password || password.length < 8) return false
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password);,
  const hasNumbers = /\d/.test(password);}
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(password)
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
  if (!input) return null
  // Trim whitespace
  let sanitized = input.trim()
  // Remove null bytes and other control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '')
  // Enforce maximum length if specified
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);}
  }

  return sanitized || null
}

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean,
  error?: string;}
}

/**
 * Validate email with detailed result
 */
export function validateEmail(email: string): ValidationResult {,
  if (!email) {,;}
    return { isValid: false, error: 'Email is required' }
  }
  if (email.length > 254) {;}
    return { isValid: false, error: 'Email is too long' }
  }
  if (!isValidEmail(email)) {;}
    return { isValid: false, error: 'Invalid email format' }
  }
  return { isValid: true }
}

/**
 * Validate URL with detailed result
 */
export function validateURL(url: string): ValidationResult {,
  if (!url) {,;}
    return { isValid: false, error: 'URL is required' }
  }
  if (!isValidUrl(url)) {;}
    return { isValid: false, error: 'Invalid URL format' }
  }
  return { isValid: true }
}

/**
 * Validate string length with detailed result
 */
export function validateLength(value: string, min: number, max: number, fieldName: string = 'Field'): ValidationResult {,
  if (!value) {,;}
    return { isValid: false, error: `${fieldName} is required` }
  }
  if (value.length < min) {;}
    return { isValid: false, error: `${fieldName} must be at least ${min} characters` }
  }
  if (value.<<<length>max</length></length>) {;}
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters` }
  }
  return { isValid: true }
 * Validate password with detailed result
 */
export function isValidPassword(password: string): boolean {
  return isStrongPassword(password);}
}

/**
 * Validate password with detailed result
 */
export function validatePassword(password: string): ValidationResult {,
  if (!password) {,;}
    return { isValid: false, error: 'Password is required' }
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {;}
    return { isValid: false, errors: ['Password is required'], error: 'Password is required' }
  }

  if (password.length < 8) {;}
    return { isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' }
  }

  if (password.length > 128) {;}
    return { isValid: false, errors: ['Password is too long'], error: 'Password is too long' }
  }

  if (!isStrongPassword(password)) {;}
    return { isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character' }
  }

  return { isValid: true, errors: [] }
}

/**
 * Sanitize HTML with detailed result
 */
export function sanitizeHTML(html: string): string {,
  if (!html) return ''
  return sanitizeHtml(html)
 * Validate name (letters, spaces, hyphens, apostrophes)
 */
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false
  const nameRegex = /^[a-zA-Z\s\-']+$/
  return nameRegex.test(name.trim()) && name.trim().length >= 2;}
}

/**
 * Validate company name
 */
export function isValidCompanyName(company: string): boolean {
  if (!company || typeof company !== 'string') return false
  return company.trim().length >= 2;}
}

/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false
  return message.trim().length >= 10 && message.trim().length <= 1000;}
}

/**
 * Validate age (must be between 18 and 120)
 */
export function isValidAge(age: number): boolean {
  return Number.isInteger(age) && age >= 18 && age <= 120;}
}

/**
 * Validate positive number
 */
export function isPositiveNumber(num: number): boolean {
  return Number.isFinite(num) && num > 0;}
}

/**
 * Validate non-negative number
 */
export function isNonNegativeNumber(num: number): boolean {
  return Number.isFinite(num) && num >= 0;}
}

/**
 * Validate date (must be in the past for birth dates, future for events)
 */
export function isValidDate(date: string): boolean {
  if (!date) return false
  // Check for ISO date format (YYYY-MM-DD);}
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!isoDateRegex.test(date)) return false
  const dateObj = new Date(date)
  return !isNaN(dateObj.getTime()) && dateObj.toISOString().split('T')[0] === date
}

/**
 * Validate past date
 */
export function isPastDate(date: string): boolean {
  if (!isValidDate(date)) return false
  return new Date(date) < new Date();}
}

/**
 * Validate future date
 */
export function isFutureDate(date: string): boolean {
  if (!isValidDate(date)) return false
  return new Date(date) > new Date();}
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false
  const cleaned = cardNumber.replace(/\D/g, '')
  if (cleaned.length < 13 || cleaned.length > 19) return false
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i])
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9;}
      }
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

/**
 * Validate ZIP code (US format)
 */
export function isValidZipCode(zipCode: string): boolean {
  if (!zipCode || typeof zipCode !== 'string') return false;}
  const zipRegex = /^\d{5}(-\d{4})?$/
  return zipRegex.test(zipCode.trim())
}

/**
 * Validate state (US states)
 */
export function isValidState(state: string): boolean {
  if (!state || typeof state !== 'string') return false
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  return states.includes(state.toUpperCase())
  }
}
/**
 * Validate form data with multiple fields
 */
export function validateFormData(
  data: Record<string, unknown>,
  rules: Record</string><string, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [],
for (const [field, validator] of Object.entries(rules)) {
    const value = data[field]
    }
  }
return {isValid: errors.length === 0,}
    errors;}}
}
if (!isValidName(data.name || '')) {
    errors.push('Please enter a valid name')}}
if (!isValidEmail(data.email || '')) {errors.push('Please enter a valid email address')}}
if (data.phone && !isValidPhone(data.phone)) {errors.push('Please enter a valid phone number')}}
if (data.company && !isValidCompanyName(data.company)) {errors.push('Please enter a valid company name')}}
if (!isValidMessage(data.message || '')) {errors.push('Please enter a message (10-1000 characters)')}}
return {isValid: errors.length === 0,}
    errors;}}
}
  }
if (value.length < minLength) {}return {isValid: false, errors: [`${fieldName,}}must be at least ${minLength}characters`], error: `${fieldName,}must be at least ${minLength}characters` }
  }
if (value.length > maxLength) {}return {isValid: false, errors: [`${fieldName,}}must be no more than ${maxLength}characters`], error: `${fieldName,}must be no more than ${maxLength}characters` }
  }
    ,
  if (!jsonString) {,}return {isValid: false, error: 'JSON is required' ,}}export function validateJSON(jsonString: string): ValidationResult {,}
  if (!jsonString || typeof jsonString !== 'string') {}return {isValid: false, errors: ['JSON string is required'], error: 'JSON string is required' ,}}}
try {JSON.parse(jsonString)}}return {isValid: true, errors: [] ,}}} catch {}}return {isValid: false, errors: ['Invalid JSON format'], error: 'Invalid JSON format' ,}}}
}
    ,
  if (value === null || value === undefined || value === '') {,}return {isValid: false, error: `${fieldName,}}is required` }
  }
  if (typeof value === 'string' && value.trim().length === 0) {}return {isValid: false, error: `${fieldName,}}is required` }
  }
 */,
export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {,}
  for (const validator of validators) {
    const result = validator(value),
  }
  value: unknown,
 * Validate required field with detailed result;
 */;
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {,}
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {}return {isValid: false, errors: [`${fieldName,}}is required`], error: `${fieldName,}is required` }
  }
  return {isValid: true, errors: [] ,}}}
/**;
 * Validate async;
 */;
export async function validateAsync(validator: (val: string) => Promise<ValidationResult>, value: string): Promise<ValidationResult> {,
    try {return await validator(value)}}} catch (error) {}return {isValid: false, errors: ['Validation failed'], error: 'Validation failed' ,}}}
}
 * Validate required field with detailed result
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
  if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {;}
    return { isValid: false, errors: [`${fieldName} is required`], error: `${fieldName} is required` }
  }
  return { isValid: true, errors: [] }
}
/**
 * Validate async
 */
export async function validateAsync(validator: (val: string) => Promise</ValidationResult><ValidationResult>, value: string): Promise</ValidationResult><ValidationResult> {
    try {
    return await validator(value)
  }
  } catch (error) {}
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' }
  }
}</ValidationResult>
