// Security Headers utility
export interface SecurityHeaders {
  'Content-Security-Policy': string;
  'X-Frame-Options': string;
  'X-Content-Type-Options': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
  'X-XSS-Protection': string;
}

export class SecurityHeadersManager {
  private static instance: SecurityHeadersManager;
  private defaultHeaders: SecurityHeaders;

  constructor() {
    this.defaultHeaders = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-XSS-Protection': '1; mode=block'
    };
  }

  static getInstance(): SecurityHeadersManager {
    if (!SecurityHeadersManager.instance) {
      SecurityHeadersManager.instance = new SecurityHeadersManager();
    }
    return SecurityHeadersManager.instance;
  }

  getDefaultHeaders(): SecurityHeaders {
    return { ...this.defaultHeaders };
  }

  updateHeader(key: keyof SecurityHeaders, value: string): void {
    this.defaultHeaders[key] = value;
  }

  getHeadersForEnvironment(environment: 'development' | 'production'): SecurityHeaders {
    const headers = this.getDefaultHeaders();
    
    if (environment === 'development') {
      // Relaxed CSP for development
      headers['Content-Security-Policy'] = "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https: ws: wss:;";
    }

    return headers;
  }

  applyHeadersToDocument(): void {
    if (typeof document === 'undefined') return;

    const headers = this.getHeadersForEnvironment(
      process.env.NODE_ENV === 'production' ? 'production' : 'development'
    );

    // Note: In a real application, these headers should be set by the server
    // This is just for demonstration purposes
    Object.entries(headers).forEach(([key, value]) => {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', key);
      meta.setAttribute('content', value);
      document.head.appendChild(meta);
    });
  }
}

export default SecurityHeadersManager;