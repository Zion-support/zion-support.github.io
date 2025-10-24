'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  title?: string;
  description?: string;
  keywords?: string[];
  className?: string;
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ 
  title, 
  description, 
  keywords, 
  className 
}) => {
  return (
    <div className={className}>
      <h2>SEOHeadWrapper</h2>
      <p>This component is being rebuilt.</p>
      {title && <p>Title: {title}</p>}
      {description && <p>Description: {description}</p>}
      {keywords && <p>Keywords: {keywords.join(', ')}</p>}
    </div>
  );
};

export default SEOHeadWrapper;
