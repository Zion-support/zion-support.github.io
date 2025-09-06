import React from 'react';

interface MobileFeatureShowcaseProps {
  className?: string;
}

const MobileFeatureShowcase: React.FC<MobileFeatureShowcaseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileFeatureShowcase</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileFeatureShowcase;