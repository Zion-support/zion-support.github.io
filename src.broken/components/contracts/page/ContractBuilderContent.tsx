import React from 'react';

interface ContractBuilderContentProps {
  className?: string;
}

const ContractBuilderContent: React.FC<ContractBuilderContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContractBuilderContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContractBuilderContent;