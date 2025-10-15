import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Services({ className = '', children }: ServicesProps) {
  return (
    <div className={`Services-component ${className}`}>
      {children}
    </div>
  );
}