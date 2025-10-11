'use client'
import React from 'react'

interface EnhancedLoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-300 border-t-blue-600`}></div>
      <p className="mt-4 text-gray-600 text-sm">{message}</p>
    </div>
  )
}

export default EnhancedLoading