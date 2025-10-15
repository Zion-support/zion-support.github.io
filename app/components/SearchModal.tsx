import React from 'react';

interface SearchmodalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Searchmodal({ className = '', children }: SearchmodalProps) {
  return (
    <div className={`SearchModal-component ${className}`}>
      {children}
    </div>
  );
}