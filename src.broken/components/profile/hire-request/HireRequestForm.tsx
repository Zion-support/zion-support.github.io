import React from 'react';

interface HireRequestFormProps {
  className?: string;
}

const HireRequestForm: React.FC<HireRequestFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HireRequestForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HireRequestForm;