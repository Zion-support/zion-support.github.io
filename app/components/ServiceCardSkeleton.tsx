import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = (_{ className = '', _children }) => {
  return (
<div className={`servicecardskeleton-component ${className}`}>
      {children || <h2>ServiceCardSkeleton</h2>}
    </div>
  );
};

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';export default ServiceCardSkeleton;