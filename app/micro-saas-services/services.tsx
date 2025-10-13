
import React from 'react';

interface ServicesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Services({ className = '', children, ...props }: ServicesProps) {
  return (
    <div className={`services-component ${className}`} {...props}>
      {children}
    </div>
  );
}

