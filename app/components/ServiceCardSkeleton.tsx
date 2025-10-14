import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
}

export default function ServiceCardSkeleton({ className = '' }: ServiceCardSkeletonProps) {
  return (
    <div className={`${className}`}>
      <h2>ServiceCardSkeleton</h2>
      <p>Component content goes here.</p>
    </div>
  );
}