'use client'
import React from 'react';

interface ImprovedImageProps {
  className?: string;
}

const ImprovedImage: React.FC<ImprovedImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Improved Image</h2>
      <p className="text-gray-600">This is a placeholder component for Improved Image.</p>
    </div>
  );
};

export default ImprovedImage;
