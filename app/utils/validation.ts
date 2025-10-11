<<<<<<< HEAD
import React from 'react';
/**;
 * Comprehensive validation utilities for forms and data;
 * Provides all validation functions expected by tests;
 */;
export interface ValidationResult {isValid: boolean,}
  error?: string;
  errors?: string[],}export interface ValidationResult {/* TODO: Fix JSX expression */,}}}
/**;
 * Email validation with length check;
 */;
export function validateEmail(email: string): ValidationResult {,}
    ,
  if (!email || email.length > 254) {,}return {isValid: false, error: 'Email is too long' ,}}export function validateEmail(emai);
  l: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'Email is too long' ,}
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email.trim());
<<<<<<< HEAD
return {isValid,;}
    error: isValid ? undefined : 'Invalid email format',}return {/* TODO: Fix JSX expression */,}}}
=======
=======
/**
 * Comprehensive validation utilities for forms and data
 * Provides all validation functions expected by tests
 */
export interface ValidationResult {
    isValid: boolean,
  error?: string
  errors?: string[],
  }
export interface ValidationResult {/* TODO: Fix JSX expression */}
}
/**
 * Email validation with length check
 */
export function validateEmail(email: string): ValidationResult {
    ,
  if (!email || email.length > 254) {,
  }
    return { isValid: false, error: 'Email is too long' }
export function validateEmail(emai)
  l: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Email is too long' }
  }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isValid = emailRegex.test(email.trim())
>>>>>>> origin/main
return {
    isValid,
    error: isValid ? undefined : 'Invalid email format',
  }
  return {/* TODO: Fix JSX expression */}
  }
>>>>>>> origin/main
}
<<<<<<< HEAD
/**;
 * URL validation;
 */;
export function validateURL(url: string): ValidationResult {,}
    ,
  if (!url || url.trim() === '') {,}return {isValid: false, error: 'URL is required' ,}}}
try {const urlObj = new URL(url);}
=======
/**
 * URL validation
 */
export function validateURL(url: string): ValidationResult {
    ,
  if (!url || url.trim() === '') {,
  }
    return { isValid: false, error: 'URL is required' }
  }
try {
    const urlObj = new URL(url)
>>>>>>> origin/main
    const isValid = urlObj.protocol === 'http: ' || urlObj.protocol === 'https:',
<<<<<<< HEAD
    return {,;}
=======
    return {,
<<<<<<< HEAD
>>>>>>> origin/main
      isValid;
=======
      isValid
>>>>>>> origin/main
      error: isValid ? undefined : 'Invalid URL format',
export function validateURL(ur)}l: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'URL is required' ,}
  }
try {/* TODO: Fix JSX expression */,}}}
  } catch {/* TODO: Fix JSX expression */,}}r: 'Invalid URL format' ,}
  }
}
<<<<<<< HEAD
/**;
 * String length validation;
 */;
export function validateLength(value: string;);,
  min: number),
  max: number),
=======
/**
 * String length validation
 */
export function validateLength(value: string;)
  min: number)
  max: number)
>>>>>>> origin/main
  fieldName: string = 'Field',
<<<<<<< HEAD
): ValidationResult {if (value.length < min) {,;}
    return {,;}
      isValid: false,}error: `${fieldName,}must be at least ${min}characters long`;
=======
): ValidationResult {
    if (value.length < min) {,
    return {,
      isValid: false,
  }
<<<<<<< HEAD
      error: `${fieldName} must be at least ${min} characters long`;
>>>>>>> origin/main
    }
  }
if (value.<<<length>max</length></length>) {return {isValid: false,}}error: `${fieldName,}must be no more than ${max}characters long`;
=======
      error: `${fieldName} must be at least ${min} characters long`
    }
  }
if (value.<<<length>max</length></length>) {
    return {
      isValid: false,
  }
      error: `${fieldName} must be no more than ${max} characters long`
>>>>>>> origin/main
    }
  }
<<<<<<< HEAD
return {isValid: true ,}}export function validateLength(valu,;)
=======
return { isValid: true }
<<<<<<< HEAD
export function validateLength(valu,
>>>>>>> origin/main
  e: string,
  mi,
  n: number,
  ma,
  x: number,
  fieldNam,
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */,}}r: `${fieldName,}must be at least ${min}characters long`;
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */,}`;
  r: `${fieldName,}must be no more than ${max}characters long`;
=======
export function validateLength()
  e: string = 'Field'),
): ValidationResult {/* TODO: Fix JSX expression */}
  r: `${fieldName} must be at least ${min} characters long`
    }
  }
if (value.length > max) {/* TODO: Fix JSX expression */}`
  r: `${fieldName} must be no more than ${max} characters long`
>>>>>>> origin/main
    }
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
<<<<<<< HEAD
/**;
 * Password validation;
 */;
export function validatePassword(password: string): ValidationResult {,}
=======
/**
 * Password validation
 */
export function validatePassword(password: string): ValidationResult {
>>>>>>> origin/main
    ,
  if (!password || password.length < 8) {,}return {isValid: false, error: 'Password must be at least 8 characters long' ,}}}
if (password.length > 128) {}return {isValid: false, error: 'Password is too long' ,}}export function validatePassword(passwor);
  d: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'Password must be at least 8 characters long' ,}
  }
<<<<<<< HEAD
if (password.length > 128) {/* TODO: Fix JSX expression */,}r: 'Password is too long' ,}
  }
const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React.Fragment>{]/.test(password);</React.Fragment>
if (!hasUpperCase) {}return {isValid: false, error: 'Password must contain at least one uppercase letter' ,}}}
if (!hasLowerCase) {}return {isValid: false, error: 'Password must contain at least one lowercase letter' ,}}}
if (!hasNumbers) {}return {isValid: false, error: 'Password must contain at least one number' ,}}}
if (!hasSpecialChar) {}return {isValid: false, error: 'Password must contain at least one special character' ,}}}
return {isValid: true ,}}if (!hasUpperCase) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one uppercase letter' ,}
=======
    return { isValid: false, error: 'Password must be at least 8 characters long' }
  }
if (password.length > 128) {}
    return { isValid: false, error: 'Password is too long' }
export function validatePassword(passwor)
  d: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Password must be at least 8 characters long' }
  }
if (password.length > 128) {/* TODO: Fix JSX expression */}
  r: 'Password is too long' }
  }
const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React.Fragment>{]/.test(password)
if (!hasUpperCase) {}
    return { isValid: false, error: 'Password must contain at least one uppercase letter' }
>>>>>>> origin/main
  }
if (!hasLowerCase) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one lowercase letter' ,}
  }
if (!hasNumbers) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one number' ,}
  }
if (!hasSpecialChar) {/* TODO: Fix JSX expression */,}r: 'Password must contain at least one special character' ,}
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
<<<<<<< HEAD
/**;
 * Required field validation;
 */;
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {,}
=======
/**
 * Required field validation
 */
export function validateRequired(value: unknown, fieldName: string = 'Field'): ValidationResult {
>>>>>>> origin/main
    ,
  if (value === null || value === undefined) {,}return {isValid: false, error: `${fieldName,}}is required` }
  }
if (typeof value === 'string' && value.trim() === '') {}return {isValid: false, error: `${fieldName,}}is required` }
  }
if (Array.isArray(value) && value.length === 0) {}return {isValid: false, error: `${fieldName,}}is required` }
  }
<<<<<<< HEAD
return {isValid: true ,}}export function validateRequired(valu,;)
=======
if (Array.isArray(value) && value.length === 0) {}
    return { isValid: false, error: `${fieldName} is required` }
  }
return { isValid: true }
<<<<<<< HEAD
export function validateRequired(valu,
>>>>>>> origin/main
  e: unknown, fieldNam);
  e: string = 'Field'): ValidationResult {/* TODO: Fix JSX expression */,}}`;
  r: `${fieldName,}is required` }
  }
if (typeof value === 'string' && value.trim() === '') {/* TODO: Fix JSX expression */,}`;
  r: `${fieldName,}is required` }
  }
if (Array.isArray(value) && value.length === 0) {/* TODO: Fix JSX expression */,}`;
  r: `${fieldName,}is required` }
=======
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
>>>>>>> origin/main
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
<<<<<<< HEAD
/**;
 * Date validation;
 */;
export function validateDate(dateString: string): ValidationResult {,}
    ,
  if (!dateString || dateString.trim() === '') {,}return {isValid: false, error: 'Date is required' ,}}}
export function validateDate(dateStrin);
  g: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'Date is required' ,}
  }
// Check for YYYY-MM-DD format;
  const dateRegex = /^\d {4}}-\d {2}}-\d {2}}$/;
  if (!dateRegex.test(dateString)) {/* TODO: Fix JSX expression */,}r: 'Date must be in YYYY-MM-DD format' ,}
  }
const date = new Date(dateString);
  if (isNaN(date.getTime())) {/* TODO: Fix JSX expression */,}r: 'Invalid date' ,}
  }
// Check if the date is valid (e.g., not 2025-13-01);
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year ||;
      actualDate.getMonth() !== month - 1 ||;
      actualDate.getDate() !== day) {}return {isValid: false, error: 'Invalid date' ,}}}
return {isValid: true ,}}if (actualDate.getFullYear() !== year ||;
      actualDate.getMonth() !== month - 1 ||;
      actualDate.getDate() !== day) {/* TODO: Fix JSX expression */,}r: 'Invalid date' ,}
=======
/**
 * Date validation
 */
export function validateDate(dateString: string): ValidationResult {
    ,
  if (!dateString || dateString.trim() === '') {,
  }
    return { isValid: false, error: 'Date is required' }
  }
export function validateDate(dateStrin)
  g: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Date is required' }
  }
// Check for YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(dateString)) {/* TODO: Fix JSX expression */}
  r: 'Date must be in YYYY-MM-DD format' }
  }
const date = new Date(dateString)
  if (isNaN(date.getTime())) {/* TODO: Fix JSX expression */}
  r: 'Invalid date' }
  }
// Check if the date is valid (e.g., not 2025-13-01)
  const [year, month, day] = dateString.split('-').map(Number)
  const actualDate = new Date(year, month - 1, day)
  if (actualDate.getFullYear() !== year ||
      actualDate.getMonth() !== month - 1 ||
      actualDate.getDate() !== day) {}
    return { isValid: false, error: 'Invalid date' }
  }
return { isValid: true }
  if (actualDate.getFullYear() !== year ||
      actualDate.getMonth() !== month - 1 ||
      actualDate.getDate() !== day) {/* TODO: Fix JSX expression */}
  r: 'Invalid date' }
>>>>>>> origin/main
  }
return {/* TODO: Fix JSX expression */,}}d: true ,}
}
<<<<<<< HEAD
/**;
 * Credit card validation using Luhn algorithm;
 */;
export function validateCreditCard(cardNumber: string): ValidationResult {,}
    ,
  if (!cardNumber || cardNumber.trim() === '') {,}return {isValid: false, error: 'Credit card number is required' ,}}export function validateCreditCard(cardNumbe);
  r: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'Credit card number is required' ,}
  }
const cleaned = cardNumber.replace(/[\s-]/g, '');
  if (!/^\d+$/.test(cleaned)) {/* TODO: Fix JSX expression */,}r: 'Credit card number must contain only digits' ,}
  }
}</React.Fragment>
  if (cleaned.length < 13 || cleaned.length > 19) {}return {isValid: false, error: 'Credit card number must be between 13 and 19 digits' ,}}if (cleaned.length < 13 || cleaned.length > 19) {/* TODO: Fix JSX expression */,}r: 'Credit card number must be between 13 and 19 digits' ,}
  }
let sum = 0;
  let isEven = false;
for (let i = cleaned.length - 1; i >= 0; i--) {let digit = parseInt(cleaned[i], 10);
=======
/**
 * Credit card validation using Luhn algorithm
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
    ,
  if (!cardNumber || cardNumber.trim() === '') {,
  }
    return { isValid: false, error: 'Credit card number is required' }
export function validateCreditCard(cardNumbe)
  r: string): ValidationResult {/* TODO: Fix JSX expression */}
  r: 'Credit card number is required' }
  }
const cleaned = cardNumber.replace(/[\s-]/g, '')
  if (!/^\d+$/.test(cleaned)) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must contain only digits' }
  }
}</React.Fragment></React.Fragment>
  if (cleaned.length < 13 || cleaned.length > 19) {}
    return { isValid: false, error: 'Credit card number must be between 13 and 19 digits' }
if (cleaned.length < 13 || cleaned.length > 19) {/* TODO: Fix JSX expression */}
  r: 'Credit card number must be between 13 and 19 digits' }
  }
let sum = 0
  let isEven = false
for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10)
>>>>>>> origin/main
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9;}for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */,}}
    }
    sum += digit
    isEven = !isEven
  }
<<<<<<< HEAD
const isValid = sum % 10 === 0;
<<<<<<< HEAD
  return {isValid,;}
    error: isValid ? undefined : 'Invalid credit card number',}return {/* TODO: Fix JSX expression */,}}}
=======
=======
const isValid = sum % 10 === 0
>>>>>>> origin/main
  return {
    isValid,
    error: isValid ? undefined : 'Invalid credit card number',
  }
  return {/* TODO: Fix JSX expression */}
  }
>>>>>>> origin/main
}
<<<<<<< HEAD
/**;
 * JSON validation;
 */;
export function validateJSON(jsonString: string): ValidationResult {,}
=======
/**
 * JSON validation
 */
export function validateJSON(jsonString: string): ValidationResult {
>>>>>>> origin/main
    ,
  if (!jsonString || jsonString.trim() === '') {,}return {isValid: false, error: 'JSON string is required' ,}}}
try {JSON.parse(jsonString)}}return {isValid: true ,}}} catch {}}return {isValid: false, error: 'Invalid JSON format' ,}}export function validateJSON(jsonStrin);
  g: string): ValidationResult {/* TODO: Fix JSX expression */,}}r: 'JSON string is required' ,}
  }
<<<<<<< HEAD
try {/* TODO: Fix JSX expression */,}}d: true ,}
  } catch {/* TODO: Fix JSX expression */,}}r: 'Invalid JSON format' ,}
  }
}
/**;
 * HTML sanitization;
 */;
export function sanitizeHTML(html: string): string {,}
    if (!html) return '',
,
  return html;
    .replace(/&/g, '&amp;');
    .replace(/</g, '&lt;');
    .replace(/>/g, '&gt;');
    .replace(/"/g, '&quot;');
    .replace(/'/g, '&#x27;');
    .replace(/\//g, '&#x2F;');
export function sanitizeHTML(htm)}l: string): string {/* TODO: Fix JSX expression */,}}}
/**;
 * Composite validation;
 */;
export function validateComposite(value: unknown),
  validators: Array<(val: unknown) => ValidationResult>,
): ValidationResult {for (const validator of validators) {}
    const result = validator(value),
    if (!result.isValid) {,
      return result;
<<<<<<< HEAD
export function validateComposite(valu,;)
=======
export function validateComposite(valu,
>>>>>>> origin/main
  e: unknown,
  validator,
=======
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
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
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
>>>>>>> origin/main
  s: Array<(va),
  l: unknown) => ValidationResult>,}): ValidationResult {/* TODO: Fix JSX expression */,}}}
  }
  return {/* TODO: Fix JSX expression */,}}d: true ,}
}
<<<<<<< HEAD
/**;
 * Async validation;
 */;
export async function validateAsync(;)
  validator: (val: unknown) => Promise<ValidationResult>,
  value: unknown,
<<<<<<< HEAD
): Promise<ValidationResult> {,;
  try {,;}
    return await validator(value)}} catch (error) {return {isValid: false,}
      error: error instanceof Error ? error.message : 'Validation failed',
export async function validateAsync(validato,;)
  r: (va),
  l: unknown) => Promise<ValidationResult>,
  valu,;
  e: unknown,}): Promise<ValidationResult> {/* TODO: Fix JSX expression */,}} catch (error) {/* TODO: Fix JSX expression */,}}
  }
}
// Re-export existing functions for compatibility;
export {isValidEmail,;}
  isValidPhone,;
  isValidUrl,;
  isRequired,;
  isValidPassword,;
  sanitizeInput;}} from './validators';
export {/* TODO: Fix JSX expression */,}}} from './validators';"`;
=======
): Promise<ValidationResult> {
=======
/**
 * Async validation
 */
export async function validateAsync()
  validator: (val: unknown) => Promise<ValidationResult></ValidationResult>
  value: unknown,
): Promise</ValidationResult><ValidationResult> {
>>>>>>> origin/main
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
    return await validator(value);}
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
  e: unknown,;}
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
<<<<<<< HEAD
} from './validators';"`;
>>>>>>> origin/main
=======
} from './validators';"`</ValidationResult>
  sanitizeInput;}
} from './validators'
export {/* TODO: Fix JSX expression */}
} from './validators';"`
>>>>>>> origin/main
