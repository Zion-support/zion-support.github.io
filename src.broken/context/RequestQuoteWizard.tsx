import React from 'react';

interface RequestQuoteWizardProps {
  className?: string;
}

const RequestQuoteWizard: React.FC<RequestQuoteWizardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RequestQuoteWizard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RequestQuoteWizard;