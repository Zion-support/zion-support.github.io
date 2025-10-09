'use client';
/**
 * Enhanced Security Utilities
 * Generated: 2025-10-08T02:06:22.083Z
 */

// Focus management utility
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Skip to main content functionality
const skipToMain = () => {
  const main = document.querySelector('main');
  if (main) {
    focusElement(main);
  }
};


export class SecurityManager {
  private static instance: SecurityManager;
  private constructor() {}
  static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }
  /**
   * Sanitize user input to prevent XSS attacks
   */
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim();
  }
  /**
   * Validate and sanitize URL
   */
  sanitizeUrl(url: string): string {
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        throw new Error('Invalid protocol');
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }
  /**
   * Generate secure random token
   */
  generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
    } else {
      // Fallback for Node.js environment
      const crypto = require('crypto');
      crypto.randomFillSync(array);
    }
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  /**
   * Implement rate limiting
   */
  checkRateLimit(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    // Simple in-memory rate limiting (replace with Redis in production)
    const storage = this.getRateLimitStorage();
    const requests = storage.get(key) || [];
    // Remove old requests
    const validRequests = requests.filter((time: number) => time > windowStart);
    if (validRequests.length >= limit) {
      return false;
    }
    validRequests.push(now);
    storage.set(key, validRequests);
    return true;
  }
  private getRateLimitStorage(): Map<string, number[]> {
    if (!global._rateLimitStorage) {
      global._rateLimitStorage = new Map();
    }
    return global._rateLimitStorage;
  }
}
export default SecurityManager.getInstance();