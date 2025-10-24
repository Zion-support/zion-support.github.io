// Security manager utility
export interface SecurityConfig {
  enabled: boolean
  maxAttempts: number
  lockoutDuration: number
  sessionTimeout: number
  requireHTTPS: boolean
  enableCSP: boolean
}

export class SecurityManager {
  private config: SecurityConfig
  private attempts: Map<string, { count: number; lastAttempt: Date }> = new Map()
  private sessions: Map<string, { userId: string; lastActivity: Date }> = new Map()

  constructor(config: SecurityConfig) {
    this.config = config
  }

  recordAttempt(identifier: string): boolean {
    if (!this.config.enabled) return true

    const now = new Date()
    const existing = this.attempts.get(identifier)

    if (!existing) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
      return true
    }

    // Check if lockout period has expired
    const timeSinceLastAttempt = now.getTime() - existing.lastAttempt.getTime()
    if (timeSinceLastAttempt > this.config.lockoutDuration) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now })
      return true
    }

    // Increment attempt count
    existing.count++
    existing.lastAttempt = now

    return existing.count <= this.config.maxAttempts
  }

  isLocked(identifier: string): boolean {
    const existing = this.attempts.get(identifier)
    if (!existing) return false

    const now = new Date()
    const timeSinceLastAttempt = now.getTime() - existing.lastAttempt.getTime()
    
    return existing.count >= this.config.maxAttempts && 
           timeSinceLastAttempt < this.config.lockoutDuration
  }

  createSession(sessionId: string, userId: string): void {
    this.sessions.set(sessionId, {
      userId,
      lastActivity: new Date()
    })
  }

  validateSession(sessionId: string): boolean {
    const session = this.sessions.get(sessionId)
    if (!session) return false

    const now = new Date()
    const timeSinceLastActivity = now.getTime() - session.lastActivity.getTime()
    
    if (timeSinceLastActivity > this.config.sessionTimeout) {
      this.sessions.delete(sessionId)
      return false
    }

    // Update last activity
    session.lastActivity = now
    return true
  }

  invalidateSession(sessionId: string): void {
    this.sessions.delete(sessionId)
  }

  resetAttempts(identifier: string): void {
    this.attempts.delete(identifier)
  }

  clearAllAttempts(): void {
    this.attempts.clear()
  }

  clearExpiredSessions(): void {
    const now = new Date()
    for (const [sessionId, session] of this.sessions.entries()) {
      const timeSinceLastActivity = now.getTime() - session.lastActivity.getTime()
      if (timeSinceLastActivity > this.config.sessionTimeout) {
        this.sessions.delete(sessionId)
      }
    }
  }

  setupSecurityHeaders(): void {
    if (typeof document === 'undefined') return

    // Set Content Security Policy
    if (this.config.enableCSP) {
      const meta = document.createElement('meta')
      meta.httpEquiv = 'Content-Security-Policy'
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
      document.head.appendChild(meta)
    }

    // Force HTTPS redirect
    if (this.config.requireHTTPS && location.protocol !== 'https:') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length))
    }
  }
}

export default SecurityManager
