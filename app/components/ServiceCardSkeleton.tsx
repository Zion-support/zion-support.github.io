import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`service-card-skeleton ${className}`}>
      {children || (
        <div className="p-4">
          <h2>ServiceCardSkeleton</h2>
          <p>Component implementation coming soon...</p>
        </div>
      )}
    </div>
  );
};

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const ServiceCardSkeleton = () => {
  return (
    <div className="p-4">
      <h2>ServiceCardSkeleton</h2>
      <p>Component implementation coming soon...</p>
    </div>
  );
};

export default ServiceCardSkeleton;
