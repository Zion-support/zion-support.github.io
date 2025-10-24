import React from 'react'}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({;
  showImage = true;
  showButton = true;
  lines = 3;
  className = ''
}) => {

  return (
    
    <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}></div>
      {/* Image skeleton */}
      {showImage && (
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      )}
      
      {/* Icon skeleton */}
      <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
      
      {/* Description skeleton */}
      <div className="..."></div>
        {Array.from({ length: lines }).map((_, index) => (
          <div;
            key={index}
            className={`h-4 bg-gray-300 rounded ${;
              index === lines - 1 ? 'w-2/3' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
      
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      )}
    </div>
  )
}
export default ServiceCardSkeleton;