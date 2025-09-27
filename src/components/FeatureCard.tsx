import React from 'react';

interface FeatureCardProps {
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`featurecard ${className}`}>
      <h2>FeatureCard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default FeatureCard;
