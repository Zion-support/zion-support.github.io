'use client'
import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  lines?: number
  rounded?: boolean
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  width = '100%',
  height = '20px',
  lines = 1,
  rounded = true
}) => {
  const skeletonClasses = `
    bg-gray-300 animate-pulse
    ${rounded ? 'rounded' : ''}
    ${className}
  `.trim()

  if (lines === 1) {
    return (
      <div
        className={skeletonClasses}
        style={{ width, height }}
      />
    )
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={skeletonClasses}
          style={{ 
            width: index === lines - 1 ? '75%' : width, 
            height 
          }}
        />
      ))}
    </div>
  )
}

export default LoadingSkeleton