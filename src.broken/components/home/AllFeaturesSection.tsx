import React from 'react';

interface AllFeaturesSectionProps {
  className?: string;
}

const AllFeaturesSection: React.FC<AllFeaturesSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AllFeaturesSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AllFeaturesSection;