'use client';

import React, { memo } from 'react';

interface EnhancedServicesShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-services-showcase ${className}`}>
      {children}
    </div>
  );
});

EnhancedServicesShowcase.displayName = 'EnhancedServicesShowcase';

export default EnhancedServicesShowcase;