import React from 'react';

interface HeroFeaturesProps {
  className?: string;
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HeroFeatures</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HeroFeatures;