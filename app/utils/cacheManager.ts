import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const cacheManager.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`cachemanager.ts ${className}`}>
      {children}
    </div>
  );
};

export default cacheManager.ts;