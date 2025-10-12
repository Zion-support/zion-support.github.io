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
          <div className={`${sizeClasses} ${colorClasses} rounded-full animate-pulse`} />
        )
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses}`} />
            <div className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses}`} />
            <div className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses}`} />
          </div>
        )
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 ${colorClasses} animate-pulse`}
                style={{ 
                  height: `${8 + i * 4}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )
      default:
        return (
          <div className={`${sizeClasses} ${colorClasses} border-2 border-current border-t-transparent rounded-full animate-spin`} />
        )
    }
  }

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {text && (
        <p className={`mt-2 text-sm ${colorClasses} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    )
  }

  return content
})

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner