import React from 'react';

interface ScrollToTopProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ScrollToTop({
  className = '',
  children
}: ScrollToTopProps) {
  return (
    <div className={`scrolltotop ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Scroll To Top
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}