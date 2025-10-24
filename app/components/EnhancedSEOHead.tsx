'use client';

import React from 'react';

interface EnhancedSEOHeadProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedSEOHead;
