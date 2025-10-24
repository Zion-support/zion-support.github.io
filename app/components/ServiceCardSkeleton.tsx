'use client'
import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Service Card Skeleton</h2>
      <p className="text-gray-600">This is a placeholder component for Service Card Skeleton.</p>
    </div>
  );
};

export default ServiceCardSkeleton;
