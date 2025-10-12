'use client'
import React, { memo, useMemo } from 'react'

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string
  className?: string
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(({
  size = 'md',
  variant = 'spinner',
  text,
  className = '',
  color = 'blue',
  fullScreen = false
}) => {
  const sizeClasses = useMemo(() => {
    const sizes = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    }
    return sizes[size]
  }, [size])

  const colorClasses = useMemo(() => {
    const colors = {
      blue: 'text-blue-500',
      gray: 'text-gray-500',
      green: 'text-green-500',
      red: 'text-red-500',
      purple: 'text-purple-500'
    }
    return colors[color]
  }, [color])

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses} ${colorClasses} rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        )
      
      case 'pulse':
        return (
          <div className={`${sizeClasses} ${colorClasses} rounded-full animate-pulse bg-current`} />
        )
      
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className={`h-4 ${colorClasses} rounded animate-pulse bg-current`} />
            <div className={`h-4 ${colorClasses} rounded animate-pulse bg-current w-3/4`} />
            <div className={`h-4 ${colorClasses} rounded animate-pulse bg-current w-1/2`} />
          </div>
        )
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 ${colorClasses} bg-current animate-pulse`}
                style={{ 
                  height: `${(i + 1) * 4}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )
      
      case 'spinner':
      default:
        return (
          <div className={`${sizeClasses} ${colorClasses} animate-spin`}>
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )
    }
  }

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {text && (
        <p className={`mt-2 text-sm ${colorClasses}`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    )
  }

  return content
})

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner