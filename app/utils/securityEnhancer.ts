import React from 'react'
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
      ...config
    }
    this.metrics = {
      blockedRequests: 0,
      suspiciousActivity: 0,
      securityViolations: 0,
      lastScanTime: Date.now()
    }
    this.initializeSecurity()
  }
  private initializeSecurity(): void {
    if (typeof window === 'undefined') return

    this.setupContentSecurityPolicy()
    this.setupXSSProtection()
    this.setupCSRFProtection()
    this.monitorSuspiciousActivity()
    this.setupSecureHeaders()
  }
  private setupContentSecurityPolicy(): void {
    if (!this.config.enableContentSecurityPolicy) return

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://api.zion.app",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')

    const meta = document.createElement('meta')
    meta.httpEquiv = 'Content-Security-Policy'
    meta.content = csp
    document.head.appendChild(meta)
  }
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return

    const meta = document.createElement('meta')
    meta.httpEquiv = 'X-XSS-Protection'
    meta.content = '1; mode=block'
    document.head.appendChild(meta)
  }
  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return

    // Generate CSRF token
    const token = this.generateCSRFToken()
    document.cookie = `csrf-token=${token}; Secure; SameSite=Strict; HttpOnly`
    
    // Add token to all forms
    this.addCSRFTokenToForms(token)
  }
  private generateCSRFToken(): string {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
  private addCSRFTokenToForms(token: string): void {
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = 'csrf-token'
      input.value = token
      form.appendChild(input)
    })
  }
  private monitorSuspiciousActivity(): void {
    // Monitor for suspicious patterns
    this.monitorConsoleAccess()
    this.monitorDOMManipulation()
    this.monitorNetworkRequests()
  }
  private monitorConsoleAccess(): void {
    const originalConsole = { ...console }
    // Override console methods to detect debugging
    ['log', 'warn', 'error', 'info'].forEach(method => {
      (console as { [key: string]: (...args: unknown[]) => void })[method] = (...args: unknown[]) => {
        this.metrics.suspiciousActivity++
        originalConsole[method](...args);
      }
    });
  }
  private monitorDOMManipulation(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              if (element.tagName === 'SCRIPT' && !element.getAttribute('src')) {
                this.metrics.securityViolations++
                console.warn('Suspicious inline script detected')
              }
            }
          })
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    this.eventListeners.push(() => observer.disconnect())
  }
  private monitorNetworkRequests(): void {
    const originalFetch = window.fetch
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input instanceof Request ? input.url : input.toString()
      
      // Check if request is to allowed origins
      if (!this.isAllowedOrigin(url)) {
        this.metrics.blockedRequests++
        throw new Error('Request blocked: Origin not allowed')
      }
      return originalFetch(input, init)
    }
  }
  private isAllowedOrigin(url: string): boolean {
    try {
      const urlObj = new URL(url)
      return this.config.allowedOrigins.some(origin => 
        urlObj.origin === origin || urlObj.hostname.endsWith(origin.replace('https://', ''))
      )
    } catch {
      return false
    }
  }
  private setupSecureHeaders(): void {
    // These would typically be set by the server, but we can add meta tags
    const headers = [
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ]

    headers.forEach(header => {
      const meta = document.createElement('meta')
      meta.httpEquiv = header.name
      meta.content = header.content
      document.head.appendChild(meta)
    })
  }
  public sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol,
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
  }
  public validateInput(input: string, type: 'email' | 'url' | 'text'): boolean {
    switch (type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
      case 'url':
        try {
          new URL(input)
          return true
        } catch {
          return false
        }
      case 'text':
        return input.length > 0 && input.length < 1000
      default:
        return false
    }
  }
  public generateSecurePassword(length: number = 16): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = ''
    
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password
  }
  public hashPassword(password: string): Promise<string> {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
      .then(hash => {
        return Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('')
      })
  }
  public getMetrics(): SecurityMetrics {
    return { ...this.metrics }
  }
  public generateSecurityReport(): string {
    const metrics = this.getMetrics()
    return `
Security Report:
- Blocked Requests: ${metrics.blockedRequests}
- Suspicious Activity: ${metrics.suspiciousActivity}
- Security Violations: ${metrics.securityViolations}
- Last Scan: ${new Date(metrics.lastScanTime).toLocaleString()}
    `.trim()
  }
  public cleanup(): void {
    this.eventListeners.forEach(cleanup => cleanup())
    this.eventListeners = []
  }
}
// Export singleton instance
export const securityEnhancer = new SecurityEnhancer()

// Export class for custom instances
export { SecurityEnhancer, type SecurityConfig, type SecurityMetrics }