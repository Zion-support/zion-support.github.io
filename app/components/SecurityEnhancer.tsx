'use client'
import React, { useEffect } from 'react'
interface SecurityEnhancerProps {
  enableCSP?: boolean
  enableHSTS?: boolean
  enableXSSProtection?: boolean
  enableClickjackingProtection?: boolean;}
}
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,}
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add security headers via meta tags
      const addSecurityMeta = useCallback((...args) => {}
        const existing = document.querySelector(`meta[http-equiv="${name}"]`)
        if (!existing) {
          const meta = document.createElement('meta')
          meta.setAttribute('http-equiv', name)
          meta.setAttribute('content', content)
          document.head.appendChild(meta);}
        }
      }
      if (enableXSSProtection) {
        addSecurityMeta('X-Content-Type-Options', 'nosniff')
        addSecurityMeta('X-Frame-Options', 'DENY')
        addSecurityMeta('X-XSS-Protection', '1; mode=block');}
      }
      if (enableClickjackingProtection) {
        addSecurityMeta('X-Frame-Options', 'DENY');}
      }
      if (enableHSTS) {
        addSecurityMeta('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');}
      }
      if (enableCSP) {
        const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none';"
        addSecurityMeta('Content-Security-Policy', csp);}
      }
    }
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection])
  return null
}
export default SecurityEnhancer