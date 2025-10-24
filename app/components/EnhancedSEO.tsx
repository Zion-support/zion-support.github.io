'use client';
import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>Enhanced SEO</h2>
      <p>Enhanced SEO component for better search engine optimization.</p>
      {children}
    </div>
  );
};

export default EnhancedSEO;