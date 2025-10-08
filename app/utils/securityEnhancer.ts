import React from 'react';
/**
 * Security Enhancer
 * Provides comprehensive security utilities and monitoring
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  allowedOrigins: string[];
  trustedDomains: string[];
}

interface SecurityMetrics {
  blockedRequests: number;
  suspiciousActivity: number;
  securityViolations: number;
  lastScanTime: number;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private eventListeners: Array<() => void> = [];

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      allowedOrigins: ['https://zion.app', 'https://www.zion.app'],
      trustedDomains: ['zion.app', 'www.zion.app'],
      ...config,
    };

    this.metrics = {
      blockedRequests: 0,
      suspiciousActivity: 0,
      securityViolations: 0,
      lastScanTime: Date.now(),
    };

    this.initializeSecurity();
  }

  private initializeSecurity(): void {
    if (typeof window === 'undefined') return;

    this.setupContentSecurityPolicy();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.monitorSuspiciousActivity();
    this.monitorConsoleAccess();
    this.setupSecureHeaders();
  }

  private setupContentSecurityPolicy(): void {
    if (!this.config.enableContentSecurityPolicy) return;

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);
  }

  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const token = this.generateCSRFToken();
    sessionStorage.setItem('csrf-token', token);

    // Add token to all forms
    this.addCSRFTokenToForms();
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private addCSRFTokenToForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf-token';
      tokenInput.value = sessionStorage.getItem('csrf-token') || '';
      form.appendChild(tokenInput);
    });
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for suspicious patterns
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /eval\s*\(/gi,
      /document\.write/gi,
    ];

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent || '';
              suspiciousPatterns.forEach(pattern => {
                if (pattern.test(text)) {
                  this.metrics.securityViolations++;
                  this.logSecurityViolation('Suspicious content detected', text);
                }
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.eventListeners.push(() => observer.disconnect());
  }

  private monitorConsoleAccess(): void {
    const originalConsole = { ...console };
    
    // Override console methods to detect debugging
    ['log', 'warn', 'error', 'info'].forEach(method => {
      (console as Record<string, Function>)[method] = (...args: unknown[]) => {
        this.metrics.suspiciousActivity++;
        originalConsole[method](...args);
      };
    });
  }

  private setupSecureHeaders(): void {
    // These would typically be set by the server, but we can add meta tags
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ];

    if (this.config.enableHSTS) {
      headers.push({ name: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' });
    }

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }

  private logSecurityViolation(type: string, details: string): void {
    const violation = {
      type,
      details,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Send to security monitoring service
    if ('gtag' in window) {
      (window as any).gtag('event', 'security_violation', {
        violation_type: type,
        violation_details: details,
      });
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.warn('Security Violation:', violation);
    }
  }

  /**
   * Validate input for XSS
   */
  sanitizeInput(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  /**
   * Validate URL for security
   */
  validateUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return this.config.allowedOrigins.includes(urlObj.origin);
    } catch {
      return false;
    }
  }

  /**
   * Check if domain is trusted
   */
  isTrustedDomain(domain: string): boolean {
    return this.config.trustedDomains.some(trusted => 
      domain === trusted || domain.endsWith('.' + trusted)
    );
  }

  /**
   * Get security metrics
   */
  getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  /**
   * Get security recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.securityViolations > 0) {
      recommendations.push('Review and fix security violations detected');
    }

    if (this.metrics.suspiciousActivity > 10) {
      recommendations.push('High suspicious activity detected - review security logs');
    }

    if (this.metrics.blockedRequests > 0) {
      recommendations.push('Some requests were blocked - review CSP and security policies');
    }

    return recommendations;
  }

  /**
   * Run security scan
   */
  runSecurityScan(): {
    score: number;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    let score = 100;

    // Check for mixed content
    if (window.location.protocol === 'https:') {
      const mixedContent = document.querySelectorAll('img[src^="http:"], script[src^="http:"], link[href^="http:"]');
      if (mixedContent.length > 0) {
        issues.push('Mixed content detected - some resources are loaded over HTTP');
        score -= 20;
      }
    }

    // Check for external scripts without integrity
    const externalScripts = document.querySelectorAll('script[src]:not([integrity])');
    if (externalScripts.length > 0) {
      issues.push('External scripts without integrity checks detected');
      score -= 15;
    }

    // Check for forms without CSRF protection
    const forms = document.querySelectorAll('form:not([data-csrf-protected])');
    if (forms.length > 0) {
      issues.push('Forms without CSRF protection detected');
      score -= 10;
    }

    // Check for insecure cookies
    const cookies = document.cookie.split(';');
    const insecureCookies = cookies.filter(cookie => 
      cookie.trim().includes('=') && !cookie.includes('Secure') && !cookie.includes('HttpOnly')
    );
    if (insecureCookies.length > 0) {
      issues.push('Insecure cookies detected');
      score -= 10;
    }

    return {
      score: Math.max(0, score),
      issues,
      recommendations: this.getRecommendations(),
    };
  }

  /**
   * Cleanup security monitoring
   */
  cleanup(): void {
    this.eventListeners.forEach(cleanup => cleanup());
    this.eventListeners = [];
  }
}

export default SecurityEnhancer;