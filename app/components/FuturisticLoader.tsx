import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = (_{ className = '', _children }) => {
  return (
    <div className={`futuristicloader-component ${className}`}>
      {children}
    </div>
  );
};

FuturisticLoader.displayName = 'FuturisticLoader';

export default FuturisticLoader;