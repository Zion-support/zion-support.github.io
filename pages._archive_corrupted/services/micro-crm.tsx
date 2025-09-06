import React from 'react';

interface Micro-crmProps {
  className?: string;
}

const Micro-crm: React.FC<Micro-crmProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Micro-crm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Micro-crm;