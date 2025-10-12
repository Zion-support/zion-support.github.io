'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

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

      // Apply security headers
      Object.entries(securityHeaders).forEach(([key, value]) => {
        const meta = document.createElement('meta')
        meta.setAttribute('http-equiv', key)
        meta.setAttribute('content', value)
        document.head.appendChild(meta)
      })
    }

    enhanceSecurity()
  }, [])

  return (
    <div>
      <Helmet>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
      </Helmet>
      {children}
    </div>
  )
}

export default SecurityEnhancer