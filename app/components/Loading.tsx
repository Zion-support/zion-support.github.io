'use client';

import React from 'react';

interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`loading-component ${className}`}>
      {children}
    </div>
  );
};

Loading.displayName = 'Loading';

export default Loading;
