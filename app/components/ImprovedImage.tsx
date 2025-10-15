import React from 'react';

interface ImprovedimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedimage({ className = '', children }: ImprovedimageProps) {
  return (
    <div className={`ImprovedImage-component ${className}`}>
      {children}
    </div>
  );
}