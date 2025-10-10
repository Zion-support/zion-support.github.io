import React from 'react';

interface SEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEO({
  className = '',
  children
}: SEOProps) {
  return (
    <div className={`seo ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            SE O
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}