<<<<<<< HEAD
import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ServiceCardSkeleton;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
