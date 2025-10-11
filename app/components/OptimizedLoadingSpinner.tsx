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
        blue: 'border-blue-500',
        gray: 'border-gray-500',
        green: 'border-green-500',
        red: 'border-red-500',
        purple: 'border-purple-500',
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
                  className={`${sizeClasses[size]} bg-current rounded-full animate-bounce`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )
        case 'pulse':
          return (
            <div className={`${sizeClasses[size]} bg-current rounded-full animate-pulse`} />
          )
        case 'skeleton':
          return (
            <div className="space-y-2">
              <div className="h-4 bg-current rounded animate-pulse" />
              <div className="h-4 bg-current rounded animate-pulse w-3/4" />
            </div>
          )
        case 'bars':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 bg-current animate-pulse"
                  style={{ 
                    height: `${(i + 1) * 4}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          )
        default:
          return (
            <div
              className={`${sizeClasses[size]} border-4 border-gray-200 border-t-current rounded-full animate-spin`}
            />
          )
      }
    }

    const content = (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`${colorClasses[color]} text-current`}>
          {renderSpinner()}
        </div>
        {text && (
          <p className="mt-2 text-sm text-current opacity-75">
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