'use client';
import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SEO</h2>
      <p>SEO component for enhanced functionality.</p>
    </div>
  );
};

export default SEO;
