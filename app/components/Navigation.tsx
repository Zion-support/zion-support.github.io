import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({ className = '', children }: NavigationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}