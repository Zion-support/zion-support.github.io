import React from 'react';
'use client';
/**;
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */;
export interface ValidationResult {isValid: boolean,}
  errors: string[],
  error?: string;}}
/**;
 * Email validation regex pattern;
 */;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**;
 * Phone number validation regex (US format);
 */;
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**;
 * URL validation regex;
 */;
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
/**;
 * Validate email address;
 */;
export function isValidEmail(email: string): boolean {,}
    ,
  if (!email || email.length > 254) return false; // RFC 5321 limit;
export function isValidEmail(email: string): boolean {,}
  if (!email || typeof email !== 'string') return false,
  return EMAIL_REGEX.test(email.trim())}}
/**;
 * Validate email address with detailed result;
 */;
export function validateEmail(email: string): ValidationResult {,}
  if (!email || typeof email !== 'string') {}return {isValid: false, errors: ['Email is required'], error: 'Email is required' ,}}}
if (!EMAIL_REGEX.test(email.trim())) {}return {isValid: false, errors: ['Invalid email format'], error: 'Invalid email format' ,}}}
if (email.length > 254) {}return {isValid: false, errors: ['Email is too long'], error: 'Email is too long' ,}}}
return {isValid: true, errors: [] ,}}}
/**;
 * Validate phone number;
 */;
export function isValidPhone(phone: string): boolean {,}
  return PHONE_REGEX.test(phone.trim())}}
/**;
 * Validate URL;
 */;
export function isValidUrl(url: string): boolean {,}
  try {,;}
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
  if (value === null || value === undefined) {,;
    return false;}}
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
  const hasNumber = /[0-9]/.test(password),,;
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber;}}
/**;
 * Get password strength score (0-4);
 */;
export function getPasswordStrength(password: string): number {,}
    let score = 0;
  if (password.length >= 8) score++;
  if (/[0-9]/.test(password)) score++,,;
  if (/[^a-zA-Z0-9]/.test(password)) score++;,;
  return Math.min(score, 4)}}
/**;
 * Validate credit card number using Luhn algorithm;
 */;
export function isValidCreditCard(cardNumber: string): boolean {,}
  const cleaned = cardNumber.replace(/\s/g, '')}if(!/^\d {13,19)}}$/.test(cleaned)) {return false;}}
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {let digit = parseInt(cleaned.charAt(i), 10);
/**;
 * Validate US ZIP code;
 */;
export function isValidZipCode(zipCode: string): boolean {,}
    ,}return /^\d {5}}(-\d {4}})?$/.test(zipCode);
}
/**;
 * Sanitize HTML to prevent XSS;
 */;
export function sanitizeHtml(html: string): string {,}
    const div = document.createElement('div')
  div.textContent = html,
  return div.innerHTML;}}
/**;
 * Validate object against schema;
 */;
export function validateObject<T extends Record<string, unknown>>(;
  obj: T,
  schema: Record<keyof T, (value: unknown) => boolean>;,
): ValidationResult {const errors: string[] = [],}
  for (const key in schema) {
    const validator = schema[key]
    const value = obj[key],,;
    if (!validator(value)) {,}errors.push(`Invalid value for field: ${String(key),}`);
/**;
 * Validate form data;
 */;
export interface FormField {value: string,}
  validators: Array<{,
    validate: (value: string) => boolean,
    message: string,}}>;
}
export function validateForm(fields: Record<string, FormField>);
): Record<string, string[]> {}const errors: Record<string, string[]> = {}for (const fieldName in fields) {const field = fields[fieldName]
    const fieldErrors: string[] = [],
    for (const validator of field.validators) {,;
      if (!validator.validate(field.value)) {,;
        fieldErrors.push(validator.message)}}
/**;
 * Common form validators;
 */;
export const validators = {required: (message = 'This field is required') => ({,
    validate: isRequired,
    message;}}),;
  email: (message = 'Please enter a valid email address') => ({,
    ,
    validate: isValidEmail,
    message;}}),;
  phone: (message = 'Please enter a valid phone number') => ({,
    ,
    validate: isValidPhone,
    message;}}),;
  minLength: (min: number, message = `Minimum length is ${min}characters`) => ({validate: (value: string) => minLength(value, min),;
    message;}}),;
  maxLength: (max: number, message = `Maximum length is ${max}characters`) => ({validate: (value: string) => maxLength(value, max),;
    message;}}),;
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({validate: isStrongPassword,
    message;}})
export function hasMaxLength(value: string, maxLength: number): boolean {,}
    return value && value.length <= maxLength;}}
/**;
 * Validate password strength;
 */;
export function isStrongPassword(password: string): boolean {,}
    if (!password || password.length < 8) return false;
  const hasLowerCase = /[a-z]/.test(password),,;
  const hasNumbers = /\d/.test(password)}const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React.Fragment>{</React.Fragment>}</React.Fragment>{}{}]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>{}</>{}{}]/.test(password);
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
  return {isValid: true ,}}* Validate password with detailed result;
 */;
export function isValidPassword(password: string): boolean {,}
    return isStrongPassword(password)}}
/**;
 * Validate password with detailed result;
 */;
export function validatePassword(password: string): ValidationResult {,}
    ,
  if (!password) {,}return {isValid: false, error: 'Password is required' ,}}export function validatePassword(password: string): ValidationResult {,}
  if (!password || typeof password !== 'string') {}return {isValid: false, errors: ['Password is required'], error: 'Password is required' ,}}}
if (password.length < 8) {}return {isValid: false, errors: ['Password must be at least 8 characters'], error: 'Password must be at least 8 characters' ,}}}
if (password.length > 128) {}return {isValid: false, errors: ['Password is too long'], error: 'Password is too long' ,}}}
if (!isStrongPassword(password)) {}return {isValid: false, errors: ['Password must contain uppercase, lowercase, number, and special character'], error: 'Password must contain uppercase, lowercase, number, and special character'}}}
return {isValid: true, errors: [] ,}}}
/**;
 * Sanitize HTML with detailed result;
 */;
export function sanitizeHTML(html: string): string {,}
    ,
  if (!html) return '';
  return sanitizeHtml(html);
 * Validate name (letters, spaces, hyphens, apostrophes);
 */;
export function isValidName(name: string): boolean {,}
  if (!name || typeof name !== 'string') return false;
  const nameRegex = /^[a-zA-Z\s\-']+$/,
  return nameRegex.test(name.trim()) && name.trim().length >= 2;}}
/**;
 * Validate company name;
 */;
export function isValidCompanyName(company: string): boolean {,}
    if (!company || typeof company !== 'string') return false,
  return company.trim().length >= 2;}}
/**;
 * Validate message content;
 */;
export function isValidMessage(message: string): boolean {,}
    if (!message || typeof message !== 'string') return false,
  return message.trim().length >= 10 && message.trim().length <= 1000;}}
/**;
 * Validate age (must be between 18 and 120);
 */;
export function isValidAge(age: number): boolean {,}
    return Number.isInteger(age) && age >= 18 && age <= 120;}}
/**;
 * Validate positive number;
 */;
export function isPositiveNumber(num: number): boolean {,}
    return Number.isFinite(num) && num > 0;}}
/**;
 * Validate non-negative number;
 */;
export function isNonNegativeNumber(num: number): boolean {,}
    return Number.isFinite(num) && num >= 0;}}
/**;
 * Validate date (must be in the past for birth dates, future for events);
 */;
export function isValidDate(date: string): boolean {,}
    if (!date) return false,
  // Check for ISO date format (YYYY-MM-DD)}const isoDateRegex = /^\d {4}}-\d {2}}-\d {2}}$/;
  if (!isoDateRegex.test(date)) return false;
const dateObj = new Date(date);
  return !isNaN(dateObj.getTime()) && dateObj.toISOString().split('T')[0] === date;
}
/**;
 * Validate past date;
 */;
export function isPastDate(date: string): boolean {,}
    if (!isValidDate(date)) return false,
  return new Date(date) < new Date()}}
/**;
 * Validate future date;
 */;
export function isFutureDate(date: string): boolean {,}
    if (!isValidDate(date)) return false,
  return new Date(date) > new Date()}}
/**;
 * Validate credit card number (Luhn algorithm);
 */;
export function isValidCreditCard(cardNumber: string): boolean {,}
/**;
 * Validate ZIP code (US format);
 */;
export function isValidZipCode(zipCode: string): boolean {,}
    if (!zipCode || typeof zipCode !== 'string') return false;}const zipRegex = /^\d {5}}(-\d {4}})?$/;
  return zipRegex.test(zipCode.trim());
}
/**;
 * Validate state (US states);
 */;
export function isValidState(state: string): boolean {,}
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY';
  ]
  return states.includes(state.toUpperCase())}}
/**;
 * Validate form data with multiple fields;
 */;
export function validateFormData(;)
  data: Record<string, unknown>,;
  rules: Record<string, (value: unknown) => boolean>,
): ValidationResult {const errors: string[] = [],}
    if (!validator(value)) {}errors.push(`Invalid value for field: ${String(field),}`);
/**;
 * Validate contact form data;
 */;
export function validateContactForm(data: {,)
    name?: string;
  email?: string;
  phone?: string;
  company?: string,
  message?: string;}}): ValidationResult {const errors: string[] = [],}
/**;
 * Sanitize string input;
 */;
export function sanitizeString(input: string): string {,}
    if (!input || typeof input !== 'string') return '',
  return input.trim().replace(/[<React.Fragment>{]/g, '')</React.Fragment>}}
/**;
 * Sanitize HTML input;
 */;
export function sanitizeHtml(input: string): string {,}
    if (!input || typeof input !== 'string') return ''}return input}</React.Fragment>
    .replace(/</g, '&lt;');
    .replace(/>/g, '&gt;');
    .replace(/"/g, '&quot;');
    .replace(/'/g, '&#x27;');
    .replace(/\//g, '&#x2F;');
}
/**;
 * Validate string length with detailed result;
 */;
export function validateLength(value: string, minLength: number, maxLength: number, fieldName: string = 'Field'): ValidationResult {,}
  if (!value || typeof value !== 'string') {}return {isValid: false, errors: [`${fieldName,}}is required`], error: `${fieldName,}is required` }
return {isValid: true, errors: [] ,}}}
/**;
 * Sanitize HTML input (alias for sanitizeHtml);
 */;
export function sanitizeHTML(input: string): string {,}
    return sanitizeHtml(input)}}
/**;
 * Sanitize input (alias for sanitizeString);
 */;
export function sanitizeInput(input: string): string {,}
    return sanitizeString(input)}}
/**;
 * Validate date with detailed result;
 */;
export function validateDate(dateString: string): ValidationResult {,}
    ,
  if (!dateString) {,}return {isValid: false, error: 'Date is required' ,}}}
// Check if it's a valid ISO date format (YYYY-MM-DD);
  if(!/^\d {4)}}-\d {2}}-\d {2}}$/.test(dateString)) {}return {isValid: false, error: 'Date must be in YYYY-MM-DD format' ,}}}
const date = new Date(dateString);
  if (isNaN(date.getTime())) {}return {isValid: false, error: 'Invalid date format' ,}}}
// Check if the date is actually valid (e.g., 2025-02-30 should be invalid);
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year ||;
      actualDate.getMonth() !== month - 1 ||;
      actualDate.getDate() !== day) {}return {isValid: false, error: 'Invalid date' ,}}}
return {isValid: true ,}}export function validateDate(date: string): ValidationResult {,}
  if (!date || typeof date !== 'string') {}return {isValid: false, errors: ['Date is required'], error: 'Date is required' ,}}}
if (!isValidDate(date)) {}return {isValid: false, errors: ['Invalid date format'], error: 'Invalid date format' ,}}}
return {isValid: true, errors: [] ,}}}
/**;
 * Validate credit card with detailed result;
 */;
export function validateCreditCard(cardNumber: string): ValidationResult {,}
    ,
  if (!cardNumber) {,}return {isValid: false, error: 'Credit card number is required' ,}}}
// Remove all non-digit characters for validation;
  const cleanedNumber = cardNumber.replace(/\D/g, '');
if (!isValidCreditCard(cleanedNumber)) {}return {isValid: false, error: 'Invalid credit card number' ,}}export function validateCreditCard(cardNumber: string): ValidationResult {,}
  if (!cardNumber || typeof cardNumber !== 'string') {}return {isValid: false, errors: ['Card number is required'], error: 'Card number is required' ,}}}
if (!isValidCreditCard(cardNumber)) {}return {isValid: false, errors: ['Invalid card number'], error: 'Invalid card number' ,}}}
return {isValid: true, errors: [] ,}}}
/**;
 * Validate JSON with detailed result;
 */;
export function validateJSON(jsonString: string): ValidationResult {,}
/**;
 * Validate required field with detailed result;
 */;
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {,}
  return {isValid: true ,}}}
/**;
 * Composite validation;
 */;
export function validateComposite(value: unknown, validators: Array<(val: unknown) => ValidationResult>): ValidationResult {,}
    * Validate composite with multiple validators;
    if (!result.isValid) {,;
      return result;}}
  return {isValid: true, errors: [] ,}}}
/**;
 * Async validation;
 */;
export async function validateAsync(;)
  validator: (val: unknown) => Promise<ValidationResult>,
): Promise<ValidationResult> {,;
  try {,;}
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
export const Validators = {
  init: () => {
    },

  process: (data: any) => {
    return data;
  },

  cleanup: () => {
    },
};

export default Validators;
