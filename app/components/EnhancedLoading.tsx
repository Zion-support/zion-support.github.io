import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedLoading({ className = '', children }: EnhancedLoadingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}