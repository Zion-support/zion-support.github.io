'use client';

import React, { memo } from 'react';

interface DynamicContentShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`dynamic-content-showcase ${className}`}>
      {children}
    </div>
  );
});

DynamicContentShowcase.displayName = 'DynamicContentShowcase';

export default DynamicContentShowcase;