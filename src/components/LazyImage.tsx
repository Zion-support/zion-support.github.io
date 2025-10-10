import React from 'react';

interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyImage({ 
  className = '', 
  children 
}: LazyImageProps) {
  return (
    <div className={`lazyimage ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Lazy Image
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}