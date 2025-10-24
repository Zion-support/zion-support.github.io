'use client';

import React from 'react';

interface EnhancedSEOProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedSEO;
