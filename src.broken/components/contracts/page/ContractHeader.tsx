import React from 'react';

interface ContractHeaderProps {
  className?: string;
}

const ContractHeader: React.FC<ContractHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContractHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContractHeader;