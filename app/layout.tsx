'use client'
import React from 'react';

interface layoutProps {
  className?: string;
}

const layout: React.FC<layoutProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Layout</h2>
      <p className="text-gray-600">This is a placeholder component for Layout.</p>
    </div>
  );
};

export default layout;
