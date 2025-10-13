import React from 'react';

interface ImprovedLoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedLoadingStates({ className = '', children }: ImprovedLoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}