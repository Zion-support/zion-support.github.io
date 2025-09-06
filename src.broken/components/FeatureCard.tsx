import React from 'react';

interface FeatureCardProps {
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeatureCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeatureCard;