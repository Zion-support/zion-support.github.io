'use client'
import React, { useEffect } from 'react'

interface SecurityEnhancerProps {
  children: React.ReactNode
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers (Note: These would typically be set server-side)
      // const securityHeaders = {
      //   'X-Content-Type-Options': 'nosniff',
      //   'X-Frame-Options': 'DENY',
      //   'X-XSS-Protection': '1; mode=block',
      //   'Referrer-Policy': 'strict-origin-when-cross-origin'
      // }

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';")
      document.head.appendChild(cspMeta)

      // Add HSTS header
      const hstsMeta = document.createElement('meta')
      hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security')
      hstsMeta.setAttribute('content', 'max-age=31536000; includeSubDomains; preload')
      document.head.appendChild(hstsMeta)

      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
      })

      // Disable F12, Ctrl+Shift+I, Ctrl+U
      document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault()
        }
      })

      // Add viewport meta tag for mobile security
      const viewportMeta = document.querySelector('meta[name="viewport"]')
      if (!viewportMeta) {
        const viewport = document.createElement('meta')
        viewport.setAttribute('name', 'viewport')
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
        document.head.appendChild(viewport)
      }
    }

    enhanceSecurity()
  }, [])

  return <>{children}</>
}

export default SecurityEnhancer