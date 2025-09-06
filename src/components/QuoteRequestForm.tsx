import React from 'react';

interface QuoteRequestFormProps {
  className?: string;
}

const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteRequestForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteRequestForm;