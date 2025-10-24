'use client'

import React from 'react'

interface EnhancedAccessibilityProps {
  children: React.ReactNode
  skipToContent?: boolean
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  skipToContent = true
}) => {
  return (
    <>
      {skipToContent && (
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      )}
      <div className="accessibility-enhanced">
        {children}
      </div>
    </>
  )
}

export default EnhancedAccessibility