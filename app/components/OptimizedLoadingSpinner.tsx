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

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: 'w-4 h-4',
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
      }),
      []
    )

    const colorClasses = useMemo(
      () => ({
        blue: 'text-blue-500',
        gray: 'text-gray-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',
      }),
      []
    )

    const renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 bg-current rounded-full animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )
        case 'pulse':
          return (
            <div className="w-full h-full bg-current rounded-full animate-pulse" />
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
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-current animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )
        default:
          return (
            <div className="animate-spin rounded-full border-2 border-current border-t-transparent" />
          )
      }
    }

    const content = (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`${sizeClasses[size]} ${colorClasses[color]}`}>
          {renderSpinner()}
        </div>
        {text && (
          <p className={`mt-2 text-sm ${colorClasses[color]}`}>
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
  }
)

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner