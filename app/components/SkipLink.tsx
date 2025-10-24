'use client'
import React from 'react';

interface SkipLinkProps {
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Skip Link</h2>
      <p className="text-gray-600">This is a placeholder component for Skip Link.</p>
    </div>
  );
};

export default SkipLink;
