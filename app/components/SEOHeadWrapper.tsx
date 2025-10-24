'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SEOHeadWrapper</h2>
      <p>SEOHeadWrapper component for enhanced functionality.</p>
    </div>
  );
};

export default SEOHeadWrapper;