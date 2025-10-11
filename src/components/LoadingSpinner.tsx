'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'
interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
  }
const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-live="polite">
      <div className={`animate-spin rounded-full border-2 border-cyan-400 border-t-transparent ${sizeClasses[size]}`}></div>
      {text && (
        <p className="text-cyan-400 text-sm mt-2 animate-pulse">{text}</p>
      )}
    </div>
  )
}
export default LoadingSpinner</LoadingSpinnerProps>
      <p className="text-gray-300 text-sm animate-pulse">{text}
  )
}
export default LoadingSpinner</div></p>
