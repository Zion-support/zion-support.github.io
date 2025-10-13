import React from 'react';

interface servicesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function services({ className = '', children }: servicesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}