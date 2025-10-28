'use client';

import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`servicecardskeleton-component ${className}`}>
      {children}
    </div>
  );
};

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export default ServiceCardSkeleton;
