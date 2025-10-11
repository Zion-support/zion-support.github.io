'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'

interface EnhancedLoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = 'Loading...',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`animate-spin text-blue-500 ${sizeClasses[size]}`} />
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  )
}

export default EnhancedLoading