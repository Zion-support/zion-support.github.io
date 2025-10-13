import React from 'react';

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
  return (
    <div className={`loading-states-component ${className}`} {...props}>
      {children}
    </div>
  );
}