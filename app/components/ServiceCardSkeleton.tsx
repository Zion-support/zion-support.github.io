
import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`service-card-skeleton ${className}`}>
      <div className="skeleton-icon"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
    </div>
  );
};

export default ServiceCardSkeleton;
