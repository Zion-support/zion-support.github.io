import React from 'react';

interface error-boundary.testProps {
  className?: string;
  children?: React.ReactNode;
}

export default function error-boundary.test({ className = '', children }: error-boundary.testProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}