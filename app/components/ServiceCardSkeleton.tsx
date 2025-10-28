import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '', children }) => {
  return (
<div className={`servicecardskeleton-component ${className}`}>
      {children}
cursor/fix-errors-and-merge-to-main-7271
    </div>
  );
};

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';export default ServiceCardSkeleton;
cursor/fix-errors-and-merge-to-main-7271