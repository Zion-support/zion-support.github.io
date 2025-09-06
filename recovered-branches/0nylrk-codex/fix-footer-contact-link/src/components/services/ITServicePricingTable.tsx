import React from 'react';

interface ITServicePricingTableProps {
  className?: string;
}

const ITServicePricingTable: React.FC<ITServicePricingTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITServicePricingTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITServicePricingTable;