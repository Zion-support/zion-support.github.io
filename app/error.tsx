'use client';

import React from 'react';

interface errorProps {
  className?: string;
  children?: React.ReactNode;
}

const error: React.FC<errorProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`error-component ${className}`}>
      {children}
    </div>
  );
};

export default error;
