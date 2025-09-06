import React from 'react';

interface DisputeFormProps {
  className?: string;
}

const DisputeForm: React.FC<DisputeFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputeForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputeForm;