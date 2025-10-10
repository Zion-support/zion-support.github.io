'use client';

import React from 'react';

interface global-errorProps {
  className?: string;
  children?: React.ReactNode;
}

const global-error: React.FC<global-errorProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`global-error-component ${className}`}>
      {children}
    </div>
  );
};

export default global-error;
