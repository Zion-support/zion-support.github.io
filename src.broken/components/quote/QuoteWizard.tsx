import React from 'react';

interface QuoteWizardProps {
  className?: string;
}

const QuoteWizard: React.FC<QuoteWizardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteWizard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteWizard;