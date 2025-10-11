// Validation utilities
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[1-9][\d]{0,15}$/;

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return EMAIL_REGEX.test(email);
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const cleanedPhone = phone.replace(/[\s-()]/g, '');
  return PHONE_REGEX.test(cleanedPhone);
}

export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isValidPassword(password: string): boolean {
  if (!password || typeof password !== 'string') return false;
  
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  
  // Only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
}

export function isValidUsername(username: string): boolean {
  if (!username || typeof username !== 'string') return false;
  
  // Alphanumeric and underscores only, 3-20 characters
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
}

export function isValidAge(age: number): boolean {
  return typeof age === 'number' && age >= 0 && age <= 150;
}

export function isValidDate(date: string | Date): boolean {
  if (!date) return false;
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj instanceof Date && !isNaN(dateObj.getTime());
}

export function isValidCreditCard(cardNumber: string): boolean {
  if (!cardNumber || typeof cardNumber !== 'string') return false;
  
  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s-]/g, '');
  
  // Check if it's all digits and proper length
  if (!/^\d{13,19}$/.test(cleaned)) return false;
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

export function isValidSSN(ssn: string): boolean {
  if (!ssn || typeof ssn !== 'string') return false;
  
  // Remove spaces and dashes
  const cleaned = ssn.replace(/[\s-]/g, '');
  
  // Check format: XXX-XX-XXXX
  const ssnRegex = /^\d{9}$/;
  return ssnRegex.test(cleaned);
}

export function isValidZipCode(zipCode: string): boolean {
  if (!zipCode || typeof zipCode !== 'string') return false;
  
  // US ZIP code format: 12345 or 12345-6789
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
}

export function isValidIPAddress(ip: string): boolean {
  if (!ip || typeof ip !== 'string') return false;
  
  // IPv4 format
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(ip);
}

export function isValidUUID(uuid: string): boolean {
  if (!uuid || typeof uuid !== 'string') return false;
  
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

export function isValidHexColor(color: string): boolean {
  if (!color || typeof color !== 'string') return false;
  
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(color);
}

export function isValidJSON(jsonString: string): boolean {
  if (!jsonString || typeof jsonString !== 'string') return false;
  
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

export function isValidBase64(base64String: string): boolean {
  if (!base64String || typeof base64String !== 'string') return false;
  
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(base64String) && base64String.length % 4 === 0;
}

// Composite validation function
export function validateFormData(data: Record<string, unknown>, rules: ValidationRules): ValidationResult {
  const errors: Record<string, string> = {};
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field];
    
    for (const rule of fieldRules) {
      const result = rule.validator(value, rule.params);
      if (!result.isValid) {
        errors[field] = result.error || 'Invalid value';
        break;
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export interface ValidationRule {
  validator: (value: unknown, params?: unknown) => ValidationResult;
  params?: unknown;
}

export interface ValidationRules {
  [field: string]: ValidationRule[];
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  errors?: Record<string, string>;
}