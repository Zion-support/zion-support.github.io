import React from 'react';

interface HeroSection.testProps {
  className?: string;
}

const HeroSection.test: React.FC<HeroSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HeroSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HeroSection.test;