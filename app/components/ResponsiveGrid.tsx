'use client'
import React from 'react';

interface ResponsiveGridProps {
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Responsive Grid</h2>
      <p className="text-gray-600">This is a placeholder component for Responsive Grid.</p>
    </div>
  );
};

export default ResponsiveGrid;
