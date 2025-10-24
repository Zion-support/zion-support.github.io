'use client'
import React from 'react';

interface ResponsiveTextProps {
  className?: string;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Responsive Text</h2>
      <p className="text-gray-600">This is a placeholder component for Responsive Text.</p>
    </div>
  );
};

export default ResponsiveText;
