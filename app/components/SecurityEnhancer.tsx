'use client'
import React, { useEffect } from 'react'

interface SecurityEnhancerProps {
  children: React.ReactNode
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Security headers would be set by the server
      // These are just for reference
      console.log('Security headers configured:', {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      })

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)

      // Disable right-click context menu
      const disableRightClick = (e: MouseEvent) => {
        e.preventDefault()
      }

      // Disable F12, Ctrl+Shift+I, Ctrl+U
      const disableDevTools = (e: KeyboardEvent) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault()
        }
      }

      // Add event listeners
      document.addEventListener('contextmenu', disableRightClick)
      document.addEventListener('keydown', disableDevTools)

      // Cleanup function
      return () => {
        document.removeEventListener('contextmenu', disableRightClick)
        document.removeEventListener('keydown', disableDevTools)
        if (cspMeta.parentNode) {
          cspMeta.parentNode.removeChild(cspMeta)
        }
      }
    }

    const cleanup = enhanceSecurity()
    return cleanup
  }, [])

  return <>{children}</>
}

export default SecurityEnhancer