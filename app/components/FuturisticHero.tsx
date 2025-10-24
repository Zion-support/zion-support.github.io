import React from 'react';

interface FuturisticHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'futuristichero ' + className}>
      {children || <p>FuturisticHero component</p>}
    </div>
  );
};

export default FuturisticHero;
