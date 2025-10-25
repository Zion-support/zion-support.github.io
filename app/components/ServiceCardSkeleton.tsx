import React from 'react'

interface ServiceCardSkeletonProps {
  className?: string
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
        <div className="w-16 h-6 bg-gray-600 rounded"></div>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="w-3/4 h-6 bg-gray-600 rounded"></div>
        <div className="w-full h-4 bg-gray-600 rounded"></div>
        <div className="w-5/6 h-4 bg-gray-600 rounded"></div>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="w-full h-4 bg-gray-600 rounded"></div>
        <div className="w-4/5 h-4 bg-gray-600 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
      </div>
      
      <div className="w-full h-10 bg-gray-600 rounded-lg"></div>
    </div>
  )
}

export default ServiceCardSkeleton