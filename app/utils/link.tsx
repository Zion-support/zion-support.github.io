'use client';

import React from 'react';

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

const link: React.FC<linkProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`link-component ${className}`}>
      {children}
    </div>
  );
};

export default link;
