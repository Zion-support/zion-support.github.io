"use client";
import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>ServiceCardSkeleton</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default ServiceCardSkeleton;