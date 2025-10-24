'use client'
import React from 'react'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-24"></div>
    </div>
  )
}

export default ServiceCardSkeleton