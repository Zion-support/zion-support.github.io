import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Improved Error Boundary</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}