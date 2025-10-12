'use client'
import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  lines?: number
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  lines = 3 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300 rounded mb-2"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  )
}

export default LoadingSkeleton
