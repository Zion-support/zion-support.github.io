import React from 'react';

interface EnhancedServicesShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedServicesShowcase({ className = '', children }: EnhancedServicesShowcaseProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}