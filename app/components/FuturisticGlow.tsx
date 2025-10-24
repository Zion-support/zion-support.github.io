import React from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

export const FuturisticGlow: React.FC<FuturisticGlowProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristicglow ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticGlow;