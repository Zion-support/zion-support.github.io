import React from 'react';

interface HomeHero.testProps {
  className?: string;
}

const HomeHero.test: React.FC<HomeHero.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HomeHero.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HomeHero.test;