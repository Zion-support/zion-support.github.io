'use client';

import React, { memo } from 'react';

interface SecurityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`security-enhancer ${className}`}>
      {children}
    </div>
  );
});

SecurityEnhancer.displayName = 'SecurityEnhancer';

export default SecurityEnhancer;