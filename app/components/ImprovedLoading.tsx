import React from 'react';

interface ImprovedloadingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedloading({ className = '', children }: ImprovedloadingProps) {
  return (
    <div className={`ImprovedLoading-component ${className}`}>
      {children}
    </div>
  );
}