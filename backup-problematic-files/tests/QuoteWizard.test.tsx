import React from 'react';

interface QuoteWizard.testProps {
  className?: string;

const QuoteWizard.test: React.FC<QuoteWizard.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteWizard.test</h1>
      <p>This component is under development.</p>
    </div>
  );

export default QuoteWizard.test;