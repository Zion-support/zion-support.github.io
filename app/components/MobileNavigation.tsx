import React from 'react';

interface MobilenavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Mobilenavigation({ className = '', children }: MobilenavigationProps) {
  return (
    <div className={`MobileNavigation-component ${className}`}>
      {children}
    </div>
  );
}