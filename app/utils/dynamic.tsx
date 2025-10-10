'use client';

import React from 'react';

interface dynamicProps {
  className?: string;
  children?: React.ReactNode;
}

const dynamic: React.FC<dynamicProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`dynamic-component ${className}`}>
      {children}
    </div>
  );
};

export default dynamic;
