"use client"

import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    // Accessibility enhancements
    if (typeof window !== 'undefined') {
      // Add skip to content link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add main content ID
      const main = document.querySelector('main')
      if (main && !main.id) {
        main.id = 'main-content'
      }

      return () => {
        const existingSkipLink = document.querySelector('a[href="#main-content"]')
        if (existingSkipLink) {
          existingSkipLink.remove()
        }
      }
    }
  }, [])

  return <>{children}</>
}
