import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlobalErrorBoundary({ className = '', children }: GlobalErrorBoundaryProps) {
  return (
    <div className={`globalerrorboundary ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">GlobalErrorBoundary</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}