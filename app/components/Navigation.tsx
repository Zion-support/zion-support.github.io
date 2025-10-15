import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({ className = '', children }: NavigationProps) {
  return (
    <div className={`Navigation-component ${className}`}>
      {children}
    </div>
  );
}