import React from 'react';

interface TranslatableJobFormProps {
  className?: string;
}

const TranslatableJobForm: React.FC<TranslatableJobFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TranslatableJobForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TranslatableJobForm;