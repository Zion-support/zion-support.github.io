import React from 'react';

interface DynamicContentShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function DynamicContentShowcase({ className = '', children }: DynamicContentShowcaseProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}