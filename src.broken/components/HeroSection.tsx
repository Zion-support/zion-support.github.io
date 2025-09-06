import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HeroSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HeroSection;