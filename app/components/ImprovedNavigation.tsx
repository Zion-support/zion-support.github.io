import React from 'react';

interface ImprovedNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedNavigation({ className = '', children }: ImprovedNavigationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}