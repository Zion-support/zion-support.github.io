"use client";
import React from 'react';

interface SkipLinkProps {
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        SkipLink
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default SkipLink;