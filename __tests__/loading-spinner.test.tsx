import React from 'react';

interface loading-spinner.testProps {
  className?: string;
  children?: React.ReactNode;
}

export default function loading-spinner.test({ className = '', children }: loading-spinner.testProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}