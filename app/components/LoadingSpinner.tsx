import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className={`animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500 ${sizeClasses[size]}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'}`}></div>
        </div>
      </div>
      {text && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-2">{text}</h3>
          <p className="text-gray-300 text-sm">Preparing your experience...</p>
        </div>
      )}
    </div>
  )
}