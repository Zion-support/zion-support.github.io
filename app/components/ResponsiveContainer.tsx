'use client';

import React, { memo } from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`responsive-container ${className}`}>
      {children}
    </div>
  );
});

ResponsiveContainer.displayName = 'ResponsiveContainer';

export default ResponsiveContainer;