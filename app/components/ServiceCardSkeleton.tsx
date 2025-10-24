'use client'

import React from 'react'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="service-card-skeleton">
      <div className="skeleton-icon"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
    </div>
  )
}

export default ServiceCardSkeleton