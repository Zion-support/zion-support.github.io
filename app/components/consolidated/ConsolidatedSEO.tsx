'use client';

import React from 'react';

interface ConsolidatedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

const ConsolidatedSEO: React.FC<ConsolidatedSEOProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`consolidatedseo-component ${className}`}>
      {children}
    </div>
  );
};

ConsolidatedSEO.displayName = 'ConsolidatedSEO';

export default ConsolidatedSEO;
