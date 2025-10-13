import React from 'react';

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Breadcrumb</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}