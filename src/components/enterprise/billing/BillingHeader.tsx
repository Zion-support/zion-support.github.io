import React from 'react';

interface BillingHeaderProps {
  className?: string;
}

const BillingHeader: React.FC<BillingHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BillingHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BillingHeader;