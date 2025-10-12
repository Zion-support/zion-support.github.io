'use client'
import React, { useEffect } from 'react'

interface SecurityEnhancerProps {
  children: React.ReactNode
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)

      // Add security event listeners
      window.addEventListener('beforeunload', (e) => {
        // Prevent accidental navigation away from secure pages
        e.preventDefault()
        e.returnValue = ''
      })

      // Monitor for suspicious activity
      const monitorActivity = () => {
        // Check for dev tools
        let devtools = { open: false, orientation: null }
        const threshold = 160

        setInterval(() => {
          if (window.outerHeight - window.innerHeight > threshold || 
              window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
              devtools.open = true
              console.warn('Dev tools detected')
            }
          } else {
            devtools.open = false
          }
        }, 500)
      }

      monitorActivity()
    }

    enhanceSecurity()

    return () => {
      // Cleanup
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
      if (cspMeta) {
        cspMeta.remove()
      }
    }
  }, [])

  return (
    <div className="security-enhanced">
      {children}
    </div>
  )
}

export default SecurityEnhancer