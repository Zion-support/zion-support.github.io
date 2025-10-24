import React from 'react';

interface ServiceCardSkeletonProps {
  className?: string;
}

export default function ServiceCardSkeleton({ className }: ServiceCardSkeletonProps) {
  return (
    <div className={className}>
      <h1>ServiceCardSkeleton</h1>
      <p>Component content</p>
    </div>
  );
}