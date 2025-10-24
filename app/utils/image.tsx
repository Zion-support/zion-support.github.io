'use client'
import React from 'react';

interface imageProps {
  className?: string;
}

const image: React.FC<imageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Image</h2>
      <p className="text-gray-600">This is a placeholder component for Image.</p>
    </div>
  );
};

export default image;
