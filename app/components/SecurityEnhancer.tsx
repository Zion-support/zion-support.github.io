'use client'
import React, { useEffect } from 'react'

interface SecurityEnhancerProps {
  children: React.ReactNode
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Security headers are handled by the server
      // These would typically be set in the server configuration

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.httpEquiv = 'Content-Security-Policy'
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
      document.head.appendChild(cspMeta)

      // Add HSTS header
      const hstsMeta = document.createElement('meta')
      hstsMeta.httpEquiv = 'Strict-Transport-Security'
      hstsMeta.content = 'max-age=31536000; includeSubDomains'
      document.head.appendChild(hstsMeta)

      // Add viewport meta tag for security
      const viewportMeta = document.createElement('meta')
      viewportMeta.name = 'viewport'
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      document.head.appendChild(viewportMeta)

      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
      })

      // Disable text selection
      document.addEventListener('selectstart', (e) => {
        e.preventDefault()
      })

      // Disable drag and drop
      document.addEventListener('dragstart', (e) => {
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
    }

    enhanceSecurity()

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      document.removeEventListener('contextmenu', (e) => e.preventDefault())
      document.removeEventListener('selectstart', (e) => e.preventDefault())
      document.removeEventListener('dragstart', (e) => e.preventDefault())
    }
  }, [])

  return <>{children}</>
}

export default SecurityEnhancer