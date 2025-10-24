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
<<<<<<< HEAD
      <div className="h-6 bg-gray-300 rounded mb-3"></div>
      
      {/* Description lines skeleton */}
=======
      <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
      
      {/* Description skeleton */}
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
      <div className="space-y-2 mb-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${
<<<<<<< HEAD
              index === lines - 1 ? 'w-3/4' : 'w-full'
=======
              index === lines - 1 ? 'w-2/3' : 'w-full'
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
            }`}
          ></div>
        ))}
      </div>
      
<<<<<<< HEAD
      {/* Features skeleton */}
      <div className="space-y-2 mb-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </div>
      
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded"></div>
=======
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded w-full"></div>
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
      )}
    </div>
  );
};

export default ServiceCardSkeleton;
