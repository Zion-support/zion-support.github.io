import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlobalErrorBoundary({ 
  className = '', 
  children 
}: GlobalErrorBoundaryProps) {
  return (
    <div className={`globalerrorboundary ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Global Error Boundary
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}