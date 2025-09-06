import React from 'react';

interface QuoteProps {
  className?: string;

const Quote: React.FC<QuoteProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quote</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Quote;