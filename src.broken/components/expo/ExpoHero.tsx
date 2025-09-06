import React from 'react';

interface ExpoHeroProps {
  className?: string;
}

const ExpoHero: React.FC<ExpoHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExpoHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExpoHero;