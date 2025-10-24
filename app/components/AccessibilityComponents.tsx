'use client'
import React from 'react'
interface AccessibilityComponentsProps {
  className?: string


}
const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default AccessibilityComponents
