import React from 'react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Hero</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Hero;