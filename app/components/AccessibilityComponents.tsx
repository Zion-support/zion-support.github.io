
'use client'

import React from 'react'

interface AccessibilityComponentsProps {
  children: React.ReactNode
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ children }) => {
  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  )
}

export default AccessibilityComponents