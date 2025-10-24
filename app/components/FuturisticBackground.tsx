import React from 'react';

interface FuturisticBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default FuturisticBackground;
