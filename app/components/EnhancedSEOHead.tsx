
import React from 'react';
import Head from 'next/head';

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedseohead-component ${className}`}>
      {children}
    </div>
  );
};

EnhancedSEOHead.displayName = 'EnhancedSEOHead';

export default EnhancedSEOHead;