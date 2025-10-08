/**
 * Security Headers Configuration
 * Provides comprehensive security headers for the application
 */

export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string;
  strictTransportSecurity?: string;
  xFrameOptions?: string;
  xContentTypeOptions?: string;
  referrerPolicy?: string;
  permissionsPolicy?: string;
  xXSSProtection?: string;
}

export const DEFAULT_SECURITY_HEADERS: SecurityHeadersConfig = {
  // Content Security Policy
  contentSecurityPolicy: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.ziontech.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),

  // HTTP Strict Transport Security (HSTS)
  strictTransportSecurity: 'max-age=31536000; includeSubDomains; preload',

  // Prevent clickjacking
  xFrameOptions: 'DENY',

  // Prevent MIME type sniffing
  xContentTypeOptions: 'nosniff',

  // Referrer Policy
  referrerPolicy: 'strict-origin-when-cross-origin',

  // Permissions Policy (formerly Feature Policy)
  permissionsPolicy: [
    'accelerometer=()',
    'camera=()',
    'geolocation=()',
    'gyroscope=()',
    'magnetometer=()',
    'microphone=()',
    'payment=()',
    'usb=()',
  ].join(', '),

  // XSS Protection (legacy, but still useful for older browsers)
  xXSSProtection: '1; mode=block',
};

export class SecurityHeadersManager {
  private static instance: SecurityHeadersManager;
  private config: SecurityHeadersConfig;

  private constructor(config: SecurityHeadersConfig = DEFAULT_SECURITY_HEADERS) {
    this.config = config;
  }

  static getInstance(config?: SecurityHeadersConfig): SecurityHeadersManager {
    if (!SecurityHeadersManager.instance) {
      SecurityHeadersManager.instance = new SecurityHeadersManager(config);
    }
    return SecurityHeadersManager.instance;
  }

  /**
   * Get all security headers as a record
   */
  getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};

    if (this.config.contentSecurityPolicy) {
      headers['Content-Security-Policy'] = this.config.contentSecurityPolicy;
    }

    if (this.config.strictTransportSecurity) {
      headers['Strict-Transport-Security'] = this.config.strictTransportSecurity;
    }

    if (this.config.xFrameOptions) {
      headers['X-Frame-Options'] = this.config.xFrameOptions;
    }

    if (this.config.xContentTypeOptions) {
      headers['X-Content-Type-Options'] = this.config.xContentTypeOptions;
    }

    if (this.config.referrerPolicy) {
      headers['Referrer-Policy'] = this.config.referrerPolicy;
    }

    if (this.config.permissionsPolicy) {
      headers['Permissions-Policy'] = this.config.permissionsPolicy;
    }

    if (this.config.xXSSProtection) {
      headers['X-XSS-Protection'] = this.config.xXSSProtection;
    }

    return headers;
  }

  /**
   * Get headers as meta tags for client-side rendering
   */
  getMetaTags(): string[] {
    const metaTags: string[] = [];

    if (this.config.contentSecurityPolicy) {
      metaTags.push(
        `<meta http-equiv="Content-Security-Policy" content="${this.config.contentSecurityPolicy}">`
      );
    }

    if (this.config.referrerPolicy) {
      metaTags.push(`<meta name="referrer" content="${this.config.referrerPolicy}">`);
    }

    return metaTags;
  }

  /**
   * Update a specific header
   */
  updateHeader(key: keyof SecurityHeadersConfig, value: string): void {
    this.config[key] = value;
  }

  /**
   * Update multiple headers
   */
  updateHeaders(headers: Partial<SecurityHeadersConfig>): void {
    this.config = { ...this.config, ...headers };
  }

  /**
   * Get current configuration
   */
  getConfig(): SecurityHeadersConfig {
    return { ...this.config };
  }

  /**
   * Validate security headers configuration
   */
  validate(): { valid: boolean; errors: string[]; warnings: string[] } {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate CSP
    if (!this.config.contentSecurityPolicy) {
      warnings.push('Content-Security-Policy is not set');
    } else if (this.config.contentSecurityPolicy.includes("'unsafe-eval'")) {
      warnings.push("CSP contains 'unsafe-eval' which may pose security risks");
    }

    // Validate HSTS
    if (!this.config.strictTransportSecurity) {
      warnings.push('Strict-Transport-Security is not set');
    } else if (!this.config.strictTransportSecurity.includes('max-age=')) {
      errors.push('Strict-Transport-Security must include max-age directive');
    }

    // Validate X-Frame-Options
    if (!this.config.xFrameOptions) {
      warnings.push('X-Frame-Options is not set, application may be vulnerable to clickjacking');
    }

    // Validate X-Content-Type-Options
    if (!this.config.xContentTypeOptions) {
      warnings.push('X-Content-Type-Options is not set, MIME type sniffing may occur');
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Generate Next.js security headers configuration
   */
  getNextJsConfig(): Array<{ key: string; value: string }> {
    const headers = this.getHeaders();
    return Object.entries(headers).map(([key, value]) => ({
      key,
      value,
    }));
  }

  /**
   * Apply headers to a Response object
   */
  applyToResponse(response: Response): Response {
    const headers = this.getHeaders();
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }
}

export const securityHeaders = SecurityHeadersManager.getInstance();
export default SecurityHeadersManager;
