import React from 'react';

interface FuturisticHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export const FuturisticHero: React.FC<FuturisticHeroProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristichero ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticHero;