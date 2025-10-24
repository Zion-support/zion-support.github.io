'use client'

import React from 'react'

interface EnhancedAccessibilityWrapperProps {
  children: React.ReactNode
}

const EnhancedAccessibilityWrapper: React.FC<EnhancedAccessibilityWrapperProps> = ({ children }) => {
  return (
    <div className="accessibility-wrapper">
      {children}
    </div>
  )
}

export default EnhancedAccessibilityWrapper