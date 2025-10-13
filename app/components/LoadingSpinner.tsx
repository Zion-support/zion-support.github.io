import React from 'react';

interface LoadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
  return (
    <div className={`loadingspinner-component ${className}`} {...props}>
      {children}
    </div>
  );
}
