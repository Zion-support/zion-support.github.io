'use client'
import React from 'react'

interface LoadingSkeletonProps {
  className?: string
  lines?: number
  height?: string
  width?: string
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  lines = 1,
  height = 'h-4',
  width = 'w-full'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-300 rounded ${height} ${width} ${
            index < lines - 1 ? 'mb-2' : ''
          }`}
        />
      ))}
    </div>
  )
}

export const CardSkeleton: React.FC = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 animate-pulse" />
    <LoadingSkeleton lines={2} height="h-4" />
    <LoadingSkeleton lines={1} height="h-3" width="w-3/4" className="mt-2" />
  </div>
)

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    <LoadingSkeleton lines={lines} />
  </div>
)

export const ImageSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-gray-300 rounded animate-pulse ${className}`} />
)

export default LoadingSkeleton