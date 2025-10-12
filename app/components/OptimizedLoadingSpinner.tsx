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
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
          </div>
        )
      case 'pulse':
        return (
          <div className={`${sizeClasses} bg-current rounded-full animate-pulse`} />
        )
      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className="h-4 bg-current rounded animate-pulse" />
            <div className="h-4 bg-current rounded animate-pulse w-3/4" />
            <div className="h-4 bg-current rounded animate-pulse w-1/2" />
          </div>
        )
      case 'bars':
        return (
          <div className="flex space-x-1">
            <div className={`w-1 h-8 bg-current rounded animate-pulse`} style={{ animationDelay: '0ms' }} />
            <div className={`w-1 h-8 bg-current rounded animate-pulse`} style={{ animationDelay: '100ms' }} />
            <div className={`w-1 h-8 bg-current rounded animate-pulse`} style={{ animationDelay: '200ms' }} />
            <div className={`w-1 h-8 bg-current rounded animate-pulse`} style={{ animationDelay: '300ms' }} />
            <div className={`w-1 h-8 bg-current rounded animate-pulse`} style={{ animationDelay: '400ms' }} />
          </div>
        )
      default:
        return (
          <div className={`${sizeClasses} border-2 border-current border-t-transparent rounded-full animate-spin`} />
        )
    }
  }

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${colorClasses}`}>
        {renderSpinner()}
      </div>
      {text && (
        <p className={`mt-2 text-sm ${colorClasses}`}>
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