import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'futuristicbackground ' + className}>
      {children || <p>FuturisticBackground component</p>}
    </div>
  );
};

export default FuturisticBackground;
