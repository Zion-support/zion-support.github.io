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
    const sizeClasses = useMemo(() => ({
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    }), [])

    const colorClasses = useMemo(() => ({
      blue: 'bg-blue-500',
      gray: 'bg-gray-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
    }), [])

    const renderSpinner = useMemo(() => {
      switch (variant) {
        case 'dots':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )
        case 'pulse':
          return (
            <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
          )
        case 'spinner':
          return (
            <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin border-2 border-t-transparent`} />
          )
        case 'skeleton':
          return (
            <div className='space-y-2'>
              <div className={`h-4 ${colorClasses[color]} rounded animate-pulse`} />
              <div className={`h-4 ${colorClasses[color]} rounded animate-pulse w-3/4`} />
            </div>
          )
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`w-1 ${colorClasses[color]} rounded-full animate-pulse`}
                  style={{ 
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.1}s` 
                  }}
                />
              ))}
            </div>
          )
        default:
          return null
      }
    }, [variant, size, color, sizeClasses, colorClasses])

    if (fullScreen) {
      return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 flex flex-col items-center space-y-4'>
            {renderSpinner}
            {text && <p className='text-gray-600'>{text}</p>}
          </div>
        </div>
      )
    }

    return (
      <div className={`flex flex-col items-center space-y-2 ${className}`}>
        {renderSpinner}
        {text && <p className='text-sm text-gray-600'>{text}</p>}
      </div>
    )
  }
)

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner