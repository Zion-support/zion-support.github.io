import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({ className, children }: LoadingSkeletonProps) {
  return (
    <div className={}>
      {children || 'LoadingSkeleton Component'}
    </div>
  );
}
