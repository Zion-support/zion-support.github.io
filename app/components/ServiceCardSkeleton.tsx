import React from 'react';

interface ServiceCardSkeletonProps {
  // Add props here as needed
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ServiceCardSkeleton</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceCardSkeleton;