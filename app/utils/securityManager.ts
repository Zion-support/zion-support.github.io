'use client'

// Security Manager utility functions
export interface SecurityConfig {
  enabled: boolean
  debug: boolean
  cspEnabled: boolean
}

export interface SecurityEvent {
  type: string
  message: string
  timestamp: number
  severity: 'low' | 'medium' | 'high' | 'critical'
}

class SecurityManager {
  private config: SecurityConfig
  private events: SecurityEvent[] = []

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enabled: true,
      debug: false,
      cspEnabled: true,
      ...config
    }
  }

  init(): void {
    if (!this.config.enabled) return

    this.setupCSP()
    this.setupXSSProtection()
    this.setupCSRFProtection()
    this.setupClickjackingProtection()
  }

  private setupCSP(): void {
    if (!this.config.cspEnabled) return

    const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
    
    const meta = document.createElement('meta')
    meta.httpEquiv = 'Content-Security-Policy'
    meta.content = csp
    document.head.appendChild(meta)
  }

  private setupXSSProtection(): void {
    const meta = document.createElement('meta')
    meta.httpEquiv = 'X-XSS-Protection'
    meta.content = '1; mode=block'
    document.head.appendChild(meta)
  }

  private setupCSRFProtection(): void {
    // Generate CSRF token
    const token = this.generateCSRFToken()
    document.cookie = `csrf-token=${token}; SameSite=Strict; Secure`
  }

  private setupClickjackingProtection(): void {
    const meta = document.createElement('meta')
    meta.httpEquiv = 'X-Frame-Options'
    meta.content = 'DENY'
    document.head.appendChild(meta)
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }

  validateInput(input: string, type: 'email' | 'url' | 'html' | 'sql'): boolean {
    if (!this.config.enabled) return true

    switch (type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
      case 'url':
        return /^https?:\/\/.+\..+/.test(input)
      case 'html':
        return !/<script|javascript:|on\w+=/i.test(input)
      case 'sql':
        return !/(union|select|insert|update|delete|drop|create|alter)/i.test(input)
      default:
        return true
    }
  }

  sanitizeInput(input: string): string {
    if (!this.config.enabled) return input

    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
  }

  logSecurityEvent(type: string, message: string, severity: 'low' | 'medium' | 'high' | 'critical'): void {
    if (!this.config.enabled) return

    const event: SecurityEvent = {
      type,
      message,
      timestamp: Date.now(),
      severity
    }

    this.events.push(event)

    if (this.config.debug) {
      console.log('Security event:', event)
    }
  }

  getEvents(): SecurityEvent[] {
    return [...this.events]
  }

  clearEvents(): void {
    this.events = []
  }
}

// Create default instance
export const securityManager = new SecurityManager({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default securityManager
