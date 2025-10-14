'use client';
import React from 'react';

interface ServiceCardSkeletonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceCardSkeleton({ children, className = '' }: ServiceCardSkeletonProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}