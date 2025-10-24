'use client'
import React from 'react';

interface linkProps {
  className?: string;
}

const link: React.FC<linkProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Link</h2>
      <p className="text-gray-600">This is a placeholder component for Link.</p>
    </div>
  );
};

export default link;
