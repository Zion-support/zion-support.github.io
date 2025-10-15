import React from 'react';

interface ServicecardskeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Servicecardskeleton({ className = '', children }: ServicecardskeletonProps) {
  return (
    <div className={`ServiceCardSkeleton-component ${className}`}>
      {children}
    </div>
  );
}