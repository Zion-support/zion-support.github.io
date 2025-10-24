'use client';
import React from 'react';

interface SEOHeadWrapperProps {
  className?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({ className, title, description, children }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default SEOHeadWrapper;
