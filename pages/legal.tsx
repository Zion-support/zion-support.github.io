import React from 'react';

interface LegalProps {
  className?: string;
}

const Legal: React.FC<LegalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Legal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Legal;