'use client';

import React, { memo } from 'react';

interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

const StructuredData: React.FC<StructuredDataProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`structured-data ${className}`}>
      {children}
    </div>
  );
});

StructuredData.displayName = 'StructuredData';

export default StructuredData;