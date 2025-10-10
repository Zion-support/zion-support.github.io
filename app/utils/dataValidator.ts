'use client'
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */
import { errorTracking, ErrorCategory, ErrorSeverity } from './errorTracking'

export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean
  message: string
}

export interface FieldRule {
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom'
  message: string
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  custom?: (value: unknown) => boolean
}

export type ValidationRules = Record<string, FieldRule[]>

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string[]>
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public errors: string[]
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

/**
 * Validate email address
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  if (!email) return { isValid: false, error: 'Email is required' }
  if (email.length > 254) return { isValid: false, error: 'Email is too long' }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isValid = emailRegex.test(email)
  return {
    isValid,
    error: isValid ? undefined : 'Invalid email format'
  }
}

/**
 * Validate URL
 */
export function validateURL(url: string, requireProtocol: boolean = true): { isValid: boolean; error?: string } {
  if (!url) return { isValid: false, error: 'URL is required' }
  
  try {
    const urlObj = new URL(url)
    if (requireProtocol && !urlObj.protocol) {
      return { isValid: false, error: 'URL must include protocol (http:// or https://)' }
    }
    return { isValid: true }
  } catch {
    return { isValid: false, error: 'Invalid URL format' }
  }
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): { isValid: boolean; error?: string } {
  if (!phone) return { isValid: false, error: 'Phone number is required' }
  
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Check if it's a valid length (7-15 digits)
  if (cleaned.length < 7 || cleaned.length > 15) {
    return { isValid: false, error: 'Phone number must be between 7 and 15 digits' }
  }
  
  return { isValid: true }
}

/**
 * Validate required field
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): { isValid: boolean; error?: string } {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` }
  }
  return { isValid: true }
}

/**
 * Validate string length
 */
export function validateStringLength(
  value: string, 
  minLength: number, 
  maxLength: number, 
  fieldName: string = 'Field'
): { isValid: boolean; error?: string } {
  if (value.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters long` }
  }
  if (value.length > maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${maxLength} characters long` }
  }
  return { isValid: true }
}

/**
 * Validate number range
 */
export function validateNumberRange(
  value: number, 
  min: number, 
  max: number, 
  fieldName: string = 'Field'
): { isValid: boolean; error?: string } {
  if (value < min || value > max) {
    return { isValid: false, error: `${fieldName} must be between ${min} and ${max}` }
  }
  return { isValid: true }
}

/**
 * Validate form data against rules
 */
export function validateFormData(data: Record<string, unknown>, rules: ValidationRules): ValidationResult {
  const errors: Record<string, string[]> = {}
  let isValid = true

  try {
    for (const [field, fieldRules] of Object.entries(rules)) {
      const fieldErrors: string[] = []
      const value = data[field]

      for (const rule of fieldRules) {
        let fieldValid = true
        let errorMessage = ''

        switch (rule.type) {
          case 'required':
            const requiredResult = validateRequired(value, field)
            fieldValid = requiredResult.isValid
            errorMessage = requiredResult.error || ''
            break

          case 'email':
            if (typeof value === 'string') {
              const emailResult = validateEmail(value)
              fieldValid = emailResult.isValid
              errorMessage = emailResult.error || ''
            }
            break

          case 'url':
            if (typeof value === 'string') {
              const urlResult = validateURL(value)
              fieldValid = urlResult.isValid
              errorMessage = urlResult.error || ''
            }
            break

          case 'string':
            if (typeof value === 'string') {
              if (rule.minLength || rule.maxLength) {
                const lengthResult = validateStringLength(
                  value, 
                  rule.minLength || 0, 
                  rule.maxLength || Infinity, 
                  field
                )
                fieldValid = lengthResult.isValid
                errorMessage = lengthResult.error || ''
              }
            }
            break

          case 'number':
            if (typeof value === 'number') {
              if (rule.min !== undefined || rule.max !== undefined) {
                const rangeResult = validateNumberRange(
                  value, 
                  rule.min || -Infinity, 
                  rule.max || Infinity, 
                  field
                )
                fieldValid = rangeResult.isValid
                errorMessage = rangeResult.error || ''
              }
            }
            break

          case 'custom':
            if (rule.custom) {
              fieldValid = rule.custom(value)
              errorMessage = rule.message
            }
            break
        }

        if (!fieldValid) {
          fieldErrors.push(errorMessage || rule.message)
          isValid = false
        }
      }

      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors
      }
    }

    // Track validation errors
    if (!isValid) {
      errorTracking.trackError(
        new ValidationError('Form validation failed', 'form', Object.values(errors).flat()),
        ErrorCategory.VALIDATION,
        ErrorSeverity.MEDIUM
      )
    }

    return { isValid, errors }
  } catch (error) {
    errorTracking.trackError(
      error as Error,
      ErrorCategory.VALIDATION,
      ErrorSeverity.HIGH
    )
    return { isValid: false, errors: { general: ['Validation failed due to an error'] } }
  }
}

/**
 * Common validation rules
 */
export const commonRules = {
  email: [
    { type: 'required' as const, message: 'Email is required' },
    { type: 'email' as const, message: 'Invalid email format' }
  ],
  phone: [
    { type: 'required' as const, message: 'Phone number is required' },
    { type: 'custom' as const, message: 'Invalid phone number format', custom: (value: unknown) => {
      if (typeof value !== 'string') return false
      const cleaned = value.replace(/\D/g, '')
      return cleaned.length >= 7 && cleaned.length <= 15
    }}
  ],
  name: [
    { type: 'required' as const, message: 'Name is required' },
    { type: 'string' as const, message: 'Name must be a string', minLength: 2, maxLength: 100 }
  ],
  message: [
    { type: 'required' as const, message: 'Message is required' },
    { type: 'string' as const, message: 'Message must be a string', minLength: 10, maxLength: 1000 }
  ]
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: {
  name?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
}): ValidationResult {
  const rules: ValidationRules = {
    name: commonRules.name,
    email: commonRules.email,
    phone: commonRules.phone,
    message: commonRules.message
  }

  return validateFormData(data, rules)
}

/**
 * Validate newsletter signup data
 */
export function validateNewsletterSignup(data: {
  email?: unknown
}): ValidationResult {
  const rules: ValidationRules = {
    email: commonRules.email
  }

  return validateFormData(data, rules)
}