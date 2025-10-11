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
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    )

    const textSizeClasses = useMemo(
      () => ({
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }),
      []
    )

    const colorClasses = useMemo(
      () => ({
        blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',
      }),
      []
    )

    const renderSpinner = useMemo(() => {
      switch (variant) {
        case 'dots':
          return (
            <div className="flex space-x-1" role="status" aria-label="Loading">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={`${sizeClasses[size]} rounded-full ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )

        case 'pulse':
          return (
            <div
              className={`${sizeClasses[size]} rounded-full ${colorClasses[color].split(' ')[1]} animate-pulse`}
              role="status"
              aria-label="Loading"
            />
          )

        case 'spinner':
          return (
            <div
              className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full animate-spin ${colorClasses[color].split(' ')[0]}`}
              role="status"
              aria-label="Loading"
            />
          )

        case 'skeleton':
          return (
            <div className="space-y-2" role="status" aria-label="Loading">
              <div className={`h-4 bg-gray-300 rounded animate-pulse ${sizeClasses[size]}`} />
              <div className={`h-4 bg-gray-300 rounded animate-pulse ${sizeClasses[size]}`} />
              <div className={`h-4 bg-gray-300 rounded animate-pulse ${sizeClasses[size]}`} />
            </div>
          )

        case 'bars':
          return (
            <div className="flex space-x-1" role="status" aria-label="Loading">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{
                    height: `${(i + 1) * 4}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )

        default:
          return null
      }
    }, [variant, sizeClasses, colorClasses, size, color])

    const containerClasses = fullScreen
      ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
      : 'flex items-center justify-center p-8'

    return (
      <div className={`${containerClasses} ${className}`}>
        <div className="flex flex-col items-center space-y-4">
          {renderSpinner}
          {text && (
            <p className={`text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
        </div>
      </div>
    )
  }
)

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner