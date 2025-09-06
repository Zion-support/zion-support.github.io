import React from 'react';

interface QuoteFormSectionProps {
  className?: string;
}

const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteFormSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteFormSection;