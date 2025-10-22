/**
 * Enhanced Security Utilities
 * Generated: 2025-10-08T02:06:22.083Z
 */

export class SecurityManager {
  private static instance: SecurityManager
  private securityConfig: SecurityConfig

  constructor(config: SecurityConfig = {}) {
    this.securityConfig = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableContentTypeSniffing: true,
      enableReferrerPolicy: true,
      enablePermissionsPolicy: true,
      ...config
    }
  }

  static getInstance(config?: SecurityConfig): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager(config)
    }
    return SecurityManager.instance
  }

  initialize(): void {
    this.setupCSP()
    this.setupSecurityHeaders()
    this.setupEventListeners()
  }

  private setupCSP(): void {
    if (!this.securityConfig.enableCSP) return

    const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
    
    const meta = document.createElement('meta')
    meta.httpEquiv = 'Content-Security-Policy'
    meta.content = csp
    document.head.appendChild(meta)
  }

  private setupSecurityHeaders(): void {
    // This would typically be done server-side
    // For client-side, we can only set some headers via meta tags
    if (this.securityConfig.enableHSTS) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'Strict-Transport-Security'
      meta.content = 'max-age=31536000; includeSubDomains'
      document.head.appendChild(meta)
    }

    if (this.securityConfig.enableXSSProtection) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'X-XSS-Protection'
      meta.content = '1; mode=block'
      document.head.appendChild(meta)
    }

    if (this.securityConfig.enableClickjackingProtection) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'X-Frame-Options'
      meta.content = 'DENY'
      document.head.appendChild(meta)
    }

    if (this.securityConfig.enableContentTypeSniffing) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'X-Content-Type-Options'
      meta.content = 'nosniff'
      document.head.appendChild(meta)
    }

    if (this.securityConfig.enableReferrerPolicy) {
      const meta = document.createElement('meta')
      meta.name = 'referrer'
      meta.content = 'strict-origin-when-cross-origin'
      document.head.appendChild(meta)
    }
  }

  private setupEventListeners(): void {
    // Prevent right-click context menu
    document.addEventListener('contextmenu', (e) => {
      if (this.securityConfig.enableRightClickProtection) {
        e.preventDefault()
      }
    })

    // Prevent text selection
    document.addEventListener('selectstart', (e) => {
      if (this.securityConfig.enableTextSelectionProtection) {
        e.preventDefault()
      }
    })

    // Prevent drag and drop
    document.addEventListener('dragstart', (e) => {
      if (this.securityConfig.enableDragDropProtection) {
        e.preventDefault()
      }
    })

    // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener('keydown', (e) => {
      if (this.securityConfig.enableDevToolsProtection) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's')) {
          e.preventDefault()
        }
      }
    })
  }

  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim()
  }

  validateInput(input: string, type: 'email' | 'url' | 'text'): boolean {
    switch (type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
      case 'url':
        return /^https?:\/\/.+/.test(input)
      case 'text':
        return input.length > 0 && input.length < 1000
      default:
        return false
    }
  }

  generateCSRFToken(): string {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }

  hashPassword(password: string): Promise<string> {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
      .then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
      })
  }

  encryptData(data: string, key: string): Promise<string> {
    // This is a simplified example - in production, use a proper encryption library
    return Promise.resolve(btoa(data + key))
  }

  decryptData(encryptedData: string, key: string): Promise<string> {
    // This is a simplified example - in production, use a proper decryption library
    try {
      const decrypted = atob(encryptedData)
      return Promise.resolve(decrypted.replace(key, ''))
    } catch (error) {
      return Promise.reject(new Error('Failed to decrypt data'))
    }
  }

  checkPermission(permission: string): Promise<boolean> {
    if ('permissions' in navigator) {
      return navigator.permissions.query({ name: permission as PermissionName })
        .then(result => result.state === 'granted')
    }
    return Promise.resolve(false)
  }

  getSecurityReport(): SecurityReport {
    return {
      cspEnabled: this.securityConfig.enableCSP,
      hstsEnabled: this.securityConfig.enableHSTS,
      xssProtectionEnabled: this.securityConfig.enableXSSProtection,
      clickjackingProtectionEnabled: this.securityConfig.enableClickjackingProtection,
      contentTypeSniffingEnabled: this.securityConfig.enableContentTypeSniffing,
      referrerPolicyEnabled: this.securityConfig.enableReferrerPolicy,
      permissionsPolicyEnabled: this.securityConfig.enablePermissionsPolicy,
      timestamp: new Date().toISOString()
    }
  }
}

interface SecurityConfig {
  enableCSP?: boolean
  enableHSTS?: boolean
  enableXSSProtection?: boolean
  enableClickjackingProtection?: boolean
  enableContentTypeSniffing?: boolean
  enableReferrerPolicy?: boolean
  enablePermissionsPolicy?: boolean
  enableRightClickProtection?: boolean
  enableTextSelectionProtection?: boolean
  enableDragDropProtection?: boolean
  enableDevToolsProtection?: boolean
}

interface SecurityReport {
  cspEnabled: boolean
  hstsEnabled: boolean
  xssProtectionEnabled: boolean
  clickjackingProtectionEnabled: boolean
  contentTypeSniffingEnabled: boolean
  referrerPolicyEnabled: boolean
  permissionsPolicyEnabled: boolean
  timestamp: string
}

// Default security manager instance
export const securityManager = SecurityManager.getInstance()