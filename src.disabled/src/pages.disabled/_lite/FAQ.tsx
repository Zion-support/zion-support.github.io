import React from 'react';

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FAQ</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FAQ;