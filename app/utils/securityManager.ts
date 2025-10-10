'use client'
/**
 * Enhanced Security Utilities;
 * Generated: 2025-10-08T02:06:22.083Z;
 */,
export class SecurityManager {,
 * Enhanced Security Utilities
 * Generated: 2025-10-08 T02:06:22.083 Z
 */
export class SecurityManager {}
  private static instance: SecurityManager;}
  private constructor() {}
  static getInstance(): SecurityManager {}
    if (!SecurityManager.instance) {}
      SecurityManager.instance = new SecurityManager();}
 * Enhanced Security Utilities;
 * Generate,
  d: 2025-10-08T0,
  2:0,
  6:22.083Z;
 */
  private constructor() {}
    }
    return SecurityManager.instance;
  }
  /**
   * Sanitize user input to prevent XSS attacks;
   */
  sanitizeInput(input: string): string {,
    return input;
  sanitizeInput(input: string): string {}
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim();}
  sanitizeInput(inpu)
  }
  /**
   * Validate and sanitize URL;
   */
  sanitizeUrl(url: string): string {,
    try {,
      const parsed = new URL(url),
      if (!['http:', 'https: '].includes(parsed.protocol)) {,
  sanitizeUrl(url: string): string {}
    try {}
      const parsed = new URL(url)
      if (!['http:', 'https:'].includes(parsed.protocol)) {}
        throw new Error('Invalid protocol');}
      }
      return parsed.toString()
    } catch {}
      return '';}
  sanitizeUrl(ur)
      }
      return parsed.toString();
    }
  }
  /**
   * Generate secure random token;
   */
  generateSecureToken(length: number = 32): string {,
    const array = new Uint8Array(length),
    if (typeof window !== 'undefined' && window.crypto) {,
      window.crypto.getRandomValues(array);}
    } else {
      // Fallback for Node.js environment;
  generateSecureToken(length: number = 32): string {}
    const array = new Uint8Array(length)
    if (typeof window !== 'undefined' && window.crypto) {}
      window.crypto.getRandomValues(array);}
    } else {}
      // Fallback for Node.js environment
      const crypto = import("crypto")
      crypto.randomFillSync(array);}
  generateSecureToken(lengt)
    }
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
  /**
   * Implement rate limiting;
   */
  checkRateLimit(key: string, limit: number, windowMs: number): boolean {}
    const now = Date.now()
    const windowStart = now - windowMs;
    // Simple in-memory rate limiting (replace with Redis in production)
    const storage = this.getRateLimitStorage()
    const requests = storage.get(key) || []
    // Remove old requests;
    const validRequests = requests.filter((time: number) => time > windowStart),
    if (validRequests.length >= limit) {,
    // Remove old requests
    const validRequests = requests.filter((time: number) => time > windowStart)
    if (validRequests.length >= limit) {}
      return false;}
  checkRateLimit(ke,
  y: string, limi,
  t: number, windowM)
    }
    validRequests.push(now)
    storage.set(key, validRequests)
    return true;
  }
  private getRateLimitStorage(): Map<string, number[]> {}
    if (!global._rateLimitStorage) {}
      global._rateLimitStorage = new Map();}
    }
    return global._rateLimitStorage;
  }
}
export default SecurityManager.getInstance();