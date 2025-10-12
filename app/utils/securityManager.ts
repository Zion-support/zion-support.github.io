// Utility file: securityManager

export interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
}

export class SecurityManager {
  private config: SecurityConfig;

  constructor(config: SecurityConfig = {
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    enableCSRFProtection: true
  }) {
    this.config = config;
  }

  enableContentSecurityPolicy(): void {
    if (!this.config.enableCSP || typeof window === 'undefined') return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

  enableHSTS(): void {
    if (!this.config.enableHSTS || typeof window === 'undefined') return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Strict-Transport-Security';
    meta.content = 'max-age=31536000; includeSubDomains';
    document.head.appendChild(meta);
  }

  enableXSSProtection(): void {
    if (!this.config.enableXSSProtection || typeof window === 'undefined') return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);

    const meta2 = document.createElement('meta');
    meta2.httpEquiv = 'X-Frame-Options';
    meta2.content = 'DENY';
    document.head.appendChild(meta2);
  }

  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }

  generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  initialize(): void {
    this.enableContentSecurityPolicy();
    this.enableHSTS();
    this.enableXSSProtection();
  }
}

export const securityManager = new SecurityManager();