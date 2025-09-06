import React from 'react';

interface Request-quoteProps {
  className?: string;
}

const Request-quote: React.FC<Request-quoteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Request-quote</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Request-quote;