/**
 * Security Enhancement Utilities
 * Comprehensive security measures and monitoring
 */

export interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
  enableSecureCookies: boolean;
  enableContentTypeOptions: boolean;
  enableFrameOptions: boolean;
}

export interface SecurityReport {
  timestamp: number;
  violations: SecurityViolation[];
  recommendations: SecurityRecommendation[];
  score: number;
}

export interface SecurityViolation {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendation: string;
}

export interface SecurityRecommendation {
  category: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

export class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private config: SecurityConfig;
  private violations: SecurityViolation[] = [];
  private recommendations: SecurityRecommendation[] = [];

  private constructor(config: SecurityConfig) {
    this.config = config;
    this.initialize();
  }

  public static getInstance(config?: SecurityConfig): SecurityEnhancer {
    if (!SecurityEnhancer.instance && config) {
      SecurityEnhancer.instance = new SecurityEnhancer(config);
    }
    return SecurityEnhancer.instance;
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupSecurityHeaders();
    this.setupContentSecurityPolicy();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupReferrerPolicy();
    this.setupPermissionsPolicy();
    this.monitorSecurityViolations();
    this.generateSecurityRecommendations();
  }

  private setupSecurityHeaders(): void {
    if (typeof document === 'undefined') return;

    // These would typically be set by the server, but we can add client-side checks
    this.checkSecurityHeaders();
  }

  private checkSecurityHeaders(): void {
    const requiredHeaders = [
      'content-security-policy',
      'x-frame-options',
      'x-content-type-options',
      'x-xss-protection',
      'strict-transport-security',
      'referrer-policy',
      'permissions-policy'
    ];

    // Note: In a real application, these headers would be checked via a server request
    // For client-side, we can only validate what's available
    this.validateClientSideSecurity();
  }

  private validateClientSideSecurity(): void {
    // Check for secure context
    if (!window.isSecureContext) {
      this.addViolation({
        type: 'insecure_context',
        severity: 'high',
        description: 'Application is not running in a secure context',
        recommendation: 'Ensure the application is served over HTTPS'
      });
    }

    // Check for mixed content
    this.checkMixedContent();

    // Check for insecure protocols
    this.checkInsecureProtocols();
  }

  private checkMixedContent(): void {
    const images = document.querySelectorAll('img');
    const scripts = document.querySelectorAll('script');
    const links = document.querySelectorAll('link');

    [...images, ...scripts, ...links].forEach(element => {
      const src = element.getAttribute('src') || element.getAttribute('href');
      if (src && src.startsWith('http://')) {
        this.addViolation({
          type: 'mixed_content',
          severity: 'medium',
          description: `Mixed content detected: ${src}`,
          recommendation: 'Use HTTPS for all resources'
        });
      }
    });
  }

  private checkInsecureProtocols(): void {
    if (window.location.protocol !== 'https:') {
      this.addViolation({
        type: 'insecure_protocol',
        severity: 'high',
        description: 'Application is not using HTTPS',
        recommendation: 'Redirect all HTTP traffic to HTTPS'
      });
    }
  }

  private setupContentSecurityPolicy(): void {
    if (!this.config.enableCSP) return;

    // CSP violations are typically handled by the browser
    // We can monitor them if the server sets up a reporting endpoint
    this.monitorCSPViolations();
  }

  private monitorCSPViolations(): void {
    if (typeof document === 'undefined') return;

    // Listen for CSP violation events
    document.addEventListener('securitypolicyviolation', (event) => {
      this.addViolation({
        type: 'csp_violation',
        severity: 'medium',
        description: `CSP violation: ${event.violatedDirective}`,
        recommendation: 'Review and update Content Security Policy'
      });
    });
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // XSS protection is typically handled by the browser
    // We can add additional client-side validation
    this.setupXSSValidation();
  }

  private setupXSSValidation(): void {
    if (typeof document === 'undefined') return;

    // Sanitize user input
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        const sanitized = this.sanitizeInput(target.value);
        if (sanitized !== target.value) {
          target.value = sanitized;
          this.addViolation({
            type: 'xss_attempt',
            severity: 'high',
            description: 'Potential XSS attempt detected',
            recommendation: 'Input was sanitized automatically'
          });
        }
      });
    });
  }

  private sanitizeInput(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Check if the page is being framed
    if (window !== window.top) {
      this.addViolation({
        type: 'clickjacking_risk',
        severity: 'medium',
        description: 'Page is being loaded in a frame',
        recommendation: 'Implement X-Frame-Options header'
      });
    }
  }

  private setupReferrerPolicy(): void {
    if (!this.config.enableReferrerPolicy) return;

    // Referrer policy is typically set by the server
    // We can add client-side validation
    this.validateReferrerPolicy();
  }

  private validateReferrerPolicy(): void {
    // Check for sensitive data in URL
    const sensitiveParams = ['password', 'token', 'key', 'secret', 'auth'];
    const urlParams = new URLSearchParams(window.location.search);
    
    sensitiveParams.forEach(param => {
      if (urlParams.has(param)) {
        this.addViolation({
          type: 'sensitive_data_in_url',
          severity: 'high',
          description: `Sensitive parameter '${param}' found in URL`,
          recommendation: 'Use POST requests for sensitive data'
        });
      }
    });
  }

  private setupPermissionsPolicy(): void {
    if (!this.config.enablePermissionsPolicy) return;

    // Permissions policy is typically set by the server
    // We can add client-side validation
    this.validatePermissionsPolicy();
  }

  private validatePermissionsPolicy(): void {
    // Check for unnecessary permissions
    if ('geolocation' in navigator) {
      this.addRecommendation({
        category: 'permissions',
        title: 'Geolocation Permission',
        description: 'Consider if geolocation access is necessary',
        priority: 'medium'
      });
    }

    if ('camera' in navigator) {
      this.addRecommendation({
        category: 'permissions',
        title: 'Camera Permission',
        description: 'Consider if camera access is necessary',
        priority: 'medium'
      });
    }
  }

  private monitorSecurityViolations(): void {
    if (typeof window === 'undefined') return;

    // Monitor for suspicious activities
    this.monitorSuspiciousActivity();
    this.monitorConsoleErrors();
    this.monitorNetworkRequests();
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for rapid clicks (potential bot activity)
    let clickCount = 0;
    let lastClickTime = 0;

    document.addEventListener('click', (event) => {
      const now = Date.now();
      if (now - lastClickTime < 100) {
        clickCount++;
        if (clickCount > 10) {
          this.addViolation({
            type: 'suspicious_activity',
            severity: 'medium',
            description: 'Rapid clicking detected',
            recommendation: 'Implement rate limiting'
          });
        }
      } else {
        clickCount = 0;
      }
      lastClickTime = now;
    });
  }

  private monitorConsoleErrors(): void {
    const originalError = console.error;
    console.error = (...args) => {
      // Check for security-related errors
      const message = args.join(' ');
      if (message.includes('CSP') || message.includes('XSS') || message.includes('security')) {
        this.addViolation({
          type: 'console_security_error',
          severity: 'low',
          description: `Security-related console error: ${message}`,
          recommendation: 'Review console errors for security issues'
        });
      }
      originalError.apply(console, args);
    };
  }

  private monitorNetworkRequests(): void {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0] as string;
      
      // Check for suspicious URLs
      if (this.isSuspiciousUrl(url)) {
        this.addViolation({
          type: 'suspicious_request',
          severity: 'high',
          description: `Suspicious network request to: ${url}`,
          recommendation: 'Review and validate all network requests'
        });
      }

      return originalFetch.apply(window, args);
    };
  }

  private isSuspiciousUrl(url: string): boolean {
    const suspiciousPatterns = [
      /\.onion$/,
      /\.bit$/,
      /malware/i,
      /phishing/i,
      /suspicious/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  private addViolation(violation: SecurityViolation): void {
    this.violations.push(violation);
    
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Violation:', violation);
    }
  }

  private addRecommendation(recommendation: SecurityRecommendation): void {
    this.recommendations.push(recommendation);
  }

  private generateSecurityRecommendations(): void {
    // Generate recommendations based on current configuration
    if (!this.config.enableCSP) {
      this.addRecommendation({
        category: 'headers',
        title: 'Content Security Policy',
        description: 'Implement Content Security Policy to prevent XSS attacks',
        priority: 'high'
      });
    }

    if (!this.config.enableHSTS) {
      this.addRecommendation({
        category: 'headers',
        title: 'HTTP Strict Transport Security',
        description: 'Implement HSTS to enforce HTTPS connections',
        priority: 'high'
      });
    }

    if (!this.config.enableClickjackingProtection) {
      this.addRecommendation({
        category: 'headers',
        title: 'X-Frame-Options',
        description: 'Implement X-Frame-Options to prevent clickjacking',
        priority: 'medium'
      });
    }
  }

  public generateReport(): SecurityReport {
    const score = this.calculateSecurityScore();
    
    return {
      timestamp: Date.now(),
      violations: [...this.violations],
      recommendations: [...this.recommendations],
      score
    };
  }

  private calculateSecurityScore(): number {
    let score = 100;
    
    // Deduct points for violations
    this.violations.forEach(violation => {
      switch (violation.severity) {
        case 'critical':
          score -= 25;
          break;
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });

    // Deduct points for missing security features
    if (!this.config.enableCSP) score -= 20;
    if (!this.config.enableHSTS) score -= 15;
    if (!this.config.enableXSSProtection) score -= 10;
    if (!this.config.enableClickjackingProtection) score -= 10;

    return Math.max(0, score);
  }

  public getViolations(): SecurityViolation[] {
    return [...this.violations];
  }

  public getRecommendations(): SecurityRecommendation[] {
    return [...this.recommendations];
  }

  public clearViolations(): void {
    this.violations = [];
  }

  public clearRecommendations(): void {
    this.recommendations = [];
  }
}

export default SecurityEnhancer;