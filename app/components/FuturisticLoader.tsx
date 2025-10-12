import React from 'react';

interface FuturisticLoaderProps {
  children?: React.ReactNode;
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default FuturisticLoader;
