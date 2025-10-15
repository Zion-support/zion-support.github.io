import React from 'react';

interface ImprovedcontactformProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedcontactform({ className = '', children }: ImprovedcontactformProps) {
  return (
    <div className={`ImprovedContactForm-component ${className}`}>
      {children}
    </div>
  );
}