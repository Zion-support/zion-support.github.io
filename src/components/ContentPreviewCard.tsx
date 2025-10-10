import React from 'react';

interface ContentPreviewCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentPreviewCard({
  className = '',
  children
}: ContentPreviewCardProps) {
  return (
    <div className={`contentpreviewcard ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Content Preview Card
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}