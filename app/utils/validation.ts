/**
 * Comprehensive validation utilities for forms and data
 * Provides all validation functions expected by tests
 */export interface ValidationResult {
  isValid: boolean,
  error?: string
  errors?: string[];,}
export interface ValidationResult {/* TODO: Fix JSX expression */}
}
/**
 * Email validation with length check
 */export function validateEmail(email: string): ValidationResult {,
  if (!email || email.length > 254) {,}
    return { isValid: false, error: 'Email is too long' }export function validateEmail(emai)
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }}
  const emailRegex;

export function validateCreditCard(cardNumbe)
  r: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Credit card number is required' }}
  const cleaned = cardNumber.replace(/[\s-]/g, '')
  if (!/^\d+$/.test(cleaned)) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must contain only digits' }
  }
}</>
  if (cleaned.length < 13 || cleaned.length > 19) {}
    ;

return { isValid: false, error: 'Credit card number must be between 13 and 19 digits' }
  if (cleaned.length < 13 || cleaned.length > 19) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must be between 13 and 19 digits' }}
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10)
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
}
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
      }
    }
    sum += digit
    isEven;

export function sanitizeHTML(html: string): string {
  if (!html) return ''
,
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')export function sanitizeHTML(htm)}
  l: string): string {/* TODO: Fix JSX expression */}
}
/**
 * Composite validation
 */export function validateComposite(value: unknown)
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result;

export {/* TODO: Fix JSX expression */}
} from './validators' "`