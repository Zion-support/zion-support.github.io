import React from 'react';

interface RequestQuoteProps {
  className?: string;
}

const RequestQuote: React.FC<RequestQuoteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RequestQuote</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RequestQuote;