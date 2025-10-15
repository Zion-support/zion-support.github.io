import React from 'react';

interface StructureddataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Structureddata({ className = '', children }: StructureddataProps) {
  return (
    <div className={`StructuredData-component ${className}`}>
      {children}
    </div>
  );
}