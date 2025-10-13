import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCardSkeleton({ className = '', children }: ServiceCardSkeletonProps) {
  return (
    <div className={`servicecardskeleton ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">ServiceCardSkeleton</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}