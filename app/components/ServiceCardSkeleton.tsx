import React from 'react';

interface ServiceCardSkeletonProps {
  count?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  count = 3,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSkeleton;