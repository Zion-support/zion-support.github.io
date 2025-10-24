'use client'
import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">S E O Head</h2>
      <p className="text-gray-600">This is a placeholder component for S E O Head.</p>
    </div>
  );
};

export default SEOHead;
