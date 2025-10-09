import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorBoundary({ 
  className = '', 
  children 
}: ErrorBoundaryProps) {
  return (
    <div className={`errorboundary ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Error Boundary
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}