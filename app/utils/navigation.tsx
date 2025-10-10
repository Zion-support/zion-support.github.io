'use client';

import React from 'react';

interface navigationProps {
  className?: string;
  children?: React.ReactNode;
}

const navigation: React.FC<navigationProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`navigation-component ${className}`}>
      {children}
    </div>
  );
};

export default navigation;
