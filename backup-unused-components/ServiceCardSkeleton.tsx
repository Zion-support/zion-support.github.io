import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCardSkeleton({ className = '', children }: ServiceCardSkeletonProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}