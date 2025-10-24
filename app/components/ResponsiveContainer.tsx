'use client'
import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Responsive Container</h2>
      <p className="text-gray-600">This is a placeholder component for Responsive Container.</p>
    </div>
  );
};

export default ResponsiveContainer;
