import React from 'react';

interface _EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedHero({ 
  className = '', 
  children 
}: EnhancedHeroProps) {
  return (
    <div className={'enhancedhero ' + className}>
      {children || <p>EnhancedHero component</p>}
    </div>
  );
}
