'use client'
import React, { useEffect, useCallback } from 'react'

interface SecurityConfig {
  enableCSP: boolean
  enableXSSProtection: boolean
  enableClickjackingProtection: boolean
  enableHSTS: boolean
  enableReferrerPolicy: boolean
  enablePermissionsPolicy: boolean
}

const SecurityEnhancer: React.FC = () => {
  const securityConfig: SecurityConfig = {
    enableCSP: true,
    enableXSSProtection: true,
    enableClickjackingProtection: true,
    enableHSTS: true,
    enableReferrerPolicy: true,
    enablePermissionsPolicy: true,
  }

  const applySecurityHeaders = useCallback(() => {
    // Content Security Policy
    if (securityConfig.enableCSP) {
      const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests"
      ].join('; ')

      // Apply CSP via meta tag
      let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
      if (!cspMeta) {
        cspMeta = document.createElement('meta')
        cspMeta.setAttribute('http-equiv', 'Content-Security-Policy')
        document.head.appendChild(cspMeta)
      }
      cspMeta.setAttribute('content', csp)
    }

    // XSS Protection
    if (securityConfig.enableXSSProtection) {
      let xssMeta = document.querySelector('meta[http-equiv="X-XSS-Protection"]')
      if (!xssMeta) {
        xssMeta = document.createElement('meta')
        xssMeta.setAttribute('http-equiv', 'X-XSS-Protection')
        document.head.appendChild(xssMeta)
      }
      xssMeta.setAttribute('content', '1; mode=block')
    }

    // Clickjacking Protection
    if (securityConfig.enableClickjackingProtection) {
      let frameOptionsMeta = document.querySelector('meta[http-equiv="X-Frame-Options"]')
      if (!frameOptionsMeta) {
        frameOptionsMeta = document.createElement('meta')
        frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options')
        document.head.appendChild(frameOptionsMeta)
      }
      frameOptionsMeta.setAttribute('content', 'DENY')
    }

    // Referrer Policy
    if (securityConfig.enableReferrerPolicy) {
      let referrerMeta = document.querySelector('meta[name="referrer"]')
      if (!referrerMeta) {
        referrerMeta = document.createElement('meta')
        referrerMeta.setAttribute('name', 'referrer')
        document.head.appendChild(referrerMeta)
      }
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin')
    }

    // Permissions Policy
    if (securityConfig.enablePermissionsPolicy) {
      const permissions = [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'payment=()',
        'usb=()',
        'magnetometer=()',
        'gyroscope=()',
        'accelerometer=()',
        'ambient-light-sensor=()',
        'autoplay=()',
        'fullscreen=(self)',
        'picture-in-picture=()'
      ].join(', ')

      let permissionsMeta = document.querySelector('meta[http-equiv="Permissions-Policy"]')
      if (!permissionsMeta) {
        permissionsMeta = document.createElement('meta')
        permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy')
        document.head.appendChild(permissionsMeta)
      }
      permissionsMeta.setAttribute('content', permissions)
    }
  }, [securityConfig])

  const sanitizeInput = useCallback((input: string): string => {
    // Basic XSS prevention
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }, [])

  const validateUrl = useCallback((url: string): boolean => {
    try {
      const urlObj = new URL(url)
      // Only allow https and http protocols
      return urlObj.protocol === 'https:' || urlObj.protocol === 'http:'
    } catch {
      return false
    }
  }, [])

  const sanitizeUrl = useCallback((url: string): string => {
    if (!validateUrl(url)) {
      return '#'
    }
    return url
  }, [validateUrl])

  const detectSuspiciousActivity = useCallback(() => {
    // Monitor for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /expression\s*\(/i,
    ]

    // Check all text content for suspicious patterns
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    )

    let node
    while (node = walker.nextNode()) {
      const text = node.textContent || ''
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(text)) {
          console.warn('Suspicious content detected:', text.substring(0, 100))
          // In a real application, you would report this to your security service
          break
        }
      }
    }
  }, [])

  const setupEventListeners = useCallback(() => {
    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      
      // Sanitize form data
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          const sanitized = sanitizeInput(value)
          if (sanitized !== value) {
            console.warn('Potentially malicious input detected in form field:', key)
            // In a real application, you would handle this more securely
          }
        }
      }
    })

    // Monitor link clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href) {
        const sanitizedHref = sanitizeUrl(link.href)
        if (sanitizedHref !== link.href) {
          event.preventDefault()
          console.warn('Potentially malicious URL detected:', link.href)
          // In a real application, you would handle this more securely
        }
      }
    })

    // Monitor for suspicious DOM modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element
              // Check for suspicious attributes
              const suspiciousAttrs = ['onload', 'onerror', 'onclick', 'onmouseover']
              suspiciousAttrs.forEach(attr => {
                if (element.hasAttribute(attr)) {
                  console.warn('Suspicious attribute detected:', attr)
                }
              })
            }
          })
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['onload', 'onerror', 'onclick', 'onmouseover']
    })

    return () => {
      observer.disconnect()
    }
  }, [sanitizeInput, sanitizeUrl])

  useEffect(() => {
    // Apply security headers
    applySecurityHeaders()

    // Setup event listeners
    const cleanup = setupEventListeners()

    // Periodic security checks
    const securityCheckInterval = setInterval(() => {
      detectSuspiciousActivity()
    }, 30000) // Check every 30 seconds

    // Cleanup
    return () => {
      if (cleanup) cleanup()
      clearInterval(securityCheckInterval)
    }
  }, [applySecurityHeaders, setupEventListeners, detectSuspiciousActivity])

  // Expose security utilities globally for use in components
  useEffect(() => {
    (window as any).security = {
      sanitizeInput,
      validateUrl,
      sanitizeUrl,
    }
  }, [sanitizeInput, validateUrl, sanitizeUrl])

  return null // This component doesn't render anything
}

export default SecurityEnhancer;
