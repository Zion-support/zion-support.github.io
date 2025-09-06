import React from 'react';

interface PaymentTermsFieldsProps {
  className?: string;
}

const PaymentTermsFields: React.FC<PaymentTermsFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PaymentTermsFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PaymentTermsFields;