'use client'
import React from 'react'
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, fallback }) => {
  return (
    <div>
      {children}
    </div>
  )
}
export default ErrorBoundary
