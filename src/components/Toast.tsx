import React from 'react';

interface ToastProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Toast({ 
  className = '', 
  children 
}: ToastProps) {
  return (
    <div className={`toast ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Toast
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}