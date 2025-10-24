'use client'

import React from 'react'

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  )
}

export default LoadingSkeleton