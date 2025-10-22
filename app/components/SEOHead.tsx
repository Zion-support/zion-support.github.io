'use client';
import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>SEOHead</h2>
      <p>This is a clean, functional component.
              </p>
            </div>
  );
};

export default SEOHead;