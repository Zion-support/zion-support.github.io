import React from 'react';

interface MicroSaasProps {
  className?: string;
}

const MicroSaas: React.FC<MicroSaasProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MicroSaas</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MicroSaas;