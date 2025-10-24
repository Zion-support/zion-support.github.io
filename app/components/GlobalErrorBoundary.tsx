'use client'
import React from 'react'
interface GlobalErrorBoundaryProps {
  className?: string
  children?: React.ReactNode
}
const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default GlobalErrorBoundary
