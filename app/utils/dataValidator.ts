'use client'
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */export interface ValidationRule<T;

export function validateEmail(email: string): { isValid: boolean; error?: string } {}
  if (!email) return { isValid: false, error: 'Email is required' }
  if (email.length > 254) return { isValid: false, error: 'Email is too long' }
  const emailRegex;

export function validateEmail(emai)}
  l: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Email is required' }
  if (email.length > 254) return {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }
  const emailRegex;

export function validateURL(ur,
  l: string, requireProtoco)
  l: boolean = true): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'URL is required' }}
  try {
    const urlToValidate;

export function validatePhoneNumber(phon)
  e: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Phone number is required' }
  }
  const phoneRegex;

export function validateCreditCard(cardNumber: string): boolean {,
  const cleaned = cardNumber.replace(/\s/g, '')
  if (!/^\d+$/.test(cleaned)) ;

return false
  if (cleaned.length</T> < 13 || cleaned.length > 19) return false
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit;

export function createCustomValidator<T>(
  validator: (value: T) => boolean
  message: string,
): (value: T) => { isValid: boolean; errors: string[] } {return (value: T) => {
    const isValid;

export function validateLength(value: string, min: number, max?: number, fieldName: string = 'Field'): { isValid: boolean; error?: string } {
  if (max !== undefined) {
    const isValid;

export function validateLength(valu,
  e: string, mi,
  n: number, max?: number, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: isValid ? undefined : `${fieldName} must be between ${min} and ${max} characters`}
  }
  const isValid;

export function validateRequired(valu,
  e: unknown, fieldNam)
  e: string = 'Field'): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}`
  r: `${fieldName} is required` }
  if (typeof value;

export function validateNumberRange(valu,
  e: number, mi,
  n: number, ma)
  x: number): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Value must be a valid number' }
  }
  const isValid;

export function validatePassword(passwor)
  d: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Password is required' }
  if (password.length</T> < 8) return {/* TODO: Fix JSX expression */}
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
  r: 'Password must contain at least one special character' }return {/* TODO: Fix JSX expression */}
  d: true }}
export function sanitizeHTML(html: string): string {
  if (!html || typeof html !== 'string') return ''
,
  let clean = html.replace(/&/g, '&amp;')}</>
  clean = clean.replace(/</g, '&lt;')
  clean = clean.replace(/>/g, '&gt;')
  clean = clean.replace(/"/g, '&quot;')
  clean = clean.replace(/'/g, '&#x27;')
  clean = clean.replace(/\//g, '&#x2 F;')
  return clean}
export function sanitizeInput(input: string, maxLength: number;

export function validateDate(dateString: string): { isValid: boolean; error?: string } {}
  if (!dateString) return { isValid: false, error: 'Date is required' }
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {}
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' }export function validateDate(dateStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Date is required' }
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {/* TODO: Fix JSX expression */}
  r: 'Invalid date format. Use YYYY-MM-DD' }}
  const date;

export function validateCreditCard(cardNumber: string): { isValid: boolean; error?: string } {}
  if (!cardNumber) return { isValid: false, error: 'Card number is required' }
  const cleaned;

export function validateCreditCard(cardNumbe)
  r: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'Card number is required' }
  const cleaned = cardNumber.replace(/\D/g, '')
  if (!/^\d+$/.test(cleaned)) ;

return {/* TODO: Fix JSX expression */}
  r: 'Card number must contain only digits' }
  if (cleaned.length < 13 || cleaned.length > 19) return {/* TODO: Fix JSX expression */}
  r: 'Card number must be between 13 and 19 digits' }
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
    }
    sum += digit
    isEven;

export function validateJSON(jsonString: string): { isValid: boolean; error?: string } {}
  if (!jsonString) return { isValid: false, error: 'JSON string is required' }
  try {
    JSON.parse(jsonString)}
    return { isValid: true }
  } catch (error) {}
    return { isValid: false, error: 'Invalid JSON format' }return {/* TODO: Fix JSX expression */}
  }}
export function validateJSON(jsonStrin)
  g: string): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
  r: 'JSON string is required' }
  try {/* TODO: Fix JSX expression */}
  d: true }
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Invalid JSON format' }
  }
}
export function validateComposite(valu,
  e: string, validator,
  s: Array<(va)
  l: string) => {/* TODO: Fix JSX expression */}
  d: boolean; error?: string }>): {/* TODO: Fix JSX expression */}
  d: boolean; error?: string } {/* TODO: Fix JSX expression */}
    }
  }
  return {/* TODO: Fix JSX expression */}
  d: true }}
export async function validateAsync(validato,
  r: (valu)
  e: string) => Promise<{/* TODO: Fix JSX expression */}
  d: boolean; error?: string }>, valu,
  e: string): Promise<{/* TODO: Fix JSX expression */}
  d: boolean; error?: string }> {/* TODO: Fix JSX expression */}
  } catch (error) {/* TODO: Fix JSX expression */}
  r: 'Validation failed' }
  }
}
"`