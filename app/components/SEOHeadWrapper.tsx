'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SEOHeadWrapper</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default SEOHeadWrapper;
