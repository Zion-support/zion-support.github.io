import React from 'react';

interface MobileNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MobileNavigation({ className = '', children }: MobileNavigationProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Mobile Navigation</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}