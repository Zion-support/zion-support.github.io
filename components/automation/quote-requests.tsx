import React from 'react';

interface Quote-requestsProps {
  className?: string;
}

const Quote-requests: React.FC<Quote-requestsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quote-requests</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Quote-requests;