import React from 'react';

interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancedhero ' + className}>
      {children || <p>EnhancedHero component</p>}
    </div>
  );
};

export default EnhancedHero;
