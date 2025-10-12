'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Phone, Mail, Zap, Shield, Brain, Globe } from 'lucide-react'

interface OptimizedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'text-blue-600',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin ${color}`}></div>
    </div>
  )
}

export default OptimizedLoadingSpinner