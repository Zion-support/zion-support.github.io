import React from 'react';

interface PageHeroProps {
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageHero;