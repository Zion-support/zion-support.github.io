'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
  title?: string;
  description?: string;
  keywords?: string[];
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, title, description, keywords }) => {
  return (
    <div className={className}>
      <h2>SEOHeadWrapper</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default SEOHeadWrapper;
