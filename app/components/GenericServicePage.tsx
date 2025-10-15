import React from 'react';

interface GenericservicepageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Genericservicepage({ className = '', children }: GenericservicepageProps) {
  return (
    <div className={`GenericServicePage-component ${className}`}>
      {children}
    </div>
  );
}