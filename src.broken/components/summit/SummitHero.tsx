import React from 'react';

interface SummitHeroProps {
  className?: string;
}

const SummitHero: React.FC<SummitHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SummitHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SummitHero;