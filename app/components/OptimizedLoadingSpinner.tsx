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
  text = 'Loading...',
  className = '',
  color = 'blue',
  fullScreen = false
}) => {
  const sizeClasses = useMemo(() => ({
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }), [])

  const colorClasses = useMemo(() => ({
    blue: 'border-blue-600 bg-blue-600',
    gray: 'border-gray-600 bg-gray-600',
    green: 'border-green-600 bg-green-600',
    red: 'border-red-600 bg-red-600',
    purple: 'border-purple-600 bg-purple-600'
  }), [])

  const renderSpinner = useMemo(() => {
    switch (variant) {
      case 'dots':
        return (
          <div className='flex space-x-1' role='status' aria-label='Loading'>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        )
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} animate-pulse`} />
        )
      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full animate-spin`} />
        )
      case 'skeleton':
        return (
          <div className='space-y-2'>
            <div className={`h-4 bg-gray-300 rounded animate-pulse`} />
            <div className={`h-4 bg-gray-300 rounded animate-pulse w-3/4`} />
            <div className={`h-4 bg-gray-300 rounded animate-pulse w-1/2`} />
          </div>
        )
      case 'bars':
        return (
          <div className='flex space-x-1' role='status' aria-label='Loading'>
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                className={`w-1 ${colorClasses[color]} animate-pulse`}
                style={{ 
                  height: `${(i + 1) * 8}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )
      default:
        return (
          <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full animate-spin`} />
        )
    }
  }, [variant, size, sizeClasses, color, colorClasses])

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50'
    : 'flex flex-col items-center justify-center p-4'

  return (
    <div className={`${containerClasses} ${className}`}>
      {renderSpinner}
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  )
})

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner'

export default OptimizedLoadingSpinner