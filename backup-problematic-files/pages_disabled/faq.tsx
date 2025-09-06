import React from 'react';

interface FaqProps {
  className?: string;

const Faq: React.FC<FaqProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Faq</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Faq;