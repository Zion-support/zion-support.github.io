'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
  title: string;
  description: string;
  keywords: string[];
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, title, description, keywords }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Keywords: {keywords.join(', ')}</p>
    </div>
  );
};

export default SEOHeadWrapper;
