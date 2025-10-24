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
    <div className={'futuristicloader ' + className}>
      {children || <p>FuturisticLoader component</p>}
    </div>
  );
};

export default FuturisticLoader;
