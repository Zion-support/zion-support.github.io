'use client';
import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SEOHead</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default SEOHead;
