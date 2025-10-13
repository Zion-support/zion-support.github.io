import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorFallback({ className = '', children }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Error Fallback</h3>
          <p className="text-gray-600">This component is under development.</p>
        </div>
      )}
    </div>
  );
}