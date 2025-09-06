import React from 'react';

interface EnterprisePricingTableProps {
  className?: string;
}

const EnterprisePricingTable: React.FC<EnterprisePricingTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterprisePricingTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterprisePricingTable;