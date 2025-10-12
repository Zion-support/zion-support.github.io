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
  height = '1rem',
  lines = 1,
  rounded = true
}) => {
  const skeletonLines = Array.from({ length: lines }, (_, index) => (
    <div
      key={index}
      className={`bg-gray-300 animate-pulse ${rounded ? 'rounded' : ''} ${className}`}
      style={{
        width: index === lines - 1 ? '75%' : width,
        height: height,
        marginBottom: index < lines - 1 ? '0.5rem' : '0'
      }}
    />
  ))

  return <div className="w-full">{skeletonLines}</div>
}

export default LoadingSkeleton