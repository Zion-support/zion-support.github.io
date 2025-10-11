// Security Manager utilities
export class SecurityManager {
  private static instance: SecurityManager;
  private securityConfig: SecurityConfig;

  private constructor() {
    this.securityConfig = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableContentTypeOptions: true,
      enableFrameOptions: true,
      enableReferrerPolicy: true,
      allowedOrigins: [],
      maxRequestSize: 1024 * 1024, // 1MB
      rateLimitWindow: 15 * 60 * 1000, // 15 minutes
      maxRequestsPerWindow: 100
    };
  }

  static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  setSecurityConfig(config: Partial<SecurityConfig>): void {
    this.securityConfig = { ...this.securityConfig, ...config };
  }

  getSecurityConfig(): SecurityConfig {
    return { ...this.securityConfig };
  }

  validateRequest(request: SecurityRequest): SecurityValidationResult {
    const errors: string[] = [];

    // Check request size
    if (request.size > this.securityConfig.maxRequestSize) {
      errors.push('Request size exceeds maximum allowed size');
    }

    // Check origin
    if (this.securityConfig.allowedOrigins.length > 0) {
      if (!this.securityConfig.allowedOrigins.includes(request.origin)) {
        errors.push('Request origin not allowed');
      }
    }

    // Check for malicious patterns
    if (this.containsMaliciousContent(request.body)) {
      errors.push('Request contains potentially malicious content');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private containsMaliciousContent(content: string): boolean {
    const maliciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>.*?<\/embed>/gi
    ];

    return maliciousPatterns.some(pattern => pattern.test(content));
  }

  generateSecurityHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};

    if (this.securityConfig.enableCSP) {
      headers['Content-Security-Policy'] = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
    }

    if (this.securityConfig.enableHSTS) {
      headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains';
    }

    if (this.securityConfig.enableXSSProtection) {
      headers['X-XSS-Protection'] = '1; mode=block';
    }

    if (this.securityConfig.enableContentTypeOptions) {
      headers['X-Content-Type-Options'] = 'nosniff';
    }

    if (this.securityConfig.enableFrameOptions) {
      headers['X-Frame-Options'] = 'DENY';
    }

    if (this.securityConfig.enableReferrerPolicy) {
      headers['Referrer-Policy'] = 'strict-origin-when-cross-origin';
    }

    return headers;
  }

  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  hashPassword(password: string): string {
    // In a real implementation, use a proper hashing library like bcrypt
    // This is a simplified example
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  validateCSRFToken(token: string, sessionToken: string): boolean {
    return token === sessionToken;
  }
}

export interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableContentTypeOptions: boolean;
  enableFrameOptions: boolean;
  enableReferrerPolicy: boolean;
  allowedOrigins: string[];
  maxRequestSize: number;
  rateLimitWindow: number;
  maxRequestsPerWindow: number;
}

export interface SecurityRequest {
  origin: string;
  body: string;
  size: number;
  headers: Record<string, string>;
}

export interface SecurityValidationResult {
  isValid: boolean;
  errors: string[];
}

// Export singleton instance
export const securityManager = SecurityManager.getInstance();

// Utility functions
export const validateRequest = (request: SecurityRequest): SecurityValidationResult => {
  return securityManager.validateRequest(request);
};

export const generateSecurityHeaders = (): Record<string, string> => {
  return securityManager.generateSecurityHeaders();
};

export const sanitizeInput = (input: string): string => {
  return securityManager.sanitizeInput(input);
};

export const hashPassword = (password: string): string => {
  return securityManager.hashPassword(password);
};

export const generateCSRFToken = (): string => {
  return securityManager.generateCSRFToken();
};

export const validateCSRFToken = (token: string, sessionToken: string): boolean => {
  return securityManager.validateCSRFToken(token, sessionToken);
};