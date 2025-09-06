import React from 'react';

interface UseQuoteWizard.testProps {
  className?: string;
}

const UseQuoteWizard.test: React.FC<UseQuoteWizard.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseQuoteWizard.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseQuoteWizard.test;