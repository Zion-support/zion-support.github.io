'use client'
import React from 'react'

interface LoadingSkeletonProps {
  lines?: number
  showAvatar?: boolean
  className?: string
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  showAvatar = false,
  className = ""
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        {showAvatar && (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-24"></div>
              <div className="h-3 bg-gray-300 rounded w-16"></div>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {Array.from({ length: lines }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              {index === lines - 1 && (
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <div className="h-8 bg-gray-300 rounded w-20"></div>
          <div className="h-8 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton