import React from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'futuristicglow ' + className}>
      {children || <p>FuturisticGlow component</p>}
    </div>
  );
};

export default FuturisticGlow;
