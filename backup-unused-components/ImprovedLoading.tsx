import React from 'react';

interface ImprovedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedLoading({ className = '', children }: ImprovedLoadingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}