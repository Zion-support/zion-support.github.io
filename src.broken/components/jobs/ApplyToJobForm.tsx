import React from 'react';

interface ApplyToJobFormProps {
  className?: string;
}

const ApplyToJobForm: React.FC<ApplyToJobFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplyToJobForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplyToJobForm;