'use client';
import React from 'react';

interface EnhancedLoadingSkeletonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedLoadingSkeleton({ children, className = '' }: EnhancedLoadingSkeletonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}