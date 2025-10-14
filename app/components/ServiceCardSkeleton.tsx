import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`servicecardskeleton-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ServiceCardSkeleton</h3>
          <p className="text-gray-600">This is the ServiceCardSkeleton component.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCardSkeleton;