// Security headers utility
export interface SecurityHeadersConfig {
  contentSecurityPolicy?: string
  strictTransportSecurity?: string
  xFrameOptions?: string
  xContentTypeOptions?: string
  referrerPolicy?: string
  permissionsPolicy?: string
}

export class SecurityHeaders {
  private config: SecurityHeadersConfig

  constructor(config: SecurityHeadersConfig = {}) {
    this.config = {
      contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
      strictTransportSecurity: 'max-age=31536000; includeSubDomains',
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',
      permissionsPolicy: 'camera=(), microphone=(), geolocation=()',
      ...config
    }
  }

  getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {}

    if (this.config.contentSecurityPolicy) {
      headers['Content-Security-Policy'] = this.config.contentSecurityPolicy
    }

    if (this.config.strictTransportSecurity) {
      headers['Strict-Transport-Security'] = this.config.strictTransportSecurity
    }

    if (this.config.xFrameOptions) {
      headers['X-Frame-Options'] = this.config.xFrameOptions
    }

    if (this.config.xContentTypeOptions) {
      headers['X-Content-Type-Options'] = this.config.xContentTypeOptions
    }

    if (this.config.referrerPolicy) {
      headers['Referrer-Policy'] = this.config.referrerPolicy
    }

    if (this.config.permissionsPolicy) {
      headers['Permissions-Policy'] = this.config.permissionsPolicy
    }

    return headers
  }

  applyToResponse(response: Response): Response {
    const headers = this.getHeaders()
    
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    return response
  }

  generateMetaTags(): Array<{ name: string; content: string }> {
    const headers = this.getHeaders()
    
    return Object.entries(headers).map(([name, content]) => ({
      name: name.toLowerCase().replace(/-/g, '-'),
      content
    }))
  }
}

export default SecurityHeaders