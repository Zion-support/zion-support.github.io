import React from 'react';

interface MobileNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MobileNavigation({ className = '', children, ...props }: MobileNavigationProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
