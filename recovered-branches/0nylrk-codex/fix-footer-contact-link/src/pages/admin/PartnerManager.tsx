import React from 'react';

interface PartnerManagerProps {
  className?: string;
}

const PartnerManager: React.FC<PartnerManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnerManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnerManager;