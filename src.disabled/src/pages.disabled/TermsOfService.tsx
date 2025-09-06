import React from 'react';

interface TermsOfServiceProps {
  className?: string;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TermsOfService</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TermsOfService;