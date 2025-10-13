import React from 'react';

interface MobileNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MobileNavigation({ className = '', children }: MobileNavigationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}