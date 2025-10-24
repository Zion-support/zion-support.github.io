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
