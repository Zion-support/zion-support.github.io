import React from 'react';

interface ContractPreviewProps {
  className?: string;
}

const ContractPreview: React.FC<ContractPreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContractPreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContractPreview;