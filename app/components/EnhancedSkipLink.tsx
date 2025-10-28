'use client';

import React, { memo } from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-skip-link ${className}`}>
      {children}
    </div>
  );
});

EnhancedSkipLink.displayName = 'EnhancedSkipLink';

export default EnhancedSkipLink;