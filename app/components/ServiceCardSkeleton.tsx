import React from 'react';

interface ServiceCardSkeletonProps {
  showImage?: boolean;
  showButton?: boolean;
  lines?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  showImage = true,
  showButton = true,
  lines = 3,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}>
      {/* Image skeleton */}
      {showImage && (
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      )}
      
      {/* Icon skeleton */}
      <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      
      {/* Description skeleton */}
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index} 
          className={`h-3 bg-gray-300 rounded mb-2 ${index === lines - 1 ? 'w-3/4' : ''}`}
        ></div>
      ))}
      
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded mt-4"></div>
      )}
    </div>
  );
};

export default ServiceCardSkeleton;
