import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
}

export default function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={className}>
      <h1>LoadingSkeleton</h1>
      <p>Component content</p>
    </div>
  );
}