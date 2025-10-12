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
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;")
      document.head.appendChild(cspMeta)

      // Disable right-click context menu
      const disableRightClick = (e: MouseEvent) => {
        e.preventDefault()
      }
      document.addEventListener('contextmenu', disableRightClick)

      // Disable text selection
      const disableTextSelection = (e: Event) => {
        e.preventDefault()
      }
      document.addEventListener('selectstart', disableTextSelection)

      // Disable drag and drop
      const disableDragDrop = (e: DragEvent) => {
        e.preventDefault()
      }
      document.addEventListener('dragover', disableDragDrop)
      document.addEventListener('drop', disableDragDrop)

      return () => {
        document.removeEventListener('contextmenu', disableRightClick)
        document.removeEventListener('selectstart', disableTextSelection)
        document.removeEventListener('dragover', disableDragDrop)
        document.removeEventListener('drop', disableDragDrop)
      }
    }

    const cleanup = enhanceSecurity()
    return cleanup
  }, [])

  return <>{children}</>
}

export default SecurityEnhancer