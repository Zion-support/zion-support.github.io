'use client'
import React from 'react'

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-4 w-full mb-2"></div>
      <div className="bg-gray-300 rounded-lg h-4 w-3/4 mb-2"></div>
      <div className="bg-gray-300 rounded-lg h-4 w-1/2"></div>
    </div>
  )
}

export default LoadingSkeleton