import React from 'react';

interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedHero;
