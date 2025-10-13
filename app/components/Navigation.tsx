import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({ className = '', children }: NavigationProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}