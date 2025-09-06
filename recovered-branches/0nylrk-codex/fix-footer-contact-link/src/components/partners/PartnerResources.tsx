import React from 'react';

interface PartnerResourcesProps {
  className?: string;
}

const PartnerResources: React.FC<PartnerResourcesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnerResources</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnerResources;