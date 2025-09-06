import React from 'react';

interface HomeHeroProps {
  className?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HomeHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HomeHero;