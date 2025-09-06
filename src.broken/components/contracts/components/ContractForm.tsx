import React from 'react';

interface ContractFormProps {
  className?: string;
}

const ContractForm: React.FC<ContractFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContractForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContractForm;