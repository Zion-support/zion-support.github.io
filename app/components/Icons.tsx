'use client'
import React from 'react';

interface IconsProps {
  className?: string;
}

const Icons: React.FC<IconsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Icons</h2>
      <p className="text-gray-600">This is a placeholder component for Icons.</p>
    </div>
  );
};

export default Icons;
