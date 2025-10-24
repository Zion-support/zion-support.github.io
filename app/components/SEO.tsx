'use client'
import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">S E O</h2>
      <p className="text-gray-600">This is a placeholder component for S E O.</p>
    </div>
  );
};

export default SEO;
