import React from 'react';

interface ContentShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentShowcase({ 
  className = '', 
  children 
}: ContentShowcaseProps) {
  return (
    <div className={`contentshowcase ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Content Showcase
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}