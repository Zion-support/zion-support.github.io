import React from 'react';

interface ContractBuilderProps {
  className?: string;
}

const ContractBuilder: React.FC<ContractBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContractBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContractBuilder;