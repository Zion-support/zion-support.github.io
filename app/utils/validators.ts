'use client'
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/

/**
 * URL validation regex
 */
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim())
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  return URL_REGEX.test(url.trim())
}

/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return false
  }
  return value.toString().trim().length > 0
}

/**
 * Validate minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength
}

/**
 * Validate string length range
 */
export function hasValidLength(value: string, minLength: number, maxLength: number): boolean {
  const trimmed = value.trim()
  return trimmed.length >= minLength && trimmed.length <= maxLength
}

/**
 * Validate numeric value
 */
export function isNumeric(value: string): boolean {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value))
}

/**
 * Validate integer value
 */
export function isInteger(value: string): boolean {
  return Number.isInteger(Number(value))
}

/**
 * Validate positive number
 */
export function isPositive(value: string): boolean {
  const num = Number(value)
  return !isNaN(num) && num > 0
}

/**
 * Validate negative number
 */
export function isNegative(value: string): boolean {
  const num = Number(value)
  return !isNaN(num) && num < 0
}

/**
 * Validate number range
 */
export function isInRange(value: string, min: number, max: number): boolean {
  const num = Number(value)
  return !isNaN(num) && num >= min && num <= max
}

/**
 * Validate alphanumeric string
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value)
}

/**
 * Validate alphabetic string
 */
export function isAlphabetic(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value)
}

/**
 * Validate string contains only letters and spaces
 */
export function isLettersAndSpaces(value: string): boolean {
  return /^[a-zA-Z\s]+$/.test(value)
}

/**
 * Validate string contains only letters, numbers, and spaces
 */
export function isLettersNumbersAndSpaces(value: string): boolean {
  return /^[a-zA-Z0-9\s]+$/.test(value)
}

/**
 * Validate string contains only letters, numbers, spaces, and common punctuation
 */
export function isLettersNumbersSpacesAndPunctuation(value: string): boolean {
  return /^[a-zA-Z0-9\s.,!?\-_()]+$/.test(value)
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return strongPasswordRegex.test(password)
}

/**
 * Validate password meets minimum requirements
 */
export function isMinimumPassword(password: string, minLength: number = 8): boolean {
  return password.length >= minLength
}

/**
 * Validate date string (YYYY-MM-DD format)
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString)
  return date instanceof Date && !isNaN(date.getTime()) && dateString.match(/^\d{4}-\d{2}-\d{2}$/)
}

/**
 * Validate time string (HH:MM format)
 */
export function isValidTime(timeString: string): boolean {
  return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(timeString)
}

/**
 * Validate datetime string (ISO format)
 */
export function isValidDateTime(dateTimeString: string): boolean {
  const date = new Date(dateTimeString)
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zipCode)
}

/**
 * Validate US state abbreviation
 */
export function isValidStateAbbreviation(state: string): boolean {
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]
  return states.includes(state.toUpperCase())
}

/**
 * Validate credit card number (Luhn algorithm)
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\D/g, '')
  if (cleaned.length < 13 || cleaned.length > 19) return false
  
  let sum = 0
  let isEven = false
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i])
    
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    
    sum += digit
    isEven = !isEven
  }
  
  return sum % 10 === 0
}

/**
 * Validate form field with multiple rules
 */
export function validateField(
  value: string,
  rules: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: string) => boolean
  }
): ValidationResult {
  const errors: string[] = []
  
  if (rules.required && !isRequired(value)) {
    errors.push('This field is required')
  }
  
  if (rules.minLength && !hasMinLength(value, rules.minLength)) {
    errors.push(`Must be at least ${rules.minLength} characters long`)
  }
  
  if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
    errors.push(`Must be no more than ${rules.maxLength} characters long`)
  }
  
  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push('Invalid format')
  }
  
  if (rules.custom && !rules.custom(value)) {
    errors.push('Invalid value')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Validate entire form
 */
export function validateForm(
  formData: Record<string, string>,
  validationRules: Record<string, Parameters<typeof validateField>[1]>
): ValidationResult {
  const allErrors: string[] = []
  let isFormValid = true
  
  for (const [fieldName, rules] of Object.entries(validationRules)) {
    const fieldValue = formData[fieldName] || ''
    const fieldResult = validateField(fieldValue, rules)
    
    if (!fieldResult.isValid) {
      isFormValid = false
      allErrors.push(...fieldResult.errors.map(error => `${fieldName}: ${error}`))
    }
  }
  
  return {
    isValid: isFormValid,
    errors: allErrors
  }
}