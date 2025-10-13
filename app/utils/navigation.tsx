import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navigation({ className = '', children }: NavigationProps) {
  return (
    <nav className={`navigation ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
          <p className="text-gray-300">Navigation component under construction</p>
        </div>
      )}
    </nav>
  );
}