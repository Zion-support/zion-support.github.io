'use client';

import React, { memo } from 'react';

interface SimpleFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleFooter: React.FC<SimpleFooterProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`simple-footer ${className}`}>
      {children}
    </div>
  );
});

SimpleFooter.displayName = 'SimpleFooter';

export default SimpleFooter;