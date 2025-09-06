import React from 'react';

interface Email-validatorProps {
  className?: string;
}

const Email-validator: React.FC<Email-validatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Email-validator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Email-validator;