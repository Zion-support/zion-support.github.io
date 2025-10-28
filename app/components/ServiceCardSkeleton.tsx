import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '', children }) => {
  return (
<div className={`servicecardskeleton-component ${className}`}>
      {children || <h2>ServiceCardSkeleton</h2>}
334a97c43c32bf9e815481016c5bf31caa46a580
    </div>
  );
};

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';export default ServiceCardSkeleton;