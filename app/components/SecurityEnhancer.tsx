'use client'
import React, { useEffect } from 'react'
import { Shield, CheckCircle, AlertTriangle, Lock } from 'lucide-react'

interface SecurityEnhancerProps {
  children: React.ReactNode
  enableCSP?: boolean
  enableHSTS?: boolean
  enableXSSProtection?: boolean
  className?: string
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ 
  children, 
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  className = ''
}) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers via meta tags
      if (typeof document !== 'undefined') {
        // Content Security Policy
        if (enableCSP) {
          const cspMeta = document.createElement('meta')
          cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
          cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';")
          document.head.appendChild(cspMeta)
        }

        // X-Content-Type-Options
        const contentTypeMeta = document.createElement('meta')
        contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options')
        contentTypeMeta.setAttribute('content', 'nosniff')
        document.head.appendChild(contentTypeMeta)

        // X-Frame-Options
        const frameOptionsMeta = document.createElement('meta')
        frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options')
        frameOptionsMeta.setAttribute('content', 'DENY')
        document.head.appendChild(frameOptionsMeta)

        // X-XSS-Protection
        if (enableXSSProtection) {
          const xssMeta = document.createElement('meta')
          xssMeta.setAttribute('http-equiv', 'X-XSS-Protection')
          xssMeta.setAttribute('content', '1; mode=block')
          document.head.appendChild(xssMeta)
        }

        // Referrer Policy
        const referrerMeta = document.createElement('meta')
        referrerMeta.setAttribute('name', 'referrer')
        referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin')
        document.head.appendChild(referrerMeta)

        // HSTS (if HTTPS)
        if (enableHSTS && window.location.protocol === 'https:') {
          const hstsMeta = document.createElement('meta')
          hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security')
          hstsMeta.setAttribute('content', 'max-age=31536000; includeSubDomains')
          document.head.appendChild(hstsMeta)
        }
      }
    }

    enhanceSecurity()

    // Monitor security events
    const handleSecurityEvent = (event: SecurityPolicyViolationEvent) => {
      console.warn('CSP Violation:', event)
      // Send to monitoring service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'security_violation', {
          event_category: 'Security',
          event_label: event.violatedDirective,
          value: 1
        })
      }
    }

    document.addEventListener('securitypolicyviolation', handleSecurityEvent)

    return () => {
      document.removeEventListener('securitypolicyviolation', handleSecurityEvent)
    }
  }, [enableCSP, enableHSTS, enableXSSProtection])

  return (
    <div className={`security-enhanced ${className}`}>
      {children}
    </div>
  )
}

export default SecurityEnhancer