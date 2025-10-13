import React from 'react';

interface EnhancedNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedNavigation({ className = '', children }: EnhancedNavigationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}