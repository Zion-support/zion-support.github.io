import React from 'react';

interface FaqSectionProps {
  className?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FaqSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FaqSection;