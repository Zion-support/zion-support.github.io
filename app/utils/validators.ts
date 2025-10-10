'use client'
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */export interface ValidationResult {
  isValid: boolean,
  errors: string[]
  error?: string}
}
/**
 * Email validation regex pattern
 */
const EMAIL_REGEX;

export function isStrongPassword(password: string): boolean {
  const hasMinLength = password.length >= 8
  ;

const hasUpperCase = /[A-Z]/.test(password)
  ;

const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password);,
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber}
}
/**
 * Get password strength score (0-4)
 */export function getPasswordStrength(password: string): number {
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++;,
  if (/[^a-zA-Z0-9]/.test(password)) score++;,
  return Math.min(score, 4)}
}
/**
 * Validate credit card number using Luhn algorithm
 */export function isValidCreditCard(cardNumber: string): boolean {,
  const cleaned = cardNumber.replace(/\s/g, '')}
  if (!/^\d{13,19}$/.test(cleaned)) {
    ;

return false}
  }
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit;

export function validateObject<T extends Record<string, unknown>>(
  obj: T,
  schema: Record</T><keyof T, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = []
  for (const key in schema) {
    const validator = schema[key]
    ;

const value = obj[key];,
    if (!validator(value)) {,}
      errors.push(`Invalid value for field: ${String(key)}`)
    }
  }
  return {
    isValid: errors.length;

export function isStrongPassword(password: string): boolean {
  if (!password || password.length</keyof> < 8) return false
  const hasUpperCase = /[A-Z]/.test(password)
  ;

const hasLowerCase = /[a-z]/.test(password);,
  const hasNumbers;

export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false
  const cleaned = cardNumber.replace(/\D/g, '')
  if (cleaned.length < 13 || cleaned.length > 19) ;

return false
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit;

export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') return ''}
  return input}</>
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')}
/**
 * Validate string length with detailed result
 */export function validateLength(value: string, minLength: number, maxLength: number, fieldName: string;

export async function validateAsync(validator: (val: string) => Promise<ValidationResult>, value: string): Promise</ValidationResult><ValidationResult> {
  try {
    return await validator(value)}
  } catch (error) {}
    return { isValid: false, errors: ['Validation failed'], error: 'Validation failed' }
  }
}
</ValidationResult>