import React from 'react';

interface LoadingstatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingstates({ className = '', children }: LoadingstatesProps) {
  return (
    <div className={`LoadingStates-component ${className}`}>
      {children}
    </div>
  );
}