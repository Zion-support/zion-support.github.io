import React from 'react';

interface FuturisticLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`futuristicloader ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticLoader;