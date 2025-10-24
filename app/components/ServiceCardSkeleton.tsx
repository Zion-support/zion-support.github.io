'use client';
import React from 'react';

interface ServiceCardSkeletonProps {
  count?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  count = 3,
  className = '',
}) => {
  return (
    <div className={`service-card-skeleton ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-title"></div>
            <div className="skeleton-description"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSkeleton;