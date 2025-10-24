'use client'
import React from 'react'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  )
}

export default ServiceCardSkeleton
