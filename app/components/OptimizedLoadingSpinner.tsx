import React from 'react'

interface OptimizedLoadingSpinnerProps {
  variant?: 'dots' | 'pulse' | 'skeleton' | 'spinner'
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  variant = 'dots',
  size = 'md',
  color = 'text-blue-600',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1" role="status" aria-label="Loading">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`w-2 h-2 bg-current rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
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
            <div className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`} />
            <div
              className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              style={{ width: '75%' }}
            />
          </div>
        )

      case 'spinner':
        return (
          <div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
          />
        )

      default:
        return null
    }
  }

  return (
    <div className={`flex items-center justify-center ${color} ${className}`}>
      {renderSpinner()}
    </div>
  )
}

export default OptimizedLoadingSpinner