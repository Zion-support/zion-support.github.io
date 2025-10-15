import React from 'react';

interface ResponsivetextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivetext({ className = '', children }: ResponsivetextProps) {
  return (
    <div className={`ResponsiveText-component ${className}`}>
      {children}
    </div>
  );
}