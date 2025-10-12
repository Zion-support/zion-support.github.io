'use client'
import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  rounded?: boolean
  animate?: boolean
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  height = '1rem',
  width = '100%',
  rounded = false,
  animate = true
}) => {
  const baseClasses = 'bg-gray-300 dark:bg-gray-700'
  const roundedClasses = rounded ? 'rounded' : ''
  const animateClasses = animate ? 'animate-pulse' : ''
  
  return (
    <div
      className={`${baseClasses} ${roundedClasses} ${animateClasses} ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width
      }}
    />
  )
}

export default LoadingSkeleton