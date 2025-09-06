import React from 'react';

interface EnterpriseBillingProps {
  className?: string;
}

const EnterpriseBilling: React.FC<EnterpriseBillingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseBilling</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterpriseBilling;