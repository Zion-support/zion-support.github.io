import React from 'react';

interface FeatureFlagProps {
  className?: string;
}

const FeatureFlag: React.FC<FeatureFlagProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeatureFlag</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeatureFlag;