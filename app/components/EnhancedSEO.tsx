import React from 'react';

interface EnhancedseoProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedseo({ className = '', children, ...props }: EnhancedseoProps) {
  return (
    <div className={`enhancedseo-component ${className}`} {...props}>
      {children}
    </div>
  );
}
