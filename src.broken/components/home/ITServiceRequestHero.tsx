import React from 'react';

interface ITServiceRequestHeroProps {
  className?: string;
}

const ITServiceRequestHero: React.FC<ITServiceRequestHeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITServiceRequestHero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITServiceRequestHero;