// Security utility functions
import crypto from 'crypto';

/**
 * Generate a secure random string
 */
export function generateSecureToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Hash a string using SHA-256
 */
export function hashString(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

/**
 * Generate a secure password hash
 */
export function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

/**
 * Generate a random salt
 */
export function generateSalt() {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Verify a password against its hash
 */
export function verifyPassword(password, hash, salt) {
  const hashedPassword = hashPassword(password, salt);
  return hashedPassword === hash;
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if a string contains only alphanumeric characters
 */
export function isAlphanumeric(input) {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(input);
}

/**
 * Generate a secure session ID
 */
export function generateSessionId() {
  return crypto.randomBytes(32).toString('base64url');
}

/**
 * Create a secure hash for file integrity checking
 */
export function createFileHash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

/**
 * Encrypt sensitive data
 */
export function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

/**
 * Decrypt sensitive data
 */
export function decryptData(encryptedData, key) {
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const encrypted = parts[1];
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}