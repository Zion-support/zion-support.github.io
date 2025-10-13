import React from 'react';

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return (
    <div className={`structureddata-component ${className}`} {...props}>
      {children}
    </div>
  );
}
